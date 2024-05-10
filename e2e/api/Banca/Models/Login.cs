using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace Banca.Models
{
    public class Login
    {
        string StrConMCRM = ConfigurationManager.ConnectionStrings["Strcon"].ToString();
        public string username { get; set; }
        public string password { get; set; }
        public string bankName { get; set; }
        public class Response
        {
            public int ResponseFlag { get; set; }
            public string ResponseMessage { get; set; }
        }
        public string DataTableToJSONWithJSONNet(DataTable table)
        {
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(table);
            return JSONString;
        }
        public string DataTableToJSONWithJSONNet(DataSet ds)
        {
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(ds);
            return JSONString;
        }
        public string Authenticate(Login objLogin)
        {
            Response objres = new Response();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_BancaLoginDetails", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@userid", objLogin.username);
                objDA.SelectCommand.Parameters.AddWithValue("@password", objLogin.password);
                objDA.SelectCommand.Parameters.AddWithValue("@bankName", objLogin.bankName);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    if (DS.Tables[0].Rows.Count > 0)
                    {
                        objres.ResponseFlag = 1;
                        objres.ResponseMessage = DataTableToJSONWithJSONNet(DS.Tables[0]);
                    }
                    else
                    {
                        objres.ResponseFlag = 0;
                        objres.ResponseMessage = "You are not Authorized to login";
                    }
                }
                catch (Exception e)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = e.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }

            }
            catch (Exception ex)
            {
                //int at = ex.Message.ToString().IndexOf("Error authenticating user");
                //if (at > -1)
                //{

                //}
                //else
                //{
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
                //}
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
    }
}
