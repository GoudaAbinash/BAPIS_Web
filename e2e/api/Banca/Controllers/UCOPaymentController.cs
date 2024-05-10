using Banca;
using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;
using System.Collections.Generic;
using HtmlAgilityPack;
using System.Web;
using System.Linq;
using Newtonsoft.Json.Linq;
using Banca.Models;
using Newtonsoft.Json;

namespace Banca.Controllers
{
    // [BancaAuthorizeAttribute]
    public class UCOPaymentController : ApiController
    {

        [HttpPost]
        [ActionName("payment")]
        public async System.Threading.Tasks.Task<HttpResponseMessage> paymentAsync(string type, [FromBody] dynamic jsonData)
        {
            string response = string.Empty;
            try
            {

                //string type = Convert.ToString((Request.Headers.FirstOrDefault(o => o.Key == "type").Value).FirstOrDefault());  //P: payment   U:Update
                string finalResult = EncryptReuest(jsonData);
                string dynamickey = CommonFunction.DynamicKey();

                //string paymentUrl = Convert.ToString(ConfigurationManager.AppSettings["ucoPaymentURL"]) + "?Action." + (type == "P" ? "InsPay.Reqst" : "InsPol.update") + ".Init=Y";
                string paymentUrl = "";
                if (type == "P")
                {
                    paymentUrl = ConfigurationManager.AppSettings["ucoPaymentURL"];
                }
                else
                {
                    paymentUrl = ConfigurationManager.AppSettings["ucoPaymentUpdateURL"];
                }

                //string ucoResponse = await CommonFunction.UCORequestAsync(paymentUrl);
                string ucoResponse = "";

                //if (ucoResponse != null)
                //{
                //    string htmlData = ucoResponse; //await resss.Content.ReadAsStringAsync();
                //    string link = "";
                //    // load html data
                //    HtmlDocument doc = new HtmlDocument();
                //    doc.LoadHtml(htmlData);
                //    // locate "table" node
                //    HtmlNodeCollection col = doc.DocumentNode.SelectNodes("//form");
                //    foreach (HtmlNode node in col)
                //    {
                //        // find all links
                //        link = node.Attributes["action"].Value;
                //        break;
                //    }

                //    paymentUrl = Convert.ToString(ConfigurationManager.AppSettings["ucoHalfPaymentURL"]);
                //    paymentUrl = paymentUrl + link.Replace("/LocalBankAwayRetail", "");
                //    //paymentUr;
                //}
                //else
                //{
                //    response = "No Response";
                //}
                try
                {
                    var dict = new Dictionary<string, string>();
                    dict.Add("ENCDATA", finalResult);
                    dict.Add("MCODE", "FUTURE");

                    ucoResponse = await CommonFunction.UCORequestAsync(paymentUrl, dict);
                    //ucoResponse = "S|UBQ1000000197|S53420479|02-09-2021";
                    string[] output = ucoResponse.Split('|');
                    if (output[0] == "F")
                    {
                        response = ucoResponse;
                    }
                    else if (output[0] == "S")
                    {
                        response = ucoResponse;
                    }
                    else
                    {
                        response = AES.DecryptDataAES(ucoResponse, dynamickey);
                        string[] output1 = response.Split('|');
                        if (output1[0] == "F" || output1[0] == "S")
                        {
                        }
                        else
                        {
                            response = AES.DecryptDataAES(response, dynamickey);
                        }
                    }
                    //  Common obj = new Common();
                    //  UCOMaster uco = new UCOMaster();
                    if (response != null && response != "")
                    {
                        string[] data = response.Split('|');
                        if (data[0] == "S")
                        {
                            UCOMaster uco = new UCOMaster();
                            Common obj = new Common();
                            UCOPayment jdata = JsonConvert.DeserializeObject<UCOPayment>(Convert.ToString(jsonData));
                            if (type == "U")
                            {
                                string quoteNo = jdata.proposal_no;
                                uco.quoteNo = quoteNo;
                                uco.currentStatus = "C"; ///Complete
                                obj.updateUCOMaster(uco);
                            }
                            else
                            {
                                uco.quoteNo = jdata.proposal_no;
                                uco.transactionNo = data[2].Trim();
                                uco.transactionDate = data[3];
                                uco.currentStatus = "P"; ///Payment
                                obj.updateUCOMaster(uco);
                            }
                        }
                    }

                }
                catch (Exception ex)
                {
                    LogFile.WriteLog("UCOPaymentController", "paymentAsync(dynamic jsonData)", ex.Source, ex.Message);
                    return Request.CreateResponse(HttpStatusCode.OK, ex.Message);
                }

                var res = Request.CreateResponse(HttpStatusCode.OK);
                res.Content = new StringContent(response, System.Text.Encoding.UTF8, "application/json");
                return res;
            }
            catch (Exception ex)
            {
                LogFile.WriteLog("UCOPaymentController", "paymentAsync(dynamic jsonData)", ex.Source, ex.Message);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        private string EncryptReuest(dynamic jsonData)
        {
            try
            {
                string publicKeyFile = Convert.ToString(ConfigurationManager.AppSettings["ucoPublicKey"]);

                //check sum generation and append
                string tempdata = "<!INSPAYMENT" + jsonData + "#Br@uco";
                string checksumData = CommonFunction.Generatehash256(tempdata);
                string dataPlusChecksum = $"{jsonData}|{checksumData}";

                //RANDOMLY GENERATED key
                string randomKey = CommonFunction.RandomGenkey(15);

                string encyptedData = AES.EncryptDataAES(dataPlusChecksum, randomKey);

                Console.Write(encyptedData);

                //read public key from the file
                if (File.Exists(publicKeyFile))
                {
                    // Read entire text file content in one string    
                    string text = File.ReadAllText(publicKeyFile);
                    Console.WriteLine(text);
                }

                //random key is to be encrypted with the public key
                string encryptRandomKey = CommonFunction.getEncriptedValue(randomKey, publicKeyFile);

                //<encrypted message with random key>|<encrypted random key using public key shared by Bank>
                encyptedData = encyptedData + "|" + encryptRandomKey;

                //dynamic key
                string dynamickey = CommonFunction.DynamicKey();

                string finalResult = AES.EncryptDataAES(encyptedData, dynamickey);
                return finalResult;
            }
            catch (Exception ex)
            {
                LogFile.WriteLog("UCOPaymentController", "EncryptReuest(dynamic jsonData)", ex.Source, ex.Message);
                return null;
            }
        }
    }
}

