using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Banca.Models
{
    public class MarineData
    {
        public string agentCode { get; set; }
        public string clientCode { get; set; }
        public string startDate { get; set; }
        public string endDate { get; set; }
        public string stateCode { get; set; }
        public string pincode { get; set; }
        public string sumInsured { get; set; }
        public string sumInsuredduty { get; set; }
        public string rate { get; set; }
        public string typeofPolicy { get; set; }
        public string modeOfTransit { get; set; }
        public string quoteNo { get; set; }
        public string payerID { get; set; }
        public string cargo { get; set; }
        public string cargoDescription { get; set; }
        public string packing { get; set; }
        public string marksAndNumbers { get; set; }
        public string fromCountry { get; set; }
        public string toCountry { get; set; }
        public string fromCity { get; set; }
        public string toCity { get; set; }
        public string routeDetails { get; set; }
        public string estimatedDepartureDate { get; set; }
        public string estimatedArrivalDate { get; set; }
        public string documentRefNo { get; set; }
        public string documentType { get; set; }
        public string documentRemark { get; set; }
        public string documentDate { get; set; }
        public string vesselName { get; set; }
        public string surveyagent { get; set; }
        public string settlingAgent { get; set; }
        public string specialLCconditionsRemarks { get; set; }
        public string consigneeApplicantDetails { get; set; }
        public string invoiceNo { get; set; }
        public string invoiceDate { get; set; }
        public string basisofValuation { get; set; }
        public string currencyofInvoice { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string receiptNo { get; set; }
        public string financerName { get; set; }
        public string winNo { get; set; }
        public string applNo { get; set; }
        public string receiptVendorName { get; set; }
        public string GSTNo { get; set; }
        public string printFlag { get; set; }
        public string bancaSegement { get; set; }
        public string fgBranchCode { get; set; }
        public string bankCustID { get; set; }
        public string bankStaffID { get; set; }
        public string bankBranch { get; set; }
        public string fgStafID { get; set; }
    }
}