import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { CommonService } from "../common.service";
import $ from "jquery";
import { ActivatedRoute, Router } from "@angular/router";
import { UCOPaymentModel } from "src/model/ucoPaymentModel";
import { Receipt } from "src/model/receipt";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
declare var AJL;

interface Animal {
  name: string;
  value: string;
}

@Component({
  selector: "app-gll",
  templateUrl: "./gll.component.html",
  styleUrls: ["./gll.component.scss"],
})
export class GLLComponent implements OnInit {
  animals: Animal[] = [
    { name: "Mr", value: "Mr" },
    { name: "Mrs", value: "Mrs" },
  ];
  covers: Animal[] = [
    { name: "Building", value: "1A**" },
    { name: "Content", value: "1B**" },
    { name: "Tenant Liability", value: "1L**" },
    { name: "Alternate Accommodation", value: "1M**" },
    { name: "Omission to Insure Addition", value: "1P**" },
  ];
  Percentage = [{ name: "25" }, { name: "40" }, { name: "50" }, { name: "75" }];
  Nominee: Animal[] = [
    { name: "Brother", value: "BRO" },
    { name: "Sister", value: "SIS" },
    { name: "ETC", value: "ETC" },
  ];
  Alliedcheck = false;
  buildingRate = 0.14;
  zone1 = 0.25;
  zone2 = 0.15;
  zone3 = 0.1;
  zone4 = 0.05;
  industirlzone1 = 1.0;
  industirlzone2 = 0.5;
  industirlzone3 = 0.2;
  industirlzone4 = 0.1;
  nonIndustirlzone1 = 0.5;
  nonIndustirlzone2 = 0.3;
  nonIndustirlzone3 = 0.2;
  nonIndustirlzone4 = 0.1;
  currentZone = 0.05;
  currentZoneNo = 1;
  fgReceiptNo = "";
  totalBasicPremium = 0;
  basicOoccupationRate = 0;
  setTerroRateSFSP = 0;
  sfspSetEQ = 0;
  workRate = 0.55;
  signBoardRate = 2;
  quoteGeneraion: any;
  netPremium = 0;
  gst = 0;
  fgClientId;
  totalPre = 0;
  annexureWithValue = [];
  tenureList = [];
  showQuote = false;
  onSubmit = false;
  checkCalc = true;
  ckycname = true;
  addressFlag = true;
  issueQuoteFlag = true;
  updateQuoteFlag = false;
  saveQuoteDetailsFlag = false;
  saveAndPayment = false;
  disableckyc = false;
  makePaymentFlag = false;
  makePaymentFlagModify = false;
  isCompany = false;
  blockProcess = false;
  loading = false;
  agentCode;
  maximumDOB = new Date();
  maximumRiskD = new Date();
  scrollContainer: any;
  annexureForm: FormGroup;
  annexure = [];
  salutationList = [
    {
      name: "Mr",
      value: "Mr",
    },
    {
      name: "Miss",
      value: "Miss",
    },
    {
      name: "Mrs",
      value: "Mrs",
    },
  ];
  employeeForm: any;
  detailExpData = [];
  quoteNo = "";
  totalFirSum = 0;
  branchFlag = true;
  ridrectToPay = false;
  isLongDwelling = true;
  paymentOptReq = false;
  showRedirectMsg = true;
  customerName = "";
  bankCustID = "";
  FGStafID = "";
  fgiBRCode;
  AcNo: any;
  trnID: any;
  showField = true;
  userName = "";
  branchName = "";
  branchCode = "";
  stateCode = "";
  currentID = "";
  currentStatus = "";
  policyText = "Please wait .. We are creating your Policy …";
  policyNo = "";
  spCode = "";
  coverType = "";
  stateName = "";
  landmarkName = "";
  country = "";
  fgBrachCode;
  industrialType = "";
  decline = "No";
  loadingDisc: number;
  yrDiscount: number;
  buildDisc: number;
  discountLoad = "";
  filterTicket = "";
  statename = "";
  ageOfBuildingCode = "";
  constructDetCode = "";
  FloorsofCode = "";
  FireBrigadCode = "";

  occupationMaster = [
    { Description: "Accountant", Code: "ACCT" },
    { Description: "Actor/Actress", Code: "ACTR" },
    { Description: "Admin Executive", Code: "AMEX" },
    { Description: "Advocate", Code: "ADVO" },
    { Description: "Agent (Insurance)", Code: "AGET" },
    { Description: "Air Force", Code: "AIRF" },
    { Description: "Architect", Code: "ARCH" },
    { Description: "Army", Code: "ARMY" },
    { Description: "Baggage Porter", Code: "BAPR" },
    { Description: "Barbers", Code: "BARB" },
    { Description: "Barman", Code: "BARM" },
    { Description: "Beauticians", Code: "BEAU" },
    { Description: "Beggar", Code: "BEGG" },
    { Description: "Boilerman", Code: "BLRM" },
    { Description: "Brokers", Code: "BROK" },
    { Description: "Builder", Code: "BULD" },
    { Description: "Businessman", Code: "BUSM" },
    { Description: "Businessman", Code: "BUS1" },
    { Description: "Carpenter", Code: "CARP" },
    { Description: "Cashier", Code: "CASH" },
    { Description: "Chemical Engineer", Code: "CEME" },
    { Description: "Chemist", Code: "CMST" },
    { Description: "Choreographer", Code: "CHPR" },
    { Description: "Civil Engineer", Code: "CVLE" },
    { Description: "Cleaner", Code: "CLNR" },
    { Description: "Computer Engineer", Code: "COME" },
    { Description: "Construction Site Worker", Code: "CONW" },
    { Description: "Consultant", Code: "CONS" },
    { Description: "Cook", Code: "COOK" },
    { Description: "Crane Operator", Code: "CROP" },
    { Description: "CLASS-1", Code: "CLS1" },
    { Description: "CLASS-2", Code: "CLS2" },
    { Description: "Dancer", Code: "DNCR" },
    { Description: "Deliveryman", Code: "DELI" },
    { Description: "Dentist", Code: "DENT" },
    { Description: "Designer", Code: "DESG" },
    { Description: "Die-Cutting Machine Operator", Code: "DIEC" },
    { Description: "Director", Code: "DIR" },
    { Description: "Diver (Commercial/Military)", Code: "DIVE" },
    { Description: "Doctor", Code: "DOCT" },
    { Description: "Draughtsman", Code: "DRAU" },
    { Description: "Driver", Code: "DRIV" },
    { Description: "Electrical", Code: "ELEC" },
    { Description: "Electricians", Code: "ELET" },
    { Description: "Engineer", Code: "ENGR" },
    { Description: "Estate Agents", Code: "ESTA" },
    { Description: "Executive", Code: "EXEC" },
    { Description: "Explosives handler", Code: "EXHL" },
    { Description: "EDP Operator", Code: "EDPO" },
    { Description: "Factory Workers", Code: "FACT" },
    { Description: "Farmer", Code: "FARM" },
    { Description: "Fireman", Code: "FIRE" },
    { Description: "Fisherman", Code: "FISH" },
    { Description: "Fitter", Code: "FITR" },
    { Description: "Flight Steward/Stewardess", Code: "FLIG" },
    { Description: "Foreman", Code: "FORE" },
    { Description: "Forest Officer", Code: "FORO" },
    { Description: "Forklift Operator", Code: "FKOP" },
    { Description: "Foundary Worker", Code: "FOUD" },
    { Description: "Furnacemen", Code: "FURN" },
    { Description: "Gas Attendant", Code: "GASA" },
    { Description: "Geologist", Code: "GEOL" },
    { Description: "Hawkers", Code: "HAWK" },
    { Description: "Health Worker", Code: "HLTW" },
    { Description: "Helper", Code: "HELP" },
    { Description: "Hospital Attendant", Code: "HOAT" },
    { Description: "Hotel & Restaurant Waiters", Code: "HOTW" },
    { Description: "Househusband", Code: "HSHB" },
    { Description: "Housewife/ Househusband", Code: "HSWF" },
    { Description: "Human Resource Officer", Code: "HROF" },
    { Description: "Infants & Toddlers", Code: "INFA" },
    { Description: "Jeweler", Code: "JWLR" },
    { Description: "Jockey", Code: "JOCK" },
    { Description: "Judge", Code: "JUDG" },
    { Description: "Juvenille", Code: "JUVN" },
    { Description: "Laboratory Technician", Code: "LABT" },
    { Description: "Labourer", Code: "LABR" },
    { Description: "Lecturer", Code: "LCTR" },
    { Description: "Machine Operators", Code: "MOPR" },
    { Description: "Machinist", Code: "MACH" },
    { Description: "Maintenance Engineer", Code: "MAIN" },
    { Description: "Manager", Code: "MGR" },
    { Description: "Marine Engineer", Code: "MARE" },
    { Description: "Mariner", Code: "MARI" },
    { Description: "Marketing Executive", Code: "MKTG" },
    { Description: "Mason/ Plasterer", Code: "MASN" },
    { Description: "Mechanic", Code: "MECH" },
    { Description: "Mechanical Engineer", Code: "MEEN" },
    { Description: "Milkman", Code: "MILK" },
    { Description: "Miner", Code: "MINR" },
    { Description: "Mining Engineer", Code: "MINE" },
    { Description: "Musician/ Singer", Code: "MUSI" },
    { Description: "Navy", Code: "NAVY" },
    { Description: "Nurse", Code: "NURS" },
    { Description: "Officer", Code: "OFFR" },
    { Description: "Oil Refinery Worker", Code: "OILW" },
    { Description: "Other Occupation", Code: "OTHR" },
    { Description: "Painter", Code: "PAIN" },
    { Description: "Pathologist", Code: "PATH" },
    { Description: "Pensioner", Code: "PENS" },
    { Description: "Peon", Code: "PEON" },
    { Description: "Pharmacist", Code: "PHAR" },
    { Description: "Pilot", Code: "PLOT" },
    { Description: "Plant Technician", Code: "PLTE" },
    { Description: "Plumber", Code: "PLUM" },
    { Description: "Police / Constable", Code: "POLM" },
    { Description: "Politician", Code: "PLTN" },
    { Description: "Postman", Code: "POST" },
    { Description: "Power Plant Operator", Code: "PWRO" },
    { Description: "Priest", Code: "PRST" },
    { Description: "Principal", Code: "PRPL" },
    { Description: "Private Job", Code: "PVJB" },
    { Description: "Production Engineer", Code: "PRDE" },
    { Description: "Professional", Code: "PRFS" },
    { Description: "Professor", Code: "PROF" },
    { Description: "Radio & TV Technician", Code: "RTEC" },
    { Description: "Radiologist", Code: "RADO" },
    { Description: "Radiotherapist", Code: "RTHE" },
    { Description: "Receptionist", Code: "RECP" },
    { Description: "Reporter", Code: "RPTR" },
    { Description: "Retired", Code: "RETR" },
    { Description: "Rigger", Code: "RIGR" },
    { Description: "Salesmen", Code: "SALE" },
    { Description: "Sanitary Inspector", Code: "SANI" },
    { Description: "Scientist", Code: "SCIE" },
    { Description: "Seaman/Sailor", Code: "SAIL" },
    { Description: "Secretary", Code: "SECR" },
    { Description: "Security Guard", Code: "SECG" },
    { Description: "Self Employed", Code: "SEEM" },
    { Description: "Servant", Code: "SERV" },
    { Description: "Service", Code: "SVCM" },
    { Description: "Shipping Clerk", Code: "SHCL" },
    { Description: "Shipyard Worker", Code: "SHIP" },
    { Description: "Site Foreman", Code: "STFM" },
    { Description: "Site Operation Technologist", Code: "SOPT" },
    { Description: "Social Worker", Code: "SOCI" },
    { Description: "Sports Person", Code: "SPOT" },
    { Description: "Stenographer", Code: "STNP" },
    { Description: "Student", Code: "STUD" },
    { Description: "Student", Code: "STDN" },
    { Description: "Stunt performer", Code: "STUN" },
    { Description: "Supervisor", Code: "SUPV" },
    { Description: "Sweeper", Code: "SWEP" },
    { Description: "Tailor", Code: "TAIL" },
    { Description: "Teacher", Code: "TEAC" },
    { Description: "Technician", Code: "TECH" },
    { Description: "Traffic Police", Code: "TFPO" },
    { Description: "Train Driver", Code: "MRTC" },
    { Description: "Tutor", Code: "TUTO" },
    { Description: "Underwriter", Code: "UNDA" },
    { Description: "Unemployed", Code: "UNEM" },
    { Description: "UBER", Code: "UBER" },
    { Description: "Welder", Code: "WELD" },
    { Description: "Wireman", Code: "WIRE" },
    { Description: "Wood Cutter", Code: "WOCU" },
    { Description: "Writer", Code: "WRIT" },
    { Description: "X-Ray Technician", Code: "XRAY" },
  ];
  nomineeRealtionMaster = [
    { Description: "Agent/Broker", Code: "AGNT" },
    { Description: "Aunty", Code: "AUNT" },
    { Description: "Brother", Code: "BROT" },
    { Description: "Business", Code: "BUSI" },
    { Description: "Carrier", Code: "CRER" },
    { Description: "Child", Code: "CHLD" },
    { Description: "Cleaner", Code: "CLNR" },
    { Description: "Consignee", Code: "CNSE" },
    { Description: "Consignor", Code: "CNSR" },
    { Description: "Corporate Subsidiary", Code: "SUB" },
    { Description: "Cousin", Code: "COUS" },
    { Description: "Daughter", Code: "DAUG" },
    { Description: "Daughter in law", Code: "DAIN" },
    { Description: "Employee", Code: "SEE" },
    { Description: "Employee", Code: "EEE" },
    { Description: "Employer", Code: "EER" },
    { Description: "Family", Code: "FAMI" },
    { Description: "Father", Code: "FATH" },
    { Description: "Friend", Code: "FRND" },
    { Description: "FG", Code: "FGGI" },
    { Description: "Grandchild", Code: "GRCH" },
    { Description: "Grandfather", Code: "GRFA" },
    { Description: "Grandmother", Code: "GRMO" },
    { Description: "GrandParent", Code: "GRPA" },
    { Description: "Great Grandchild (Generic)", Code: "GRGC" },
    { Description: "Great GrandParent", Code: "GRGP" },
    { Description: "Helper", Code: "HELP" },
    { Description: "Holding Company (Corporation)", Code: "CORP" },
    { Description: "Husband", Code: "HUSB" },
    { Description: "Legal Executor", Code: "EXEC" },
    { Description: "Legal Guardian", Code: "GUAR" },
    { Description: "Legal Heir n", Code: "HEIR" },
    { Description: "Main Driver", Code: "MDRV" },
    { Description: "Mother", Code: "MOTH" },
    { Description: "Neighbor", Code: "NEIG" },
    { Description: "NONE", Code: "NONE" },
    { Description: "Others", Code: "OTHE" },
    { Description: "Owner", Code: "OWNE" },
    { Description: "Parent", Code: "PARE" },
    { Description: "Partner", Code: "PART" },
    { Description: "Primary Insured", Code: "SELF" },
    { Description: "Self Employed", Code: "SLEM" },
    { Description: "Servant", Code: "SERV" },
    { Description: "Sibling", Code: "SIB" },
    { Description: "Sister", Code: "SIST" },
    { Description: "Son", Code: "SON" },
    { Description: "Spouse", Code: "SPOU" },
    { Description: "SELF", Code: "INJU" },
    { Description: "Uncle", Code: "UNCL" },
    { Description: "Wife", Code: "WIFE" },
    { Description: "Workshop", Code: "WKSH" },
  ];
  disableSelect = false;
  disfirstName = false;
  loginFlag = "";
  branchList = [];
  receiptList = [];
  checkedValue: any;
  showReceipt = false;
  totalRA = 0;
  multipleReceipt = [];
  payerid = "";
  instrumentdate = "";
  duplicateNameFalg = false;
  checkReceiptAmt = false;
  receiptusername = "";
  receiptvendorname = "";
  bankName = "";
  onlyUCO = true;
  BRKGB = true;
  PGB = true;
  HPSCB = true;
  PBGB = true;
  PUPGB=true;
  VKGB=true;
  HPG = true;
  TPUC = true;
  verfyilagf = false;
  ckycflag = false;
  ckycref = false;
  DistanceWaterbodyCode: string;
  BasementCode: string;
  GoodHouseCode: string;
  ElectricalCode: string;
  ClaimsExpCode: string;
  roundClockCode: string;
  constructor(
    private api: CommonService,
    private elementRef: ElementRef,
    private activeR: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentID = this.api.decy(this.activeR.snapshot.paramMap.get("id"));
    console.log(this.currentID);
    this.currentStatus = this.activeR.snapshot.paramMap.get("status");
    console.log(this.currentStatus);
    this.quoteGeneraion = new FormGroup({
      bankName: new FormControl("", Validators.required),
      createdBy: new FormControl("", Validators.required),
      branchName: new FormControl("", Validators.required),
      bankBranch: new FormControl("", Validators.required),
      fgBrachCode1: new FormControl("", Validators.required),
      tranType: new FormControl("", Validators.required),
      coverType: new FormControl("GLL", Validators.required),
      customerType: new FormControl("I", Validators.required),
      salutation: new FormControl("", Validators.required),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      contactNo: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      AltcontactNo: new FormControl("", null),
      Altemail: new FormControl("", null),
      bankStaffID: new FormControl("", null),
      bankCustID: new FormControl("", null),
      FGStafID: new FormControl("", Validators.required),
      customerAcNo: new FormControl("", null),
      financInterest: new FormControl("", null),
      loanAcNo: new FormControl("", null),
      bankRefNo: new FormControl("", null),
      imdGeneral: new FormControl("", null),
      pincode: new FormControl("", Validators.required),
      // for ckyc
      fullname: new FormControl("", null),
      idnum: new FormControl("", null),
      proposal: new FormControl("", null),
      dobDate: new FormControl("", null),
      idtype: new FormControl("", null),
      gender: new FormControl("", null),
      spCode: new FormControl("", Validators.required),
      polTenure: new FormControl("", Validators.required),
      riskDate: new FormControl("", Validators.required),
      riskEndDate: new FormControl("", Validators.required),
      bancaSegement: new FormControl("", Validators.required),
      buildingAge: new FormControl("0", null),
      constructDetails: new FormControl("0", null),
      Floorsofbuild: new FormControl("0", null),
      roundTheClock: new FormControl("0", null),
      loadingDisc: new FormControl("", null),
      commercialoding: new FormControl("", null),
      DistanceWaterbody: new FormControl("0", null),
      BasementStorage: new FormControl("0", null),
      GoodHousekeeping: new FormControl("0", null),
      ElectricalInstall: new FormControl("0", null),
      FireBrigade: new FormControl("0", null),
      ClaimsExperience: new FormControl("0", null),
      paymentMethod: new FormControl("", null),
      polInsName: new FormControl(""),
      polNumber: new FormControl(""),
      policyExpDate: new FormControl(""),
      insName: new FormControl("", null),
      insDate: new FormControl("", null),
      insGender: new FormControl("", null),
      insOccupation: new FormControl("", null),
      insNominee: new FormControl("", null),
      insNomineeRel: new FormControl("", null),
      insNomineeDate: new FormControl("", null),
      spouseName: new FormControl("", null),
      spouseDate: new FormControl("", null),
      spouseGender: new FormControl("", null),
      spouseOccupation: new FormControl("", null),
      spouseNominee: new FormControl("", null),
      spouseNomineeRel: new FormControl("", null),
      spouseNomineeDate: new FormControl("", null),
      add1: new FormControl("", null),
      add2: new FormControl("", null),
      add3: new FormControl("", null),
      city: new FormControl("", null),
      landmark: new FormControl("", null),
      state: new FormControl("", null),
      country: new FormControl("", null),
      comadd1: new FormControl("", null),
      comadd2: new FormControl("", null),
      comadd3: new FormControl("", null),
      comcity: new FormControl("", null),
      comlandmark: new FormControl("", null),
      comstate: new FormControl("", null),
      comcountry: new FormControl("", null),
      panNo: new FormControl("", null),
      GSTNo: new FormControl("", null),
      buildingCode: new FormControl("", null),
      fireBuilding: new FormControl(null, null),
      fireBuildingPre: new FormControl(0, null),
      fireContent: new FormControl(null, null),
      ckycno: new FormControl(null, null),
      fireContentP: new FormControl(0, null),
      stockSel: new FormControl("", null),
      discount: new FormControl(0, null),
      loading: new FormControl(0, null),
      longTermTerrorism: new FormControl("", null),
      longTermTerrSum: new FormControl(null, null),
      coverContentSum: new FormControl(null, null),
      coverContentPre: new FormControl(0, null),
      PASelfSum: new FormControl(null, null),
      PASelfPre: new FormControl(0, null),
      PASpouseSum: new FormControl(null, null),
      PASpousePre: new FormControl(0, null),
      longTermTerrPre: new FormControl(0, null),
      noOfEmp: new FormControl(null, null),
      insuredAge: new FormControl(null, null),
      nomineeName: new FormControl(null, null),
      nomineeRel: new FormControl("", null),
      STFISel: new FormControl("YES", null),
      EQFlag: new FormControl(null, null),
      winNo: new FormControl("", null),
      applNo: new FormControl("", null),
      printFlag: new FormControl("N", ),
      totalPremium: new FormControl(0, null),
      PAFlag: new FormControl(null, null),
      eqMain: new FormControl(false),
      buildMain: new FormControl(false),
      fireContentsMain: new FormControl(false),
      terrorismMain: new FormControl(false),
      coverContent: new FormControl(false),
      PASelfMain: new FormControl(false),
      PASpouseMain: new FormControl(false),
    });
    let myPastDat = new Date(this.maximumRiskD);
    myPastDat.setDate(myPastDat.getDate() - 30);
    this.maximumRiskD = new Date(myPastDat);
    this.initFormSection();
    this.addAnnexureForm();

    let sessionData = this.api.decy(sessionStorage.getItem("userDetails"));
    this.loginFlag = sessionData[0].loginFlag;
    this.receiptusername = sessionData[0].receiptusername;
    this.receiptvendorname = sessionData[0].receiptvendorname;
    this.bankName = sessionData[0].bankname;
    if (
      this.bankName == "BOI" ||
      this.bankName == "GBC" ||
      this.bankName == "BOM" ||
      this.bankName == "SHGB"
    ) {
      // || this.bankName == "HPG" || this.bankName == "PGB" || this.bankName == "TPUC"
      this.onlyUCO = false;
      this.BRKGB = false;
      this.PGB = false;
      this.HPG = false;
      this.TPUC = false;
      this.HPSCB = false;
      this.PBGB = false;
      this.PUPGB=false;
      this.VKGB=false;
    }
    if (this.loginFlag == "2" || this.loginFlag == "3") {
      this.branchList = sessionData;
      this.quoteGeneraion.removeControl("bankStaffID");
      this.quoteGeneraion.addControl("bankStaffID", new FormControl("", null));
      this.quoteGeneraion.removeControl("bankCustID");
      this.quoteGeneraion.addControl("bankCustID", new FormControl("", null));
    } else {
      this.branchName = sessionData[0].BRANCH_NAME;
      this.branchCode = sessionData[0].SOL_ID;
      this.fgBrachCode = sessionData[0].FGBranchCode;
      this.userName = sessionData[0].UserId;
      this.agentCode = sessionData[0].AgentCode;
      this.fgiBRCode = sessionData[0].FGI_BR_CODE;
      this.spCode = sessionData[0].SPCode;
      this.bankName = sessionData[0].bankname;
      console.log(this.bankName);
    }
    this.tenureList = this.range(2, 10);
    this.quoteGeneraion.patchValue({
      polTenure: 2,
    });
    this.setFormVal("spCode", this.spCode);
    this.quoteGeneraion.patchValue({
      branchName: this.branchCode
        ? this.branchCode + " - " + this.branchName
        : "",
      createdBy: this.userName,
      fgBrachCode1: this.fgBrachCode,
      bankBranch: this.fgiBRCode,
      bankName: this.bankName,
    });
    if (this.currentID != "" && typeof this.currentID != "undefined") {
      let id = decodeURIComponent(this.currentID);
      this.loading = true;
      let o = { id: id };
      this.api.getQuoteDetails(o).subscribe(
        (sus) => {
          if (sus.ResponseFlag == 1) {
            let res = JSON.parse(sus.ResponseMessage)["Table"];
            let allData = JSON.parse(res[0].allData);
            let annexData = JSON.parse(res[0].annexureData);
            this.payerid = res[0].payerID;

            this.addressFlag = false;
            // console.log(allData.ckycno);
            // if (allData.ckycno != null || allData.ckycref != null) {
            //   this.verfyilagf = true;
            //   this.disableckyc = true;
            //   this.ckycref = false;
            //   this.ckycflag = false;
            // } else {
            //   this.verfyilagf = false;
            //   this.disableckyc = false;
            //   this.ckycref = true;
            //   this.ckycflag = true;
            // }
            this.quoteGeneraion.patchValue(res[0]);
            if (this.loginFlag == "2" || this.loginFlag == "3") {
              console.log(allData);
              var isPresent = sessionData.find(function (el) {
                return el.SOL_ID === allData.branchName.split(" - ")[0];
              });
              if (isPresent) {
                this.setSpCode(isPresent);
              }
            }
            setTimeout(() => {
              this.quoteGeneraion.patchValue(allData);
            }, 100);
            // if (
            //   this.bankName == "BOI" ||
            //   this.bankName == "GBC" ||
            //   this.bankName == "BOM" ||
            //   this.bankName == "SHGB" ||
            //   this.bankName == "HPG" ||
            //   this.bankName == "PGB" ||
            //   this.bankName == "TPUC" ||
            //   this.bankName == "PBGB" ||
            //   this.bankName == "HPSCB"
            // ) {
            //   this.loadingDisc = 30;
            // } else {
            this.loadingDisc =
              Number(allData.buildingAge) +
              Number(allData.constructDetails) +
              Number(allData.Floorsofbuild) +
              Number(allData.ClaimsExperience) +
              Number(allData.FireBrigade) +
              Number(allData.ElectricalInstall) +
              Number(allData.BasementStorage) +
              Number(allData.GoodHousekeeping) +
              Number(allData.DistanceWaterbody) +
              Number(allData.roundTheClock);
            // }
            this.quoteNo = res[0].quoteNo;
            this.trnID = res[0].trnID;
            console.log(this.trnID);
            this.totalFirSum = allData.fireBuilding + allData.fireContent;
            allData.coverContent
              ? this.setAnnexureWithValue(
                "Cover for Valuable Contents",
                allData.coverContentSum
              )
              : "";
            if (annexData) {
              if (annexData.length > 1) {
                annexData.forEach((item, key) => {
                  if (key >= 1) {
                    const control = <FormArray>(
                      this.annexureForm.get("detailSections")
                    );
                    control.push(this.initForm());
                  }
                  const arr = <FormArray>(
                    this.annexureForm.controls.detailSections
                  );
                  arr.controls[key].patchValue(item);
                });
              } else {
                const arr = <FormArray>(
                  this.annexureForm.controls.detailSections
                );
                arr.controls[0].patchValue(annexData[0]);
              }
            }
            this.disableSelect = true;
            setTimeout(() => {
              $(".coverForm input").prop("disabled", true);
              $(".fw > mat-checkbox, .one > mat-checkbox").addClass("disable");
            }, 500);
            this.issueQuoteFlag = false;
            if (this.userName == res[0].createdBy) {
              if (this.loginFlag == "2" || this.loginFlag == "3") {
                this.makePaymentFlag = true;
                this.paymentOptReq = true;
              } else {
                this.updateQuoteFlag = true;
              }
            } else {
              this.updateQuoteFlag = false;
              if (this.currentStatus != "C") {
                this.makePaymentFlag = true;
              }
              if (this.currentStatus != "C") {
                this.paymentOptReq = true;
              } else {
                this.paymentOptReq = false;
                this.quoteGeneraion.disable();
                this.annexureForm.disable();
              }
              if (this.loginFlag == "2" || this.loginFlag == "3") {
                this.quoteGeneraion.disable();
                this.annexureForm.disable();
              } else {
                this.annexureForm.disable();
              }
              setTimeout(() => {
                $(".communicationAdd mat-checkbox").addClass("disable");
                $(".hrefWrap,.removeFile").hide();
              }, 500);
              var d = new Date();
              d.setFullYear(d.getFullYear() - 1, d.getMonth());
              console.log(d);
              this.maximumDOB = d;
              this.maximumRiskD = d;
            }
            this.checkCalc = false;
            this.showQuote = true;
            this.validateAdd();
            this.netPremium = parseFloat(res[0].totalPremium);
            let disLoad = 0;
            let netLocal = this.netPremium;
            if (allData.discount > 0) {
              disLoad = (this.netPremium * allData.discount) / 100;
            } else {
              disLoad = (netLocal * allData.loading) / 100;
            }
            this.discountLoad =
              (allData.discount > 0 ? "-" : "+") + String(disLoad);
            // this.gst = parseFloat((this.netPremium * 18 / 100).toFixed(2));
            // this.totalPre = this.netPremium + this.gst;
            // this.totalPre = parseFloat(this.totalPre.toFixed(2));
            this.gst = parseFloat(((netLocal * 18) / 100).toFixed(2));
            this.totalPre = netLocal + this.gst;
            this.totalPre = Math.round(this.totalPre);
            this.getDetails(res[0].pincode);
          }
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    }
    this.setDiscount();
  }

  changeCustomerType(e) {
    let val = e.value;
    if (val == "C") {
      this.salutationList = [
        {
          name: "M/S",
          value: "Ms",
        },
      ];
      this.isCompany = true;
      this.quoteGeneraion.get("lastName").setValidators(null);
      this.quoteGeneraion.get("lastName").setErrors(null);
    } else {
      this.salutationList = [
        {
          name: "Mr",
          value: "Mr",
        },
        {
          name: "Miss",
          value: "Miss",
        },
        {
          name: "Mrs",
          value: "Mrs",
        },
      ];
      this.isCompany = false;
      this.quoteGeneraion.addControl(
        "lastName",
        new FormControl("", Validators.required)
      );
    }
  }
  getSections(annexureForm) {
    return annexureForm.controls.detailSections.controls;
  }
  get CD() {
    return this.quoteGeneraion.controls;
  }
  get Ane() {
    return <FormArray>this.annexureForm.get("detailSections");
  }
  contactNo(data) {
    if (data.length != 10) {
      alert("Please Enter 10 digit only");
      this.setFormVal("contactNo", null);
    }
  }
  anyClaimCall(e) {
    if (e.checked)
      alert(
        "Since claim under the case, not allowed to proceed further. Please contact branch"
      );
  }
  initFormSection() {
    this.annexureForm = new FormGroup({
      detailSections: new FormArray(
        this.detailExpData.map((item) => {
          const group = this.initForm();
          group.patchValue(item);
          return group;
        })
      ),
    });
  }
  initForm() {
    return new FormGroup({
      aneCoverType: new FormControl("", Validators.required),
      itemDesc: new FormControl("", Validators.required),
      make: new FormControl("", Validators.required),
      YearofMFG: new FormControl("", Validators.required),
      sumins: new FormControl("", Validators.required),
    });
  }
  commonCoverChange(e, type) {
    if (!e.checked) {
      //build
      if (type == "B") {
        this.setFormVal("fireBuildingPre", 0);
        this.setFormVal("fireBuilding", 0);
      } else if (type == "C") {
        this.setFormVal("fireContentP", 0);
        this.setFormVal("fireContent", 0);
      }
      this.setTotalFirSum("Y");
    }
  }
  setTotalFirSum(type = "Y") {
    this.totalBasicPremium =
      Number(this.quoteGeneraion.value.fireBuildingPre) +
      Number(this.quoteGeneraion.value.fireContentP);
    this.totalFirSum =
      this.quoteGeneraion.value.fireBuilding +
      this.quoteGeneraion.value.fireContent;
  }
  setPolTenure(val) {
    if (this.quoteGeneraion.value.fireBuilding > 1) {
      if (
        this.quoteGeneraion.value.buildingAge == "" ||
        this.quoteGeneraion.value.constructDetails == "" ||
        this.quoteGeneraion.value.Floorsofbuild == "" ||
        this.quoteGeneraion.value.ClaimsExperience == "" ||
        this.quoteGeneraion.value.FireBrigade == "" ||
        this.quoteGeneraion.value.ElectricalInstall == "" ||
        this.quoteGeneraion.value.BasementStorage == "" ||
        this.quoteGeneraion.value.GoodHousekeeping == "" ||
        this.quoteGeneraion.value.DistanceWaterbody == "" ||
        this.quoteGeneraion.value.roundTheClock == ""
      ) 
      {
        // alert("Please select policy Tenure!");
        // this.quoteGeneraion.patchValue({
        //   fireBuilding: 0,
        //   fireContentP: 0,
        // });
         return false;
      }
    }
    this.setDiscount();
    this.changRiskStart();
  }
  buildIngPre(val, code) {
    this.setTotalFirSum();
    if (
      this.quoteGeneraion.value.buildingAge == "" ||
      this.quoteGeneraion.value.constructDetails == "" ||
      this.quoteGeneraion.value.Floorsofbuild == "" ||
      this.quoteGeneraion.value.ClaimsExperience == "" ||
      this.quoteGeneraion.value.FireBrigade == "" ||
      this.quoteGeneraion.value.ElectricalInstall == "" ||
      this.quoteGeneraion.value.BasementStorage == "" ||
      this.quoteGeneraion.value.GoodHousekeeping == "" ||
      this.quoteGeneraion.value.DistanceWaterbody == "" ||
      this.quoteGeneraion.value.roundTheClock == ""
    ) {
      // alert("Please select all mandatory drop down!");
      // this.quoteGeneraion.patchValue({
      //   fireBuilding: 0,
      // });
      // return false;
    } else {
      let policyten = this.quoteGeneraion.value.polTenure;
      let rateValue =
        policyten == "2"
          ? 0.2561
          : policyten == "3"
            ? 0.38025
            : policyten == "4"
              ? 0.4992
              : policyten == "5"
                ? 0.6175
                : policyten == "6"
                  ? 0.7332
                  : policyten == "7"
                    ? 0.8463
                    : policyten == "8"
                      ? 0.9568
                      : policyten == "9"
                        ? 1.05885
                        : 1.17;

      let longTermBildPre = ((val * rateValue) / 1000) * this.buildDisc;
      this.quoteGeneraion.patchValue({
        fireBuildingPre: longTermBildPre.toFixed(2), //toFixed(2)
      });
      if (val > 0) {
        this.quoteGeneraion.patchValue({
          terrorismMain: true,
        });
        this.setTerrPreDwelling();
      }
    }
    this.quoteGeneraion.patchValue({
      buildingCode: code,
    });
  }
  fireContentPre(val) {
    this.setTotalFirSum();
    let policyten = this.quoteGeneraion.value.polTenure;
    let rateValue =
      policyten == "2"
        ? 0.2561
        : policyten == "3"
          ? 0.38025
          : policyten == "4"
            ? 0.4992
            : policyten == "5"
              ? 0.6175
              : policyten == "6"
                ? 0.7332
                : policyten == "7"
                  ? 0.8463
                  : policyten == "8"
                    ? 0.9568
                    : policyten == "9"
                      ? 1.05885
                      : 1.17;
    let longTermBildPre = ((val * rateValue) / 1000) * this.buildDisc;
    //((val * 0.08) / 1000) * this.yrDiscount * this.buildDisc;
    this.quoteGeneraion.patchValue({
      fireContentP: longTermBildPre.toFixed(2),
    });
    if (val > 0 && this.quoteGeneraion.value.fireBuilding > 0) {
      this.quoteGeneraion.patchValue({
        terrorismMain: true,
      });
      this.setTerrPreDwelling();
    }
  }
  setFormVal(name, value) {
    this.quoteGeneraion.get(name).setValue(value);
  }
  getMandatoryAlert() {
    alert("Please select atleast Building");
  }
  changeCoverType(e) {
    let val = e.value;
    this.tenureList = [];
    this.coverType = val;
    if (val == "SK") {
      this.router.navigate(["fgForm"]);
    } else if (val == "FSL") {
      this.router.navigate(["fsl"]);
    } else if (val == "GLL") {
      this.router.navigate(["gll"]);
    } else if (val == "LTD") {
      this.router.navigate(["fireForm"]);
    }
    else if (val == "FGL") {
      this.router.navigate(["fgl"]);
    }
    if (val == "SFSP") {
      this.router.navigate(["sfsp"]);
    }
  }
  range(start, end) {
    if (start === end) return [start];
    return [start, ...this.range(start + 1, end)];
  }
  changRiskStart() {
    let date = this.quoteGeneraion.value.riskDate;
    if (date) {
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      var c = new Date(
        year + this.quoteGeneraion.value.polTenure,
        Number(month),
        Number(day) - 1
      );
      var endDt =
        c.getFullYear().toString() +
        "-" +
        (c.getMonth() + 1) +
        "-" +
        c.getDate();
      endDt = this.api.getFormattedDate(endDt, "mm/dd/yyyy");
      this.quoteGeneraion.patchValue({
        riskEndDate: endDt,
      });
    }
  }
  calculate() {
    console.log(this.quoteGeneraion.value);
    if (
      Number(this.quoteGeneraion.value.fireContentP) > 1 ||
      Number(this.quoteGeneraion.value.fireBuildingPre) > 1
    ) {
      this.showQuote = true;
      this.netPremium =
        Number(this.quoteGeneraion.value.fireBuildingPre) +
        Number(this.quoteGeneraion.value.fireContentP) +
        Number(this.quoteGeneraion.value.longTermTerrPre) +
        Number(this.quoteGeneraion.value.PASelfPre) +
        Number(this.quoteGeneraion.value.PASpousePre) +
        Number(this.quoteGeneraion.value.coverContentPre);
      console.log(this.netPremium);
      this.netPremium = parseFloat(this.netPremium.toFixed(3));
      let disLoad = 0;
      let netLocal = this.netPremium;
      if (this.quoteGeneraion.value.discount > 0) {
        disLoad = (this.netPremium * this.quoteGeneraion.value.discount) / 100;
        netLocal = this.netPremium - disLoad;
      } else {
        disLoad = (this.netPremium * this.quoteGeneraion.value.loading) / 100;
        netLocal = this.netPremium + disLoad;
      }
      this.discountLoad =
        (this.quoteGeneraion.value.discount > 0 ? "-" : "+") +
        disLoad.toFixed(2);
      // this.gst = parseFloat((this.netPremium * 18 / 100).toFixed(3));
      // this.totalPre = this.netPremium + this.gst;
      // this.totalPre = parseFloat(this.totalPre.toFixed(3));
      this.gst = parseFloat(((netLocal * 18) / 100).toFixed(2));
      this.totalPre = netLocal + this.gst;
      this.totalPre = Math.round(this.totalPre);
      this.checkCalc = false;
      this.quoteGeneraion.patchValue({
        totalPremium: this.netPremium,
      });
      $(".coverForm input").prop("disabled", true);
      this.disfirstName = true;
      this.disableSelect = true;
      $(".fw > mat-checkbox, .one > mat-checkbox").addClass("disable");
      this.quoteGeneraion.get("polTenure").disable();
      this.scrollToBottom();
    } else {
      alert("Please select atleast one Mandatory Cover");
    }
    this.createAnnexueList();
    if (!this.makePaymentFlag) {
      this.issueQuoteFlag = true;
    }
  }
  scrollToBottom() {
    setTimeout(() => {
      window.scroll({
        top: $("body").outerHeight(),
        behavior: "smooth",
      });
    }, 100);
  }
  quote() {
    this.onSubmit = true;
    this.quoteGeneraion.get("polTenure").enable();
    if (this.checkCalc) {
      alert("Please click on calculate button !!");
      return false;
    }
    if (this.quoteGeneraion.status == "VALID") {
      this.loading = true;
      let obj = this.quoteGeneraion.value;
      if (this.isLongDwelling) {
        obj.quoteType = "GL";
      } else {
        obj.quoteType = "FS";
      }
      console.log(this.isLongDwelling);
      obj.allData = JSON.stringify(this.quoteGeneraion.value);
      console.log(obj);
      this.api.saveData(obj).subscribe(
        (sus) => {
          console.log(JSON.parse(sus.ResponseMessage));
          if (sus.ResponseFlag == 1) {
            alert(
              "Quote created : " +
              JSON.parse(sus.ResponseMessage).Table[0].quoteNO +
              " successfully!!!"
            );
            this.quoteNo = JSON.parse(sus.ResponseMessage).Table[0].quoteNO;
            this.addressFlag = false;
            this.loading = false;
            this.issueQuoteFlag = false;
            if (this.loginFlag == "2" || this.loginFlag == "3") {
              this.saveAndPayment = true;
            } else {
              this.saveQuoteDetailsFlag = true;
            }
            this.validateAdd();
            let _ths = this;
            setTimeout(() => {
              _ths.quoteGeneraion.patchValue({
                state: _ths.stateName,
                landmark: _ths.landmarkName,
                country: _ths.country == "IND" ? "India" : "",
                comstate: _ths.stateName,
                comlandmark: _ths.landmarkName,
                comcountry: _ths.country == "IND" ? "India" : "",
              });
            }, 100);
          }
        },
        (err) => {
          console.log(err);
          alert("There is some issue with server please try again later!");
          this.loading = false;
        }
      );
    }
  }
  createAnnexueList() {
    this.annexureWithValue = [];
    let obj = this.quoteGeneraion.value;
    this.setAnnexureWithValue(
      "Cover for Valuable Contents",
      obj.coverContentSum
    );
  }
  updateQuote() {
    let obj = this.quoteGeneraion.value;
    console.log(this.quoteNo);
    obj.id = this.quoteNo;
    obj.AnnexData = JSON.stringify(this.annexureForm.value.detailSections);
    obj.allData = JSON.stringify(this.quoteGeneraion.value);
    if (this.quoteGeneraion.status == "VALID") {
      this.api.updateQuote(obj).subscribe(
        (sus) => {
          console.log(sus);
          if (sus.ResponseFlag == 1) {
            // this.router.navigate(["quote"]);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  saveQuoteDetails() {
    this.updateQuote();
    const arr = <FormArray>this.annexureForm.controls.detailSections;
    if (this.quoteGeneraion.status == "VALID") {
      if (this.annexureWithValue.length > 0 && arr.status != "VALID") {
        alert("Please fill the Annexure Details");
        return false;
      }
      if (this.loginFlag != "1") {
        if (
          this.quoteGeneraion.value.paymentMethod == "" &&
          this.loginFlag != ""
        ) {
          alert("Please choose the payment method");
          return false;
        } else {
          let dt = new Date();
          let rdt = new Date(this.quoteGeneraion.value.riskDate);
          let cdt = dt.setHours(0, 0, 0, 0).toString().trim();
          let crdt = rdt.setHours(0, 0, 0, 0).toString().trim();
          if (this.quoteGeneraion.value.paymentMethod == "S") {
            if (crdt < cdt) {
              alert(
                "Please check your Risk start date it should be today's or future date."
              );
              return false;
            }
          } else {
            let sdt = this.instrumentdate.split("/");
            let insDt = new Date(sdt[1] + "/" + sdt[0] + "/" + sdt[2]);
            let cinsDt = insDt.setHours(0, 0, 0, 0).toString().trim();
            if (crdt < cinsDt) {
              alert(
                "Please change your risk date as per the instrument date - " +
                this.instrumentdate
              );
              return false;
            }
          }
        }
      }
      this.trnID = "FGUBQTXN" + Math.floor(Math.random() * Math.floor(100000));
      let obj1 = {
        allData: JSON.stringify(this.quoteGeneraion.value),
        EmployeeData: null,
        AnnexureData: this.annexureForm.value.detailSections,
        quoteNo: this.quoteNo,
        trnID: this.trnID,
      };
      console.log(obj1);
      if ($("#myFile")[0].files.length > 0) {
        this.loading = true;
        const formData = new FormData();
        formData.append("quoteNo", this.quoteNo);
        if ($("#myFile")[0].files.length > 0) {
          let file = $("#myFile")[0].files[0];
          let name = $("#myFile")[0].files[0].name;
          formData.append("FileByte", file);
          formData.append("FileName", name);
        }
        if ($("#myFile1")[0].files.length > 0) {
          let file = $("#myFile1")[0].files[0];
          let name = $("#myFile1")[0].files[0].name;
          formData.append("FileByte1", file);
          formData.append("FileName1", name);
        }

        this.api.updateData(obj1).subscribe(
          (sus) => {
            if (
              $("#myFile1")[0].files.length > 0 ||
              $("#myFile")[0].files.length > 0
            ) {
              this.api.uploadDoc(formData).subscribe(
                (res) => {
                  if (this.loginFlag == "1") {
                    this.router.navigate(["quote"]);
                  } else {
                    this.payment();
                  }
                },
                (err) => {
                  if (
                    err.error["text"] == "Done" ||
                    err.error["text"] == "Success"
                  ) {
                    if (this.loginFlag == "1") {
                      this.router.navigate(["quote"]);
                    } else {
                      this.payment();
                    }
                  }
                }
              );
            } else {
              if (this.loginFlag == "1") {
                this.router.navigate(["quote"]);
              } else {
                this.payment();
              }
            }
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.api.updateData(obj1).subscribe(
          (sus) => {
            const formData = new FormData();
            if (
              $("#myFile1")[0].files.length > 0 ||
              $("#myFile")[0].files.length > 0
            ) {
              this.api.uploadDoc(formData).subscribe(
                (res) => {
                  if (this.loginFlag == "1") {
                    this.router.navigate(["quote"]);
                  } else {
                    this.payment();
                  }
                },
                (err) => {
                  if (
                    err.error["text"] == "Done" ||
                    err.error["text"] == "Success"
                  ) {
                    if (this.loginFlag == "1") {
                      this.router.navigate(["quote"]);
                    } else {
                      this.payment();
                    }
                  }
                }
              );
            } else {
              if (this.loginFlag == "1") {
                this.router.navigate(["quote"]);
              } else {
                this.payment();
              }
            }
          },
          (err) => {
            console.log(err);
          }
        );
      }
      // else {
      //   alert("Please upload Proposal Form to continue!");
      // }
    }
  }

  // aryaApiCall() {
  //   // alert("hi");
  //   // var obj = {
  //   //   proposal_id: quoteNo,
  //   // };
  //   // console.warn(obj);
  //   this.api.getCkyctoken(obj).subscribe((success) => {
  //     debugger;
  //     console.log(success);
  //     console.log(success.token);
  //     if (success.token && success.token != "") {
  //       console.warn(success.token);
  //       var obj = {
  //         pan: "",
  //         dob: "",
  //       };
  //       alert("SKD Called Successful !");
  //       //debugger;
  //       AJL.aryafns.initMod(
  //         sus.token,
  //         "QUOTE1234567",
  //         obj,
  //         (data) => {
  //           debugger;
  //           // var str = success.token.concat(quoteNo.toString());
  //           console.warn(data);
  //         },
  //         (error) => {
  //           alert("Arya.Ai token creation failed !");
  //           console.error(error);
  //         }
  //       );
  //     // }
  //   };

  verifyckyc() {
    if (this.quoteGeneraion.status == "VALID") {
      this.loading = true;
      //  this.updateQuote();
      let obj = {};

      this.api.getCkyctoken(obj).subscribe(
        (sus) => {
          this.quoteGeneraion.patchValue({
            proposal: sus.ProposalNo,
          });
          console.log(sus);
          console.log(sus[0].Token);
          var cto = sus[0].Token;
          let dt = new Date(sus.dobDate);
          var pid = sus[0].ProposalNo;
          console.log(dt);
          if (sus.token != "") {
            let obj = this.quoteGeneraion.value;
            obj.req_id = this.quoteNo;
            console.log(this.quoteNo);
            obj.proposal_id = pid;
            obj.full_name = this.quoteGeneraion.value.fullname;
            obj.customer_type = this.quoteGeneraion.value.customerType;
            obj.gender = this.quoteGeneraion.value.gender;
            var ds = new Date(
              this.quoteGeneraion.value.dobDate
            ).toLocaleDateString("en-CA");
            var ds1 = new Date(ds)
              .toLocaleDateString("pt-br")
              .split("/")
              .join("-");
            obj.dob = ds1;
            obj.id_type = this.quoteGeneraion.value.idtype;
            obj.id_num = this.quoteGeneraion.value.idnum;
            // var pid=sus.ProposalNo;

            console.log(pid);
            this.api.createCKYC(obj).subscribe(
              (sus) => {
                console.log(sus);
                if (sus.ckyc_remarks == "OK") {
                  console.log(sus.result.ckyc_number);
                  this.ckycref = true;
                  this.ckycflag = true;
                  this.quoteGeneraion.patchValue({
                    ckycno: sus.result.ckyc_number,
                    fullname: sus.result.customer_name,
                    dobdate: sus.result.dob,
                    // idtype: sus.result.id_type,
                    firstName:
                      sus.result.first_name +
                      " " +
                      (sus.result.middle_name == null
                        ? ""
                        : sus.result.middle_name),
                    lastName: sus.result.last_name,
                    idnum: sus.result.id_num,
                    proposal: "",
                  });
                  this.loading = false;
                  alert("CKYC Status : verified!");
                  this.verfyilagf = true;
                  this.disableckyc = true;
                  this.ckycname = true;
                  // $(".coverForm input").prop("disabled", false);
                  let text =
                    "On Click of OK, you are agreeing to issue the policy with CKYC name Please confirm ? \n" +
                    sus.result.customer_name;
                  if (confirm(text) == true) {
                    $(".coverForm input").prop("disabled", true);
                  } else {
                    $(".coverForm input").prop("disabled", false);
                  }
                  // this.updateQuote();
                } else {
                  this.loading = false;
                  alert("CKYC Status : Verification failed!");
                  this.verfyilagf = true;
                  this.disableckyc = true;
                  this.ckycname = true;
                  // var obj = {
                  //   pan: this.quoteGeneraion.value.idnum,
                  //   dob: ds1,
                  // };
                  // console.log(this.quoteNo);
                  // console.log(obj);
                  // AJL.aryafns.initMod(cto, pid, obj, (data) => {
                  //   console.log(data);
                  //   if (
                  //     data.verified == "Success"
                  //   ) {
                  //     alert("CKYC Status: Document Upload Verified!");
                  //     this.ckycref = false;
                  //     this.ckycflag = false;
                  //     this.quoteGeneraion.patchValue({
                  //       ckycno: "",
                  //       // fullname: data.api_result.registered_name,
                  //       proposal: data.proposal_id,
                  //       // idnum: "",
                  //     });
                  //     this.verfyilagf = true;
                  //     this.ckycname = true;
                  //     this.disableckyc = true;
                  //     this.updateQuote();
                  //   } else {
                  //     this.loading = false;
                  //     alert("CKYC Status: Verified failed!");
                  //     this.quoteGeneraion.patchValue({
                  //       ckycno: "",
                  //       fullname: data.api_result.registered_name,
                  //       proposal: "",
                  //       idnum: "",
                  //     });
                  //   }
                  // });
                }
              },
              (err) => {
                console.log(err);
              }
            );
          } else {
            alert("token not found!");
          }
        },
        (err) => {
          console.log("token creation failed");
        }
      );
    }
  }

  getUcoData() {
    this.loading = true;
    this.quoteGeneraion.enable();
    this.annexureForm.enable();
    this.customerName =
      this.quoteGeneraion.value.firstName +
      " " +
      this.quoteGeneraion.value.lastName;
    this.bankCustID = this.quoteGeneraion.value.bankCustID;
    this.AcNo = this.quoteGeneraion.value.customerAcNo;
    let ucoPayment: UCOPaymentModel = new UCOPaymentModel();
    ucoPayment.policy_sub_type = "CAR"; //will be changed
    ucoPayment.cust_relation = "Self";
    ucoPayment.proposal_no = this.quoteNo;
    ucoPayment.rrn_no =
      this.trnID == null
        ? "FGUBQTXN" + Math.floor(Math.random() * Math.floor(100000))
        : this.trnID;
    ucoPayment.premium_amt = String(this.netPremium);
    ucoPayment.gst = String(this.gst);
    ucoPayment.total_amt = String(this.totalPre);
    ucoPayment.sum_assured_amt = String(this.totalFirSum);
    ucoPayment.cust_id = this.bankCustID;
    ucoPayment.acct_holder_name = this.customerName;
    ucoPayment.cust_address =
      this.quoteGeneraion.value.add1 +
      this.quoteGeneraion.value.add2 +
      this.quoteGeneraion.value.add3 +
      this.quoteGeneraion.value.city +
      this.quoteGeneraion.value.landmark +
      this.quoteGeneraion.value.state +
      this.quoteGeneraion.value.country;
    ucoPayment.cust_pan = this.quoteGeneraion.value.panNo;
    ucoPayment.nominee_name = this.quoteGeneraion.value.nomineeRel;
    ucoPayment.email_id = this.quoteGeneraion.value.email;
    ucoPayment.mob_no = this.quoteGeneraion.value.contactNo;
    ucoPayment.acct_no = String(this.AcNo);
    ucoPayment.maker_id = this.branchCode + "_BH";
    ucoPayment.checker_id = this.branchCode + "_ABH";
    //ucoPayment.maker_id = "1870_BH";
    //ucoPayment.checker_id = "1870_ABH";
    ucoPayment.insured_person_name_1 = this.customerName;
    ucoPayment.policy_name = "SHOP";
    ucoPayment.sp_code = this.quoteGeneraion.value.spCode;
    //ucoPayment.sp_code = "SP0071315035";
    this.ridrectToPay = true;
    return ucoPayment;
  }
  getReceiptData(ucoPayment) {
    let receiptData: Receipt = new Receipt();
    receiptData.agentCode = this.agentCode;
    receiptData.branchCode = this.fgBrachCode;
    receiptData.quoteNo = this.quoteNo;
    receiptData.amount = ucoPayment.total_amt;
    receiptData.uid = ucoPayment.policy_ref_no.trim(); //transaction Id
    receiptData.fgTranNo = ucoPayment.rrn_no;
    receiptData.receiptusername = this.receiptusername;
    receiptData.receiptvendorname = this.receiptvendorname;
    return receiptData;
  }
  createClient(receiptData, ucoPayment) {
    this.loading = true;
    let obj = this.quoteGeneraion.value;
    obj.quoteNo = this.quoteNo;
    obj.CKYCNo = this.quoteGeneraion.ckycno;
    obj.CKYCRefNo = this.quoteGeneraion.value.proposal;
    var ds = new Date(this.quoteGeneraion.value.dobDate).toLocaleDateString(
      "en-CA"
    );
    var ds1 = new Date(ds).toLocaleDateString("pt-br").split("/").join("-");
    obj.DOB = ds1;
    obj.state = this.stateName;
    obj.country = this.country;
    obj.agentCode = this.agentCode;
    obj.branchCode = this.fgBrachCode;
    obj.receiptvendorname = this.receiptvendorname;
    obj.gender = this.quoteGeneraion.value.salutation == "Mr" ? "M" : "F";
    this.api.createClient(obj).subscribe((sus) => {
      if (sus.ResponseFlag == 1) {
        let data = JSON.parse(sus.ResponseMessage).Client[0];
        if (data.Status == "Successful") {
          this.fgClientId = data.ClientId;
          receiptData.ClientId = this.fgClientId;
          if (this.payerid) {
            for (let i = 0; i < this.multipleReceipt.length; i++) {
              this.fgReceiptNo += this.multipleReceipt[i];
            }
            this.updateRctPayerID();
            this.generatePDF(ucoPayment);
          } else {
            this.callReceipt(receiptData, ucoPayment);
          }
        } else {
          this.loading = false;
          alert(data.ErrorMessage);
          return;
        }
      } else {
        this.loading = false;
        let data = JSON.parse(sus.ResponseMessage).Client[0];
        alert(data.ErrorMessage);
        return;
      }
    });
  }
  updateRctPayerID() {
    let obj = {
      receiptNo: this.fgReceiptNo,
      payerID: this.payerid,
      currentStatus: "R",
      quoteNo: this.quoteNo,
    };
    this.api.updateReceiptAndPayerID(obj).subscribe(
      (sus) => {
        console.log(sus);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  callReceipt(receiptData, ucoPayment) {
    this.api.getReceipt(receiptData).subscribe((sus) => {
      this.loading = false;
      if (sus.ResponseFlag == 1) {
        let data = JSON.parse(sus.ResponseMessage).Receipt[0];
        if (data.Status == "Successful") {
          this.fgReceiptNo = data.ReceiptNo;
          let flag = this.generatePDF(ucoPayment);
          console.log(flag);
        } else {
          alert("Error in generating receipt!");
          return;
        }
      }
    });
  }
  payment() {
    this.updateQuote();
    if (this.quoteGeneraion.status == "VALID") {
      let ucoPayment: UCOPaymentModel = new UCOPaymentModel();
      ucoPayment = this.getUcoData();
      let obj = {
        aduserid: "kkhunt",
        systemname: "PASIA",
        policytype: "NB",
        vendorname: "UCO",
      };
      this.api.generateWinNo(obj).subscribe(
        (sus) => {
          this.loading = true;
          if (sus.ResponseFlag == "1") {
            this.quoteGeneraion.patchValue({
              winNo: JSON.parse(sus.ResponseMessage)["Table"][0].winnumber,
              applNo: JSON.parse(sus.ResponseMessage)["Table"][0]
                .applicationnumber,
            });
            if (this.currentStatus) {
              let tran: any = this.activeR.snapshot.paramMap.get("transData");
              console.log(tran);
              tran = tran.split("|");
              this.loading = true;
              //.policy_ref_no = tran[0]+Math.floor(Math.random() * 100000);  // For UAT
              ucoPayment.policy_ref_no = tran[0];
              let receiptData: Receipt = new Receipt();
              this.fgClientId = tran[3]; //this.fgiBRCode
              receiptData = this.getReceiptData(ucoPayment);
              let transDate = tran[1];
              this.showRedirectMsg = false;
              if (transDate) {
                receiptData.tranDate = this.api.getFormattedSaveDate(
                  new Date()
                ); //transDate; //"28-12-2020"// transDate; //.replace("-","/");
                receiptData.tranRefDate = transDate;
              }
              if (this.currentStatus == "P") {
                this.createClient(receiptData, ucoPayment);
              } else if (this.currentStatus == "I") {
                receiptData.clientId = tran[3]; //this.fgiBRCode;
                this.callReceipt(receiptData, ucoPayment);
              } else if (this.currentStatus == "R") {
                this.fgReceiptNo = tran[2];
                this.generatePDF(ucoPayment);
              } else if (this.currentStatus == "D") {
                this.updateUcoPolicy(ucoPayment);
              }
            } else {
              if (this.payerid) {
                let receiptData: Receipt = new Receipt();
                this.createClient(receiptData, ucoPayment);
                this.showRedirectMsg = false;
              } else {
                this.api.ucoPayment(ucoPayment, "P").subscribe((sus) => {
                  let response = sus.split("|");
                  this.loading = false;
                  this.showRedirectMsg = false;
                  if (response.length == 0) {
                    alert("Something Went Wrong!!");
                    return;
                  }
                  if (response[0] == "S") {
                    this.loading = true;
                    //ucoPayment.policy_ref_no = response[2]+Math.floor(Math.random() * 100000); // For UAT
                    ucoPayment.policy_ref_no = response[2];
                    let receiptData: Receipt = new Receipt();
                    receiptData = this.getReceiptData(ucoPayment);
                    let transDate = response[3];
                    if (transDate) {
                      receiptData.tranDate = this.api.getFormattedSaveDate(
                        new Date()
                      ); //transDate; //.replace("-","/");
                    }
                    this.createClient(receiptData, ucoPayment);
                  } else {
                    this.ridrectToPay = false;
                    //this.quoteGeneraion.disable();
                    alert(response[1]);
                  }
                });
              }
            }
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  modify() {
    this.checkCalc = true;
    $(".coverForm input").prop("disabled", false);
    this.disableSelect = false;
    $(".fw > mat-checkbox, .one > mat-checkbox").removeClass("disable");
    this.quoteGeneraion.get("polTenure").enable();
    this.issueQuoteFlag = false;
    if (this.makePaymentFlag) {
      this.makePaymentFlagModify = true;
      this.makePaymentFlag = false;
    }
  }
  generatePDF(ucoPayment) {
    this.loading = true;
    var date = new Date(this.quoteGeneraion.value.riskDate);
    var month = String(date.getMonth() + 1);
    month = month.length == 1 ? "0" + month : month;
    var day = String(date.getDate());
    day = day.length == 1 ? "0" + day : day;
    var year = date.getFullYear();
    var startDt = String(year) + month + day;
    var endDt = this.quoteGeneraion.value.riskEndDate.split("/");
    endDt = endDt[2] + endDt[0] + endDt[1];
    var insDate = new Date(this.quoteGeneraion.value.insDate);
    var monthi = String(insDate.getMonth() + 1);
    monthi = monthi.length == 1 ? "0" + monthi : monthi;
    var dayi = String(insDate.getDate());
    dayi = dayi.length == 1 ? "0" + dayi : dayi;
    var yeari = insDate.getFullYear();
    let insDate1 = String(yeari) + monthi + dayi;
    var spouseDate = new Date(this.quoteGeneraion.value.spouseDate);
    monthi = String(spouseDate.getMonth() + 1);
    monthi = monthi.length == 1 ? "0" + monthi : monthi;
    dayi = String(spouseDate.getDate());
    dayi = dayi.length == 1 ? "0" + dayi : dayi;
    yeari = spouseDate.getFullYear();
    let spouseDate1 = String(yeari) + monthi + dayi;
    console.log(insDate1, spouseDate1);
    let sumIns =
      (this.quoteGeneraion.value.fireBuilding
        ? this.quoteGeneraion.value.fireBuilding
        : 0) +
      (this.quoteGeneraion.value.fireContent
        ? this.quoteGeneraion.value.fireContent
        : 0);
    let obj = this.quoteGeneraion.value;
    obj.clientCode = this.fgClientId; //'40246539';
    obj.startDate = startDt;
    obj.endDate = endDt;
    obj.stateCode = this.stateCode;
    obj.sumInsured = sumIns;
    obj.agentCode = this.agentCode;
    obj.receiptNo = this.fgReceiptNo;
    obj.quoteNo = this.quoteNo;
    obj.bankBranch = this.fgiBRCode;
    obj.bankBranchCode = this.fgBrachCode;
    obj.insDate = insDate1;
    obj.spouseDate = spouseDate1;
    obj.payerID = this.payerid;
    obj.receiptvendorname = this.receiptvendorname;
    obj.ageOfBuildingCode = this.ageOfBuildingCode;
    obj.constructDetCode = this.constructDetCode;
    obj.roundClockCode = this.roundClockCode;
    obj.DistanceWaterbodyCode = this.DistanceWaterbodyCode;
    obj.BasementCode = this.BasementCode;
    obj.GoodHouseCode = this.GoodHouseCode;
    obj.ElectricalCode = this.ElectricalCode;
    obj.FireBrigadCode = this.FireBrigadCode;
    obj.ClaimsExpCode = this.ClaimsExpCode;
    obj.FloorsofCode = this.FloorsofCode;
    if (this.currentZoneNo == 1 || this.currentZoneNo == 2) {
      obj.zone =
        this.industrialType == "Industrial"
          ? "0" + this.currentZoneNo
          : "Z" + this.currentZoneNo;
    } else {
      obj.zone = "0" + this.currentZoneNo;
    }
    if (this.loadingDisc < 0) {
      obj.sign = "+";
      obj.discount = this.loadingDisc.toString().substring(1);
    } else {
      obj.sign = "-";
      obj.discount = this.loadingDisc;
    }
    console.log(obj);
    this.api.generateGLLPolicy(obj).subscribe((sus) => {
      console.log(sus);
      this.loading = false;
      if (sus.ResponseFlag == 1) {
        let res = JSON.parse(sus["ResponseMessage"]).Table;
        this.policyText = "Policy No - ";
        this.policyNo = res[0]["PolicyNumber"];
        if (!ucoPayment.policy_ref_no) {
          res[0] = res[0]["PolicyNumber"];
        }
        ucoPayment.policy_name = res[0]["PremiumClass"];
        if (this.quoteGeneraion.value.paymentMethod == "S") {
          this.updateUcoPolicy(ucoPayment);
        }
        return true;
      } else {
        alert(sus["ResponseMessage"]);
        return false;
      }
    });
  }
  updateUcoPolicy(ucoPayment) {
    this.loading = true;
    this.api.ucoPayment(ucoPayment, "U").subscribe((response) => {
      this.loading = false;
      response = response.split("|");
      console.log(response);
      if (response.length == 0) {
        alert("Something Went Wrong!!");
        return;
      }
      if (response[0] == "S") {
        console.log(response[3]);
        alert("Policy generate successfully!");
        return;
      }
    });
    //console.log(ucoPayment);
  }
  setAddress(evt) {
    if (evt.checked) {
      this.quoteGeneraion.patchValue({
        comadd1: this.quoteGeneraion.value.add1,
        comadd2: this.quoteGeneraion.value.add2,
        comadd3: this.quoteGeneraion.value.add3,
        comcity: this.quoteGeneraion.value.city,
        comlandmark: this.quoteGeneraion.value.landmark,
        comstate: this.quoteGeneraion.value.state,
        comcountry: this.quoteGeneraion.value.country,
      });
    } else {
      this.quoteGeneraion.patchValue({
        comadd1: "",
        comadd2: "",
        comadd3: "",
        comcity: "",
        comlandmark: "",
        comstate: "",
        comcountry: "",
      });
    }
  }
  validateAdd() {
    // for ckyc
    this.quoteGeneraion.removeControl("fullname");
    this.quoteGeneraion.addControl(
      "fullname",
      new FormControl("", Validators.required)
    );
    // this.quoteGeneraion.removeControl("idnum");
    // this.quoteGeneraion.addControl(
    //   "idnum",
    //   new FormControl("", Validators.required)
    // ),
    this.quoteGeneraion.removeControl("dobDate");
    this.quoteGeneraion.addControl(
      "dobDate",
      new FormControl("", Validators.required)
    ),
      this.quoteGeneraion.removeControl("idtype");
    this.quoteGeneraion.addControl(
      "idtype",
      new FormControl("", Validators.required)
    ),
      this.quoteGeneraion.removeControl("idnum");
    this.quoteGeneraion.addControl(
      "idnum",
      new FormControl("", Validators.required)
    ),
      // this.quoteGeneraion.removeControl("proposal");
      // this.quoteGeneraion.addControl(
      //   "proposal",
      //   new FormControl("", Validators.required)
      // ),
      this.quoteGeneraion.removeControl("gender");
    this.quoteGeneraion.addControl(
      "gender",
      new FormControl("", Validators.required)
    ),
      this.quoteGeneraion.removeControl("add1");
    this.quoteGeneraion.addControl(
      "add1",
      new FormControl("", Validators.required)
    );
    this.quoteGeneraion.removeControl("add2");
    this.quoteGeneraion.addControl(
      "add2",
      new FormControl("", Validators.required)
    );
    this.quoteGeneraion.removeControl("city");
    this.quoteGeneraion.addControl(
      "city",
      new FormControl("", Validators.required)
    );
    this.quoteGeneraion.removeControl("landmark");
    this.quoteGeneraion.addControl(
      "landmark",
      new FormControl("", Validators.required)
    );
    this.quoteGeneraion.removeControl("state");
    this.quoteGeneraion.addControl(
      "state",
      new FormControl("", Validators.required)
    );
    this.quoteGeneraion.removeControl("country");
    this.quoteGeneraion.addControl(
      "country",
      new FormControl("", Validators.required)
    );
    this.quoteGeneraion.removeControl("comadd1");
    this.quoteGeneraion.addControl(
      "comadd1",
      new FormControl("", Validators.required)
    );
    this.quoteGeneraion.removeControl("comcity");
    this.quoteGeneraion.addControl(
      "comcity",
      new FormControl("", Validators.required)
    );
    this.quoteGeneraion.removeControl("comlandmark");
    this.quoteGeneraion.addControl(
      "comlandmark",
      new FormControl("", Validators.required)
    );
    this.quoteGeneraion.removeControl("comstate");
    this.quoteGeneraion.addControl(
      "comstate",
      new FormControl("", Validators.required)
    );
    this.quoteGeneraion.removeControl("comcountry");
    this.quoteGeneraion.addControl(
      "comcountry",
      new FormControl("", Validators.required)
    );
    if (this.quoteGeneraion.value.PASelfMain) {
      this.quoteGeneraion.removeControl("insName");
      this.quoteGeneraion.addControl(
        "insName",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("insGender");
      this.quoteGeneraion.addControl(
        "insGender",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("insDate");
      this.quoteGeneraion.addControl(
        "insDate",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("insOccupation");
      this.quoteGeneraion.addControl(
        "insOccupation",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("insNominee");
      this.quoteGeneraion.addControl(
        "insNominee",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("insNomineeRel");
      this.quoteGeneraion.addControl(
        "insNomineeRel",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("insNomineeDate");
      this.quoteGeneraion.addControl(
        "insNomineeDate",
        new FormControl("", Validators.required)
      );
    }
    if (this.quoteGeneraion.value.PASpouseMain) {
      this.quoteGeneraion.removeControl("spouseName");
      this.quoteGeneraion.addControl(
        "spouseName",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("spouseDate");
      this.quoteGeneraion.addControl(
        "spouseDate",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("spouseGender");
      this.quoteGeneraion.addControl(
        "spouseGender",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("spouseOccupation");
      this.quoteGeneraion.addControl(
        "spouseOccupation",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("spouseNominee");
      this.quoteGeneraion.addControl(
        "spouseNominee",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("spouseNomineeRel");
      this.quoteGeneraion.addControl(
        "spouseNomineeRel",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("spouseNomineeDate");
      this.quoteGeneraion.addControl(
        "spouseNomineeDate",
        new FormControl("", Validators.required)
      );
    }
  }
  setAnnexureWithValue(name, val) {
    if (val) {
      this.annexureWithValue.push({ name: name, value: val });
    }
  }
  addAnnexureForm() {
    const control = <FormArray>this.annexureForm.get("detailSections");
    control.push(this.initForm());
  }
  removeAnnexureForm(index) {
    const control = <FormArray>this.annexureForm.get("detailSections");
    control.removeAt(index);
  }
  compareSumIn(i) {
    if (this.annexureForm.value.detailSections[i].aneCoverType != "") {
      let total = 0;
      let currentValue = this.annexureForm.value.detailSections[i].sumins;
      for (let annexure of this.annexureForm.value.detailSections) {
        if (
          annexure.aneCoverType ==
          this.annexureForm.value.detailSections[i].aneCoverType
        ) {
          total = total + annexure.sumins;
        }
      }
      if (
        this.annexureForm.value.detailSections[i].aneCoverType ==
        "Fire & Allied Perils"
      ) {
        if (currentValue > this.totalFirSum || total > this.totalFirSum) {
          this.getCommonAnnexureError(i, this.totalFirSum);
          return;
        }
      } else {
        let annexuredata = this.annexureWithValue.filter((data) => {
          return (
            data.name == this.annexureForm.value.detailSections[i].aneCoverType
          );
        });
        if (annexuredata.length > 0) {
          annexuredata = annexuredata[0];
          if (
            currentValue > annexuredata["value"] ||
            total > annexuredata["value"]
          ) {
            this.getCommonAnnexureError(i, annexuredata["value"]);
            return;
          }
        }
      }
      console.log(
        this.annexureForm.value.detailSections[i].aneCoverType,
        this.totalFirSum
      );
    } else {
      alert("Please select cover type");
      //this.Ane.controls.forEach(group => group.get(this.annexureForm.value.detailSections[i].sumins).reset());
      const arr = <FormArray>this.annexureForm.controls.detailSections;
      arr.controls[i].patchValue({
        sumins: 0,
      });
    }
  }
  getCommonAnnexureError(i, value) {
    alert(`Cover Value Cannot be greater than ${value} `);
    const arr = <FormArray>this.annexureForm.controls.detailSections;
    arr.controls[i].patchValue({
      sumins: 0,
    });
  }
  getDetails(val) {
    this.loading = true;
    let obj = { pincode: val };

    this.api.getStateCode(obj).subscribe(
      (sus) => {
        if (sus.ResponseFlag == 1) {
          let res = JSON.parse(sus["ResponseMessage"]).Table;

          if (res.length) {
            this.stateName = res[0].StateName.replace("&", "And");
            // console.log(this.stateName);
            this.country = res[0].CountryCode;
            this.stateCode = res[0].StateCode;
            this.landmarkName = res[0].LandmarkName;
            this.api
              .getEQZone(res[0].DistrictkName, res[0].StateName)
              .subscribe((sus) => {
                this.loading = false;
                if (sus.ResponseFlag == 1) {
                  let res = JSON.parse(sus["ResponseMessage"]).Table;
                  if (res.length) {
                    this.currentZoneNo = res[0].Zone;
                    this.setEQandZone(this.currentZoneNo, this.industrialType);
                  }
                }
              });
          } else {
            this.quoteGeneraion.controls["pincode"].setValue("");
            alert("Invalid Pin code, Please check!");
          }
        } else {
          alert(sus.ResponseMessage);
          this.loading = false;
        }
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }
  validateMaxMin(e, min, max) {
    let formControlName = e.target.getAttribute("formControlName");
    let selectForm = "";
    let formControlName1 = "";
    if ($(e.target).parent().next().find("select").length > 0) {
      selectForm = $(e.target)
        .parent()
        .next()
        .find("select")
        .attr("formControlName");
      formControlName1 = $(e.target)
        .parent()
        .next()
        .next()
        .find("input")
        .attr("formControlName");
    } else {
      formControlName1 = $(e.target)
        .parent()
        .next()
        .find("input")
        .attr("formControlName");
    }
    let value = Number(e.target.value);
    if (value < min || value > max) {
      this.quoteGeneraion.controls[formControlName].setValue("");
      this.quoteGeneraion.controls[formControlName1].setValue("");
      if (selectForm != "") {
        this.quoteGeneraion.controls[selectForm].setValue("0");
      }
      alert(`Value Should be between ${min} and ${max}`);
      return false;
    } else {
      if (
        formControlName == "fireBuilding" ||
        formControlName == "fireContent"
      ) {
        if (this.totalFirSum > 50000000) {
          this.quoteGeneraion.controls[formControlName].setValue("");
          this.quoteGeneraion.controls[formControlName1].setValue("");
          alert("sum of Building and Content Sum insured max 500000000");
          return false;
        }
      }
      return true;
    }
  }
  policyDownload(i) {
    console.log(i);
    //let id = this.api.ency(i);
    this.router.navigate(["policyCopy", i]);
  }
  setEQandZone(z, i) {
    if (z == "1") {
      this.currentZone =
        i == "Industrial" ? this.industirlzone1 : this.nonIndustirlzone1;
    } else if (z == "2") {
      this.currentZone =
        i == "Industrial" ? this.industirlzone2 : this.nonIndustirlzone2;
    } else if (z == "3") {
      this.currentZone =
        i == "Industrial" ? this.industirlzone3 : this.nonIndustirlzone3;
    } else {
      this.currentZone =
        i == "Industrial" ? this.industirlzone4 : this.nonIndustirlzone4;
    }
    if (this.decline == "No") {
      this.sfspSetEQ = this.currentZone * 0.5;
    } else {
    }
  }

  setDiscount() {
    let commercialod =
      this.quoteGeneraion.value.commercialoding < 0
        ? 0
        : this.quoteGeneraion.value.commercialoding == null
          ? 0
          : this.quoteGeneraion.value.commercialoding;
    let ageBuild = this.quoteGeneraion.value.buildingAge;
    let constructDet = this.quoteGeneraion.value.constructDetails;
    let roundClock = this.quoteGeneraion.value.roundTheClock;
    let DistanceWater = this.quoteGeneraion.value.DistanceWaterbody;
    let Basement = this.quoteGeneraion.value.BasementStorage;
    let GoodHouse = this.quoteGeneraion.value.GoodHousekeeping;
    let Electrical = this.quoteGeneraion.value.ElectricalInstall;
    let FireBrigad = this.quoteGeneraion.value.FireBrigade;
    let ClaimsExp = this.quoteGeneraion.value.ClaimsExperience;
    let Floorsof = this.quoteGeneraion.value.Floorsofbuild;
    let t = this.quoteGeneraion.value.polTenure;
    let tenoreVal = t == 1 ? 0 : t == 2 ? 2 : t == 3 ? 3 : t == 9 ? 9 : t;
    //PARAMETER CODE: =) AOTB,FTBL,CNST,FIBR,WTBO,BSAL,GOHL,EIWL,CLEX,RCLO

    // this.ageOfBuildingCode = ageBuild == "0" ? "0010" : ageBuild == "5" ? "0015" : ageBuild == "10" ? "0099" : "NOTA";
    this.ageOfBuildingCode = ageBuild == "-2.5" ? "0025" : ageBuild == "-5" ? "0026" : "NOTA";
    this.FloorsofCode =
      Floorsof == "-5"
        ? "0024"
        : Floorsof == "-7.5"
          ? "0034"
          : Floorsof == "-15"
            ? "0035"
            : "NOTA";
    this.constructDetCode =
      constructDet == "-5" ? "KUCH" : constructDet == "0" ? "PUKA" : "NOTA";
    this.FireBrigadCode = FireBrigad == "-5" ? "99KM" : "NOTA";
    this.DistanceWaterbodyCode = DistanceWater == "-10" ? "0249" : "NOTA";
    this.BasementCode = Basement == "-5" ? "YESS" : Basement == "0" ? "NONO" : "NOTA";
    this.GoodHouseCode = GoodHouse == "0" ? "YESS" : GoodHouse == "-5" ? "NONO" : "NOTA";
    this.ElectricalCode = Electrical == "-10" ? "LWEI" : "NOTA";

    this.ClaimsExpCode =
      ClaimsExp == "-5"
        ? "1C05"
        : ClaimsExp == "-7.5"
          ? "1C7Y"
          : ClaimsExp == "-10"
            ? "3C10"
            : "NOTA";
    this.roundClockCode = roundClock == "-10" ? "SN99" : "NOTA";

    this.loadingDisc =
      Number(-commercialod) +
      Number(ageBuild) +
      Number(constructDet) +
      Number(roundClock) +
      Number(ClaimsExp) +
      Number(Floorsof) +
      Number(FireBrigad) +
      Number(Electrical) +
      Number(GoodHouse) +
      Number(Basement) +
      Number(DistanceWater);
    // }
    console.log(this.loadingDisc);
    this.quoteGeneraion.patchValue({
      loadingDisc: this.loadingDisc,
    });
    this.yrDiscount = (100 - tenoreVal) / 100;
    this.buildDisc = (100 - this.loadingDisc) / 100;
    if (this.quoteGeneraion.value.fireBuilding > 1) {
      this.buildIngPre(this.quoteGeneraion.value.fireBuilding, "1A**");
    }
    if (this.quoteGeneraion.value.fireContent > 1) {
      this.fireContentPre(this.quoteGeneraion.value.fireContent);
    }
    if (this.quoteGeneraion.value.coverContentSum > 1) {
      this.coverContentCalc();
    }
    if (this.quoteGeneraion.value.PASelfSum > 1) {
      this.PASelfCalc();
    }
    if (this.quoteGeneraion.value.PASpouseSum > 1) {
      this.PASpouseCalc();
    }
  }
  setTerrPreDwelling() {
    console.log(this.totalFirSum);
    if (this.totalFirSum <= 50000000) {
      let amount =
        ((this.totalFirSum * 0.08) / 1000) *
        this.quoteGeneraion.value.polTenure;
      this.quoteGeneraion.patchValue({
        longTermTerrSum: this.totalFirSum,
        longTermTerrPre: amount.toFixed(2),
      });
    }
  }
  showTerrorism(e) {
    console.log(e);
    if (!e.checked) {
      this.quoteGeneraion.patchValue({
        longTermTerrSum: 0,
        longTermTerrPre: 0,
      });
    }
  }
  PASelfReset(e) {
    console.log(e);
    if (!e.checked) {
      this.quoteGeneraion.patchValue({
        PASelfSum: 0,
        PASelfPre: 0,
      });
    }
  }
  PASpouseReset(e) {
    console.log(e);
    if (!e.checked) {
      this.quoteGeneraion.patchValue({
        PASpouseSum: 0,
        PASpousePre: 0,
      });
    }
  }
  coverContentReset(e) {
    if (!e.checked) {
      this.quoteGeneraion.patchValue({
        coverContentSum: 0,
        coverContentPre: 0,
      });
    }
  }
  PASelfCalc() {
    let amount =
      ((this.quoteGeneraion.value.PASelfSum * 0.06) / 1000) *
      this.quoteGeneraion.value.polTenure;
    this.quoteGeneraion.patchValue({
      PASelfPre: amount.toFixed(2),
    });
  }
  coverContentCalc() {
    let amount =
      ((this.quoteGeneraion.value.coverContentSum * 0.297) / 1000) *
      this.quoteGeneraion.value.polTenure;
    this.quoteGeneraion.patchValue({
      coverContentPre: amount.toFixed(2),
    });
  }
  PASpouseCalc() {
    let amount =
      ((this.quoteGeneraion.value.PASpouseSum * 0.06) / 1000) *
      this.quoteGeneraion.value.polTenure;
    this.quoteGeneraion.patchValue({
      PASpousePre: amount.toFixed(2),
    });
  }
  discountChange(e, type) {
    if (type == "D") {
      if (e.target.value > 60) {
        alert("Disocunt Cannot be greater then 60%");
        this.setFormVal("discount", 0);
        return;
      } else {
        this.setFormVal("loading", 0);
      }
    } else {
      if (e.target.value > 100) {
        alert("Disocunt Cannot be greater then 100%");
        this.setFormVal("loading", 0);
        return;
      } else this.setFormVal("discount", 0);
    }
  }
  getAge() { }
  checkConstruction(v) {
    if (v == "K") {
      this.blockProcess = true;
    } else {
      this.blockProcess = false;
    }
  }
  setSpCode(o) {
    this.bankName = o.bankname;
    this.branchName = o.BRANCH_NAME;
    this.branchCode = o.SOL_ID;
    this.fgBrachCode = o.FGBranchCode;
    this.userName = o.UserId;
    this.agentCode = o.AgentCode;
    this.fgiBRCode = o.FGI_BR_CODE;
    this.spCode = o.SPCode;
    this.quoteGeneraion.patchValue({
      branchName: this.branchCode
        ? this.branchCode + " - " + this.branchName
        : "",
      createdBy: this.userName,
      fgBrachCode1: this.fgBrachCode,
      bankBranch: this.fgiBRCode,
      spCode: this.spCode,
      bankName: this.bankName,
    });
    this.branchFlag = true;
  }
  showBranchList() {
    this.branchFlag = false;
  }
  getReceiptDeatils(val) {
    this.loading = true;
    let obj = { type: "RF", code: val, EntityKey: "", receiptNo: "" };
    this.api.getReceiptList(obj).subscribe(
      (sus) => {
        console.log(sus);
        this.totalRA = 0;
        this.multipleReceipt = [];
        if (sus[0].code == "") {
          alert("Please check the reference");
        } else {
          this.showReceipt = true;
          this.receiptList = sus;
        }
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  selectReceipt(v, e) {
    if (e.target.checked) {
      this.totalRA += parseInt(v.balanceamt);
      this.multipleReceipt.push(v.receiptno);
      this.payerid = v.code;
      this.instrumentdate = v.instrumentdate;
    } else {
      this.totalRA = this.totalRA - v.balanceamt;
      this.multipleReceipt.splice(v.receiptno);
    }
  }
  closePop() {
    this.showReceipt = false;
    this.quoteGeneraion.patchValue({
      bankRefNo: "",
    });
    this.payerid = "";
  }
  bookWithReceiptNo() {
    if (this.totalRA > 0) {
      if (this.totalRA < this.totalPre) {
        this.checkReceiptAmt = true;
      } else {
        this.checkReceiptAmt = false;
        this.showReceipt = false;
      }
    } else {
      alert("Please select once Receipt No.");
    }
  }
  selectPayMethod(v) {
    console.log(v);
    if (v == "S") {
      this.quoteGeneraion.removeControl("customerAcNo");
      this.quoteGeneraion.addControl(
        "customerAcNo",
        new FormControl("", Validators.required)
      );
      this.quoteGeneraion.removeControl("bankRefNo");
      this.quoteGeneraion.addControl("bankRefNo", new FormControl("", null));
    } else {
      this.quoteGeneraion.removeControl("customerAcNo");
      this.quoteGeneraion.addControl("customerAcNo", new FormControl("", null));
      this.quoteGeneraion.removeControl("bankRefNo");
      this.quoteGeneraion.addControl(
        "bankRefNo",
        new FormControl("", Validators.required)
      );
    }
  }
  omit_special_char(e) {
    let c = e.charCode;
    return (
      (c > 64 && c < 91) ||
      (c > 96 && c < 123) ||
      c == 8 ||
      c == 32 ||
      (c >= 47 && c <= 57) ||
      c == 44 ||
      c == 45
    );
  }
  checkDuplicatName() {
    var string = this.quoteGeneraion.value.firstName;
    var subString = this.quoteGeneraion.value.lastName.split(" ");
    if (subString.length > 1) {
      for (var i = 0; i < subString.length; i++) {
        if (string.split(" ").includes(subString[i])) {
          this.duplicateNameFalg = true;
        }
      }
    } else {
      if (
        string.split(" ").includes(this.quoteGeneraion.value.lastName) &&
        this.quoteGeneraion.value.lastName != ""
      ) {
        this.duplicateNameFalg = true;
      }
    }
    if (this.duplicateNameFalg) {
      alert("Same name or surname not allowed in first name and last name!");
      this.quoteGeneraion.patchValue({
        firstName: "",
        lastName: "",
      });
      this.duplicateNameFalg = false;
    }
  }
  onSelectedFile(evt) {
    let fn = evt.target.files[0].name
      .split(".")
    [evt.target.files[0].name.split(".").length - 1].toLowerCase();
    if (fn == "pdf" || fn == "png" || fn == "jpg") {
      $(evt.currentTarget).parent().find("p").text(evt.target.files[0].name);
    } else {
      $(evt.currentTarget).val("");
      alert("Not a valid file format");
    }
  }
}
