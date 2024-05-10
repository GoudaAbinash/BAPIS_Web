using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Script.Serialization;
using System.Xml;
using static Banca.Models.Login;

namespace Banca.Models
{
    public class Common
    {
        string StrConMCRM = ConfigurationManager.ConnectionStrings["Strcon"].ToString();
        string StrConMCRM1 = ConfigurationManager.ConnectionStrings["Strcon1"].ToString();
        string inscdoc = ConfigurationManager.ConnectionStrings["Strcon2"].ToString();
        string workflow = ConfigurationManager.ConnectionStrings["workflow"].ToString();

        public string createdBy { get; set; }
        public string branchName { get; set; }
        public string tranType { get; set; }
        public string customerType { get; set; }
        public string salutation { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string contactNo { get; set; }
        public string email { get; set; }
        public string policyDate { get; set; }
        public string bankStaffID { get; set; }
        public string bankCustID { get; set; }
        public string financInterest { get; set; }
        public string imdGeneral { get; set; }
        public string businessType { get; set; }
        public string businessDesc { get; set; }
        public string pincode { get; set; }
        public string branchCode { get; set; }
        public string add1 { get; set; }
        public string add2 { get; set; }
        public string add3 { get; set; }
        public string city { get; set; }
        public string district { get; set; }
        public string state { get; set; }
        public string country { get; set; }
        public string comadd1 { get; set; }
        public string comadd2 { get; set; }
        public string comadd3 { get; set; }
        public string comcity { get; set; }
        public string comdistrict { get; set; }
        public string comstate { get; set; }
        public List<AnnexureData> AnnexureData { get; set; }
        public string AnnexData { get; set; }
        public string quoteNo { get; set; }
        public string allData { get; set; }
        public string trnID { get; set; }
        public string FileName { get; set; }
        public string FileName1 { get; set; }
        public string id { get; set; }
        public string type { get; set; }
        public string role { get; set; }
        public string role1 { get; set; }
        public string agentCode { get; set; }
        public string clientCode { get; set; }
        public string startDate { get; set; }
        public string endDate { get; set; }
        public string stateCode { get; set; }
        public string sumInsured { get; set; }
        public string totalPremium { get; set; }
        public string customerAcNo { get; set; }
        public Boolean fireAlliedPerils { get; set; }
        public Boolean burglaryMain { get; set; }
        public Boolean allRisk { get; set; }
        public Boolean electronicEquip { get; set; }
        public Boolean machinaryBreakdown { get; set; }
        public Boolean personalAccidentMain { get; set; }
        public Boolean legalLiabiity { get; set; }
        public Boolean baggageMain { get; set; }
        public Boolean workmenCompensation { get; set; }
        public Boolean moneyinsurance { get; set; }
        public Boolean neonSignGlowSign { get; set; }
        public Boolean pedalCycleMain { get; set; }
        public Boolean plateGlassMain { get; set; }
        public Boolean stfiMain { get; set; }
        public Boolean earthQuake { get; set; }
        public Boolean buildMain { get; set; }
        public Boolean fireContentsMain { get; set; }
        public Boolean terrorismMain { get; set; }
        public Boolean fireLossMain { get; set; }
        public Boolean tenantLiabiityMain { get; set; }
        public Boolean alternateAccoMain { get; set; }
        public Boolean escalationMain { get; set; }
        public Boolean omissionMain { get; set; }
        public Boolean portableMain { get; set; }
        public Boolean electronicMain { get; set; }
        public Boolean airConditionMain { get; set; }
        public Boolean portableGeneratorMain { get; set; }
        public Boolean equipmentMain { get; set; }
        public Boolean accidentMain { get; set; }
        public Boolean accidentMainEmp { get; set; }
        public Boolean publicLiabilityMain { get; set; }
        public Boolean domesticMain { get; set; }
        public Boolean workmenMain { get; set; }
        public Boolean cashInMain { get; set; }
        public Boolean cashInSafeMain { get; set; }
        public Boolean cashInCounterMain { get; set; }
        public Boolean employeeMain { get; set; }
        public Boolean neonSignMain { get; set; }
        public Boolean pedalCycleNonMain { get; set; }
        public Boolean fixedMain { get; set; }
        public string fireBuilding { get; set; }
        public string FLOPSum { get; set; }
        public string FLOPMonth { get; set; }
        public string gender { get; set; }
        public string fireContent { get; set; }
        public string fireContentDetails { get; set; }
        public string ternantSum { get; set; }
        public string alteranteAccSum { get; set; }
        public string ommissionSum { get; set; }
        public string burglaryContentSum { get; set; }
        public string burglaryPercentSum { get; set; }
        public string burglaryPercent { get; set; }
        public string portableComputer { get; set; }
        public string electronicEquiSum { get; set; }
        public string airCondition { get; set; }
        public string porGeneration { get; set; }
        public string equiOther { get; set; }
        public string personalAccident { get; set; }
        public string personalAccidentPre { get; set; }
        public string publicLiability { get; set; }
        public string baggage { get; set; }
        public string workCompensationSum { get; set; }
        public string cashInTransit { get; set; }
        public string cashInShafe { get; set; }
        public string cashInCounter { get; set; }
        public string fidelitySum { get; set; }
        public string fidelityEmp { get; set; }
        public string neonSign { get; set; }
        public string pedalCycle { get; set; }
        public string plateGlass { get; set; }
        public string portableComputerPre { get; set; }
        public string ratePortableComputer { get; set; }
        public string electronicEquiPre { get; set; }
        public string rateElectronicEquipemnts { get; set; }
        public string airConditionPre { get; set; }
        public string rateAirConditioner { get; set; }
        public string porGenerationPre { get; set; }
        public string ratePorGenerationPre { get; set; }
        public string equiOtherPre { get; set; }
        public string rateEquiOtherPre { get; set; }
        public string receiptNo { get; set; }
        public string currentStatus { get; set; }
        public string policyNo { get; set; }
        public string EmployeeData { get; set; }
        public string quoteType { get; set; }
        public string discount { get; set; }
        public string loading { get; set; }
        public string winNo { get; set; }
        public string aduserid { get; set; }
        public string systemname { get; set; }
        public string policytype { get; set; }
        public string vendorname { get; set; }
        public string zone { get; set; }
        public string applNo { get; set; }
        public string bankBranch { get; set; }
        public string bankEmpCode { get; set; }
        public string bancaSegement { get; set; }
        public string polTenure { get; set; }
        public string code { get; set; }
        public string EntityKey { get; set; }
        public string payerID { get; set; }
        public string loanAcNo { get; set; }
        public string insuredAge { get; set; }
        public string nomineeName { get; set; }
        public string nomineeRel { get; set; }
        public string bankBranchCode { get; set; }
        public string FGStafID { get; set; }
        public string GSTNo { get; set; }
        public string receiptvendorname { get; set; }

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

        public string TokenGuest()
        {
            var agent = HttpContext.Current.Request.UserAgent;
            var ticks = DateTime.UtcNow.Ticks;
            Random random = new Random();
            int id = random.Next(2000);
            string TokenKey = SecurityManager.GenerateToken(Convert.ToString(id), agent, ticks);
            return TokenKey;
        }

        public string saveData(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_saveData", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@createdBy", obj.createdBy);
                objDA.SelectCommand.Parameters.AddWithValue("@branchName", obj.branchName);
                objDA.SelectCommand.Parameters.AddWithValue("@tranType", obj.tranType);
                objDA.SelectCommand.Parameters.AddWithValue("@customerType", obj.customerType);
                objDA.SelectCommand.Parameters.AddWithValue("@salutation", obj.salutation);
                objDA.SelectCommand.Parameters.AddWithValue("@firstName", obj.firstName);
                objDA.SelectCommand.Parameters.AddWithValue("@lastName", obj.lastName);
                objDA.SelectCommand.Parameters.AddWithValue("@contactNo", obj.contactNo);
                objDA.SelectCommand.Parameters.AddWithValue("@email", obj.email);
                objDA.SelectCommand.Parameters.AddWithValue("@policyDate", obj.policyDate);
                objDA.SelectCommand.Parameters.AddWithValue("@bankStaffID", obj.bankStaffID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankCustID", obj.bankCustID);
                objDA.SelectCommand.Parameters.AddWithValue("@customerAcNo", obj.customerAcNo);
                objDA.SelectCommand.Parameters.AddWithValue("@financInterest", obj.financInterest);
                objDA.SelectCommand.Parameters.AddWithValue("@imdGeneral", obj.imdGeneral);
                objDA.SelectCommand.Parameters.AddWithValue("@businessType", obj.businessType);
                objDA.SelectCommand.Parameters.AddWithValue("@pincode", obj.pincode);
                objDA.SelectCommand.Parameters.AddWithValue("@add1", obj.add1);
                objDA.SelectCommand.Parameters.AddWithValue("@add2", obj.add2);
                objDA.SelectCommand.Parameters.AddWithValue("@add3", obj.add3);
                objDA.SelectCommand.Parameters.AddWithValue("@city", obj.city);
                objDA.SelectCommand.Parameters.AddWithValue("@district", obj.district);
                objDA.SelectCommand.Parameters.AddWithValue("@state", obj.state);
                objDA.SelectCommand.Parameters.AddWithValue("@country", obj.country);
                objDA.SelectCommand.Parameters.AddWithValue("@allData", obj.allData);
                objDA.SelectCommand.Parameters.AddWithValue("@premium", obj.totalPremium);
                objDA.SelectCommand.Parameters.AddWithValue("@quoteType", obj.quoteType);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string saveSalesData(salesData obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_saveSalesData", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@insName", obj.insName);
                objDA.SelectCommand.Parameters.AddWithValue("@premium", obj.premium);
                objDA.SelectCommand.Parameters.AddWithValue("@IMDCode", obj.IMDCode);
                objDA.SelectCommand.Parameters.AddWithValue("@FGBranch", obj.FGBranch);
                objDA.SelectCommand.Parameters.AddWithValue("@NEFTRefNo", obj.NEFTRefNo);
                objDA.SelectCommand.Parameters.AddWithValue("@bankBranch", obj.bankBranch);
                objDA.SelectCommand.Parameters.AddWithValue("@FGStafID", obj.FGStafID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankCustID", obj.bankCustID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankStaffID", obj.bankStaffID);
                objDA.SelectCommand.Parameters.AddWithValue("@bancaSegement", obj.bancaSegement);
                objDA.SelectCommand.Parameters.AddWithValue("@createdBy", obj.createdBy);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DS.Tables[0].Rows[0]["ID"].ToString();
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string updateQuoteDetails(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_Quote_Update", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@id", obj.id);
                objDA.SelectCommand.Parameters.AddWithValue("@createdBy", obj.createdBy);
                objDA.SelectCommand.Parameters.AddWithValue("@branchName", obj.branchName);
                objDA.SelectCommand.Parameters.AddWithValue("@tranType", obj.tranType);
                objDA.SelectCommand.Parameters.AddWithValue("@customerType", obj.customerType);
                objDA.SelectCommand.Parameters.AddWithValue("@salutation", obj.salutation);
                objDA.SelectCommand.Parameters.AddWithValue("@firstName", obj.firstName);
                objDA.SelectCommand.Parameters.AddWithValue("@lastName", obj.lastName);
                objDA.SelectCommand.Parameters.AddWithValue("@contactNo", obj.contactNo);
                objDA.SelectCommand.Parameters.AddWithValue("@email", obj.email);
                objDA.SelectCommand.Parameters.AddWithValue("@policyDate", obj.policyDate);
                objDA.SelectCommand.Parameters.AddWithValue("@bankStaffID", obj.bankStaffID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankCustID", obj.bankCustID);
                objDA.SelectCommand.Parameters.AddWithValue("@customerAcNo", obj.customerAcNo);
                objDA.SelectCommand.Parameters.AddWithValue("@financInterest", obj.financInterest);
                objDA.SelectCommand.Parameters.AddWithValue("@imdGeneral", obj.imdGeneral);
                objDA.SelectCommand.Parameters.AddWithValue("@businessType", obj.businessType);
                objDA.SelectCommand.Parameters.AddWithValue("@pincode", obj.pincode);
                objDA.SelectCommand.Parameters.AddWithValue("@add1", obj.add1);
                objDA.SelectCommand.Parameters.AddWithValue("@add2", obj.add2);
                objDA.SelectCommand.Parameters.AddWithValue("@add3", obj.add3);
                objDA.SelectCommand.Parameters.AddWithValue("@city", obj.city);
                objDA.SelectCommand.Parameters.AddWithValue("@district", obj.district);
                objDA.SelectCommand.Parameters.AddWithValue("@state", obj.state);
                objDA.SelectCommand.Parameters.AddWithValue("@country", obj.country);
                objDA.SelectCommand.Parameters.AddWithValue("@allData", obj.allData);
                objDA.SelectCommand.Parameters.AddWithValue("@annexureData", obj.AnnexData);
                objDA.SelectCommand.Parameters.AddWithValue("@premium", obj.totalPremium);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);

                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string SaveFileDetails(string ID, string filename)
        {
            string Outmsg = "";
            SqlConnection objConn = new SqlConnection(StrConMCRM);
            SqlCommand cmdm = new SqlCommand("SP_UCO_Doc", objConn);
            cmdm.CommandType = System.Data.CommandType.StoredProcedure;
            cmdm.Parameters.AddWithValue("@ID", ID);
            cmdm.Parameters.AddWithValue("@doc", filename);
            SqlDataAdapter das = new SqlDataAdapter(cmdm);
            DataSet dss = new DataSet();
            try
            {
                objConn.Open();
                das.Fill(dss);
                Outmsg = "Success";
            }
            catch (Exception Ex)
            {
                Outmsg = Ex.Message.ToString();
            }
            finally
            {
                objConn.Close();
            }
            return Outmsg;
        }
        public string SaveSalesFileDetails(string ID, string filename, string filename1, string filename2)
        {
            string Outmsg = "";
            SqlConnection objConn = new SqlConnection(StrConMCRM);
            SqlCommand cmdm = new SqlCommand("SP_UCO_Sales_Doc", objConn);
            cmdm.CommandType = System.Data.CommandType.StoredProcedure;
            cmdm.Parameters.AddWithValue("@ID", ID);
            cmdm.Parameters.AddWithValue("@proposaldoc", filename);
            cmdm.Parameters.AddWithValue("@renewaldoc", filename1);
            cmdm.Parameters.AddWithValue("@otherdoc", filename2);
            SqlDataAdapter das = new SqlDataAdapter(cmdm);
            DataSet dss = new DataSet();
            try
            {
                objConn.Open();
                das.Fill(dss);
                Outmsg = "Success";
            }
            catch (Exception Ex)
            {
                Outmsg = Ex.Message.ToString();
            }
            finally
            {
                objConn.Close();
            }
            return Outmsg;
        }
        public string updateData(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_updateData ", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@allData", obj.allData);
                objDA.SelectCommand.Parameters.AddWithValue("@annexureData", new JavaScriptSerializer().Serialize(obj.AnnexureData));
                objDA.SelectCommand.Parameters.AddWithValue("@quoteNo", obj.quoteNo);
                objDA.SelectCommand.Parameters.AddWithValue("@trnID", obj.trnID);
                objDA.SelectCommand.Parameters.AddWithValue("@employeeData", obj.EmployeeData);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);

                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string DeshboardData(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_Get_Data ", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@createdBy", obj.createdBy);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);

                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string getQuoteList(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_Get_Quote", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@createdBy", obj.createdBy);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);

                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string getQuoteDetails(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_Get_Quote_Details", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@id", obj.id);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);

                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }

        public string BOENQ(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_BO_FSSENQ ", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@Agentcode", obj.agentCode);
                objDA.SelectCommand.Parameters.AddWithValue("@Clientcode", obj.clientCode);
                objDA.SelectCommand.Parameters.AddWithValue("@StartDate", obj.startDate);
                objDA.SelectCommand.Parameters.AddWithValue("@Enddate", obj.endDate);
                objDA.SelectCommand.Parameters.AddWithValue("@pincode", obj.pincode);
                objDA.SelectCommand.Parameters.AddWithValue("@Statecode", obj.stateCode);
                objDA.SelectCommand.Parameters.AddWithValue("@Suminsured", obj.sumInsured);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    MQUAT.Service BOUAT = new MQUAT.Service();
                    string Response = BOUAT.RunMQString(DS.Tables[0].Rows[0]["Bores"].ToString());
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string generatePDF(Common obj, out string policyNo)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_BO_FSSCRT", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@Agentcode", obj.agentCode);
                objDA.SelectCommand.Parameters.AddWithValue("@Clientcode", obj.clientCode);
                objDA.SelectCommand.Parameters.AddWithValue("@StartDate", obj.startDate);
                objDA.SelectCommand.Parameters.AddWithValue("@Enddate", obj.endDate);
                objDA.SelectCommand.Parameters.AddWithValue("@pincode", obj.pincode);
                objDA.SelectCommand.Parameters.AddWithValue("@Statecode", obj.stateCode);
                objDA.SelectCommand.Parameters.AddWithValue("@Suminsured", obj.sumInsured);
                objDA.SelectCommand.Parameters.AddWithValue("@Building", obj.buildMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@Contents", obj.fireContentsMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@fireLossMain", obj.fireLossMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@TenantLiability", obj.tenantLiabiityMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@AlternateAccommodation", obj.alternateAccoMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@OmissiontoInsureAddition", obj.omissionMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@BurglaryContents", obj.burglaryMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@JewelleryValuable", "N");
                objDA.SelectCommand.Parameters.AddWithValue("@PortableComputer", obj.portableMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@ElectronicEquipments", obj.electronicMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@AirConditioner", obj.airConditionMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@PortableGeneratorupto10KVA", obj.portableGeneratorMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@EquipmentsotherthanACDG", obj.equipmentMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@AccidentaldeathPTDPPD", obj.accidentMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@PublicLiability", obj.publicLiabilityMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@Baggage", obj.baggageMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@DomesticWorkmensCompensation", obj.workmenMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@CashinTransit", obj.cashInMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@CashinSafe", obj.cashInSafeMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@CashinCounter", obj.cashInCounterMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@EmployeeFidelityIND", obj.employeeMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@NeonSignBoard", obj.neonSignMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@PedalCycle", obj.pedalCycleNonMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@FixedPlateGlass", obj.fixedMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@TA", obj.stfiMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@UA", obj.earthQuake ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@SIBuilding", obj.fireBuilding != null ? obj.fireBuilding : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIContents", obj.fireContent != null ? obj.fireContent : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIFLOP", obj.FLOPSum != null ? obj.FLOPSum : "");
                objDA.SelectCommand.Parameters.AddWithValue("@FLOPMonth", obj.FLOPMonth != null ? obj.FLOPMonth : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SITenantLiability", obj.ternantSum != null ? obj.ternantSum : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIAlternateAccommodation", obj.alteranteAccSum != null ? obj.alteranteAccSum : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIOmissiontoInsureAddition", obj.ommissionSum != null ? obj.ommissionSum : "");
                //objDA.SelectCommand.Parameters.AddWithValue("@SIBurglaryContents", obj.burglaryPercentSum != null ? obj.burglaryPercentSum : obj.fireContent);
                objDA.SelectCommand.Parameters.AddWithValue("@SIBurglaryContents", obj.fireContent != null ? obj.fireContent : obj.fireContent);
                objDA.SelectCommand.Parameters.AddWithValue("@SIJewelleryValuable", "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIPortableComputer", obj.portableComputer != null ? obj.portableComputer : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIElectronicEquipments", obj.electronicEquiSum != null ? obj.electronicEquiSum : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIAirConditioner", obj.airCondition != null ? obj.airCondition : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIPortableGeneratorupto10KVA", obj.porGeneration != null ? obj.porGeneration : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIEquipmentsotherthanACDG", obj.equiOther != null ? obj.equiOther : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIAccidentaldeathPTDPPD", obj.personalAccident != null ? obj.personalAccident : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIPublicLiability", obj.publicLiability != null ? obj.publicLiability : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIBaggage", obj.baggage != null ? obj.baggage : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIDomesticWorkmensCompensation", obj.workCompensationSum != null ? obj.workCompensationSum : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SICashinTransit", obj.cashInTransit != null ? obj.cashInTransit : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SICashinSafe", obj.cashInShafe != null ? obj.cashInShafe : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SICashinCounter", obj.cashInCounter != null ? obj.cashInCounter : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIEmployeeFidelityIND", obj.fidelitySum != null ? obj.fidelitySum : "");
                objDA.SelectCommand.Parameters.AddWithValue("@fidelityEmpCount", obj.fidelityEmp != null ? obj.fidelityEmp : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SINeonSignBoard", obj.neonSign != null ? obj.neonSign : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIPedalCycle", obj.pedalCycle != null ? obj.pedalCycle : "");
                objDA.SelectCommand.Parameters.AddWithValue("@SIFixedPlateGlass", obj.plateGlass != null ? obj.plateGlass : "");
                objDA.SelectCommand.Parameters.AddWithValue("@PremiumJewelleryValuable", "");
                objDA.SelectCommand.Parameters.AddWithValue("@RateJewelleryValuable", "");
                objDA.SelectCommand.Parameters.AddWithValue("@PremiumPortableComputer", obj.portableComputerPre != null ? obj.portableComputerPre : "");
                objDA.SelectCommand.Parameters.AddWithValue("@RatePortableComputer", obj.ratePortableComputer);
                objDA.SelectCommand.Parameters.AddWithValue("@PremiumElectronicEquipments", obj.electronicEquiPre != null ? obj.electronicEquiPre : "");
                objDA.SelectCommand.Parameters.AddWithValue("@RateElectronicEquipments", obj.rateElectronicEquipemnts);
                objDA.SelectCommand.Parameters.AddWithValue("@PremiumAirConditioner", obj.airConditionPre != null ? obj.airConditionPre : "");
                objDA.SelectCommand.Parameters.AddWithValue("@RateAirConditioner", obj.rateAirConditioner.Replace(".", ""));
                objDA.SelectCommand.Parameters.AddWithValue("@PremiumPortableGeneratorupto10KVA", obj.porGenerationPre != null ? obj.porGenerationPre : "");
                objDA.SelectCommand.Parameters.AddWithValue("@RatePortableGeneratorupto10KVA", obj.ratePorGenerationPre.Replace(".", ""));
                objDA.SelectCommand.Parameters.AddWithValue("@PremiumEquipmentsotherthanACDG", obj.equiOtherPre != null ? obj.equiOtherPre : "");
                objDA.SelectCommand.Parameters.AddWithValue("@RateEquipmentsotherthanACDG", obj.rateEquiOtherPre);
                objDA.SelectCommand.Parameters.AddWithValue("@6age", obj.insuredAge);
                objDA.SelectCommand.Parameters.AddWithValue("@6name", obj.firstName + obj.lastName);
                objDA.SelectCommand.Parameters.AddWithValue("@6name1", obj.nomineeName);
                objDA.SelectCommand.Parameters.AddWithValue("@6nomineeRel", obj.nomineeRel);
                objDA.SelectCommand.Parameters.AddWithValue("@6premium", obj.personalAccidentPre != null ? obj.personalAccidentPre : "");
                objDA.SelectCommand.Parameters.AddWithValue("@receipt", obj.receiptNo);
                objDA.SelectCommand.Parameters.AddWithValue("@burglaryPercent", (obj.burglaryPercent == "" || obj.burglaryPercent == null ? "100000" : "0" + obj.burglaryPercent + "000"));
                objDA.SelectCommand.Parameters.AddWithValue("@Intrestparty", obj.financInterest == "" ? "N" : "Y");
                objDA.SelectCommand.Parameters.AddWithValue("@partyname", obj.financInterest);
                objDA.SelectCommand.Parameters.AddWithValue("@partyAcNo", obj.loanAcNo);
                objDA.SelectCommand.Parameters.AddWithValue("@code", "HY");
                objDA.SelectCommand.Parameters.AddWithValue("@winNo", obj.winNo);
                objDA.SelectCommand.Parameters.AddWithValue("@Zone", obj.zone);
                objDA.SelectCommand.Parameters.AddWithValue("@applNo", obj.applNo);
                objDA.SelectCommand.Parameters.AddWithValue("@branchStaffID", obj.FGStafID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankBranch", obj.bankBranch);
                objDA.SelectCommand.Parameters.AddWithValue("@bankEmpCode", obj.bankStaffID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankCusID", obj.bankCustID);
                objDA.SelectCommand.Parameters.AddWithValue("@bancaSegement", obj.bancaSegement);
                objDA.SelectCommand.Parameters.AddWithValue("@payerID", obj.payerID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankBranchCode", obj.bankBranchCode);
                objDA.SelectCommand.Parameters.AddWithValue("@add1", obj.add1);
                objDA.SelectCommand.Parameters.AddWithValue("@add2", obj.add2);
                objDA.SelectCommand.Parameters.AddWithValue("@add3", obj.add3);
                objDA.SelectCommand.Parameters.AddWithValue("@city", obj.city);
                objDA.SelectCommand.Parameters.AddWithValue("@state", obj.state);
                objDA.SelectCommand.Parameters.AddWithValue("@contentDetails", obj.fireContentDetails);
                objDA.SelectCommand.Parameters.AddWithValue("@quote", obj.quoteNo);
                objDA.SelectCommand.Parameters.AddWithValue("@gstNo", obj.GSTNo);
                objDA.SelectCommand.Parameters.AddWithValue("@whichBank", obj.receiptvendorname.ToUpper());
                string finalDisc = "";
                string discSign = "";
                if (obj.discount == "0" || obj.discount == null)
                {
                    discSign = "+";
                    finalDisc = this.loading;
                }
                else
                {
                    discSign = "-";
                    finalDisc = this.discount;
                }
                objDA.SelectCommand.Parameters.AddWithValue("@LODGDISC", finalDisc);
                objDA.SelectCommand.Parameters.AddWithValue("@DISCSIGN", discSign);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    MQUAT.Service BOUAT = new MQUAT.Service();
                    string Response = BOUAT.RunMQString(DS.Tables[0].Rows[0]["Bores"].ToString());
                    policyNo = Response.Substring(200, 8);
                    if (Response.Substring(0, 1) == "0")
                    {
                        int len = policyNo.Trim().Length;
                        SqlConnection objCon1 = new SqlConnection(StrConMCRM);
                        SqlDataAdapter objDA1 = new SqlDataAdapter("SP_UCO_BO_POLAPRMO ", objCon);
                        if (len == 8)
                        {
                            objDA1.SelectCommand.Parameters.AddWithValue("@ResMsg", Response.Substring(200, 368));
                            objDA1.SelectCommand.Parameters.AddWithValue("@id", DS.Tables[0].Rows[0]["ID"].ToString());
                        }
                        else
                        {
                            objDA1.SelectCommand.Parameters.AddWithValue("@ResMsg", Response);
                            objDA1.SelectCommand.Parameters.AddWithValue("@id", DS.Tables[0].Rows[0]["ID"].ToString());
                            objDA1.SelectCommand.Parameters.AddWithValue("@flag", "Error");
                        }
                        objDA1.SelectCommand.CommandType = CommandType.StoredProcedure;
                        objDA.SelectCommand.CommandTimeout = 0;
                        DataSet DS1 = new DataSet();
                        objDA1.Fill(DS1);
                        if (DS1.Tables[0].Rows[0]["PolicyNumber"].ToString() == "")
                        {
                            objres.ResponseFlag = 0;
                            objres.ResponseMessage = Response.Substring(194, 200);
                        }
                        else
                        {
                            objres.ResponseFlag = 1;
                            objres.ResponseMessage = DataTableToJSONWithJSONNet(DS1);
                        }

                    }
                    else
                    {
                        objres.ResponseFlag = 0;
                        policyNo = "";
                        objres.ResponseMessage = "Policy creation failed!";
                    }
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    policyNo = "";
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                policyNo = "";
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }

        public string generateFirePDF(FireData obj, out string policyNo, out string policyNo1)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_BO_SFRCRT", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@type", "FUS");
                objDA.SelectCommand.Parameters.AddWithValue("@clientNo", obj.clientCode);
                objDA.SelectCommand.Parameters.AddWithValue("@startdt", obj.startDate);
                objDA.SelectCommand.Parameters.AddWithValue("@enddt", obj.endDate);
                objDA.SelectCommand.Parameters.AddWithValue("@agent", obj.agentCode);
                objDA.SelectCommand.Parameters.AddWithValue("@add1", obj.add1);
                objDA.SelectCommand.Parameters.AddWithValue("@add2", obj.add2);
                objDA.SelectCommand.Parameters.AddWithValue("@add3", obj.add3);
                objDA.SelectCommand.Parameters.AddWithValue("@city", obj.city);
                objDA.SelectCommand.Parameters.AddWithValue("@state", obj.state);
                objDA.SelectCommand.Parameters.AddWithValue("@pincode", obj.pincode);
                objDA.SelectCommand.Parameters.AddWithValue("@Building", obj.buildMain ? 'Y' : 'N');// "002" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@PlinthFoundation", obj.plinthFoundMain ? 'Y' : 'N'); //"004" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@PlantMachinery", obj.plantMacMain ? 'Y' : 'N'); //"009" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@FurnitureFixturesFittings", obj.furnFixFitMain ? 'Y' : 'N'); // "006" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@Stock", obj.stockMain ? 'Y' : 'N'); //"010" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@Contents", obj.fireContentsMain ? 'Y' : 'N');// "008" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@BSUMIN", obj.fireBuilding != null ? obj.fireBuilding : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@PFSUMIN", obj.plinthFound != null ? obj.plinthFound : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@PMSUMIN", obj.plantMac != null ? obj.plantMac : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@FSUMIN", obj.furnFixFit != null ? obj.furnFixFit : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@SSUMIN", obj.stock != null ? obj.stock : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@CSUMIN", obj.fireContent != null ? obj.fireContent : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@receipt", obj.receiptNo);
                objDA.SelectCommand.Parameters.AddWithValue("@Intrestparty", obj.financInterest == "" ? "N" : "Y");
                objDA.SelectCommand.Parameters.AddWithValue("@Terrorism", obj.terrorismMain ? "Y" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@partyname", obj.financInterest);
                objDA.SelectCommand.Parameters.AddWithValue("@partyAcNo", obj.loanAcNo);
                objDA.SelectCommand.Parameters.AddWithValue("@code", "HY");
                objDA.SelectCommand.Parameters.AddWithValue("@winNo", obj.winNo);
                objDA.SelectCommand.Parameters.AddWithValue("@applNo", obj.applNo);
                objDA.SelectCommand.Parameters.AddWithValue("@branchStaffID", obj.FGStafID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankBranch", obj.bankBranch);
                objDA.SelectCommand.Parameters.AddWithValue("@bankBranchCode", obj.bankBranchCode);
                objDA.SelectCommand.Parameters.AddWithValue("@bankEmpCode", obj.bankStaffID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankCusID", obj.bankCustID);
                objDA.SelectCommand.Parameters.AddWithValue("@bancaSegement", obj.bancaSegement);
                objDA.SelectCommand.Parameters.AddWithValue("@zone", obj.zone);
                objDA.SelectCommand.Parameters.AddWithValue("@riskCode", obj.businessType);
                objDA.SelectCommand.Parameters.AddWithValue("@discount", obj.discount);
                objDA.SelectCommand.Parameters.AddWithValue("@singSymbol", obj.sign);
                objDA.SelectCommand.Parameters.AddWithValue("@policyTenure", obj.polTenure);
                objDA.SelectCommand.Parameters.AddWithValue("@printFlag", obj.printFlag == "" ? "N" : "Y");
                objDA.SelectCommand.Parameters.AddWithValue("@payerID", obj.payerID);
                objDA.SelectCommand.Parameters.AddWithValue("@quoteNo", obj.quoteNo);
                objDA.SelectCommand.Parameters.AddWithValue("@ageOfBuildingCode", obj.ageOfBuildingCode);
                objDA.SelectCommand.Parameters.AddWithValue("@fireProtectionCode", obj.fireProtectionCode);
                objDA.SelectCommand.Parameters.AddWithValue("@constructDetailsCode", obj.constructDetailsCode);
                objDA.SelectCommand.Parameters.AddWithValue("@gstNo", obj.GSTNo);
                objDA.SelectCommand.Parameters.AddWithValue("@whichBank", obj.receiptvendorname.ToUpper());
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    MQUAT.Service BOUAT = new MQUAT.Service();
                    string Response = BOUAT.RunMQString(DS.Tables[0].Rows[0]["Bores"].ToString());
                    policyNo = Response.Substring(200, 8);
                    policyNo1 = "";
                    if (Response.Substring(62, 1) == "0")
                    {
                        SqlConnection objCon1 = new SqlConnection(StrConMCRM);
                        SqlDataAdapter objDA1 = new SqlDataAdapter("SP_UCO_BO_POLAPRMO ", objCon);
                        objDA1.SelectCommand.Parameters.AddWithValue("@ResMsg", Response.Substring(200, 368));
                        objDA1.SelectCommand.Parameters.AddWithValue("@id", DS.Tables[0].Rows[0]["ID"].ToString());
                        objDA1.SelectCommand.CommandType = CommandType.StoredProcedure;
                        objDA.SelectCommand.CommandTimeout = 0;
                        DataSet DS1 = new DataSet();
                        objDA1.Fill(DS1);
                        objres.ResponseFlag = 1;
                        objres.ResponseMessage = DataTableToJSONWithJSONNet(DS1);
                        if (obj.burglarymMain)
                        {
                            //policyNo1 = generateBuglaryPDF(obj, policyNo);
                            //policyNo1 = "";
                        }
                        else
                        {
                            policyNo1 = "NA";
                        }
                    }
                    else
                    {
                        SqlConnection objCon1 = new SqlConnection(StrConMCRM);
                        SqlDataAdapter objDA1 = new SqlDataAdapter("SP_UCO_BO_POLAPRMO ", objCon);
                        objDA1.SelectCommand.Parameters.AddWithValue("@ResMsg", Response);
                        objDA1.SelectCommand.Parameters.AddWithValue("@id", DS.Tables[0].Rows[0]["ID"].ToString());
                        objDA1.SelectCommand.Parameters.AddWithValue("@flag", "Error");
                        objDA1.SelectCommand.CommandType = CommandType.StoredProcedure;
                        objDA.SelectCommand.CommandTimeout = 0;
                        DataSet DS1 = new DataSet();
                        objDA1.Fill(DS1);
                        objres.ResponseFlag = 0;
                        objres.ResponseMessage = "Policy creation failed!";
                        policyNo = "";
                        policyNo1 = "";
                    }
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    policyNo = "";
                    policyNo1 = "";
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                policyNo = "";
                policyNo1 = "";
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string generateBuglaryPDF(FireData obj, string policyNo1, string checkSource="")
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                String output = generateWinNoForBug("kkhunt", "PASIA", "NB", "UCO");

                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_BO_FBGCRT", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@type", "FBG");
                objDA.SelectCommand.Parameters.AddWithValue("@clientNo", obj.clientCode);
                objDA.SelectCommand.Parameters.AddWithValue("@startdt", obj.startDate);
                objDA.SelectCommand.Parameters.AddWithValue("@enddt", obj.endDate);
                objDA.SelectCommand.Parameters.AddWithValue("@agent", obj.agentCode);
                objDA.SelectCommand.Parameters.AddWithValue("@add1", obj.add1);
                objDA.SelectCommand.Parameters.AddWithValue("@add2", obj.add2);
                objDA.SelectCommand.Parameters.AddWithValue("@add3", obj.add3);
                objDA.SelectCommand.Parameters.AddWithValue("@city", obj.city);
                objDA.SelectCommand.Parameters.AddWithValue("@state", obj.state);
                objDA.SelectCommand.Parameters.AddWithValue("@pincode", obj.pincode);
                objDA.SelectCommand.Parameters.AddWithValue("@PlantMachinery", obj.plantMacMain ? 'Y' : 'N'); //"009" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@FurnitureFixturesFittings", obj.furnFixFitMain ? 'Y' : 'N'); // "006" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@Stock", obj.stockMain ? 'Y' : 'N'); //"010" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@Contents", obj.fireContentsMain ? 'Y' : 'N');// "008" : "N");
                objDA.SelectCommand.Parameters.AddWithValue("@PMSUMIN", obj.plantMac != null ? obj.plantMac : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@FSUMIN", obj.furnFixFit != null ? obj.furnFixFit : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@SSUMIN", obj.stock != null ? obj.stock : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@CSUMIN", obj.fireContent != null ? obj.fireContent : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@receipt", obj.receiptNo);
                objDA.SelectCommand.Parameters.AddWithValue("@Intrestparty", obj.financInterest == "" ? "N" : "Y");
                objDA.SelectCommand.Parameters.AddWithValue("@partyname", obj.financInterest);
                objDA.SelectCommand.Parameters.AddWithValue("@partyAcNo", obj.loanAcNo);
                objDA.SelectCommand.Parameters.AddWithValue("@code", "HY");
                objDA.SelectCommand.Parameters.AddWithValue("@winNo", output.Substring(0, 20));
                objDA.SelectCommand.Parameters.AddWithValue("@applNo", output.Substring(20, 8));
                objDA.SelectCommand.Parameters.AddWithValue("@branchStaffID", obj.FGStafID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankBranch", obj.bankBranch);
                objDA.SelectCommand.Parameters.AddWithValue("@bankBranchCode", obj.bankBranchCode);
                objDA.SelectCommand.Parameters.AddWithValue("@bankEmpCode", obj.bankStaffID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankCusID", obj.bankCustID);
                objDA.SelectCommand.Parameters.AddWithValue("@bancaSegement", obj.bancaSegement);
                objDA.SelectCommand.Parameters.AddWithValue("@zone", obj.zone);
                objDA.SelectCommand.Parameters.AddWithValue("@riskCode", obj.businessType);
                objDA.SelectCommand.Parameters.AddWithValue("@discount", obj.burglaryRate);
                objDA.SelectCommand.Parameters.AddWithValue("@policyTenure", obj.polTenure);
                objDA.SelectCommand.Parameters.AddWithValue("@printFlag", obj.printFlag == "" ? "N" : "Y");
                objDA.SelectCommand.Parameters.AddWithValue("@payerID", obj.payerID);
                objDA.SelectCommand.Parameters.AddWithValue("@stateCode", obj.stateCode);
                objDA.SelectCommand.Parameters.AddWithValue("@quoteNo", obj.quoteNo);
                objDA.SelectCommand.Parameters.AddWithValue("@gstNo", obj.GSTNo);
                objDA.SelectCommand.Parameters.AddWithValue("@highSumIns", obj.sumInsured);
                objDA.SelectCommand.Parameters.AddWithValue("@policyNo", policyNo1);
                objDA.SelectCommand.Parameters.AddWithValue("@whichBank", obj.receiptvendorname.ToUpper());
                objDA.SelectCommand.Parameters.AddWithValue("@burglaryPercent", obj.burglaryPercent);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    MQUAT.Service BOUAT = new MQUAT.Service();
                    string Response = BOUAT.RunMQString(DS.Tables[0].Rows[0]["Bores"].ToString());
                    policyNo = Response.Substring(200, 8);
                    if (Response.Substring(62, 1) == "0")
                    {
                        SqlConnection objCon1 = new SqlConnection(StrConMCRM);
                        SqlDataAdapter objDA1 = new SqlDataAdapter("SP_UCO_BO_POLAPRMO ", objCon);
                        objDA1.SelectCommand.Parameters.AddWithValue("@ResMsg", Response.Substring(200, 368));
                        objDA1.SelectCommand.Parameters.AddWithValue("@id", DS.Tables[0].Rows[0]["ID"].ToString());
                        objDA1.SelectCommand.CommandType = CommandType.StoredProcedure;
                        objDA.SelectCommand.CommandTimeout = 0;
                        DataSet DS1 = new DataSet();
                        objDA1.Fill(DS1);
                        if (checkSource == "API")
                        {
                            UCOMaster uco = new UCOMaster();
                            Common common = new Common();
                            uco.quoteNo = obj.quoteNo;
                            uco.policyNo = policyNo1;
                            uco.policyNo1 = policyNo;
                            uco.currentStatus = "C";
                            common.updateUCOMaster(uco);
                            objres.ResponseFlag = 1;
                            objres.ResponseMessage = policyNo;
                            var js = new JavaScriptSerializer().Serialize(objres);
                            return js;
                        }
                    }
                    else
                    {
                        SqlConnection objCon1 = new SqlConnection(StrConMCRM);
                        SqlDataAdapter objDA1 = new SqlDataAdapter("SP_UCO_BO_POLAPRMO ", objCon);
                        objDA1.SelectCommand.Parameters.AddWithValue("@ResMsg", Response);
                        objDA1.SelectCommand.Parameters.AddWithValue("@id", DS.Tables[0].Rows[0]["ID"].ToString());
                        objDA1.SelectCommand.Parameters.AddWithValue("@flag", "Error");
                        objres.ResponseFlag = 0;
                        objDA1.SelectCommand.CommandType = CommandType.StoredProcedure;
                        objDA.SelectCommand.CommandTimeout = 0;
                        DataSet DS1 = new DataSet();
                        objDA1.Fill(DS1);
                        policyNo = "";
                    }
                }
                catch (Exception ex)
                {
                    policyNo = "";
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                policyNo = "";
            }
            return policyNo;
        }

        public string generateFireLongPDF(FireData obj, out string policyNo)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_BO_FGSCRT", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@type", "FRG");
                objDA.SelectCommand.Parameters.AddWithValue("@clientNo", obj.clientCode);
                objDA.SelectCommand.Parameters.AddWithValue("@startdt", obj.startDate);
                objDA.SelectCommand.Parameters.AddWithValue("@enddt", obj.endDate);
                objDA.SelectCommand.Parameters.AddWithValue("@agent", obj.agentCode);
                objDA.SelectCommand.Parameters.AddWithValue("@add1", obj.add1);
                objDA.SelectCommand.Parameters.AddWithValue("@add2", obj.add2);
                objDA.SelectCommand.Parameters.AddWithValue("@add3", obj.add3);
                objDA.SelectCommand.Parameters.AddWithValue("@city", obj.city);
                objDA.SelectCommand.Parameters.AddWithValue("@state", obj.state);
                objDA.SelectCommand.Parameters.AddWithValue("@pincode", obj.pincode.Trim());
                objDA.SelectCommand.Parameters.AddWithValue("@Building", obj.buildMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@contentFlag", obj.fireContentsMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@Earthquake", 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@BSUMIN", obj.fireBuilding != null ? obj.fireBuilding : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@sumInsCotent", obj.fireContent != null ? obj.fireContent : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@ESUMIN", "0");
                objDA.SelectCommand.Parameters.AddWithValue("@ZDSCLDPR", "0");
                objDA.SelectCommand.Parameters.AddWithValue("@receipt", obj.receiptNo);
                objDA.SelectCommand.Parameters.AddWithValue("@Intrestparty", obj.financInterest == "" ? "N" : "Y");
                objDA.SelectCommand.Parameters.AddWithValue("@partyname", obj.financInterest);
                objDA.SelectCommand.Parameters.AddWithValue("@partyAcNo", obj.loanAcNo);
                objDA.SelectCommand.Parameters.AddWithValue("@code", "HY");
                objDA.SelectCommand.Parameters.AddWithValue("@winNo", obj.winNo);
                objDA.SelectCommand.Parameters.AddWithValue("@applNo", obj.applNo);
                objDA.SelectCommand.Parameters.AddWithValue("@branchStaffID", obj.FGStafID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankBranch", obj.bankBranch);
                objDA.SelectCommand.Parameters.AddWithValue("@bankBranchCode", obj.bankBranchCode);
                objDA.SelectCommand.Parameters.AddWithValue("@bankEmpCode", obj.bankStaffID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankCusID", obj.bankCustID);
                objDA.SelectCommand.Parameters.AddWithValue("@bancaSegement", obj.bancaSegement);
                objDA.SelectCommand.Parameters.AddWithValue("@discount", obj.discount);
                objDA.SelectCommand.Parameters.AddWithValue("@singSymbol", obj.sign);
                objDA.SelectCommand.Parameters.AddWithValue("@policyTenure", obj.polTenure);
                objDA.SelectCommand.Parameters.AddWithValue("@printFlag", obj.printFlag == "" ? "N" : "Y");
                objDA.SelectCommand.Parameters.AddWithValue("@insName", obj.insName);
                objDA.SelectCommand.Parameters.AddWithValue("@insRelation", "SELF");
                objDA.SelectCommand.Parameters.AddWithValue("@insDate", obj.insDate);
                objDA.SelectCommand.Parameters.AddWithValue("@insGender", obj.insGender);
                objDA.SelectCommand.Parameters.AddWithValue("@insAge", obj.insAge);
                objDA.SelectCommand.Parameters.AddWithValue("@insOccupation", obj.insOccupation);
                objDA.SelectCommand.Parameters.AddWithValue("@insNominee", obj.insNominee);
                objDA.SelectCommand.Parameters.AddWithValue("@insNomineeRel", obj.insNomineeRel);
                objDA.SelectCommand.Parameters.AddWithValue("@spouseName", obj.spouseName);
                objDA.SelectCommand.Parameters.AddWithValue("@spouseRelation", "SPOU");
                objDA.SelectCommand.Parameters.AddWithValue("@spouseDate", obj.spouseDate);
                objDA.SelectCommand.Parameters.AddWithValue("@spouseGender", obj.spouseGender);
                objDA.SelectCommand.Parameters.AddWithValue("@spouseAge", obj.spouseAge);
                objDA.SelectCommand.Parameters.AddWithValue("@spouseOccupation", obj.spouseOccupation);
                objDA.SelectCommand.Parameters.AddWithValue("@spouseNominee", obj.spouseNominee);
                objDA.SelectCommand.Parameters.AddWithValue("@spouseNomineeRel", obj.spouseNomineeRel);
                objDA.SelectCommand.Parameters.AddWithValue("@coverContent", obj.coverContent ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@PASelfMain", obj.PASelfMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@PASpouseMain", obj.PASpouseMain ? 'Y' : 'N');
                objDA.SelectCommand.Parameters.AddWithValue("@PASelfSum", obj.PASelfSum != null ? obj.PASelfSum : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@PASpouseSum", obj.PASpouseSum != null ? obj.PASpouseSum : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@coverContentSum", obj.coverContentSum != null ? obj.coverContentSum : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@payerID", obj.payerID);
                objDA.SelectCommand.Parameters.AddWithValue("@quoteNo", obj.quoteNo);
                objDA.SelectCommand.Parameters.AddWithValue("@gstNo", obj.GSTNo);
                objDA.SelectCommand.Parameters.AddWithValue("@whichBank", obj.receiptvendorname != null ? obj.receiptvendorname.ToUpper() : "UCOBANK");
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    MQUAT.Service BOUAT = new MQUAT.Service();
                    string Response = BOUAT.RunMQString(DS.Tables[0].Rows[0]["Bores"].ToString());
                    policyNo = Response.Substring(200, 8);
                    if (Response.Substring(0, 1) == "0")
                    {
                        int len = policyNo.Trim().Length;
                        SqlConnection objCon1 = new SqlConnection(StrConMCRM);
                        SqlDataAdapter objDA1 = new SqlDataAdapter("SP_UCO_BO_POLAPRMO ", objCon);
                        if (len == 8)
                        {
                            objDA1.SelectCommand.Parameters.AddWithValue("@ResMsg", Response.Substring(200, 368));
                            objDA1.SelectCommand.Parameters.AddWithValue("@id", DS.Tables[0].Rows[0]["ID"].ToString());
                            objres.ResponseFlag = 1;
                        }
                        else
                        {
                            objDA1.SelectCommand.Parameters.AddWithValue("@ResMsg", Response);
                            objDA1.SelectCommand.Parameters.AddWithValue("@id", DS.Tables[0].Rows[0]["ID"].ToString());
                            objDA1.SelectCommand.Parameters.AddWithValue("@flag", "Error");
                            objres.ResponseFlag = 0;
                        }
                        objDA1.SelectCommand.CommandType = CommandType.StoredProcedure;
                        objDA.SelectCommand.CommandTimeout = 0;
                        DataSet DS1 = new DataSet();
                        objDA1.Fill(DS1);
                        objres.ResponseMessage = DataTableToJSONWithJSONNet(DS1);
                    }
                    else
                    {
                        objres.ResponseFlag = 0;
                        policyNo = "";
                        objres.ResponseMessage = "Policy creation failed!";
                    }
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    policyNo = "";
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                policyNo = "";
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string generateMariniePDF(MarineData obj, out string policyNo)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_BO_Marine", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@type", obj.typeofPolicy);
                objDA.SelectCommand.Parameters.AddWithValue("@agent", obj.agentCode);
                objDA.SelectCommand.Parameters.AddWithValue("@clientNo", obj.clientCode);
                objDA.SelectCommand.Parameters.AddWithValue("@startdt", obj.startDate);
                objDA.SelectCommand.Parameters.AddWithValue("@enddt", obj.endDate);
                objDA.SelectCommand.Parameters.AddWithValue("@pincode", obj.pincode.Trim());
                objDA.SelectCommand.Parameters.AddWithValue("@sumInsured", obj.sumInsured != null ? obj.sumInsured : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@sumInsuredduty", obj.sumInsuredduty != null ? obj.sumInsuredduty : "0");
                objDA.SelectCommand.Parameters.AddWithValue("@rate", obj.rate);
                objDA.SelectCommand.Parameters.AddWithValue("@displayPremium", "Y");
                objDA.SelectCommand.Parameters.AddWithValue("@modeOfTransit", obj.modeOfTransit);
                objDA.SelectCommand.Parameters.AddWithValue("@cargo", obj.cargo);
                objDA.SelectCommand.Parameters.AddWithValue("@cargoDescription", obj.cargoDescription);
                objDA.SelectCommand.Parameters.AddWithValue("@packing", obj.packing);
                objDA.SelectCommand.Parameters.AddWithValue("@marksAndNumbers", obj.marksAndNumbers);
                objDA.SelectCommand.Parameters.AddWithValue("@fromCountry", obj.fromCountry);
                objDA.SelectCommand.Parameters.AddWithValue("@toCountry", obj.toCountry);
                objDA.SelectCommand.Parameters.AddWithValue("@fromCity", obj.fromCity);
                objDA.SelectCommand.Parameters.AddWithValue("@toCity", obj.toCity);
                objDA.SelectCommand.Parameters.AddWithValue("@routeDetails", obj.routeDetails);
                objDA.SelectCommand.Parameters.AddWithValue("@estimatedDepartureDate", obj.estimatedDepartureDate);
                objDA.SelectCommand.Parameters.AddWithValue("@estimatedArrivalDate", obj.estimatedArrivalDate);
                objDA.SelectCommand.Parameters.AddWithValue("@documentRefNo", obj.documentRefNo);
                objDA.SelectCommand.Parameters.AddWithValue("@documentType", obj.documentType);
                objDA.SelectCommand.Parameters.AddWithValue("@documentRemark", obj.documentRemark);
                objDA.SelectCommand.Parameters.AddWithValue("@documentDate", obj.documentDate);
                objDA.SelectCommand.Parameters.AddWithValue("@vesselName", obj.vesselName);
                objDA.SelectCommand.Parameters.AddWithValue("@surveyagent", obj.surveyagent);
                objDA.SelectCommand.Parameters.AddWithValue("@settlingAgent", obj.settlingAgent);
                objDA.SelectCommand.Parameters.AddWithValue("@specialLCconditionsRemarks", obj.specialLCconditionsRemarks);
                objDA.SelectCommand.Parameters.AddWithValue("@consigneeApplicantDetails", obj.consigneeApplicantDetails);
                objDA.SelectCommand.Parameters.AddWithValue("@invoiceNo", obj.invoiceNo);
                objDA.SelectCommand.Parameters.AddWithValue("@invoiceDate", obj.invoiceDate);
                objDA.SelectCommand.Parameters.AddWithValue("@basisofValuation", obj.basisofValuation);
                objDA.SelectCommand.Parameters.AddWithValue("@currencyofInvoice", obj.currencyofInvoice);
                objDA.SelectCommand.Parameters.AddWithValue("@firstName", obj.firstName);
                objDA.SelectCommand.Parameters.AddWithValue("@lastName", obj.lastName);
                objDA.SelectCommand.Parameters.AddWithValue("@receiptNo", obj.receiptNo);
                objDA.SelectCommand.Parameters.AddWithValue("@receipt", obj.receiptNo);
                objDA.SelectCommand.Parameters.AddWithValue("@partyname", obj.financerName);
                objDA.SelectCommand.Parameters.AddWithValue("@code", "HY");
                objDA.SelectCommand.Parameters.AddWithValue("@winNo", obj.winNo);
                objDA.SelectCommand.Parameters.AddWithValue("@applNo", obj.applNo);
                objDA.SelectCommand.Parameters.AddWithValue("@branchStaffID", obj.fgStafID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankBranch", obj.bankBranch);
                objDA.SelectCommand.Parameters.AddWithValue("@bankEmpCode", obj.bankStaffID);
                objDA.SelectCommand.Parameters.AddWithValue("@bankCusID", obj.bankCustID);
                objDA.SelectCommand.Parameters.AddWithValue("@fgBranchCode", obj.fgBranchCode);
                objDA.SelectCommand.Parameters.AddWithValue("@bancaSegement", obj.bancaSegement);
                objDA.SelectCommand.Parameters.AddWithValue("@printFlag", obj.printFlag == "" ? "N" : "Y");
                objDA.SelectCommand.Parameters.AddWithValue("@payerID", obj.payerID);
                objDA.SelectCommand.Parameters.AddWithValue("@quoteNo", obj.quoteNo);
                objDA.SelectCommand.Parameters.AddWithValue("@gstNo", obj.GSTNo);
                objDA.SelectCommand.Parameters.AddWithValue("@whichBank", obj.receiptVendorName != null ? obj.receiptVendorName.ToUpper() : "UCOBANK");
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    MQUAT.Service BOUAT = new MQUAT.Service();
                    string Response = BOUAT.RunMQString(DS.Tables[0].Rows[0]["Bores"].ToString());
                    policyNo = Response.Substring(200, 8);
                    if (Response.Substring(0, 1) == "0")
                    {
                        int len = policyNo.Trim().Length;
                        SqlConnection objCon1 = new SqlConnection(StrConMCRM);
                        SqlDataAdapter objDA1 = new SqlDataAdapter("SP_UCO_BO_POLAPRMO ", objCon);
                        if (len == 8)
                        {
                            objDA1.SelectCommand.Parameters.AddWithValue("@ResMsg", Response.Substring(200, 368));
                            objDA1.SelectCommand.Parameters.AddWithValue("@id", DS.Tables[0].Rows[0]["ID"].ToString());
                            objres.ResponseFlag = 1;
                        }
                        else
                        {
                            objDA1.SelectCommand.Parameters.AddWithValue("@ResMsg", Response);
                            objDA1.SelectCommand.Parameters.AddWithValue("@id", DS.Tables[0].Rows[0]["ID"].ToString());
                            objDA1.SelectCommand.Parameters.AddWithValue("@flag", "Error");
                            objres.ResponseFlag = 0;
                        }
                        objDA1.SelectCommand.CommandType = CommandType.StoredProcedure;
                        objDA.SelectCommand.CommandTimeout = 0;
                        DataSet DS1 = new DataSet();
                        objDA1.Fill(DS1);
                        objres.ResponseMessage = DataTableToJSONWithJSONNet(DS1);
                    }
                    else
                    {
                        objres.ResponseFlag = 0;
                        policyNo = "";
                        objres.ResponseMessage = "Policy creation failed!";
                    }
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    policyNo = "";
                    objres.ResponseMessage = "There is some technical error please try again after some time";
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                policyNo = "";
                objres.ResponseMessage = "There is some technical error please try again after some time";
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string getStateCode(Common obj)
        {
            Response objres = new Response();
            try
            {
                BO_PROD.Service service = new BO_PROD.Service();
                DataSet DS = service.FetchPinCode(obj.pincode);
                objres.ResponseFlag = 1;
                objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }

        public string getEQZone(string districtName)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_EQZone", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@p_DistrictName", districtName);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);

                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string generateWinNo(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(workflow);
                SqlDataAdapter objDA = new SqlDataAdapter("sp_generatewinnumber", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@userid", obj.aduserid);
                objDA.SelectCommand.Parameters.AddWithValue("@systemname", obj.systemname);
                objDA.SelectCommand.Parameters.AddWithValue("@policytype", obj.policytype);
                objDA.SelectCommand.Parameters.AddWithValue("@vendorname", obj.vendorname);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);

                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string generateWinNoForBug(string userid, string systemname, string policytype, string vendorname)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(workflow);
                SqlDataAdapter objDA = new SqlDataAdapter("sp_generatewinnumber", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@userid", userid);
                objDA.SelectCommand.Parameters.AddWithValue("@systemname", systemname);
                objDA.SelectCommand.Parameters.AddWithValue("@policytype", policytype);
                objDA.SelectCommand.Parameters.AddWithValue("@vendorname", vendorname);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    return DS.Tables[0].Rows[0]["winnumber"].ToString() + DS.Tables[0].Rows[0]["applicationnumber"].ToString();
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string updateUCOMaster(UCOMaster obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_Master_Update", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@p_quoteNo", obj.quoteNo);
                objDA.SelectCommand.Parameters.AddWithValue("@p_policyNo", obj.policyNo);
                objDA.SelectCommand.Parameters.AddWithValue("@p_policyNo1", obj.policyNo1);
                objDA.SelectCommand.Parameters.AddWithValue("@p_transactionNo", obj.transactionNo);
                objDA.SelectCommand.Parameters.AddWithValue("@p_transactionDate", obj.transactionDate);
                objDA.SelectCommand.Parameters.AddWithValue("@p_receiptNo", obj.receiptNo);
                objDA.SelectCommand.Parameters.AddWithValue("@p_clientId", obj.clientId);
                objDA.SelectCommand.Parameters.AddWithValue("@p_currentStatus", obj.currentStatus);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string updateReceiptAndPayerID(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_UCO_Update_receipt_payerid", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@receiptno", obj.receiptNo);
                objDA.SelectCommand.Parameters.AddWithValue("@payerid", obj.payerID);
                objDA.SelectCommand.Parameters.AddWithValue("@status", obj.currentStatus);
                objDA.SelectCommand.Parameters.AddWithValue("@quoteno", obj.quoteNo);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);

                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string getData(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM1);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_GetProfile ", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@ID", obj.id);
                objDA.SelectCommand.Parameters.AddWithValue("@Type", obj.type);
                objDA.SelectCommand.Parameters.AddWithValue("@Role", obj.role);
                objDA.SelectCommand.Parameters.AddWithValue("@Role1", obj.role1);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string getSalesData(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_Get_UCO_Sales_Data", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@ID", obj.createdBy);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }
        public string getRole(Common obj)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                SqlConnection objCon = new SqlConnection(StrConMCRM1);
                SqlDataAdapter objDA = new SqlDataAdapter("SP_GetRole ", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@EMPID", obj.id);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);
                    objres.ResponseFlag = 1;
                    objres.ResponseMessage = DataTableToJSONWithJSONNet(DS);

                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    objres.ResponseMessage = ex.Message.ToString();
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }

        public string getRecipt(Receipt obj, out string receiptNo)
        {
            Response objres = new Response();
            DataSet ds = new DataSet();
            try
            {
                //string ReceiptUserName = Convert.ToString(ConfigurationManager.AppSettings["ReceiptUserName"]);
                //string ReceiptVendorName = Convert.ToString(ConfigurationManager.AppSettings["ReceiptVendorName"]);
                string ReceiptUserName = obj.receiptusername != null ? obj.receiptusername : Convert.ToString(ConfigurationManager.AppSettings["ReceiptUserName"]);
                string ReceiptVendorName = obj.receiptvendorname != null ? obj.receiptvendorname : Convert.ToString(ConfigurationManager.AppSettings["ReceiptVendorName"]);
                //UATBO.ServiceClient objBo = new UATBO.ServiceClient();
                BO_PROD.Service objBo = new BO_PROD.Service();
                string receiptOutXML = "";
                string XMLData = "<Root>";
                //double amount = Convert.ToDouble(obj.amount) - Convert.ToDouble(obj.amount) * 20 / 100;
                // double finalamount
                XMLData = XMLData
                    + "<UserName>" + ReceiptUserName.ToUpper() + "</UserName>" ///I0001464
                    + "<VendorCode>" + ReceiptVendorName.ToUpper() + "</VendorCode>"
                    + "<PolicyHeader>"
                    + "<ClientID>" + obj.clientId + "</ClientID>"
                    + "<AgentCode>" + obj.agentCode + "</AgentCode>"
                    + "<BranchCode>" + obj.branchCode + "</BranchCode>"
                    + "</PolicyHeader>"
                    + "<Receipt>"
                    + "<UniqueTranKey>" + obj.uid + "</UniqueTranKey>"
                    + "<ReceiptType>EFT</ReceiptType>"
                    + "<TransactionDate>" + obj.tranDate + "</TransactionDate>"
                    + "<TranRefNo>" + obj.quoteNo + "</TranRefNo>"
                    + "<TranRefNoDate>" + obj.tranDate + "</TranRefNoDate>"
                    + "<Amount>" + obj.amount + "</Amount>"
                    + "</Receipt>"
                    + "</Root>";
                receiptOutXML = objBo.CreateOnlyReceipt(XMLData);
                XmlDocument xDoc = new XmlDocument();
                xDoc.LoadXml(receiptOutXML);
                XmlNodeReader xmlReader = new XmlNodeReader(xDoc);
                DataSet dsReceipt = new DataSet();
                dsReceipt.ReadXml(xmlReader);
                receiptNo = Convert.ToString(dsReceipt.Tables[0].Rows[0]["ReceiptNo"]);
                objres.ResponseFlag = 1;
                objres.ResponseMessage = DataTableToJSONWithJSONNet(dsReceipt);
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
                receiptNo = "";
            }
            finally
            {
                // objCon.Close();
            }
            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
        }

        public string createClient(Common obj, out string ClientId)
        {
            Response objres = new Response();
            string uid = Convert.ToString(System.Guid.NewGuid());
            DataSet ds = new DataSet();
            string name = obj.firstName.Trim();
            try
            {
                //string VendorCode = Convert.ToString(ConfigurationManager.AppSettings["ReceiptVendorName"]);
                string VendorCode = obj.receiptvendorname.ToUpper();
                //UATBO.ServiceClient objBo = new UATBO.ServiceClient();
                BO_PROD.Service objBo = new BO_PROD.Service();
                string clientOutXML = "";
                string XMLData = "<Root>";
                string coverType = "";
                if (obj.customerType.ToLower() == "individual" || obj.customerType.ToLower() == "i")
                {
                    coverType = "I";
                }
                else
                {
                    coverType = "C";
                }
                //double amount = Convert.ToDouble(obj.amount) - Convert.ToDouble(obj.amount) * 20 / 100;
                // double finalamount
                XMLData = @"<Root>
          <Uid>" + uid + @"</Uid>
          <VendorCode>" + VendorCode + @"</VendorCode>
          <PolicyHeader>
          <AgentCode>" + obj.agentCode + @"</AgentCode>
          <BranchCode>" + obj.branchCode + @"</BranchCode>
          <ClientID />
          </PolicyHeader>
          <Client>
          <ClientType>" + coverType + @"</ClientType>
          <CreationType>C</CreationType>
          <Category />
          <Salutation>" + obj.salutation.ToUpper() + @"</Salutation>
          <FirstName>" + name + @"</FirstName>
          <LastName>" + obj.lastName + @"</LastName>
          <DOB>05/06/1995 00:00:00</DOB>
          <Gender>" + obj.gender + @"</Gender>
          <MaritalStatus>S</MaritalStatus>
          <Occupation>SVCM</Occupation>
          <Capital>100000</Capital>
          <RTAXIDNUM />
          <GST>
          <GSTIN>"+ obj.GSTNo + @"</GSTIN>
          </GST>
          <Address1>
              <AddrLine1>" + obj.comadd1 + @"</AddrLine1>
              <AddrLine2>" + obj.comadd2 + @"</AddrLine2>
              <AddrLine3>" + obj.comadd3 + @"</AddrLine3>
              <Landmark></Landmark>
              <Pincode>" + obj.pincode + @"</Pincode>
              <City>" + obj.comcity + @"</City>
              <State>" + obj.comstate + @"</State>          
              <Country>IND</Country>
              <AddressType>R</AddressType>
              <HomeTelNo />
              <OfficeTelNo />
              <FAXNO />
              <MobileNo>" + obj.contactNo + @"</MobileNo>
              <EmailAddr>" + obj.email + @"</EmailAddr>
          </Address1>
          <Address2>
          <AddrLine1>" + obj.add1 + @"</AddrLine1>
          <AddrLine2>" + obj.add2 + @"</AddrLine2>
          <AddrLine3>" + obj.add3 + @"</AddrLine3>
          <Landmark></Landmark>
          <Pincode>" + obj.pincode + @"</Pincode>
          <City>" + obj.city + @"</City>
          <State>" + obj.state + @"</State>
          <Country>IND</Country>
          <AddressType>R</AddressType>
          <HomeTelNo />
          <OfficeTelNo />
          <FAXNO />
          <MobileNo>" + obj.contactNo + @"</MobileNo>
          <EmailAddr>" + obj.email + @"</EmailAddr>
          </Address2>
          <BankDetails>
          <ZBENFNAM01>" + name + obj.lastName + @"</ZBENFNAM01>
          <ZBENFNAM02 />
          <BANKACOUNT />
          <SCTYCDE />
          <BNKACTYP />
          <ZMICRCODE />
          <ZIFSCCODE />
          <ZSWIFTCODE />
          <BANKKEY />
          <ZBANKNAM01 />
          <ZBANKNAM02 />
          </BankDetails>
          <RefundBankDetails>
          <ZBENFNAM01_R />
          <ZBENFNAM02_R />
          <BANKACOUNT_R />
          <BNKACTYP_R />
          <ZMICRCODE_R />
          <ZIFSCCODE_R />
          <ZSWIFTCODE_R />
          <BANKKEY_R />
          <ZBANKNAM01_R />
          <ZBANKNAM02_R />
          </RefundBankDetails>
          <AssessorDetails>
          <BLACKFLG_ASS>N</BLACKFLG_ASS>
          <DELISTED_ASS>N</DELISTED_ASS>
          <OREGNUM_ASS />
          <TERMDATE_ASS />
          </AssessorDetails>
          <SolicitorDetails>
          <BLACKFLG_SOL>N</BLACKFLG_SOL>
          <DELISTED_SOL>N</DELISTED_SOL>
          <OREGNUM_SOL />
          <TERMDATE_SOL />
          </SolicitorDetails>
          <RepairerDetails>
          <BLACKFLG_REP>N</BLACKFLG_REP>
          <DELISTED_REP>N</DELISTED_REP>
          <OREGNUM_REP />
          <TERMDATE_REP />
          </RepairerDetails>
          <AMLDetails>
          <ZAGEPRF />
          <ADDRPRF />
          <INCPRF />
          <IDPRF />
          <IDPRFNUM />
          <IDPRFDT />
          <ISSUEAUTH />
          <ZFOTOIND />
          <ZFOTOPRF />
          <ZUID />
          <ZWEBADDR />
          <CLNTRSKIND />
          <ZGEBFLAG />
          <REASONCD />
          <ZINWARD />
          <ZEXTIDTY />
          <ZEXTRNID />
          </AMLDetails>
          <VIPFlag>N</VIPFlag>
          <VIPCategory />
          </Client>
          </Root>";
                clientOutXML = objBo.CreateAndUpdateClient(XMLData);
                if (!clientOutXML.Contains("Root"))
                {
                    clientOutXML = "<Root>" + clientOutXML + "</Root>";
                }
                XmlDocument xDoc = new XmlDocument();
                xDoc.LoadXml(clientOutXML);
                XmlNodeReader xmlReader = new XmlNodeReader(xDoc);
                DataSet dsClient = new DataSet();
                dsClient.ReadXml(xmlReader);
                string status = Convert.ToString(dsClient.Tables["Client"].Rows[0]["Status"]);
                if (status == "Successful")
                {
                    ClientId = Convert.ToString(dsClient.Tables["Client"].Rows[0]["ClientId"]);
                    objres.ResponseFlag = 1;
                }
                else
                {
                    objres.ResponseFlag = 0;
                    ClientId = "";
                }
                objres.ResponseMessage = DataTableToJSONWithJSONNet(dsClient);
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
                objres.ResponseMessage = ex.Message.ToString();
                ClientId = "";
            }
            finally
            {
                // objCon.Close();
            }

            var js = new JavaScriptSerializer().Serialize(objres);
            return js;
            //  
        }

        public dynamic getPolicyCopy(Common obj)
        {
            // Response objres = new Response();
            dynamic Getbyte = null;
            try
            {
                SqlConnection objCon = new SqlConnection(inscdoc);

                SqlDataAdapter objDA = new SqlDataAdapter("Fg_Retrieve_PADocuments", objCon);
                objDA.SelectCommand.Parameters.AddWithValue("@PolicyNo", obj.policyNo);
                objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                objDA.SelectCommand.CommandTimeout = 0;
                DataSet DS = new DataSet();
                try
                {
                    objCon.Open();
                    objDA.Fill(DS);

                    if (DS.Tables[0].Rows[0]["PDFFile"].ToString().Length > 0)
                    {
                        Getbyte = (Byte[])DS.Tables[0].Rows[0]["PDFFile"];
                        //string FilePath = Path + Filename;

                        //File.WriteAllBytes(FilePath, bytes);
                        //objres.ResponseFlag = 1;
                        //objres.ResponseMessage = "";
                    }
                    else
                    {
                        Getbyte = null;
                    }

                }
                catch (Exception ex)
                {
                    Getbyte = null;
                    LogFile.WriteLog("Common", "getPolicyCopy(Common obj)", ex.Source, ex.Message);
                }
                finally
                {
                    objCon.Close();
                }
            }
            catch (Exception ex)
            {
                Getbyte = null;
                LogFile.WriteLog("Common", "getPolicyCopy(Common obj)", ex.Source, ex.Message);
            }
            return Getbyte;
        }
        public dynamic policyEnquire(Common obj)
        {
            dynamic Getbyte = null;
            try
            {
                Response objres = new Response();
                DataSet ds = new DataSet();
                try
                {
                    SqlConnection objCon = new SqlConnection(StrConMCRM);
                    SqlDataAdapter objDA = new SqlDataAdapter("SP_policy_enquiry", objCon);
                    objDA.SelectCommand.Parameters.AddWithValue("@policyNo", obj.policyNo);
                    objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
                    objDA.SelectCommand.CommandTimeout = 0;
                    DataSet DS = new DataSet();
                    try
                    {
                        objCon.Open();
                        objDA.Fill(DS);
                        MQUAT.Service BOUAT = new MQUAT.Service();
                        string Response = BOUAT.RunMQString(DS.Tables[0].Rows[0]["Bores"].ToString());
                        objres.ResponseFlag = 1;
                        objres.ResponseMessage = Response.ToString();
                    }
                    catch (Exception ex)
                    {
                        objres.ResponseFlag = 0;
                        policyNo = "";
                        objres.ResponseMessage = ex.Message.ToString();
                    }
                    finally
                    {
                        objCon.Close();
                    }
                }
                catch (Exception ex)
                {
                    objres.ResponseFlag = 0;
                    policyNo = "";
                    objres.ResponseMessage = ex.Message.ToString();
                }
                var js = new JavaScriptSerializer().Serialize(objres);
                return js;
            }
            catch (Exception ex)
            {
                Getbyte = ex.Message.ToString();
            }
            return Getbyte;
        }

        //public dynamic getPolicyCopy(Common obj)
        //{​​​​​​​​
        //  Response objres = new Response();
        //  DataSet ds = new DataSet();
        //  dynamic Getbyte = null;
        //  try
        //  {
        //    SqlConnection objCon = new SqlConnection(inscdoc);
        //    SqlDataAdapter objDA = new SqlDataAdapter("Fg_Retrieve_PADocuments", objCon);
        //    objDA.SelectCommand.Parameters.AddWithValue("@PolicyNo", obj.policyNo);
        //    objDA.SelectCommand.CommandType = CommandType.StoredProcedure;
        //    objDA.SelectCommand.CommandTimeout = 0;
        //    DataSet DS = new DataSet();
        //    try
        //    {
        //      objCon.Open();
        //      objDA.Fill(DS);
        //      string Path = ConfigurationManager.AppSettings["PDFURL"].ToString();
        //      string Filename = DS.Tables[0].Rows[0]["PolicyNo"].ToString() + ".pdf";
        //      //LogFile.WriteLog("CommonFunction", "getPolicyCopy(common obj)", Filename, "Filename");
        //      if (DS.Tables[0].Rows[0]["PDFFile"].ToString().Length > 0)
        //      {​​​​​​​​
        //        Getbyte = (Byte[])DS.Tables[0].Rows[0]["PDFFile"];
        //      }
        //      else
        //      {​​​​​​​​
        //      //  LogFile.WriteLog("CommonFunction", "getPolicyCopy(common obj)", obj.policyNo, "No Policy Number");
        //        Getbyte = null;
        //      }
        //    }
        //    catch (Exception ex)
        //    {
        //      Getbyte = null;
        //    }
        //    finally
        //    {​​​​​​​​
        //      objCon.Close();
        //    }​​​​​​​​
        //  }
        //  catch (Exception ex)
        //  {
        //    Getbyte = null;
        //  }
        //  return Getbyte;
        //}​​​​​​​​
    }
}
