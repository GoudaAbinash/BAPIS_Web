using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Banca.Models
{
  public class Receipt
  {
    public string uid { get; set; }
    public string tranDate { get; set; }
    public string amount { get; set; }
    public string fgTranNo { get; set; }
    public string branchCode { get; set; }
    public string clientId { get; set; }
    public string agentCode { get; set; }
    public string quoteNo { get; set; }
    public string receiptusername { get; set; }
    public string receiptvendorname { get; set; }


  }
}
