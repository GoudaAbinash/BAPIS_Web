using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Banca.Models
{
  public class UCOPayment
  {
    public string mcode { get; set; }
    public string policy_type { get; set; }
    public string policy_ref_no { get; set; }
    public string policy_name { get; set; }
    public string cust_relation { get; set; }
    public string maker_id { get; set; }
    public string checker_id { get; set; }
    public string free_text_1 { get; set; }
    public string insured_person_name_1 { get; set; }
    public string insured_person_name_2 { get; set; }
    public string insured_person_name_3 { get; set; }
    public string insured_person_name_4 { get; set; }
    public string insured_person_name_5 { get; set; }
    public string insured_person_name_6 { get; set; }
    public string policy_sub_type { get; set; }
    public string proposal_no { get; set; }
    public string rrn_no { get; set; }
    public string premium_amt { get; set; }
    public string gst { get; set; }
    public string total_amt { get; set; }
    public string sum_assured_amt { get; set; }
    public string cust_id { get; set; }
    public string acct_holder_name { get; set; }
    public string cust_address { get; set; }
    public string cust_pan { get; set; }
    public string nominee_name { get; set; }
    public string email_id { get; set; }
    public long mob_no { get; set; }
    public string acct_no { get; set; }
    public string sp_code { get; set; }
  }
}
