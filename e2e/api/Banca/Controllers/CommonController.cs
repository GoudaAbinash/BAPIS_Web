using Banca.Models;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Script.Serialization;
using static Banca.Models.Login;

namespace Banca.Controllers
{
    //[BancaAuthorizeAttribute]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CommonController : ApiController
    {
        // Other Application Method
        [HttpPost]
        [ActionName("getRole")]
        public HttpResponseMessage getRole(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.getRole(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("generateWinNo")]
        public HttpResponseMessage generateWinNo(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.generateWinNo(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("generateWinNo1")]
        public async System.Threading.Tasks.Task<HttpResponseMessage> generateWinNoAsync(Common obj)
        {
            Response objres = new Response();
            HttpResponseMessage response = null;
            try
            {
                using (var client = new HttpClient())
                {
                    var gizmo = new GenerateWin() { aduserid = "kkhunt", systemname = "PASIA", policytype = "NB", vendorname = "UCO" };
                    client.BaseAddress = new Uri("http://fglpg001.futuregenerali.in/fg3s/api/Common/generatewinnumber");
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    response = await client.PostAsJsonAsync("http://fglpg001.futuregenerali.in/fg3s/api/Common/generatewinnumber", gizmo);
                }
            }
            catch (Exception ex)
            {
                objres.ResponseFlag = 0;
            }
            return response;
        }
        [HttpPost]
        [ActionName("getData")]
        public HttpResponseMessage getData(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.getData(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("getSalesData")]
        public HttpResponseMessage getSalesData(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.getSalesData(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        // END

        [HttpPost]
        [ActionName("DeshboardData")]
        public HttpResponseMessage DeshboardData(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.DeshboardData(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("getQuoteList")]
        public HttpResponseMessage getQuoteList(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.getQuoteList(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("getQuoteDetails")]
        public HttpResponseMessage getQuoteDetails(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.getQuoteDetails(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("updateQuoteDetails")]
        public HttpResponseMessage updateQuoteDetails(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.updateQuoteDetails(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("saveData")]
        public HttpResponseMessage saveData(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.saveData(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("saveSalesData")]
        public HttpResponseMessage saveSalesData(salesData obj)
        {
            string response = string.Empty;
            try
            {
                Common c = new Common();
                response = c.saveSalesData(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("updateData")]
        public HttpResponseMessage updateData(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.updateData(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        [ActionName("BOENQ")]
        public HttpResponseMessage BOENQ(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.BOENQ(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("getStateCode")]
        public HttpResponseMessage getStateCode(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.getStateCode(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("updateReceiptAndPayerID")]
        public HttpResponseMessage updateReceiptAndPayerID(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.updateReceiptAndPayerID(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("getEQZone")]
        public HttpResponseMessage getEQZone(string districtName)
        {
            string response = string.Empty;
            try
            {
                Common c = new Common();
                response = c.getEQZone(districtName);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("uploadDoc")]
        public HttpResponseMessage FileUpload()
        {
            string response = string.Empty;
            try
            {
                string strClaimDocPath = ConfigurationManager.AppSettings["fleetDocPath"].ToString();
                Common objCommon = new Common();
                string ExcelName = null;
                var httpRequest = System.Web.HttpContext.Current.Request;
                var postedFile = httpRequest.Files["FileByte"];
                var postedFile1 = httpRequest.Files["FileByte1"];
                objCommon.quoteNo = httpRequest.Params["quoteNo"];
                objCommon.FileName = httpRequest.Params["FileName"];
                objCommon.FileName1 = httpRequest.Params["FileName1"];
                if (objCommon.quoteNo != "")
                {
                    string path = strClaimDocPath + "\\" + objCommon.quoteNo + "\\" + objCommon.FileName;
                    string path1 = strClaimDocPath + "\\" + objCommon.quoteNo + "\\" + objCommon.FileName1;
                    if (objCommon.FileName != "")
                    {
                        ExcelName = new String(System.IO.Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
                        ExcelName = ExcelName + DateTime.Now.ToString("yymmssfff") + System.IO.Path.GetExtension(postedFile.FileName);
                        if (!Directory.Exists(strClaimDocPath + "\\" + objCommon.quoteNo))
                            Directory.CreateDirectory(strClaimDocPath + "\\" + objCommon.quoteNo);
                        postedFile.SaveAs(path);
                        response = objCommon.SaveFileDetails(objCommon.quoteNo, objCommon.FileName);
                    }
                    if (objCommon.FileName1 != "" && objCommon.FileName1 != null)
                    {
                        ExcelName = new String(System.IO.Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
                        ExcelName = ExcelName + DateTime.Now.ToString("yymmssfff") + System.IO.Path.GetExtension(postedFile.FileName);
                        if (!Directory.Exists(strClaimDocPath + "\\" + objCommon.quoteNo))
                            Directory.CreateDirectory(strClaimDocPath + "\\" + objCommon.quoteNo);
                        postedFile.SaveAs(path1);
                        response = objCommon.SaveFileDetails(objCommon.quoteNo, objCommon.FileName1);
                    }
                }
                else
                {
                    response = "Quote No is Mandatory ! ";
                }
            }
            catch (Exception ex)
            {
                response = ex.Message.ToString();
            }
            var res = Request.CreateResponse(HttpStatusCode.OK);
            res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
            return res;
        }
        [HttpPost]
        [ActionName("uploadSalesDoc")]
        public HttpResponseMessage uploadSalesDoc()
        {
            string response = string.Empty;
            try
            {
                string strClaimDocPath = ConfigurationManager.AppSettings["fleetDocPath"].ToString();
                Common objCommon = new Common();
                string ExcelName = null;
                var httpRequest = System.Web.HttpContext.Current.Request;
                var postedFile = httpRequest.Files["FileByte"];
                var postedFile1 = httpRequest.Files["FileByte1"];
                var postedFile2 = httpRequest.Files["FileByte2"];
                objCommon.quoteNo = httpRequest.Params["quoteNo"];
                var filename = httpRequest.Params["FileName"];
                var filename1 = httpRequest.Params["FileName1"];
                var filename2 = httpRequest.Params["FileName2"];
                if (objCommon.quoteNo != "")
                {
                    string path = strClaimDocPath + "\\" + objCommon.quoteNo + "\\" + filename;
                    string path1 = strClaimDocPath + "\\" + objCommon.quoteNo + "\\" + filename1;
                    string path2 = strClaimDocPath + "\\" + objCommon.quoteNo + "\\" + filename2;
                    if (filename != "")
                    {
                        ExcelName = new String(System.IO.Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
                        ExcelName = ExcelName + DateTime.Now.ToString("yymmssfff") + System.IO.Path.GetExtension(postedFile.FileName);
                        if (!Directory.Exists(strClaimDocPath + "\\" + objCommon.quoteNo))
                            Directory.CreateDirectory(strClaimDocPath + "\\" + objCommon.quoteNo);
                        postedFile.SaveAs(path);
                        response = objCommon.SaveSalesFileDetails(objCommon.quoteNo, filename, "", "");
                    }
                    if (filename1 != "" && filename1 != null)
                    {
                        ExcelName = new String(System.IO.Path.GetFileNameWithoutExtension(postedFile1.FileName).Take(10).ToArray()).Replace(" ", "-");
                        ExcelName = ExcelName + DateTime.Now.ToString("yymmssfff") + System.IO.Path.GetExtension(postedFile1.FileName);
                        if (!Directory.Exists(strClaimDocPath + "\\" + objCommon.quoteNo))
                            Directory.CreateDirectory(strClaimDocPath + "\\" + objCommon.quoteNo);
                        postedFile1.SaveAs(path1);
                        response = objCommon.SaveSalesFileDetails(objCommon.quoteNo, "", filename1, "");
                    }
                    if (filename2 != "" && filename2 != null)
                    {
                        ExcelName = new String(System.IO.Path.GetFileNameWithoutExtension(postedFile2.FileName).Take(10).ToArray()).Replace(" ", "-");
                        ExcelName = ExcelName + DateTime.Now.ToString("yymmssfff") + System.IO.Path.GetExtension(postedFile2.FileName);
                        if (!Directory.Exists(strClaimDocPath + "\\" + objCommon.quoteNo))
                            Directory.CreateDirectory(strClaimDocPath + "\\" + objCommon.quoteNo);
                        postedFile2.SaveAs(path2);
                        response = objCommon.SaveSalesFileDetails(objCommon.quoteNo, "", "", filename2);
                    }
                }
                else
                {
                    response = "ID No is Mandatory ! ";
                }
            }
            catch (Exception ex)
            {
                response = ex.Message.ToString();
            }
            var res = Request.CreateResponse(HttpStatusCode.OK);
            res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
            return res;
        }

        [HttpPost]
        [ActionName("generatePDF")]
        public HttpResponseMessage generatePDF(Common obj)
        {
            string response = string.Empty;
            try
            {
                response = obj.generatePDF(obj, out string policyNo);
                if (policyNo.Trim().Length == 8)
                {
                    UCOMaster uco = new UCOMaster();
                    Common common = new Common();
                    uco.quoteNo = obj.quoteNo;
                    uco.policyNo = policyNo;
                    if (obj.payerID != "")
                    {
                        uco.currentStatus = "C";
                    }
                    else
                    {
                        uco.currentStatus = "D";
                    }
                    common.updateUCOMaster(uco);
                }
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        [ActionName("generateFirePDF")]
        public HttpResponseMessage generateFirePDF(FireData obj)
        {
            string response = string.Empty;
            try
            {
                Common c = new Common();
                response = c.generateFirePDF(obj, out string policyNo, out string policyNo1);
                if (policyNo.Trim().Length == 8)
                {
                    UCOMaster uco = new UCOMaster();
                    Common common = new Common();
                    uco.quoteNo = obj.quoteNo;
                    uco.policyNo = policyNo;
                    if (policyNo1 == "NA" || policyNo1.Trim().Length == 8)
                    {
                        uco.policyNo1 = policyNo1;
                    }
                    if (obj.payerID != "")
                    {
                        uco.currentStatus = "C";
                    }
                    else
                    {
                        uco.currentStatus = "D";
                    }
                    common.updateUCOMaster(uco);
                }
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("generateBuglaryPDF")]
        public HttpResponseMessage generateBuglaryPDF(FireData obj)
        {
            string response = string.Empty;
            try
            {
                Common c = new Common();
                response = c.generateBuglaryPDF(obj, obj.policyNo, "API");
                
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("generateFireLongPDF")]
        public HttpResponseMessage generateFireLongPDF(FireData obj)
        {
            string response = string.Empty;
            try
            {
                Common c = new Common();
                response = c.generateFireLongPDF(obj, out string policyNo);
                if (policyNo.Trim().Length == 8)
                {
                    UCOMaster uco = new UCOMaster();
                    Common common = new Common();
                    uco.quoteNo = obj.quoteNo;
                    uco.policyNo = policyNo;
                    if (obj.payerID != "")
                    {
                        uco.currentStatus = "C";
                    }
                    else
                    {
                        uco.currentStatus = "D";
                    }
                    common.updateUCOMaster(uco);
                }
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        [HttpPost]
        [ActionName("generateMariniePDF")]
        public HttpResponseMessage generateMariniePDF(MarineData obj)
        {
            string response = string.Empty;
            try
            {
                Common c = new Common();
                response = c.generateMariniePDF(obj, out string policyNo);
                if (policyNo.Trim().Length == 8)
                {
                    UCOMaster uco = new UCOMaster();
                    Common common = new Common();
                    uco.quoteNo = obj.quoteNo;
                    uco.policyNo = policyNo;
                    if (obj.payerID != "")
                    {
                        uco.currentStatus = "C";
                    }
                    else
                    {
                        uco.currentStatus = "D";
                    }
                    common.updateUCOMaster(uco);
                }
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        //[HttpPost]
        //[ActionName("getPolicyCopy")]
        //public HttpResponseMessage getPolicyCopy(Common obj)
        //{
        //  string response = string.Empty;
        //  try
        //  {
        //    response = obj.getPolicyCopy(obj);
        //    var res = Request.CreateResponse(HttpStatusCode.OK);
        //    res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
        //    return res;
        //  }
        //  catch (Exception ex)
        //  {
        //    return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
        //  }
        //}


        [HttpPost]
        [ActionName("getPolicyCopy")]
        public HttpResponseMessage getPolicyCopy(Common obj)
        {
            try
            {
                string docFile = obj.policyNo;
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
                //Set the File Path.

                //Read the File into a Byte Array.
                byte[] bytes = obj.getPolicyCopy(obj); //File.ReadAllBytes(filePath);
                                                       //Set the Response Content.
                response.Content = new ByteArrayContent(bytes);
                //Set the Response Content Length.
                response.Content.Headers.ContentLength = bytes.LongLength;
                //Set the Content Disposition Header Value and FileName.
                response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                response.Content.Headers.ContentDisposition.FileName = docFile + ".pdf";
                //Set the File Content Type.
                response.Content.Headers.ContentType = new MediaTypeHeaderValue(MimeMapping.GetMimeMapping(docFile + ".pdf"));
                return response;
            }
            catch (Exception ex)
            {
                LogFile.WriteLog("CommonController", "getPolicyCopy(Common obj)", ex.Source, ex.Message);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }


        [HttpPost]
        [ActionName("getReceipt")]
        public HttpResponseMessage getReceipt(Receipt obj)
        {

            string response = string.Empty;
            try
            {
                Common c = new Common();
                response = c.getRecipt(obj, out string receiptNo);
                //S|<Proposal Number>|<Transaction ID>| <Transaction Date>

                if (receiptNo != "" && receiptNo != null)
                {
                    UCOMaster uco = new UCOMaster();
                    Common common = new Common();
                    uco.quoteNo = obj.quoteNo;
                    uco.receiptNo = receiptNo;
                    uco.currentStatus = "R"; ///receipt
                    common.updateUCOMaster(uco);
                }

                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }


        [HttpPost]
        [ActionName("createClient")]
        public HttpResponseMessage createClient(Common obj)
        {

            string response = string.Empty;
            try
            {
                Common c = new Common();
                response = c.createClient(obj, out string ClientId);
                //S|<Proposal Number>|<Transaction ID>| <Transaction Date>

                if (ClientId != "" && ClientId != null)
                {
                    UCOMaster uco = new UCOMaster();
                    Common common = new Common();
                    uco.quoteNo = obj.quoteNo;
                    uco.clientId = ClientId;
                    uco.currentStatus = "I"; ///clientId
                    common.updateUCOMaster(uco);
                }

                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;

            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("policyEnquire")]
        public HttpResponseMessage policyEnquire(Common obj)
        {

            string response = string.Empty;
            try
            {
                response = obj.policyEnquire(obj);
                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;

            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
        [HttpPost]
        [ActionName("getReceiptList")]
        public HttpResponseMessage getReceiptList(Common obj)
        {
            string response = string.Empty;
            try
            {
                System.Net.ServicePointManager.ServerCertificateValidationCallback += delegate { return true; };
                ServicePointManager.Expect100Continue = true;
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                var client = new RestClient("https://ewfsso.fggeneral.in/fg3s/api/Receipt/fetchreceipt");
                //var client = new RestClient("http://fglpg001.futuregenerali.in/fg3s/api/Receipt/fetchreceipt");
                var request = new RestRequest(Method.POST);
                request.AddParameter("type", obj.type);
                request.AddParameter("code", obj.code);
                request.AddParameter("EntityKey", obj.EntityKey);
                request.AddParameter("ReceiptNo", obj.receiptNo);
                response = client.Execute(request).Content;

                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;

            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

    }
}

public class ReceiptRes
{
    public string Status { get; set; }
    public string ReceiptNo { get; set; }
    public string Message { get; set; }
}
