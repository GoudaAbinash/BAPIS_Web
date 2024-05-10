import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { CommonService } from "../common.service";
import $ from "jquery";
import { ActivatedRoute, Router } from "@angular/router";
import { UCOPaymentModel } from "src/model/ucoPaymentModel";
import { Receipt } from "src/model/receipt";
declare var AJL;
interface Animal {
  name: string;
  value: string;
}

@Component({
  selector: 'app-fsrrenewal',
  templateUrl: './fsrrenewal.component.html',
  styleUrls: ['./fsrrenewal.component.scss']
})
export class FSRrenewalComponent implements OnInit {
  animals: Animal[] = [
    { name: "Mr", value: "Mr" },
    { name: "Mrs", value: "Mrs" },
  ];
  books: Animal[] = [
    { name: "Aquarium", value: "0336" },
    { name: "Automobile spare parts excluding Tyre", value: "0336" },
    { name: "Bakery products", value: "0336" },
    { name: "Beauty Salon and Barbar shops", value: "0336" },
    { name: "Book stores", value: "0336" },
    { name: "Canned Juices", value: "0336" },
    { name: "CDs, DVDs store", value: "0336" },
    { name: "Dairy shops", value: "0336" },
    { name: "Electric and hardware stores", value: "0336" },
    { name: "Florist Shops", value: "0336" },
    { name: "Frozen Food", value: "0336" },
    { name: "Fruits and Vegetables shop", value: "0336" },
    { name: "General stores", value: "0335" },
    { name: "Gifts shops and stores", value: "0336" },
    { name: "Glass trading shops", value: "0336" },
    {
      name: "Grocery Shop Like FMCG(Fast Moving Consumable Goods)",
      value: "0336",
    },
    { name: "Internet surfing/ cyber shops/Gaminig", value: "0336" },
    { name: "Laundry Shops", value: "0336" },
    { name: "Marble and Granite shops", value: "0336" },
    { name: "Meat shops and Fish shop", value: "0336" },
    { name: "Medical and General stores", value: "0336" },
    { name: "Mobile repairing shop", value: "0336" },
    { name: "Motor Vechile showroom", value: "0033" },
    { name: "Optician(Sells Glass and Contact Lenses)", value: "0336" },
    { name: "Others", value: "0031" },
    { name: "Pet Shops", value: "0336" },
    { name: "Plumbing and sanitory stores", value: "0336" },
    { name: "Pulses", value: "0336" },
    { name: "Pulses and Cereals", value: "0336" },
    { name: "Stationery", value: "0336" },
    { name: "Supermarket", value: "0336" },
    { name: "Tailor shops", value: "0336" },
    { name: "Tea, Coffee and Juices", value: "0336" },
    { name: "Toys Store", value: "0336" },
    { name: "Trading of Steel, Bricks, Cements", value: "0336" },
    { name: "Watches", value: "0336" },
    { name: "Chemical Shop", value: "0031" },
    { name: "Fire-cracker", value: "0031" },
    { name: "Cloths/Readymade Garments Shop", value: "0128" },
  ];
  covers: Animal[] = [
    { name: "Building", value: "1A**" },
    { name: "Content", value: "1B**" },
    { name: "Tenant Liability", value: "1L**" },
    { name: "Alternate Accommodation", value: "1M**" },
    { name: "Escalation", value: "1O**" },
    { name: "Omission to Insure Addition", value: "1P**" },
  ];
  Burglary: Animal[] = [
    { name: "Content", value: "2A**" },
    { name: "First Loss Percentage", value: "" },
  ];
  Percentage = [{ name: "25" }, { name: "40" }, { name: "50" }, { name: "75" }];
  Nominee: Animal[] = [
    { name: "Brother", value: "BRO" },
    { name: "Sister", value: "SIS" },
    { name: "ETC", value: "ETC" },
  ];
  Alliedcheck = false;
  buildingRate = 0.66; // 0.66;
  terrorism = 0.15;
  fireSTFI = 0.15;
  eleEquip = 1.0;
  eleSTFI = 0.3;
  zone1 = 0.25;
  zone2 = 0.15;
  zone3 = 0.1;
  zone4 = 0.05;
  currentZone = 0.1;
  portableComRate = 2.0;
  airConditionRate = 2.5;
  portableGenRate = 1.6;
  fgReceiptNo;
  fgClientId;
  eleEquiOther = 1.0;
  burglaryTotal = 0;
  FLOP = this.buildingRate + this.fireSTFI + this.currentZone;
  burglaryRate = 2; //0.2
  personalAccidentRate = 0.15;
  publicLiability = 0.1;
  baggageRate = 1.5;
  workRate = 0.55;
  moneyInsurance = 0.25;
  fidelityRate = 1.25;
  signBoardRate = 2;
  plateGlassRate = 1.0;
  pedalCycleRate = 1.5;
  quoteGeneraion: any;
  netPremium = 0;
  gst = 0;
  GSTNo = 18;
  fgiBRCode;
  fgBrachCode;
  totalPre = 0;
  annexureWithValue = [];
  showQuote = false;
  onSubmit = false;
  checkCalc = true;
  ckycref = false;
  addressFlag = true;
  discountLoad = "";
  issueQuoteFlag = true;
  updateQuoteFlag = false;
  saveQuoteDetailsFlag = false;
  makePaymentFlag = false;
  disableckyc = false;
  loading = false;
  agentCode;
  maximumDOB = new Date();
  maxPolicyDate = new Date();
  maximumRiskD = new Date();
  scrollContainer: any;
  annexureForm: FormGroup;
  employeeForm: FormGroup;
  annexure = [];
  salutationList = 
    [
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
  detailExpData = [];
  detailEmployeeExpData = [];
  quoteNo = "";
  totalFirSum = 0;
  ridrectToPay = false;
  showRedirectMsg = true;
  customerName = "";
  bankCustID = "";
  AcNo: any;
  trnID: any;
  userName = "";
  verfyilagf = false;
  ckycflag = false;
  branchName = "";
  branchCode = "";
  stateCode = "";
  stateName = "";
  country = "";
  currentZoneNo = "1";
  currentID = "";
  currentStatus = "";
  isCompany = false;
  policyText = "Please wait .. We are creating your Policy …";
  policyNo = "";
  spCode = "";
  coverType = "";
  riskRate = 0;
  electronicEqRate = 0;
  flopRate = 0;
  loadingDisc = 0;
  loginFlag = "";
  branchList = [];
  branchFlag = true;
  disableSelect = false;
  paymentOptReq = false;
  saveAndPayment = false;
  landmarkName = "";
  totalRA = 0;
  multipleReceipt = [];
  payerid = "";
  instrumentdate = "";
  showReceipt = false;
  receiptList = [];
  filterTicket = "";
  duplicateNameFalg = false;
  checkReceiptAmt = false;
  receiptusername = "";
  receiptvendorname = "";
  bankName = "";
  FGBranchCode = "";
  FgBranchCode: any;
  policystartDt: string;
  selectNo: any;
  obj1: { userid: string; policyNo: any; };
  clienttype: any;
  clientNo: any;
  agentNo: any;
  fgBranchCode: any;
  add1: any;
  add2: any;
  add3: any;
  add4: any;
  city: any;
  state: any;
  pincode: any;
  TotalPerimum: any;
  TotalSI: any;
  fgbranchName: any;
  OccupancyCode: any;
  OccupancyName: any;
  startdate: string;
  enddate: string;
  tenureList: any;
  nwpolicyno = '';

  insuranceData = [
    
    // Add other data entries as needed
  ];
  addresses = [
    
    // Add other data entries as needed
  ];
  policyrnwNo: any;
  PolicyNo: any;
  addressflag: boolean;


  constructor(
    private api: CommonService,
    private elementRef: ElementRef,
    private activeR: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // alert(this.machinaryBreakdownEnabled)
    if (this.activeR.snapshot.paramMap.get("id")) {
      this.currentID = this.api.decy(this.activeR.snapshot.paramMap.get("id"));
    }
    this.currentStatus = this.activeR.snapshot.paramMap.get("status");
    this.maxPolicyDate = new Date(
      this.maxPolicyDate.setDate(this.maxPolicyDate.getDate() + 29)
    );

    this.quoteGeneraion = new FormGroup({
      policyNo: new FormControl('', Validators.required),
      bankName: new FormControl("", Validators.required),
      createdBy: new FormControl("", Validators.required),
      branchName: new FormControl("", Validators.required),
      bankBranch: new FormControl("", Validators.required),
      fgBrachCode1: new FormControl("", Validators.required),
      fgbranchName: new FormControl("", Validators.required),
      coverType: new FormControl("", Validators.required),
      tranType: new FormControl("Renewal", Validators.required),
      customerType: new FormControl("", Validators.required),
      salutation: new FormControl("*", Validators.required),
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("",null),
      contactNo: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      //policyDate: new FormControl("", Validators.required),
      bankStaffID: new FormControl("", null),
      bankCustID: new FormControl("", null),
      FGStafID: new FormControl("", Validators.required),
      customerAcNo: new FormControl("", null),
      bankRefNo: new FormControl("", null),
      financInterest: new FormControl("", null),
      loanAcNo: new FormControl("", null),
      imdGeneral: new FormControl("", null),
      businessType: new FormControl("", Validators.required),
      OccupancyCode: new FormControl('', Validators.required),
      OccupancyName: new FormControl('', Validators.required),

      pincode: new FormControl("", Validators.required),
      zoneNo: new FormControl("", Validators.required),
      spCode: new FormControl("", Validators.required),
      bancaSegement: new FormControl("", Validators.required),
      riskOcc: new FormControl("NH", Validators.required),
      ageOfBuild: new FormControl("0", Validators.required),
      fireProtection: new FormControl("0", Validators.required),
      constructDetails: new FormControl("0", Validators.required),
      previousLoos: new FormControl("0", Validators.required),
      paymentMethod: new FormControl("", null),
      add1: new FormControl("", null),
      add2: new FormControl("", null),
      add3: new FormControl("", null),
      city: new FormControl("", null),
      landmark: new FormControl("", null),
      state: new FormControl("", null),
      country: new FormControl("", null),
      discount: new FormControl(0, null),
      loading: new FormControl(0, null),
      shopPincode: new FormControl("", null),
      comadd1: new FormControl("", null),
      comadd2: new FormControl("", null),
      comadd3: new FormControl("", null),
      comcity: new FormControl("", null),
      comlandmark: new FormControl("", null),
      comstate: new FormControl("", null),
      comcountry: new FormControl("", null),
      comPincode: new FormControl("", null),
      panNo: new FormControl("", null),
      GSTNo: new FormControl("", null),
      fireAlliedPerils: new FormControl(false),
      buildingCode: new FormControl("", null),
      fireBuilding: new FormControl(null, null),
      fireBuildingPre: new FormControl(0, null),
      fireContent: new FormControl(null, null),
      fireContentP: new FormControl(0, null),
      fireContentDetails: new FormControl("", Validators.required),
      fireTerrorism: new FormControl("", null),
      fireTerrSum: new FormControl(null, null),
      STFISum: new FormControl(null, null),
      EQSum: new FormControl(null, null),
      fireTerrPre: new FormControl(0, null),
      FLOPMonth: new FormControl(0, null),
      FLOPSum: new FormControl(null, null),
      FLOPPre: new FormControl(0, null),
      ternantSum: new FormControl(null, null),
      ternantPre: new FormControl(0, null),
      alteranteAccSum: new FormControl(null, null),
      alteranteAccPre: new FormControl(0, null),
      escalation: new FormControl("", null),
      escalationSum: new FormControl(null, null),
      escalationPre: new FormControl(0, null),
      ommission: new FormControl("", null),
      ommissionSum: new FormControl(null, null),
      ommissionPre: new FormControl(0, null),
      burglaryMain: new FormControl(false),
      setBurglaryFlag: new FormControl(null, null),
      burglaryContentSum: new FormControl(null, null),
      burglaryContentPre: new FormControl(0, null),
      setBurglaryFlag1: new FormControl(null, null),
      burglaryPercent: new FormControl(null, null), //testing
      burglaryPercentSum: new FormControl(null, null),
      burglaryPercentPre: new FormControl(0, null),
      allRisk: new FormControl(false),
      portableComputer: new FormControl(null, null),
      portableComputerPre: new FormControl(0, null),
      electronicEquiSum: new FormControl(null, null),
      electronicEquiPre: new FormControl(0, null),
      electronicEQSum: new FormControl(null, null),
      electronicEQPre: new FormControl(0, null),
      electronicSTFISum: new FormControl(null, null),
      electronicSTFIPre: new FormControl(0, null),
      airCondition: new FormControl(null, null),
      airConditionPre: new FormControl(0, null),
      porGeneration: new FormControl(null, null),
      porGenerationPre: new FormControl(0, null),
      equiOther: new FormControl(null, null),
      equiOtherPre: new FormControl(0, null),
      personalAccident: new FormControl(0, null),
      personalAccidentPre: new FormControl(0, null),
      noOfEmp: new FormControl(null, null),
      accidentDeath: new FormControl(0, null),
      accidentDeathPre: new FormControl(0, null),
      insuredAge: new FormControl(null, null),
      nomineeName: new FormControl(null, null),
      nomineeRel: new FormControl("", null),
      publicLiability: new FormControl(null, null),
      publicLiabilityPre: new FormControl(0, null),
      baggage: new FormControl(null, null),
      baggagePre: new FormControl(0, null),
      workCompensationEmp: new FormControl(null, null),
      workCompensationSalary: new FormControl(null, null),
      workCompensationSum: new FormControl(null, null),
      workCompensationPre: new FormControl(0, null),
      cashInTransit: new FormControl(null, null),
      cashInTransitPre: new FormControl(0, null),
      cashInShafe: new FormControl(null, null),
      cashInShafePre: new FormControl(0, null),
      cashInCounter: new FormControl(null, null),
      cashInCounterPre: new FormControl(0, null),
      fidelityEmp: new FormControl(null, null),
      fidelityLimit: new FormControl(null, null),
      fidelitySum: new FormControl(null, null),
      proposal: new FormControl("", null),
      fidelityPre: new FormControl(0, null),
      neonSign: new FormControl(null, null),
      neonSignPre: new FormControl(0, null),
      pedalCycle: new FormControl(null, null),
      pedalCyclePre: new FormControl(0, null),
      plateGlass: new FormControl(null, null),
      plateGlassPre: new FormControl(0, null),
      STFIFlag: new FormControl(null, null),
      STFI: new FormControl(null, null),
      EQFlag: new FormControl(null, null),
      EQ: new FormControl(null, null),
      winNo: new FormControl("", null),
      applNo: new FormControl("", null),
      printFlag: new FormControl("N", null),
      totalPremium: new FormControl(0, null),
      electronicEquip: new FormControl(false),
      machinaryBreakdown: new FormControl(false),
      personalAccidentMain: new FormControl(false),
      legalLiabiity: new FormControl(false),
      baggageMain: new FormControl(false),
      workmenCompensation: new FormControl(false),
      moneyinsurance: new FormControl(false),
      employeeFidelity: new FormControl(false),
      neonSignGlowSign: new FormControl(false),
      pedalCycleMain: new FormControl(false),
      plateGlassMain: new FormControl(false),
      stfiMain: new FormControl(false),
      earthQuake: new FormControl(false),
      // for ckyc
      fullname: new FormControl("", null),
      idnum: new FormControl("", null),
      dobDate: new FormControl("", null),
      idtype: new FormControl("", null),
      gender: new FormControl("", null),
      ckycno: new FormControl(null, null),
      buildMain: new FormControl(false),
      fireContentsMain: new FormControl(false),
      terrorismMain: new FormControl(false),
      fireLossMain: new FormControl(false),
      tenantLiabiityMain: new FormControl(false),
      alternateAccoMain: new FormControl(false),
      escalationMain: new FormControl(false),
      omissionMain: new FormControl(false),
      portableMain: new FormControl(false),
      electronicMain: new FormControl(false),
      electronicEQ: new FormControl(false),
      electronicSTFI: new FormControl(false),
      airConditionMain: new FormControl(false),
      portableGeneratorMain: new FormControl(false),
      equipmentMain: new FormControl(false),
      accidentMain: new FormControl(false),
      accidentMainEmp: new FormControl(false),
      publicLiabilityMain: new FormControl(false),
      domesticMain: new FormControl(false),
      workmenMain: new FormControl(false),
      cashInMain: new FormControl(false),
      cashInSafeMain: new FormControl(false),
      cashInCounterMain: new FormControl(false),
      employeeMain: new FormControl(false),
      neonSignMain: new FormControl(false),
      pedalCycleNonMain: new FormControl(false),
      fixedMain: new FormControl(false),
      clientno: new FormControl('', Validators.required),
      polTenure: new FormControl('', Validators.required),
      riskDate: new FormControl('', Validators.required),
      riskEndDate: new FormControl('', Validators.required),
      polInsName: new FormControl(''),
      polNumber: new FormControl(''),
      policyExpDate: new FormControl(''),
      nwpolicyno: new FormControl(''),
      
    });
    // $('.fw > mat-checkbox').on('click change', function(){
    //   if(!$(this).hasClass('disable')){
    //     $(this).next().slideToggle();
    //   }
    // });
    // $('.one > mat-checkbox').on('click change', function(){
    //   if(!$(this).hasClass('disable')){
    //     $(this).next().toggleClass('hide');
    //   }
    // });

    let myPastDat = new Date(this.maximumRiskD);
    myPastDat.setDate(myPastDat.getDate() - 30);
    this.maximumRiskD = new Date(myPastDat);
    this.initFormSection();
    this.addAnnexureForm();
    let sessionData = this.api.decy(sessionStorage.getItem("userDetails"));
    this.loginFlag = sessionData[0].loginFlag;
    this.receiptusername = sessionData[0].receiptusername;
    this.receiptvendorname = sessionData[0].receiptvendorname;
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
      this.fgBrachCode = this.fgBrachCode || "10";
      this.userName = sessionData[0].UserId;
      this.agentCode = sessionData[0].AgentCode;
      this.fgiBRCode = sessionData[0].FGI_BR_CODE;
      this.spCode = sessionData[0].SPCode;
      this.bankName = sessionData[0].bankname;
    }
    
    this.tenureList = this.range(1, 10);
    this.quoteGeneraion.patchValue({
      polTenure: 1
    });



    //SPCode
    this.spCode = sessionData[0].SPCode;
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
    this.quoteGeneraion.patchValue({
      branchName: this.branchCode + " - " + this.branchName,
      createdBy: this.userName,
    });
    if (this.currentID != "") {
      let id = decodeURIComponent(this.currentID);
      this.loading = true;
      let o = { id: id };
      this.api.getQuoteDetails(o).subscribe(
        (sus) => {
          if (sus.ResponseFlag == 1) {
            let res = JSON.parse(sus.ResponseMessage)["Table"];
            let allData = JSON.parse(res[0].allData);
            let annexData = JSON.parse(res[0].annexureData);
            let empData = JSON.parse(res[0].empData);
            this.payerid = res[0].payerID == null ? "" : res[0].payerID;
            this.addressFlag = false;
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
            this.quoteGeneraion.patchValue(allData);
            if (this.loginFlag == "2" || this.loginFlag == "3") {
              var isPresent = sessionData.find(function (el) {
                return el.SOL_ID === allData.branchName.split(" - ")[0];
              });
              this.setSpCode(isPresent);
            }
            if (allData.customerType == "C") {
              this.isCompany = true;
              this.quoteGeneraion.get("lastName").setValidators(null);
              this.quoteGeneraion.get("lastName").setErrors(null);
            }

            setTimeout(() => {
              this.quoteGeneraion.patchValue(allData);
              // this.quoteGeneraion.patchValue({
              //   add1: allData.add1,
              //   add2: allData.add2,
              //   add3: allData.add3,
              //   city: allData.city,
              //   district: allData.district,
              //   state: allData.state,
              //   country: allData.country,
              //   comadd1: allData.comadd1,
              //   comadd2: allData.comadd2,
              //   comadd3: allData.comadd3,
              //   comcity: allData.comcity,
              //   comdistrict: allData.comdistrict,
              //   comstate: allData.comstate,
              //   comcountry: allData.comcountry,
              //   panNo: allData.panNo,
              //   GSTNo: allData.GSTNo
              // });
            }, 100);
            let o = { value: allData.customerType };
            console.log(o);
            this.changeCustomerType(o);
            this.quoteNo = res[0].quoteNo;
            this.trnID = res[0].trnID;
            this.burglaryTotal =
              allData.burglaryContentSum + allData.burglaryPercentSum;

            this.totalFirSum =
              allData.fireBuilding +
              allData.fireContent +
              allData.fireTerrSum +
              allData.FLOPSum +
              allData.ternantSum +
              allData.alteranteAccSum +
              allData.escalationSum +
              allData.ommissionSum;

            allData.fireAlliedPerils
              ? this.setAnnexureWithValue(
                  "Fire & Allied Perils",
                  this.totalFirSum
                )
              : "";
            allData.burglaryMain
              ? this.setAnnexureWithValue(
                  "Burglary",
                  allData.burglaryContentSum
                )
              : "";
            allData.allRisk
              ? this.setAnnexureWithValue("All Risk", allData.portableComputer)
              : "";
            allData.electronicEquip
              ? this.setAnnexureWithValue(
                  "Electronic Equipments",
                  allData.electronicEquiSum
                )
              : "";
            allData.machinaryBreakdown
              ? this.setAnnexureWithValue(
                  "Machinery Breakdown",
                  allData.airCondition +
                    allData.porGeneration +
                    allData.equiOther
                )
              : "";
            allData.personalAccidentMain
              ? this.setAnnexureWithValue(
                  "Personal Accident",
                  allData.personalAccident + allData.accidentDeath
                )
              : "";
            allData.legalLiabiity
              ? this.setAnnexureWithValue(
                  "Legal Liability",
                  allData.publicLiability
                )
              : "";
            allData.baggageMain
              ? this.setAnnexureWithValue("Baggage", allData.baggage)
              : "";
            allData.workmenCompensation
              ? this.setAnnexureWithValue(
                  "Workmen Compensation",
                  allData.workCompensationSum
                )
              : "";
            allData.moneyinsurance
              ? this.setAnnexureWithValue(
                  "Money Insurance",
                  allData.cashInTransit +
                    allData.cashInShafe +
                    allData.cashInCounter
                )
              : "";
            allData.employeeFidelity
              ? this.setAnnexureWithValue(
                  "Employee Fidelity",
                  allData.fidelityEmp
                )
              : "";
            allData.neonSignGlowSign
              ? this.setAnnexureWithValue(
                  "Neon Sign / Glow Sign",
                  allData.neonSign
                )
              : "";
            allData.pedalCycleMain
              ? this.setAnnexureWithValue("Pedal Cycle", allData.pedalCycle)
              : "";
            allData.plateGlassMain
              ? this.setAnnexureWithValue("Plate Glass", allData.plateGlass)
              : "";
            allData.stfiMain
              ? this.setAnnexureWithValue("STFI", allData.STFI)
              : "";
            allData.earthQuake
              ? this.setAnnexureWithValue("Earth Quake", allData.EQ)
              : "";
            if (annexData) {
              if (annexData.length > 1) {
                annexData.forEach((item, key) => {
                  console.log(item, key);
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
            if (annexData) {
              if (empData != null) {
                if (empData.length) {
                  if (empData.length > 1) {
                    empData.forEach((item, key) => {
                      const control = <FormArray>(
                        this.employeeForm.get("detailEMPSections")
                      );
                      control.push(this.initEmployeeForm());
                      const arr = <FormArray>(
                        this.employeeForm.controls.detailEMPSections
                      );
                      arr.controls[key].patchValue(item);
                    });
                  } else {
                    const control = <FormArray>(
                      this.employeeForm.get("detailEMPSections")
                    );
                    control.push(this.initEmployeeForm());
                    const arr = <FormArray>(
                      this.employeeForm.controls.detailEMPSections
                    );
                    arr.controls[0].patchValue(empData[0]);
                  }
                }
              } else {
                empData == "";
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
                if (this.currentStatus != "C") {
                  this.paymentOptReq = true;
                }
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
                this.employeeForm.disable();
              }
              if (this.loginFlag == "2" || this.loginFlag == "3") {
                this.quoteGeneraion.disable();
                this.annexureForm.disable();
                this.employeeForm.disable();
              } else {
                this.annexureForm.disable();
                this.employeeForm.disable();
              }
              setTimeout(() => {
                $(".communicationAdd mat-checkbox").addClass("disable");
                $(".hrefWrap,.removeFile").hide();
              }, 500);
              var d = new Date();
              d.setFullYear(d.getFullYear() - 1, d.getMonth());
              this.maximumDOB = d;
            }
            this.checkCalc = false;
            this.showQuote = true;
            this.validateAdd();
            this.netPremium = Number(res[0].totalPremium);
            let disLoad = 0;
            let netLocal = this.netPremium;
            if (allData.discount > 0) {
              disLoad = (this.netPremium * allData.discount) / 100;
            } else {
              disLoad = (netLocal * allData.loading) / 100;
            }
            this.discountLoad =
              (allData.discount > 0 ? "-" : "+") + String(disLoad);
            this.discountLoad = Number(this.discountLoad).toFixed(2);
            let obj = { pincode: res[0].pincode };
            this.api.getStateCode(obj).subscribe(
              (sus) => {
                if (sus.ResponseFlag == 1) {
                  let res = JSON.parse(sus["ResponseMessage"]).Table;
                  if (res.length) {
                    this.stateCode = res[0].StateCode;
                    console.log(this.stateCode);
                    console.log(this.stateName);
                    this.stateName = res[0].StateName;
                    this.country = res[0].CountryCode;
                    if (this.stateCode == "KR") {
                      this.gst = Math.ceil((netLocal * 18) / 100);
                      this.GSTNo = 18;
                    } else {
                      this.gst = Math.ceil((netLocal * 18) / 100);
                      this.GSTNo = 18;
                    }
                    this.totalPre = netLocal + this.gst;
                    this.totalPre = Math.ceil(this.totalPre);
                    this.loading = true;
                    this.api
                      .getEQZone(res[0].DistrictName, res[0].StateName)
                      .subscribe((sus) => {
                        this.loading = false;
                        if (sus.ResponseFlag == 1) {
                          let res = JSON.parse(sus["ResponseMessage"]).Table;
                          if (res.length) {
                            let zone = res[0].Zone;
                            this.currentZoneNo = zone;
                            if (zone == "1") {
                              this.currentZone = this.zone1;
                            } else if (zone == "2") {
                              this.currentZone = this.zone2;
                            } else if (zone == "3") {
                              this.currentZone = this.zone3;
                            } else {
                              this.currentZone = this.zone4;
                            }
                            this.FLOP =
                              this.buildingRate +
                              this.fireSTFI +
                              this.currentZone;
                            this.setRiskRate("NH");
                          }
                        }
                      });
                  } else {
                    this.quoteGeneraion.controls["pincode"].setValue("");
                    alert("Invalid Pin code, Please check!");
                  }
                } else {
                  alert(sus.ResponseMessage);
                }
                this.loading = false;
              },
              (err) => {
                this.loading = false;
                console.log(err);
              }
            );
          }
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    }
  }


  range(start, end) {
    if (start === end) return [start];
    return [start, ...this.range(start + 1, end)];
  }

  setZone(v) {
    this.currentZoneNo = v;
    if (v == "1") {
      this.currentZone = this.zone1;
    } else if (v == "2") {
      this.currentZone = this.zone2;
    } else if (v == "3") {
      this.currentZone = this.zone3;
    } else {
      this.currentZone = this.zone4;
    }
    this.setRiskRate("NH");
  }
  changeCoverType(e) {
    let val = e.value;
    console.log(e);
    this.coverType = val;
    if (val == "LTD") {
      this.router.navigate(["fireForm"]);
    } else if (val == "FSL") {
      this.router.navigate(["fsl"]);
    } else if (val == "SFSP") {
      this.router.navigate(["sfsp"]);
    } else if (val == "GLL") {
      this.router.navigate(["gll"]);
    }
  }
  getSections(annexureForm, type = "") {
    if (type == "") return annexureForm.controls.detailSections.controls;
    else return annexureForm.controls.detailEMPSections.controls;
  }
  get CD() {
    return this.quoteGeneraion.controls;
  }
  get Ane() {
    return <FormArray>this.annexureForm.get("detailSections");
  }
  get Emp() {
    return <FormArray>this.employeeForm.get("detailEMPSections");
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
  changeNoofEMP(e) {
    let value = Number(e.target.value);
    if (this.employeeForm.controls.detailEMPSections.value.length) {
      const arr = <FormArray>this.employeeForm.controls.detailEMPSections;
      arr.controls = [];
    }
    for (let i = 0; i < value; i++) {
      this.addEMPForm();
    }
  }

  addEMPForm() {
    const control = <FormArray>this.employeeForm.get("detailEMPSections");
    control.push(this.initEmployeeForm());
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

    this.employeeForm = new FormGroup({
      detailEMPSections: new FormArray(
        this.detailEmployeeExpData.map((item) => {
          const group = this.initEmployeeForm();
          group.patchValue(item);
          return group;
        })
      ),
    });
  }

  initForm() {
    return new FormGroup({
      coverType: new FormControl("", Validators.required),
      itemDesc: new FormControl("", Validators.required),
      make: new FormControl("", Validators.required),
      YearofMFG: new FormControl("", Validators.required),
      sumins: new FormControl("", Validators.required),
    });
  }

  initEmployeeForm() {
    return new FormGroup({
      insuredAge: new FormControl("", Validators.required),
      insuredName: new FormControl("", Validators.required),
      nomineeName: new FormControl("", Validators.required),
      nomineeRel: new FormControl("", Validators.required),
    });
  }
  setTotalFirSum() {
    this.totalFirSum =
      this.quoteGeneraion.value.fireBuilding +
      this.quoteGeneraion.value.fireContent +
      this.quoteGeneraion.value.fireTerrSum +
      this.quoteGeneraion.value.FLOPSum +
      this.quoteGeneraion.value.ternantSum +
      this.quoteGeneraion.value.alteranteAccSum +
      this.quoteGeneraion.value.escalationSum +
      this.quoteGeneraion.value.ommissionSum;
  }
  buildIngPre(val, code) {
    console.log(this.loadingDisc);
    if (
      this.quoteGeneraion.value.ageOfBuild == "" ||
      this.quoteGeneraion.value.fireProtection == "" ||
      this.quoteGeneraion.value.constructDetails == "" ||
      this.quoteGeneraion.value.previousLoos == ""
    ) {
      alert("Please select all mandatory drop down!");
      this.quoteGeneraion.patchValue({
        fireBuilding: 0,
      });
      return false;
    } else {
      this.quoteGeneraion.patchValue({
        fireBuildingPre: ((val * this.loadingDisc) / 1000).toFixed(2),
      });
      this.setTotalFirSum();
      this.quoteGeneraion.patchValue({
        buildingCode: code,
      });
      this.setSTFIandEQ();
      this.setTerrPre();
    }
  }
  fireContentPre(val) {
    if (
      this.quoteGeneraion.value.ageOfBuild == "" ||
      this.quoteGeneraion.value.fireProtection == "" ||
      this.quoteGeneraion.value.constructDetails == "" ||
      this.quoteGeneraion.value.previousLoos == ""
    ) {
      alert("Please select all mandatory drop down!");
      this.quoteGeneraion.patchValue({
        fireContentP: 0,
      });
      return false;
    } else {
      this.quoteGeneraion.patchValue({
        fireContentP: ((val * this.loadingDisc) / 1000).toFixed(2),
      });
      this.setSTFIandEQ();
      this.setTerrPre();
      this.setBurglary();
    }
    this.setTotalFirSum();
  }
  openEmpDetails() {
    $(".overlay, .popupClaim").addClass("active");
    //$("html, body").animate({ scrollTop: 0 }, "slow");
  }
  commonCoverChange(e, type) {
    if (!e.checked) {
      this.setFormVal("fireBuildingPre", 0);
      this.setFormVal("fireBuilding", 0);
      this.resetSTFIandEQ();
    }
  }
  setSTFIandEQ() {
    if (this.quoteGeneraion.value.fireContent > 1) {
      this.quoteGeneraion.patchValue({
        stfiMain: true,
        earthQuake: true,
        STFISum:
          this.quoteGeneraion.value.fireContent +
          this.quoteGeneraion.value.fireBuilding,
        EQSum:
          this.quoteGeneraion.value.fireContent +
          this.quoteGeneraion.value.fireBuilding,
      });
      // this.quoteGeneraion.patchValue({
      //   STFI: Math.round((this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * this.loadingDisc / 1000),
      //   EQ: Math.round((this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * this.loadingDisc / 1000)
      // });
      // this.quoteGeneraion.patchValue({
      //   STFI: (this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * this.fireSTFI / 1000,
      //   EQ: (this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * this.currentZone / 1000
      // });
    } else {
      alert("Please select Content and building");
    }
  }
  resetSTFIandEQ() {
    this.quoteGeneraion.patchValue({
      STFISum:
        this.quoteGeneraion.value.fireContent +
        this.quoteGeneraion.value.fireBuilding,
      EQSum:
        this.quoteGeneraion.value.fireContent +
        this.quoteGeneraion.value.fireBuilding,
    });
  }
  close() {
    $(".overlay, .popupClaim").removeClass("active");
  }
  setTerr(val) {
    if (!val.checked) {
      this.setTerrPre();
      // this.quoteGeneraion.patchValue({
      //   fireTerrSum: 0,
      //   fireTerrorism: "NO",
      //   fireTerrPre: 0,
      // });
      console.log(val);
    }
  }
  setTerrPre() {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        terrorismMain: true,
        fireTerrSum:
          this.quoteGeneraion.value.fireContent +
          this.quoteGeneraion.value.fireBuilding,
        fireTerrPre:
          ((this.quoteGeneraion.value.fireContent +
            this.quoteGeneraion.value.fireBuilding) *
            this.terrorism) /
          1000,
      });
      this.FLOP =
        this.buildingRate + this.fireSTFI + this.currentZone + this.terrorism;
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        fireTerrorism: "",
      });
    }
    this.setTotalFirSum();
  }
  setFLOPPre(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      console.log(this.flopRate);
      this.quoteGeneraion.patchValue({
        FLOPPre: (val * (this.flopRate + 0.15)) / 1000,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        FLOPSum: "",
      });
    }
    this.setTotalFirSum();
  }
  setFLOP(val) {
    if (!val.checked) {
      this.quoteGeneraion.patchValue({
        FLOPPre: 0,
        FLOPMonth: "0",
        FLOPSum: 0,
      });
    }
  }
  setTernatPre(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      this.quoteGeneraion.patchValue({
        ternantPre: (val * this.FLOP) / 1000, //orginal / 1000,  //FLOP
      });
    } else {
      alert("Please select Content");
    }
    this.setTotalFirSum();
  }
  setAlteranteAccPre(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      this.quoteGeneraion.patchValue({
        alteranteAccPre: (val * this.FLOP) / 1000, /// original 1000,   //FLOP
      });
    } else {
      alert("Please select Content");
    }
    this.setTotalFirSum();
  }
  setEscalation(val) {
    if (!val.checked) {
      this.quoteGeneraion.patchValue({
        escalationSum: 0,
        escalation: "NO",
        escalationPre: 0,
      });
      console.log(val);
    }
  }
  setEscalationPre(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      if (val == "YES") {
        this.quoteGeneraion.patchValue({
          escalationSum: (this.quoteGeneraion.value.fireBuilding * 10) / 100,
        });
        this.quoteGeneraion.patchValue({
          escalationPre:
            (this.quoteGeneraion.value.escalationSum * (this.FLOP / 2)) / 1000,
        });
      } else {
        this.quoteGeneraion.patchValue({
          escalationSum: 0,
        });
        this.quoteGeneraion.patchValue({
          escalationPre: 0,
        });
      }
    } else {
      alert("Please select Content");
    }
    this.setTotalFirSum();
  }
  setOmmissionPre(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      if (val == "YES") {
        this.quoteGeneraion.patchValue({
          ommissionSum:
            ((this.quoteGeneraion.value.fireContent +
              this.quoteGeneraion.value.fireBuilding) *
              5) /
            100,
        });
        this.quoteGeneraion.patchValue({
          ommissionPre:
            (this.quoteGeneraion.value.ommissionSum * this.FLOP) / 1000, //flop
        });
      } else {
        this.quoteGeneraion.patchValue({
          ommissionSum: 0,
        });
        this.quoteGeneraion.patchValue({
          ommissionPre: 0,
        });
      }
    } else {
      alert("Please select Content");
    }
    this.setTotalFirSum();
  }
  setBurglary() {
    if (this.quoteGeneraion.value.fireContent > 1) {
      this.quoteGeneraion.patchValue({
        burglaryContentSum: this.quoteGeneraion.value.fireContent,
      });
      this.quoteGeneraion.patchValue({
        burglaryContentPre:
          (this.quoteGeneraion.value.burglaryContentSum * this.burglaryRate) /
          1000,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        setBurglaryFlag: false,
      });
    }
  }

  setBurglaryPer(e) {
    if (!this.quoteGeneraion.value.setBurglaryFlag1) {
      this.quoteGeneraion.patchValue({
        burglaryPercent: "",
        burglaryPercentSum: 0,
        burglaryPercentPre: 0,
      });
    }
    if (this.quoteGeneraion.value.fireContent > 1) {
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        setBurglaryFlag1: false,
      });
    }
  }
  setBurglaryPercent(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      this.quoteGeneraion.patchValue({
        burglaryPercentSum: (this.quoteGeneraion.value.fireContent * val) / 100,
      });
      let rate = val == 25 ? 1.25 : val == 50 ? 1.5 : val == 75 ? 1.7 : 0;
      this.quoteGeneraion.patchValue({
        burglaryPercentPre:
          (this.quoteGeneraion.value.burglaryPercentSum * rate) / 1000,
      });
    } else {
      alert("Please select Content");
    }
  }
  setSTFI(e) {
    console.log(e);
    if (e) {
      if (!e.checked) {
        this.setFormVal("STFI", 0);
        return;
      }
    }
    if (
      this.quoteGeneraion.value.fireContent > 1 &&
      this.quoteGeneraion.value.fireBuilding > 1
    ) {
      this.quoteGeneraion.patchValue({
        STFI:
          ((this.quoteGeneraion.value.fireContent +
            this.quoteGeneraion.value.fireBuilding) *
            this.fireSTFI) /
          1000,
      });
    } else {
      alert("Please select Content and building");
      this.quoteGeneraion.patchValue({
        stfiMain: false,
      });
    }
  }
  setEQ(e) {
    if (e) {
      if (!e.checked) {
        this.setFormVal("EQ", 0);
        return;
      }
    }
    if (
      this.quoteGeneraion.value.fireContent > 1 &&
      this.quoteGeneraion.value.fireBuilding > 1
    ) {
      this.quoteGeneraion.patchValue({
        EQ:
          ((this.quoteGeneraion.value.fireContent +
            this.quoteGeneraion.value.fireBuilding) *
            this.currentZone) /
          1000,
      });
    } else {
      alert("Please select Content and building");
      this.quoteGeneraion.patchValue({
        earthQuake: false,
      });
    }
  }
  setPortableComputer(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        portableComputerPre: (val * this.portableComRate) / 100, //original 1000
      });

      //  this.setAnnexureWithValue("All Risk",val);
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        portableComputer: "",
      });
    }
  }
  setElectronicEquiPre(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        electronicEquiPre: Math.round((val * this.eleEquip) / 100), // math .round+ 0.025
      });
      let _ths = this;
      setTimeout(() => {
        if (_ths.quoteGeneraion.value.electronicEquiSum > 0) {
          _ths.quoteGeneraion.patchValue({
            electronicEQ: true,
            electronicSTFI: true,
            electronicEQSum: _ths.quoteGeneraion.value.electronicEquiSum,
            electronicEQPre: (
              (_ths.quoteGeneraion.value.electronicEquiSum *
                this.electronicEqRate) /
              100
            ).toFixed(2),
            electronicSTFISum: _ths.quoteGeneraion.value.electronicEquiSum,
            electronicSTFIPre: (
              (_ths.quoteGeneraion.value.electronicEquiSum * 0.0194) /
              100
            ).toFixed(2),
          });
        }
      }, 100);
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        electronicEquiPre: "",
      });
    }
  }
  setAirCondition(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        airConditionPre: (val * this.airConditionRate) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        airCondition: "",
      });
    }
  }
  setPorGeneration(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        porGenerationPre: (val * this.portableGenRate) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        porGeneration: "",
      });
    }
  }
  setEquiOther(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        equiOtherPre: (val * this.eleEquiOther) / 100,
      });
      //  this.setAnnexureWithValue("Machinery Breakdown",val);
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        equiOther: "",
      });
    }
  }
  setPersonalAccident(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        personalAccidentPre: (val * this.personalAccidentRate) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        personalAccident: "",
      });
    }
  }
  setAccidentDeath(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        accidentDeathPre:
          (this.quoteGeneraion.value.noOfEmp *
            val *
            this.personalAccidentRate) /
          100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        accidentDeath: "0",
        noOfEmp: "",
      });
    }
  }
  setPublicLiability(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      // && this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        publicLiabilityPre: (val * this.publicLiability) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        publicLiability: "",
      });
    }
  }
  setBaggage(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        baggagePre: (val * this.baggageRate) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        baggage: "",
      });
    }
  }
  setWorkCompensation(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        workCompensationSum:
          this.quoteGeneraion.value.workCompensationEmp * (val * 12),
      });
      this.quoteGeneraion.patchValue({
        workCompensationPre:
          (this.quoteGeneraion.value.workCompensationSum * this.workRate) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        workCompensationEmp: "",
        workCompensationSalary: "",
      });
    }
  }
  setCashInTransit(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        cashInTransitPre: (val * this.moneyInsurance) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        cashInTransit: "",
      });
    }
  }
  setCashInShafe(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      // && this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        cashInShafePre: (val * this.moneyInsurance) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        cashInShafe: "",
      });
    }
  }
  setCashInCounter(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        cashInCounterPre: (val * this.moneyInsurance) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        cashInCounter: "",
      });
    }
  }
  setFidelity(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      if (this.quoteGeneraion.value.fidelityLimit > 1) {
        this.quoteGeneraion.patchValue({
          fidelitySum:
            this.quoteGeneraion.value.fidelityLimit *
            this.quoteGeneraion.value.fidelityEmp,
        });
        this.quoteGeneraion.patchValue({
          fidelityPre:
            (this.quoteGeneraion.value.fidelitySum * this.fidelityRate) / 100,
        });
      }
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        cashInCounter: "",
      });
    }
  }
  setNeonSign(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        neonSignPre: (val * this.signBoardRate) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        neonSign: "",
      });
    }
  }
  setPedalCycle(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        pedalCyclePre: (val * this.pedalCycleRate) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        pedalCycle: "",
      });
    }
  }
  setPlateGlass(val) {
    if (this.quoteGeneraion.value.fireContent > 1) {
      //&& this.quoteGeneraion.value.fireBuilding > 1
      this.quoteGeneraion.patchValue({
        plateGlassPre: (val * this.plateGlassRate) / 100,
      });
    } else {
      alert("Please select Content");
      this.quoteGeneraion.patchValue({
        plateGlass: "",
      });
    }
  }
  addElePreSTFI() {
    if (this.quoteGeneraion.value.STFIFlag) {
      this.quoteGeneraion.patchValue({
        STFI:
          ((this.quoteGeneraion.value.fireContent +
            this.quoteGeneraion.value.fireBuilding) *
            this.fireSTFI) /
            1000 +
          (this.quoteGeneraion.value.electronicEquiSum * this.eleSTFI) / 1000,
      });
    } else {
      this.quoteGeneraion.patchValue({
        STFI:
          ((this.quoteGeneraion.value.fireContent +
            this.quoteGeneraion.value.fireBuilding) *
            this.fireSTFI) /
          1000,
      });
    }
  }
  addElePreEQ() {
    if (this.quoteGeneraion.value.EQFlag) {
      this.quoteGeneraion.patchValue({
        EQ:
          ((this.quoteGeneraion.value.fireContent +
            this.quoteGeneraion.value.fireBuilding) *
            this.currentZone) /
            1000 +
          (this.quoteGeneraion.value.electronicEquiSum * this.currentZone) /
            1000,
      });
    } else {
      this.quoteGeneraion.patchValue({
        EQ:
          ((this.quoteGeneraion.value.fireContent +
            this.quoteGeneraion.value.fireBuilding) *
            this.currentZone) /
          1000,
      });
    }
  }
  saveDetails() {
    this.onSubmit = true;
    console.log(this.quoteGeneraion.value);
    if (this.quoteGeneraion.status == "VALID") {
      this.api.saveData(this.quoteGeneraion.value).subscribe(
        (sus) => {
          if (sus.ResponseFlag == 1) {
            alert("Data saved successfully");
          }
        },
        (err) => {
          console.log(err);
          alert(
            "There is some technical error! Please try again after sometime."
          );
        }
      );
    }
  }
  calculate() {
    if (
      !this.quoteGeneraion.value.fireContentsMain ||
      !this.quoteGeneraion.value.fireAlliedPerils
    ) {
      alert("Please Select Contents");
      return false;
    }
    if (
      !this.quoteGeneraion.value.setBurglaryFlag ||
      !this.quoteGeneraion.value.burglaryMain
    ) {
      alert("Please Select Contents under Burglary");
      return false;
    }
    // console.log(Object.keys(this.quoteGeneraion.value));
    // for(let i = 0; i < Object.keys(this.quoteGeneraion.value).length; i++){
    //   let kename =  Object.keys(this.quoteGeneraion.value)[i];
    //   console.log(kename);
    //   console.log(this.quoteGeneraion.value[kename.toString()]);
    // }
    if (
      this.quoteGeneraion.value.fireContent > 1 &&
      (this.quoteGeneraion.value.burglaryContentSum > 1 ||
        this.quoteGeneraion.value.burglaryPercent > 1)
    ) {
      console.log(this.quoteGeneraion.value.setBurglaryFlag1);
      this.showQuote = true;
      var discoutnSum = 0;
      if (this.quoteGeneraion.value.setBurglaryFlag1) {
        this.netPremium =
          Number(this.quoteGeneraion.value.fireBuildingPre) +
          Number(this.quoteGeneraion.value.fireContentP) +
          Number(this.quoteGeneraion.value.fireTerrPre) +
          Number(this.quoteGeneraion.value.FLOPPre) +
          Number(this.quoteGeneraion.value.ternantPre) +
          Number(this.quoteGeneraion.value.alteranteAccPre) +
          Number(this.quoteGeneraion.value.escalationPre) +
          Number(this.quoteGeneraion.value.ommissionPre) +
          Number(this.quoteGeneraion.value.burglaryPercentPre) +
          Number(this.quoteGeneraion.value.portableComputerPre) +
          Number(this.quoteGeneraion.value.electronicEquiPre) +
          Number(this.quoteGeneraion.value.electronicEQPre) +
          Number(this.quoteGeneraion.value.electronicSTFIPre) +
          Number(this.quoteGeneraion.value.airConditionPre) +
          Number(this.quoteGeneraion.value.porGenerationPre) +
          Number(this.quoteGeneraion.value.equiOtherPre) +
          Number(this.quoteGeneraion.value.personalAccidentPre) +
          Number(this.quoteGeneraion.value.accidentDeathPre) +
          Number(this.quoteGeneraion.value.publicLiabilityPre) +
          Number(this.quoteGeneraion.value.baggagePre) +
          Number(this.quoteGeneraion.value.workCompensationPre) +
          Number(this.quoteGeneraion.value.cashInTransitPre) +
          Number(this.quoteGeneraion.value.cashInShafePre) +
          Number(this.quoteGeneraion.value.cashInCounterPre) +
          Number(this.quoteGeneraion.value.fidelityPre) +
          Number(this.quoteGeneraion.value.neonSignPre) +
          Number(this.quoteGeneraion.value.pedalCyclePre) +
          Number(this.quoteGeneraion.value.plateGlassPre);
        discoutnSum =
          Number(this.quoteGeneraion.value.burglaryPercentPre) +
          Number(this.quoteGeneraion.value.airConditionPre) +
          Number(this.quoteGeneraion.value.porGenerationPre) +
          Number(this.quoteGeneraion.value.equiOtherPre) +
          Number(this.quoteGeneraion.value.electronicEquiPre) +
          Number(this.quoteGeneraion.value.cashInTransitPre) +
          Number(this.quoteGeneraion.value.cashInShafePre) +
          Number(this.quoteGeneraion.value.cashInCounterPre) +
          Number(this.quoteGeneraion.value.fidelityPre) +
          Number(this.quoteGeneraion.value.plateGlassPre) +
          Number(this.quoteGeneraion.value.neonSignPre) +
          Number(this.quoteGeneraion.value.personalAccidentPre) +
          Number(this.quoteGeneraion.value.accidentDeathPre) +
          Number(this.quoteGeneraion.value.workCompensationPre) +
          Number(this.quoteGeneraion.value.publicLiabilityPre) +
          Number(this.quoteGeneraion.value.pedalCyclePre) +
          Number(this.quoteGeneraion.value.baggagePre) +
          Number(this.quoteGeneraion.value.portableComputerPre);
          console.log(discoutnSum);
      } else {
        this.netPremium =
          Number(this.quoteGeneraion.value.fireBuildingPre) +
          Number(this.quoteGeneraion.value.fireContentP) +
          Number(this.quoteGeneraion.value.fireTerrPre) +
          Number(this.quoteGeneraion.value.FLOPPre) +
          Number(this.quoteGeneraion.value.ternantPre) +
          Number(this.quoteGeneraion.value.alteranteAccPre) +
          Number(this.quoteGeneraion.value.escalationPre) +
          Number(this.quoteGeneraion.value.ommissionPre) +
          Number(this.quoteGeneraion.value.burglaryContentPre) +
          Number(this.quoteGeneraion.value.portableComputerPre) +
          Number(this.quoteGeneraion.value.electronicEquiPre) +
          Number(this.quoteGeneraion.value.electronicEQPre) +
          Number(this.quoteGeneraion.value.electronicSTFIPre) +
          Number(this.quoteGeneraion.value.airConditionPre) +
          Number(this.quoteGeneraion.value.porGenerationPre) +
          Number(this.quoteGeneraion.value.equiOtherPre) +
          Number(this.quoteGeneraion.value.personalAccidentPre) +
          Number(this.quoteGeneraion.value.accidentDeathPre) +
          Number(this.quoteGeneraion.value.publicLiabilityPre) +
          Number(this.quoteGeneraion.value.baggagePre) +
          Number(this.quoteGeneraion.value.workCompensationPre) +
          Number(this.quoteGeneraion.value.cashInTransitPre) +
          Number(this.quoteGeneraion.value.cashInShafePre) +
          Number(this.quoteGeneraion.value.cashInCounterPre) +
          Number(this.quoteGeneraion.value.fidelityPre) +
          Number(this.quoteGeneraion.value.neonSignPre) +
          Number(this.quoteGeneraion.value.pedalCyclePre) +
          Number(this.quoteGeneraion.value.plateGlassPre);
        discoutnSum =
          Number(this.quoteGeneraion.value.burglaryContentPre) +
          Number(this.quoteGeneraion.value.airConditionPre) +
          Number(this.quoteGeneraion.value.porGenerationPre) +
          Number(this.quoteGeneraion.value.equiOtherPre) +
          Number(this.quoteGeneraion.value.electronicEquiPre) +
          Number(this.quoteGeneraion.value.cashInTransitPre) +
          Number(this.quoteGeneraion.value.cashInShafePre) +
          Number(this.quoteGeneraion.value.cashInCounterPre) +
          Number(this.quoteGeneraion.value.fidelityPre) +
          Number(this.quoteGeneraion.value.plateGlassPre) +
          Number(this.quoteGeneraion.value.neonSignPre) +
          Number(this.quoteGeneraion.value.personalAccidentPre) +
          Number(this.quoteGeneraion.value.accidentDeathPre) +
          Number(this.quoteGeneraion.value.workCompensationPre) +
          Number(this.quoteGeneraion.value.publicLiabilityPre) +
          Number(this.quoteGeneraion.value.pedalCyclePre) +
          Number(this.quoteGeneraion.value.baggagePre) +
          Number(this.quoteGeneraion.value.portableComputerPre);
      }
      this.netPremium = Number(this.netPremium.toFixed(2));
      let disLoad = 0;
      let netLocal = this.netPremium;

      if (this.quoteGeneraion.value.discount > 0) {
        disLoad = (discoutnSum * this.quoteGeneraion.value.discount) / 100;
        netLocal = this.netPremium - disLoad;
      } else {
        disLoad = (discoutnSum * this.quoteGeneraion.value.loading) / 100;
        netLocal = this.netPremium + disLoad;
      }
      this.discountLoad =
        (this.quoteGeneraion.value.discount > 0 ? "-" : "+") + String(disLoad);
      this.discountLoad = Number(this.discountLoad).toFixed(2);
      if (this.stateCode == "KR") {
        this.gst = Number(((netLocal * 18) / 100).toFixed(2));
        this.GSTNo = 18;
      } else {
        this.gst = Number(((netLocal * 18) / 100).toFixed(2));
        this.GSTNo = 18;
      }
      console.log(this.netPremium, disLoad, netLocal, this.gst);
      this.totalPre = netLocal + this.gst;
      this.totalPre = Math.ceil(this.totalPre);
      this.checkCalc = false;
      this.quoteGeneraion.patchValue({
        totalPremium: Math.floor(netLocal),
      });
      $(".coverForm input").prop("disabled", true);
      $(".fw > mat-checkbox, .one > mat-checkbox").addClass("disable");
      this.scrollToBottom();
      //this.scrollContainer = this.scrollFrame.nativeElement;
    } else {
      alert("Please select Mandatory Cover");
      return false;
    }
    this.createAnnexueList();
    return true;
  }
  setFormVal(name, value) {
    this.quoteGeneraion.get(name).setValue(value);
  }
  scrollToBottom() {
    setTimeout(() => {
      window.scroll({
        top: $("body").outerHeight(),
        behavior: "smooth",
      });
    }, 100);
  }
  // quote() {
  //   this.onSubmit = true;
  //   if (
  //     !this.quoteGeneraion.value.fireContentsMain ||
  //     !this.quoteGeneraion.value.fireAlliedPerils
  //   ) {
  //     alert("Please Select Contents");
  //     return;
  //   }
  //   if (this.checkCalc) {
  //     alert("Please click on calculate button !!");
  //     return false;
  //   }
  //   console.log(this.quoteGeneraion);
  //   if (this.quoteGeneraion.status == "VALID") {
  //     this.loading = true;
  //     let obj = this.quoteGeneraion.value;
  //     this.burglaryTotal =
  //       this.quoteGeneraion.value.burglaryContentSum +
  //       this.quoteGeneraion.value.burglaryPercentSum;
  //     obj.quoteType = "SK";
  //     obj.allData = JSON.stringify(this.quoteGeneraion.value);
  //     this.api.saveData(obj).subscribe(
  //       (sus) => {
  //         console.log(JSON.parse(sus.ResponseMessage));
  //         if (sus.ResponseFlag == 1) {
  //           alert(
  //             "Quote created : " +
  //               JSON.parse(sus.ResponseMessage).Table[0].quoteNO +
  //               " successfully!!!"
  //           );
  //           this.quoteNo = JSON.parse(sus.ResponseMessage).Table[0].quoteNO;
  //           this.addressFlag = false;
  //           this.loading = false;
  //           this.issueQuoteFlag = false;
  //           if (this.loginFlag == "2" || this.loginFlag == "3") {
  //             this.saveAndPayment = true;
  //           } else {
  //             this.saveQuoteDetailsFlag = true;
  //           }
  //           this.validateAdd();
  //           let _ths = this;
  //           setTimeout(() => {
  //             _ths.quoteGeneraion.patchValue({
  //               state: _ths.stateName,
  //               landmark: _ths.landmarkName,
  //               country: _ths.country == "IND" ? "India" : "",
  //               comstate: _ths.stateName,
  //               comlandmark: _ths.landmarkName,
  //               comcountry: _ths.country == "IND" ? "India" : "",
  //             });
  //           }, 100);
  //         }
  //       },
  //       (err) => {
  //         console.log(err);
  //         this.loading = false;
  //         alert(
  //           "There is some technical error! Please try again after sometime."
  //         );
  //       }
  //     );
  //   }
  // }
  quote() {

    this.onSubmit = true;

    // this.quoteGeneraion.get('polTenure').enable();
    // if (this.checkCalc) {
    //   alert("Please click on calculate button !!");
    //   return false;
    // }

    console.log(this.quoteGeneraion.status);
    if (this.quoteGeneraion.status == "VALID") {
      this.loading = true;
      let obj = this.quoteGeneraion.value;
      if (this.quoteGeneraion.value.covertype == "FRG") {
        obj.quoteType = "FR";
      } else if (this.quoteGeneraion.value.covertype == "FSR") {
        obj.quoteType = "FS";

      } else if (this.quoteGeneraion.value.covertype == "FUS") {
        obj.quoteType = "FU";
      } else if (this.quoteGeneraion.value.covertype == "FBG") {
        obj.quoteType = "FB";
      } else {
        obj.quoteType = "SK";
      }
      obj.totalPremium = this.TotalPerimum;
      obj.TotalSI = this.TotalSI;
      obj.loanAcNo = this.quoteGeneraion.value.loanAcNo;
      obj.ckycflag = this.quoteGeneraion.value.verfyilagf;
      obj.firePolicy = this.quoteGeneraion.value.firePolicy;
      console.log(this.quoteGeneraion.value.covertype);
      obj.allData = JSON.stringify(this.quoteGeneraion.value);
      obj.customerName = this.customerName;
      obj.policyDate= this.startdate;
      console.log(obj);
      this.api.saveRNWData(obj).subscribe((sus) => {
        console.log(sus.ResponseMessage);
        console.log(JSON.parse(sus.ResponseMessage));
        if (sus.ResponseFlag == 1) {
          alert("Quote created : " +
            JSON.parse(sus.ResponseMessage).Table[0].quoteNO +
            " successfully!!!");
          this.quoteNo = JSON.parse(sus.ResponseMessage).Table[0].quoteNO;
          this.addressFlag = false;
          this.addressflag = true;
          this.loading = false;
          this.issueQuoteFlag = false;
          if (this.loginFlag == '2' || this.loginFlag == '3') {
            this.saveAndPayment = true;
          } else {
            this.saveQuoteDetailsFlag = true;
          }
          // this.validateAdd();
          let _ths = this;
          setTimeout(() => {
            _ths.quoteGeneraion.patchValue({
              state: _ths.stateName,
              landmark: _ths.landmarkName,
              country: _ths.country == "IND" ? "India" : "",
              comstate: _ths.stateName,
              comlandmark: _ths.landmarkName,
              comcountry: _ths.country == "IND" ? "India" : ""
            });
          }, 100);
        }
      }, err => {
        console.log(err);
        alert("There is some issue with server please try again later!");
        this.loading = false;
      });
    }
  }
  createAnnexueList() {
    this.annexureWithValue = [];
    this.setAnnexureWithValue("Fire & Allied Perils", this.totalFirSum);
    this.setAnnexureWithValue("Burglary", this.burglaryTotal);
    let obj = this.quoteGeneraion.value;
    this.setAnnexureWithValue("All Risk", obj.portableComputer);
    this.setAnnexureWithValue("Electronic Equipments", obj.electronicEquiSum);
    this.setAnnexureWithValue("Machinery Breakdown", obj.airCondition);
    this.setAnnexureWithValue("Machinery Breakdown", obj.porGeneration);
    this.setAnnexureWithValue("Machinery Breakdown", obj.equiOther);
    this.setAnnexureWithValue("Personal Accident", obj.personalAccident);
    this.setAnnexureWithValue("Personal Accident", obj.accidentDeath);
    this.setAnnexureWithValue("Legal Liability", obj.publicLiability);
    this.setAnnexureWithValue("Baggage", obj.baggage);
    this.setAnnexureWithValue("Workmen Compensation", obj.workCompensationSum);
    this.setAnnexureWithValue("Money Insurance", obj.cashInTransit);
    this.setAnnexureWithValue("Money Insurance", obj.cashInShafe);
    this.setAnnexureWithValue("Money Insurance", obj.cashInCounter);
    this.setAnnexureWithValue("Employee Fidelity", obj.fidelityEmp);
    this.setAnnexureWithValue("Neon Sign / Glow Sign", obj.neonSign);
    this.setAnnexureWithValue("Pedal Cycle", obj.pedalCycle);
    this.setAnnexureWithValue("Plate Glass", obj.plateGlass);
    //this.setAnnexureWithValue("STFI", obj.STFI);
    //this.setAnnexureWithValue("Earth Quake", obj.EQ);
  }
  updateQuote() {
    let obj = this.quoteGeneraion.value;
    obj.id = this.quoteNo;
    obj.AnnexData = JSON.stringify(this.annexureForm.value.detailSections);
    obj.allData = JSON.stringify(this.quoteGeneraion.value);
    if (!this.calculate()) return;

    if (this.quoteGeneraion.status == "VALID") {
      this.api.updateQuote(obj).subscribe(
        (sus) => {
          console.log(sus);
          if (
            $("#myFile")[0].files.length == 0 &&
            $("#myFile1")[0].files.length == 0 &&
            sus.ResponseFlag == 1
          ) {
            // this.router.navigate(['quote']);
          }
        },
        (err) => {
          console.log(err);
        }
      );
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
      if (
        $("#myFile")[0].files.length > 0 ||
        $("#myFile1")[0].files.length > 0
      ) {
        this.api.uploadDoc(formData).subscribe(
          (res) => {
            console.log(res);
            this.loading = false;
            this.router.navigate(["quote"]);
          },
          (err) => {
            this.loading = false;
            console.log(err.error["text"]);
            if (err.error["text"] == "Done") {
              this.loading = false;
              this.router.navigate(["quote"]);
            }
          }
        );
      }
    }
  }
  saveQuoteDetails() {
    if (this.checkCalc) {
      alert("Please click on calculate button !!");
      return false;
    }
    this.updateQuote();
    if (this.quoteGeneraion.status == "VALID") {
      if (this.loginFlag != "1") {
        if (this.quoteGeneraion.value.paymentMethod == "") {
          alert("Please choose the payment method");
          return false;
        } else {
          let dt = new Date();
          let rdt = new Date(this.quoteGeneraion.value.policyDate);
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
        AnnexureData: this.annexureForm.value.detailSections,
        EmployeeData: JSON.stringify(this.employeeForm.value.detailEMPSections),
        quoteNo: this.quoteNo,
        trnID: this.trnID,
      };
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
        alert("Please upload Proposal Form to continue!");
      }
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
    ucoPayment.rrn_no = this.trnID;
    console.log(ucoPayment.rrn_no);
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
    ucoPayment.mob_no = String(this.quoteGeneraion.value.contactNo);
    ucoPayment.acct_no = String(this.AcNo);
    ucoPayment.maker_id = this.branchCode + "_BH";
    ucoPayment.checker_id = this.branchCode + "_ABH";
    //ucoPayment.maker_id = "1870_BH";
    //ucoPayment.checker_id = "1870_ABH";
    //ucoPayment.free_text_1=this.customerName;
    ucoPayment.insured_person_name_1 = this.customerName;
    ucoPayment.policy_name = "SHOP";
    ucoPayment.sp_code = this.quoteGeneraion.value.spCode; // "SP0071315035";

    //  this.loading = false;
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
    receiptData.clientId = this.fgClientId;
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
    obj.clientCode = this.clientNo;
    this.api.updateClient(obj).subscribe((sus) => {
      if (sus.ResponseFlag == 1) {
        let data = JSON.parse(sus.ResponseMessage).Client[0];
        if (data.Status == "Successful") {
          this.fgClientId = data.ClientId;
          receiptData.ClientId = this.fgClientId;
          if (this.payerid == "") {
            this.callReceipt(receiptData, ucoPayment);
          } else {
            this.fgReceiptNo = "";
            for (let i = 0; i < this.multipleReceipt.length; i++) {
              this.fgReceiptNo += this.multipleReceipt[i];
            }
            this.updateRctPayerID();
            this.generatePDF(ucoPayment);
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
    this.loading = true;
    this.api.getReceipt(receiptData).subscribe((sus) => {
      console.log(sus);
      this.loading = false;
      if (sus.ResponseFlag == 1) {
        let data = JSON.parse(sus.ResponseMessage).Receipt[0];
        if (data.Status == "Successful") {
          this.fgReceiptNo = data.ReceiptNo;
          let flag = this.generatePDF(ucoPayment);
        } else {
          alert("Error in generating receipt!");
          return;
        }
      }
    });
  }
  payment() {
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
          if (sus.ResponseFlag == "1") {
            this.quoteGeneraion.patchValue({
              winNo: JSON.parse(sus.ResponseMessage)["Table"][0].winnumber,
              applNo: JSON.parse(sus.ResponseMessage)["Table"][0]
                .applicationnumber,
            });
            if (this.currentStatus) {
              let tran: any = this.activeR.snapshot.paramMap.get("transData");
              console.log(tran, "Hey Raj ");
              tran = tran.split("|");

              this.loading = true;
              //ucoPayment.policy_ref_no = tran[0]+Math.floor(Math.random() * 100000);  // For UAT
              ucoPayment.policy_ref_no = tran[0]; // For Prod
              let receiptData: Receipt = new Receipt();
              this.fgClientId = tran[3];
              receiptData = this.getReceiptData(ucoPayment);
              let transDate = tran[1];
              this.showRedirectMsg = false;
              if (transDate) {
                receiptData.tranDate = this.api.getFormattedSaveDate(
                  new Date()
                ); //transDate; //"28-12-2020"// transDate; //.replace("-","/");
              }
              if (this.currentStatus == "P") {
                this.createClient(receiptData, ucoPayment);
              } else if (this.currentStatus == "I") {
                receiptData.clientId = tran[3];
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
                  this.loading = false;
                  let response = sus.split("|");
                  this.showRedirectMsg = false;
                  if (response.length == 0) {
                    alert("Something Went Wrong!!");
                    return;
                  }
                  if (response[0] == "S") {
                    this.loading = true;
                    //ucoPayment.policy_ref_no = response[2]+Math.floor(Math.random() * 100000); // For UAT
                    ucoPayment.policy_ref_no = response[2]; // For Prod
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
                    this.quoteGeneraion.disable();
                    if (response[0].includes("Could not find")) {
                      alert("Access Denied On Paymtent");
                    } else alert(response[1]);
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
    $(".fw > mat-checkbox, .one > mat-checkbox").removeClass("disable");
  }
  BOENQ() {
    let year = new Date(this.quoteGeneraion.value.policyDate).getFullYear();
    // let month = parseInt(("0" + new Date(this.quoteGeneraion.value.policyDate).getMonth()).slice(-2));
    // let day = parseInt(("0" + new Date(this.quoteGeneraion.value.policyDate).getDate()).slice(-2));
    var month = String(
      new Date(this.quoteGeneraion.value.policyDate).getMonth() + 1
    );
    month = month.length == 2 ? "0" + month : month;
    var day = String(new Date(this.quoteGeneraion.value.policyDate).getDate());
    day = day.length == 2 ? "0" + day : day;

    let startDt = year.toString() + (month + 1) + day;

    var c = new Date(year + 1, Number(month), Number(day) - 1);
    var endDt = c.getFullYear().toString() + (c.getMonth() + 1) + c.getDate();
    let sumIns =
      this.quoteGeneraion.value.fireBuilding +
      this.quoteGeneraion.value.fireContent +
      this.quoteGeneraion.value.fireTerrSum +
      this.quoteGeneraion.value.FLOPSum +
      this.quoteGeneraion.value.ternantSum +
      this.quoteGeneraion.value.alteranteAccSum +
      this.quoteGeneraion.value.escalationSum +
      this.quoteGeneraion.value.ommissionSum +
      this.quoteGeneraion.value.burglaryContentSum +
      this.quoteGeneraion.value.burglaryPercentSum +
      this.quoteGeneraion.value.portableComputer +
      this.quoteGeneraion.value.electronicEquiSum +
      this.quoteGeneraion.value.airCondition +
      this.quoteGeneraion.value.porGeneration +
      this.quoteGeneraion.value.equiOther +
      this.quoteGeneraion.value.personalAccident +
      this.quoteGeneraion.value.accidentDeath +
      this.quoteGeneraion.value.publicLiability +
      this.quoteGeneraion.value.baggage +
      this.quoteGeneraion.value.workCompensationSum +
      this.quoteGeneraion.value.cashInTransit +
      this.quoteGeneraion.value.cashInShafe +
      this.quoteGeneraion.value.cashInCounter +
      this.quoteGeneraion.value.fidelitySum +
      this.quoteGeneraion.value.neonSign +
      this.quoteGeneraion.value.pedalCycle +
      this.quoteGeneraion.value.plateGlass;
    let obj = {
      agentCode: this.userName,
      clientCode: this.fgClientId,
      startDate: startDt,
      endDate: endDt,
      pincode: this.quoteGeneraion.value.pincode,
      stateCode: this.stateCode,
      sumInsured: sumIns,
    };
    this.api.BOENQ(obj).subscribe((sus) => {
      console.log(sus);
      if (sus.ResponseFlag == 1) {
        return true;
      } else {
        return false;
      }
    });
  }
  generatePDF(ucoPayment) {

    // this.loading = true;
    // console.log(this.quoteGeneraion.value);
    // var date = new Date(this.quoteGeneraion.value.policyDate);
    // var month = String(date.getMonth() + 1);
    // month = month.length == 1 ? "0" + month : month;
    // var day = String(date.getDate());
    // day = day.length == 1 ? "0" + day : day;
    // var year = date.getFullYear();
    // var startDt = String(year) + month + day;
    // // var c = new Date(year + 1, new Date(this.quoteGeneraion.value.policyDate).getMonth(), Number(day));
    // // var emonth = String(c.getMonth() + 1);
    // // emonth = (emonth.length == 1 ? "0" + emonth : emonth);
    // // var todayDate=new Date();
    // // var eday = String(new Date(todayDate.setDate(todayDate.getDate() -1)).getDate());  // String(c.getDate() - 1);
    // // eday = (eday.length == 1 ? "0" + eday : eday);
    // // var endDt = String(c.getFullYear()) + emonth + eday;
    // let dt: any = new Date(date);
    // dt.setYear(dt.getFullYear() + 1);
    // dt = new Date(dt);
    // dt = dt.setDate(dt.getDate() - 1);
    // var endDt = this.api.getFormattedDate(dt, "yyyymmdd");
    // let sumIns =
    //   Number(
    //     this.quoteGeneraion.value.fireBuilding
    //       ? this.quoteGeneraion.value.fireBuilding
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.fireContent
    //       ? this.quoteGeneraion.value.fireContent
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.fireTerrSum
    //       ? this.quoteGeneraion.value.fireTerrSum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.FLOPSum
    //       ? this.quoteGeneraion.value.FLOPSum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.ternantSum
    //       ? this.quoteGeneraion.value.ternantSum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.alteranteAccSum
    //       ? this.quoteGeneraion.value.alteranteAccSum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.escalationSum
    //       ? this.quoteGeneraion.value.escalationSum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.ommissionSum
    //       ? this.quoteGeneraion.value.ommissionSum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.burglaryContentSum
    //       ? this.quoteGeneraion.value.burglaryContentSum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.burglaryPercentSum
    //       ? this.quoteGeneraion.value.burglaryPercentSum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.portableComputer
    //       ? this.quoteGeneraion.value.portableComputer
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.electronicEquiSum
    //       ? this.quoteGeneraion.value.electronicEquiSum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.airCondition
    //       ? this.quoteGeneraion.value.airCondition
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.porGeneration
    //       ? this.quoteGeneraion.value.porGeneration
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.equiOther
    //       ? this.quoteGeneraion.value.equiOther
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.personalAccident
    //       ? this.quoteGeneraion.value.personalAccident
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.accidentDeath
    //       ? this.quoteGeneraion.value.accidentDeath
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.publicLiability
    //       ? this.quoteGeneraion.value.publicLiability
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.baggage
    //       ? this.quoteGeneraion.value.baggage
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.workCompensationSum
    //       ? this.quoteGeneraion.value.workCompensationSum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.cashInTransit
    //       ? this.quoteGeneraion.value.cashInTransit
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.cashInShafe
    //       ? this.quoteGeneraion.value.cashInShafe
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.cashInCounter
    //       ? this.quoteGeneraion.value.cashInCounter
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.fidelitySum
    //       ? this.quoteGeneraion.value.fidelitySum
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.neonSign
    //       ? this.quoteGeneraion.value.neonSign
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.pedalCycle
    //       ? this.quoteGeneraion.value.pedalCycle
    //       : 0
    //   ) +
    //   Number(
    //     this.quoteGeneraion.value.plateGlass
    //       ? this.quoteGeneraion.value.plateGlass
    //       : 0
    //   );
    // let obj = this.quoteGeneraion.value;
    // obj.clientCode = this.fgClientId;
    // obj.startDate = startDt;
    // obj.endDate = endDt;
    // obj.stateCode = this.stateCode;
    // obj.sumInsured = sumIns;
    // obj.ratePortableComputer = this.portableComRate;
    // obj.rateElectronicEquipemnts = this.eleEquiOther;
    // obj.rateAirConditioner = this.airConditionRate;
    // obj.ratePorGenerationPre = this.portableGenRate;
    // obj.rateEquiOtherPre = this.eleEquiOther;
    // obj.agentCode = this.agentCode;
    // obj.receiptNo = this.fgReceiptNo;
    // obj.quoteNo = this.quoteNo;
    // obj.zone = this.currentZoneNo;
    // obj.bankBranch = this.fgiBRCode;
    // obj.bankBranchCode = this.fgBrachCode;
    // obj.payerID = this.payerid;
    // obj.receiptvendorname = this.receiptvendorname;

    // var date = new Date(this.quoteGeneraion.value.riskDate);
    // var month = String(date.getMonth() + 1);
    // month = (month.length == 1 ? "0" + month : month);
    // var day = String(date.getDate());
    // day = (day.length == 1 ? "0" + day : day);
    // var year = date.getFullYear();
    // var startDt = String(year) + month + day;

    // var endDt = this.quoteGeneraion.value.riskEndDate.split("/");
    // endDt = endDt[2] + endDt[0] + endDt[1];
    // console.log(startDt +":"+ endDt);
    
    // obj.startDate =startDt;
    // obj.endDate = endDt;
    // this.api.createRnwlPDF(obj).subscribe((sus) => {
    //   console.log(sus);
    //   this.loading = false;
    //   if (sus.ResponseFlag == 1) {
    //     let res = JSON.parse(sus["ResponseMessage"]).Table;
    //     this.policyText = "Policy No - ";
    //     this.policyNo = res[0]["PolicyNumber"];
    //     this.policyNo = this.policyNo.trim();
    //     if (this.policyNo) {
    //       if (!ucoPayment.policy_ref_no) {
    //         res[0] = res[0]["PolicyNumber"];
    //       }
    //       ucoPayment.policy_name = res[0]["PremiumClass"];
    //       if (this.quoteGeneraion.value.paymentMethod == "S") {
    //         this.updateUcoPolicy(ucoPayment);
    //       }
    //     } else {
    //       alert("error while generating Policy!!");
    //     }
    //     console.log(res);
    //     return true;
    //   } else {
    //     alert(sus["ResponseMessage"]);
    //     return false;
    //   }
    // });



    if (this.quoteGeneraion.value.nwpolicyno !== "") {
      this.loading = true;
      var date = new Date(this.quoteGeneraion.value.riskDate);
      var month = String(date.getMonth() + 1);
      month = (month.length == 1 ? "0" + month : month);
      var day = String(date.getDate());
      day = (day.length == 1 ? "0" + day : day);
      var year = date.getFullYear();
      var startDt = String(year) + month + day;
      console.log(startDt);

      // var endDt = this.quoteGeneraion.value.riskEndDate.split("/");
      // endDt = endDt[2] + endDt[0] + endDt[1];


      var endD = new Date(this.quoteGeneraion.value.riskEndDate);
      var monthi = String(endD.getMonth() + 1);
      monthi = (monthi.length == 1 ? "0" + monthi : monthi);
      var dayi = String(endD.getDate());
      dayi = (dayi.length == 1 ? "0" + dayi : dayi);
      var yeari = endD.getFullYear();
      let endDt = String(yeari) + monthi + dayi;
      console.log(endDt);

      var insDate = new Date(this.quoteGeneraion.value.insDate);
      var monthi = String(insDate.getMonth() + 1);
      monthi = (monthi.length == 1 ? "0" + monthi : monthi);
      var dayi = String(insDate.getDate());
      dayi = (dayi.length == 1 ? "0" + dayi : dayi);
      var yeari = insDate.getFullYear();
      let insDate1 = String(yeari) + monthi + dayi;
      var spouseDate = new Date(this.quoteGeneraion.value.spouseDate);
      monthi = String(spouseDate.getMonth() + 1);
      monthi = (monthi.length == 1 ? "0" + monthi : monthi);
      dayi = String(spouseDate.getDate());
      dayi = (dayi.length == 1 ? "0" + dayi : dayi);
      yeari = spouseDate.getFullYear();
      let spouseDate1 = String(yeari) + monthi + dayi;
      console.log(insDate1, spouseDate1);
      // let sumIns = (this.quoteGeneraion.value.fireBuilding ? this.quoteGeneraion.value.fireBuilding : 0)
      //   + (this.quoteGeneraion.value.fireContent ? this.quoteGeneraion.value.fireContent : 0);
      

      // SI
      let sumIns =
      Number(
        this.quoteGeneraion.value.fireBuilding
          ? this.quoteGeneraion.value.fireBuilding
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.fireContent
          ? this.quoteGeneraion.value.fireContent
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.fireTerrSum
          ? this.quoteGeneraion.value.fireTerrSum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.FLOPSum
          ? this.quoteGeneraion.value.FLOPSum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.ternantSum
          ? this.quoteGeneraion.value.ternantSum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.alteranteAccSum
          ? this.quoteGeneraion.value.alteranteAccSum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.escalationSum
          ? this.quoteGeneraion.value.escalationSum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.ommissionSum
          ? this.quoteGeneraion.value.ommissionSum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.burglaryContentSum
          ? this.quoteGeneraion.value.burglaryContentSum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.burglaryPercentSum
          ? this.quoteGeneraion.value.burglaryPercentSum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.portableComputer
          ? this.quoteGeneraion.value.portableComputer
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.electronicEquiSum
          ? this.quoteGeneraion.value.electronicEquiSum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.airCondition
          ? this.quoteGeneraion.value.airCondition
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.porGeneration
          ? this.quoteGeneraion.value.porGeneration
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.equiOther
          ? this.quoteGeneraion.value.equiOther
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.personalAccident
          ? this.quoteGeneraion.value.personalAccident
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.accidentDeath
          ? this.quoteGeneraion.value.accidentDeath
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.publicLiability
          ? this.quoteGeneraion.value.publicLiability
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.baggage
          ? this.quoteGeneraion.value.baggage
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.workCompensationSum
          ? this.quoteGeneraion.value.workCompensationSum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.cashInTransit
          ? this.quoteGeneraion.value.cashInTransit
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.cashInShafe
          ? this.quoteGeneraion.value.cashInShafe
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.cashInCounter
          ? this.quoteGeneraion.value.cashInCounter
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.fidelitySum
          ? this.quoteGeneraion.value.fidelitySum
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.neonSign
          ? this.quoteGeneraion.value.neonSign
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.pedalCycle
          ? this.quoteGeneraion.value.pedalCycle
          : 0
      ) +
      Number(
        this.quoteGeneraion.value.plateGlass
          ? this.quoteGeneraion.value.plateGlass
          : 0
      );
      
      let obj = this.quoteGeneraion.value;
      obj.clientCode = this.quoteGeneraion.value.clientno; //'40246539';
      obj.policyNo = this.quoteGeneraion.value.nwpolicyno;
      obj.startDate = startDt;
      obj.stateCode = this.stateCode;
      obj.endDate = endDt;
      obj.receiptNo = this.fgReceiptNo;
      obj.quoteNo = this.quoteNo;
      obj.bankBranch = this.quoteGeneraion.value.bankBranch;
      obj.bankBranchCode = this.quoteGeneraion.value.fgBrachCode1;
      obj.FGStafID = this.quoteGeneraion.value.FGStafID;
      obj.bancaSegement = this.quoteGeneraion.value.bancaSegement;
      obj.payerID = this.payerid;
      obj.receiptvendorname = this.receiptvendorname;
       obj.sumInsured = sumIns;
      console.log(obj);
      obj.startDate =startDt;
    obj.endDate = endDt;
    this.api.createRnwlPDF(obj).subscribe((sus) => {
      console.log(sus);
      this.loading = false;
      if (sus.ResponseFlag == 1) {
        let res = JSON.parse(sus["ResponseMessage"]).Table;
        this.policyText = "Policy No - ";
        this.policyNo = res[0]["PolicyNumber"];
        this.policyNo = this.policyNo.trim();
        if (this.policyNo) {
          if (!ucoPayment.policy_ref_no) {
            res[0] = res[0]["PolicyNumber"];
          }
          ucoPayment.policy_name = res[0]["PremiumClass"];
          if (this.quoteGeneraion.value.paymentMethod == "S") {
            this.updateUcoPolicy(ucoPayment);
          }
        } else {
          alert("error while generating Policy!!");
        }
        console.log(res);
        return true;
      } else {
        alert(sus["ResponseMessage"]);
        return false;
      }
    });
    } else {
      // create policy (cloning)
      let obj1 = { 'policyNo': this.quoteGeneraion.value.policyNo };
      console.log(obj1);
      if (this.quoteGeneraion.value.policyNo != '' && this.quoteGeneraion.value.riskEndDate != '') {
        this.api.getRnwpolicy(obj1).subscribe((sus) => {
          console.log(sus);
          this.loading = false;
          if (sus.ResponseFlag == 1 && JSON.parse(sus['ResponseMessage']).Table.length != 0) {
            let res = JSON.parse(sus['ResponseMessage']).Table;
            console.log(JSON.parse(sus['ResponseMessage']).Table[0]['PolicyNumber']);
            this.policyrnwNo = res[0]['PolicyNumber'];
            console.log(this.policyrnwNo);
            this.quoteGeneraion.patchValue({
              nwpolicyno: this.policyrnwNo
            });
            this.generatePDF(ucoPayment);
            this.loading = false;


          } else {

            var date = new Date(this.quoteGeneraion.value.riskDate);
            var month = String(date.getMonth() + 1);
            month = (month.length == 1 ? "0" + month : month);
            var day = String(date.getDate());
            day = (day.length == 1 ? "0" + day : day);
            var year = date.getFullYear();
            var startDt = String(year) + month + day;

            var endDt = this.quoteGeneraion.value.riskEndDate.split("/");
            endDt = endDt[2] + endDt[0] + endDt[1];
            let obj = { 'policyNo': this.quoteGeneraion.value.policyNo, 'covertype': this.quoteGeneraion.value.covertype, 'clientCode': this.quoteGeneraion.value.clientno, agentCode: this.quoteGeneraion.value.agentcode, 'startDate': startDt, 'endDate': endDt, fgBrachCode1: this.quoteGeneraion.value.fgBrachCode1, payerID: this.payerid, receiptvendorname: this.receiptvendorname, bancaSegement: this.quoteGeneraion.value.bancaSegement, bankBranch: this.quoteGeneraion.value.bankBranch, FGStafID: this.quoteGeneraion.value.FGStafID };
            console.log(obj);

            this.api.createFireRnwPDF(obj).subscribe((sus) => {
              console.log(sus);
              this.loading = false;
              if (sus.ResponseFlag == 1) {
                let res = JSON.parse(sus['ResponseMessage']).Table;
                this.policyNo = res[0]['PolicyNumber'];
                console.log(this.policyNo);
                this.quoteGeneraion.patchValue({
                  nwpolicyno: this.policyNo
                });
                this.generatePDF(ucoPayment);
                this.loading = false;
                return true;
              } else {
                alert(sus['ResponseMessage'])
                return false;
              }
            });
          }
        });
      }
    }

  }
  updateUcoPolicy(ucoPayment) {
    this.loading = true;
    this.api.ucoPayment(ucoPayment, "U").subscribe((response) => {
      this.loading = false;
      response = response.split("|");
      if (response.length == 0) {
        alert("Something Went Wrong!!");
        return;
      }
      if (response[0] == "S") {
        console.log(response[3]);
        alert("Policy generated successfully!");
        return;
      }
    });
    //console.log(ucoPayment);
  }

  

  // fetch renewal api
  getPolicy(val) {
    this.loading = true;
    // if(window.location.protocol= "http://localhost:61567/")
    //  if(window.location.protocol == "https://online.futuregenerali.in/")
    // {
    let sessionData = this.api.decy(sessionStorage.getItem('userDetails'));
    this.loginFlag = sessionData[0].loginFlag;
    this.receiptusername = sessionData[0].receiptusername;
    this.receiptvendorname = sessionData[0].receiptvendorname;
    this.obj1 = { 'userid': this.receiptvendorname, 'policyNo': val };
    // }else{
    //this.obj1 = { 'userid': 'kkhunt', 'policyNo': val };
    // }
    let obj = this.obj1;
    console.log(obj);


    // fetching policy details from BO
    this.api.getPolicyDel(obj).subscribe((sus) => {
      this.loading = true;
      console.log(JSON.parse(sus.ResponseMessage));
      let res = JSON.parse(sus.ResponseMessage).Table[0];
      let clientDetails = JSON.parse(sus.ResponseMessage).Table[1];
      // let res1 = JSON.parse(sus.ResponseMessage).Table2[0];


      if (sus.ResponseFlag == "1") {
        {
          if (res.policystatus == "AR" || res.policystatus == "MR") {
            if (res.contracttype == "FSR" || res.contracttype == "FRG" || res.contracttype == "FUS" || res.contracttype == "FBG"
            ) {

              const tables = Object.keys(JSON.parse(sus.ResponseMessage)).filter(key => key.startsWith('Table'));
            
    if (tables.length > 0) {
      const lastTableKey = tables[tables.length - 1];
      const lastTable = JSON.parse(sus.ResponseMessage)[lastTableKey];
      this.insuranceData = lastTable;
      this.addresses = JSON.parse(sus.ResponseMessage)[tables[tables.length - 3]];

    }

              //this.insuranceData= JSON.parse(sus.ResponseMessage).Table4;
              console.log(this.insuranceData);
              console.log(this.addresses);
              console.log(this.addresses[0].Adr1);
              // alert(!(JSON.parse(sus.ResponseMessage).Table5));

      //patch address 
      this.quoteGeneraion.patchValue({
        comadd1: this.addresses[1].Adr1,
        comadd2: this.addresses[1].adr2,
        comadd3: this.addresses[1].adr3,
        comcity: this.addresses[1].city,
        comlandmark: this.addresses[1].Landmark,
        comstate: this.addresses[1].state,
        comcountry: this.addresses[1].Country,
        comPincode: this.addresses[1].postcode,
      })
     


      this.insuranceData.forEach(data => {
        const type = data.CVRCDE1; // Remove any leading or trailing whitespace
        const descriptionKey = `description${type}`;
        const sumInsuredKey = `sumInsured${type}`;
        const premiumKey = `premium${type}`;
        console.log(data);
        console.log(data.CVRCDE1);
        console.log(this.parsePremiumValue(data.PREMIUM1));
        console.log(this.parsePremiumValue(data.CVRSI1));
          if(data.CVRCDE1=='1A**' || data.CVRCDE1=='1B**'){
            this.quoteGeneraion.patchValue({
              fireAlliedPerils:true
            })
            if(data.CVRCDE1=='1A**'){
              this.quoteGeneraion.patchValue({
                buildMain:true,
                fireBuildingPre:this.parsePremiumValue(data.PREMIUM1),
                fireBuilding:this.parsePremiumValue(data.CVRSI1)
              })
              
            } 
            else if(data.CVRCDE1=='1B**'){
              this.quoteGeneraion.patchValue({
                fireContentsMain:true,
                fireContentP:this.parsePremiumValue(data.PREMIUM1),
                fireContent:this.parsePremiumValue(data.CVRSI1)
              })
              
            }
            
          }
          else if(data.CVRCDE1=='2A**'){
            this.quoteGeneraion.patchValue({
              burglaryMain:true
            })
            
          }
          else if(data.CVRCDE1=='7C**'){
            this.quoteGeneraion.patchValue({
              legalLiabiity:true,
              publicLiabilityMain:true,
              publicLiabilityPre:this.parsePremiumValue(data.PREMIUM1),
              publicLiability:this.parsePremiumValue(data.CVRSI1)
          }) 
            
         } 
          else if(data.CVRCDE1=='3C**'){
            this.quoteGeneraion.patchValue({
              allRisk:true,
              portableMain:true,
              portableComputerPre:this.parsePremiumValue(data.PREMIUM1),
              portableComputer:this.parsePremiumValue(data.CVRSI1)
          }) 
            
         } 
          else if(data.CVRCDE1=='6A**'){
            this.quoteGeneraion.patchValue({
              personalAccidentMain:true,
              accidentMain:true,
              personalAccidentPre:this.parsePremiumValue(data.PREMIUM1),
              personalAccident:this.parsePremiumValue(data.CVRSI1)
          }) 
            
         } 
          else if(data.CVRCDE1=='GA**'){
            this.quoteGeneraion.patchValue({
              pedalCycleMain:true,
              pedalCycleNonMain:true,
              pedalCycle:this.parsePremiumValue(data.CVRSI1),
              pedalCyclePre:this.parsePremiumValue(data.PREMIUM1)
              
          }) 
            
         } 
          else if(data.CVRCDE1=='HA**'){
            this.quoteGeneraion.patchValue({
              neonSignGlowSign:true,
              neonSignMain:true,
              neonSign:this.parsePremiumValue(data.CVRSI1),
              neonSignPre:this.parsePremiumValue(data.PREMIUM1)

          }) 
         } 
          else if(data.CVRCDE1=='DA**'){
            this.quoteGeneraion.patchValue({
              plateGlassMain:true,
              fixedMain:true,
              plateGlass:this.parsePremiumValue(data.CVRSI1),
              plateGlassPre:this.parsePremiumValue(data.PREMIUM1)

          }) 
         } 
          else if(data.CVRCDE1=='FA**'){
            this.quoteGeneraion.patchValue({
              employeeFidelity:true,
              employeeMain:true,
              fidelitySum:this.parsePremiumValue(data.CVRSI1),
              fidelityPre:this.parsePremiumValue(data.PREMIUM1)

          }) 
         } 
          else if(data.CVRCDE1=='EA**' || data.CVRCDE1=='EB**' || data.CVRCDE1=='EC**'){
            this.quoteGeneraion.patchValue({
              moneyinsurance:true,
            }) 
             if(data.CVRCDE1=='EA**'){
              this.quoteGeneraion.patchValue({
                cashInMain:true,
                // employeeMain:true,
                cashInTransit:this.parsePremiumValue(data.CVRSI1),
                cashInTransitPre:this.parsePremiumValue(data.PREMIUM1)
  
            }) 
           } 
             else if(data.CVRCDE1=='EB**'){
              this.quoteGeneraion.patchValue({
                cashInSafeMain:true,
                // employeeMain:true,
                cashInShafe:this.parsePremiumValue(data.CVRSI1),
                cashInShafePre:this.parsePremiumValue(data.PREMIUM1)
  
            }) 
           } 
             else if(data.CVRCDE1=='EC**'){
              this.quoteGeneraion.patchValue({
                cashInCounterMain:true,
                // employeeMain:true,
                cashInCounter:this.parsePremiumValue(data.CVRSI1),
                cashInCounterPre:this.parsePremiumValue(data.PREMIUM1)
  
            }) 
           } 
         } 

         else if(data.CVRCDE1=='4A**'){
          this.quoteGeneraion.patchValue({
            electronicEquip:true,
            electronicMain:true,
            electronicEquiSum:this.parsePremiumValue(data.CVRSI1),
            electronicEquiPre:this.parsePremiumValue(data.PREMIUM1)
            
        }) 
          
       } 

       else if(data.CVRCDE1=='5B**' || data.CVRCDE1=='5C**' || data.CVRCDE1=='5D**'){
        this.quoteGeneraion.patchValue({
          machinaryBreakdown:true,
        }) 
         if(data.CVRCDE1=='5B**'){
          this.quoteGeneraion.patchValue({
            airConditionMain:true,
            // employeeMain:true,
            airCondition:this.parsePremiumValue(data.CVRSI1),
            airConditionPre:this.parsePremiumValue(data.PREMIUM1)

        }) 
       } 
         else if(data.CVRCDE1=='5C**'){
          this.quoteGeneraion.patchValue({
            portableGeneratorMain:true,
            // employeeMain:true,
            porGeneration:this.parsePremiumValue(data.CVRSI1),
            porGenerationPre:this.parsePremiumValue(data.PREMIUM1)

        }) 
       } 
         else if(data.CVRCDE1=='5D**'){
          this.quoteGeneraion.patchValue({
            equipmentMain:true,
            // employeeMain:true,
            equiOther:this.parsePremiumValue(data.CVRSI1),
            equiOtherPre:this.parsePremiumValue(data.PREMIUM1)

        }) 
       } 
     } 


      // this.quoteGeneraion.patchValue({

        // [`type${type}`]: data.Type.trim(),
        // [`SubType${type}`]: data.SubType.trim(),
        // [descriptionKey]: data.Description.trim(), // Trim any leading or trailing whitespace
        // [sumInsuredKey]: parseFloat(data.SumInsured), // Convert string to number if needed
        // [premiumKey]: parseFloat(data.PREMIUM1) // Convert string to number if needed
      // });
    });
 

    console.log(this.quoteGeneraion.value);

              //alert(res.TotalSI);
              this.coverType = res.contracttype;
              this.clienttype = res.clienttype;
              this.customerName = res.customername;
              this.clientNo = res.clientno;
              this.agentNo = res.agentno;
              this.fgBranchCode = res.servicebranch;
              this.add1 = res.addr1;
              this.add2 = res.addr2;
              this.add3 = res.addr3;
              this.add4 = res.addr4;
              this.city = res.city;
              this.state = res.state;
              this.pincode = res.pincode;
              this.TotalPerimum = res.TotalPremium;
              this.TotalSI = res.TotalSI;
              this.fgbranchName = res.branchname;
              this.OccupancyCode = res.OccupancyCode;
              this.OccupancyName = res.OccupancyDesc;
              let strdt = res.renewalpolicystartdate.split("/");
              this.startdate = strdt[1] + "/" + strdt[0] + "/" + strdt[2];
              //alert(this.startdate);
              let endt = res.renewalpolicyenddate.split("/");
              this.enddate = endt[1] + "/" + endt[0] + "/" + endt[2];

              // let startdate = this.api.getFormattedDate(this.startdate, "mm/dd/yyyy");
              // this.quoteGeneraion.patchValue({
              //   riskDate: this.startdate
              // });
              this.quoteGeneraion.patchValue({
                TotalPerimum: this.TotalPerimum,
                TotalSI: this.TotalSI,
                coverType: this.coverType,
                customerType: this.clienttype == 'Personal' ? 'Individual' : 'Organization',
                customerName: this.customerName,
                firstName: this.customerName,
                clientno: this.clientNo,
                agentcode: this.agentNo,
                fgBrachCode1: this.fgBranchCode,

                riskDate:new Date( this.startdate),
                riskEndDate: this.enddate,
                add1: this.add1,
                add2: this.add2,
                add3: this.add3,
                landmark: this.add4,
                city: this.city,
                state: this.state,
                pincode: this.pincode,
                fgbranchName: this.fgbranchName,
                OccupancyCode: this.coverType == "FSR" ? this.OccupancyCode : this.OccupancyCode + this.OccupancyName[0],
                OccupancyName: this.coverType == "FSR" ? this.OccupancyName : this.OccupancyName.slice(1),
                sumInsured:this.TotalSI,
                businessType:res.OccupancyCode
              });
              console.log(this.quoteGeneraion);

              this.getDetails(res.pincode);


              this.loading = false;
            } else {
              this.loading = false;
              alert("Invalid contract type!");
              this.clearForm();
            }

          } else {
            this.loading = false;
            alert("Renewal allow only for AR status!");
            this.clearForm();
          }
        }
      } else {
        this.loading = false;
        alert('Please enter correct policy number!');
        this.clearForm();
      }


      let Validcont = (JSON.parse(sus.responsemessage)[0].contracttype == "FRG" || JSON.parse(sus.responsemessage)[0].contracttype == "FSR");
      if (sus.responseflag == "1" && Validcont) {
        if (JSON.parse(sus.responsemessage)[0].policystatus == "AR") {
          let res = JSON.parse(sus.responsemessage)[0];
          this.TotalPerimum = JSON.parse(sus.responsemessage).Table[0].TotalPerimum;
          console.log(this.TotalPerimum);

          this.loading = false;
          // create policy (cloning)
          let obj1 = { 'policyNo': this.quoteGeneraion.value.policyNo };
          console.log(obj1);
          // if (this.quoteGeneraion.value.policyNo != '' && this.quoteGeneraion.value.riskEndDate !='' ) {
          // this.api.getRnwpolicy(obj1).subscribe((sus) => {
          //   console.log(sus);
          //   this.loading = false;
          //   if (sus.ResponseFlag == 1 && JSON.parse(sus['ResponseMessage']).Table.length != 0 ) {
          //     let res = JSON.parse(sus['ResponseMessage']).Table;
          //     console.log(JSON.parse(sus['ResponseMessage']).Table[0]['PolicyNumber']);
          //     this.policyrnwNo = res[0]['PolicyNumber'];
          //     console.log(this.policyNo);
          //     this.quoteGeneraion.patchValue({
          //       nwpolicyno: this.policyrnwNo
          //     });
          //     this.loading = false;

          //   }else {

          //     var date = new Date(this.quoteGeneraion.value.riskDate);
          //     var month = String(date.getMonth() + 1);
          //     month = (month.length == 1 ? "0" + month : month);
          //     var day = String(date.getDate());
          //     day = (day.length == 1 ? "0" + day : day);
          //     var year = date.getFullYear();
          //     var startDt = String(year) + month + day;

          //     var endDt = this.quoteGeneraion.value.riskEndDate.split("/");
          //     endDt = endDt[2] + endDt[0] + endDt[1];
          //     let obj = { 'policyNo': this.quoteGeneraion.value.policyNo, 'covertype': this.coverType, 'clientCode': this.clientNo, 'agentCode': this.agentNo, 'startDate': startDt, 'endDate': endDt, 'fgBrachCode1': this.fgBrachCode };
          //     console.log(obj);
          //     this.api.createFireRnwPDF(obj).subscribe((sus) => {
          //       console.log(sus);
          //       this.loading = false;
          //       if (sus.ResponseFlag == 1) {
          //         let res = JSON.parse(sus['ResponseMessage']).Table;
          //         this.policyNo = res[0]['PolicyNumber'];
          //         console.log(this.policyNo);
          //         this.quoteGeneraion.patchValue({
          //         nwpolicyno: this.policyNo
          //         });
          //         this.loading = false;
          //         return true;
          //       } else {
          //         alert(sus['ResponseMessage'])
          //         return false;
          //       }
          //     });
          //   }
          // });
          // } else {
          //   alert('Please fill required values!');
          // }


        }
        else {
          alert('Renewal only allow for AR status');
          this.loading = false;
          this.clearForm();
        }
      } else {
        this.loading = false;
        alert('Please enter correct policy number!');
        this.clearForm();
      }
    });
  }


  // Abinash
  parsePremiumValue(value: string): number {
    // Ensure the input premiumValue is a string and has exactly 13 characters
    if (typeof value !== 'string' || (value.length !== 12 && value.length !== 13)) {
      throw new Error('Invalid field value format');
    }

    // Check if the value has 13 digits (premium with decimals)
    if (value.length === 13) {
      const wholeNumberPart = value.slice(0, 11);
      const decimalPart = value.slice(11, 13);
      const premiumAmount = Number(`${wholeNumberPart}.${decimalPart}`);
      return premiumAmount;
    }

    // Check if the value has 12 digits (sum insured - whole number)
    if (value.length === 12) {
      // Remove leading zeros before parsing as a whole number
      const sumInsuredAmount = Number(value);
      return sumInsuredAmount;
    }

    throw new Error('Invalid field value format');
  }



  clearForm() {
    let obj = this.quoteGeneraion.controls["policyNo"].setValue("");
    this.quoteGeneraion.controls["clientno"].setValue("");
    this.quoteGeneraion.controls["customerName"].setValue("");
    this.quoteGeneraion.controls["agentcode"].setValue("");
    this.quoteGeneraion.controls["fgBrachCode1"].setValue("");
    this.quoteGeneraion.controls["coverType"].setValue("");
    this.quoteGeneraion.controls["riskDate"].setValue("");
    this.quoteGeneraion.controls["fireBuilding"].setValue("");
    this.quoteGeneraion.controls["buildMain"].setValue("");
    this.quoteGeneraion.controls["fireBuildingPre"].setValue("");
    this.quoteGeneraion.controls["fireContentsMain"].setValue("");
    this.quoteGeneraion.controls["fireContent"].setValue("");
    this.quoteGeneraion.controls["fireContentP"].setValue("");
    this.quoteGeneraion.controls["longTermTerrSum"].setValue("");
    this.quoteGeneraion.controls["longTermTerrPre"].setValue("");

  }




  setAddress(evt) {
    console.log(evt);
    if (evt.checked) {
      this.quoteGeneraion.patchValue({
        comadd1: this.quoteGeneraion.value.add1,
        comadd2: this.quoteGeneraion.value.add2,
        comadd3: this.quoteGeneraion.value.add3,
        comcity: this.quoteGeneraion.value.city,
        comlandmark: this.quoteGeneraion.value.landmark,
        comstate: this.quoteGeneraion.value.state,
        comcountry: this.quoteGeneraion.value.country,
        comPincode: this.quoteGeneraion.value.shopPincode,
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
        comPincode: "",
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
    //  this.quoteGeneraion.removeControl("idnum");
    //  this.quoteGeneraion.addControl(
    //    "idnum",
    //    new FormControl("", Validators.required)
    //  ),
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
      //    this.quoteGeneraion.removeControl("gender");
      //  this.quoteGeneraion.addControl(
      //    "gender",
      //    new FormControl("", null)
      //  ),
      this.quoteGeneraion.removeControl("add1");
    this.quoteGeneraion.addControl(
      "add1",
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
    //this.quoteGeneraion.removeControl('panNo');
    //this.quoteGeneraion.addControl('panNo', new FormControl('', Validators.required));
  }
  changeCustomerType(e) {
    console.log(e);
    let val = e.value;
    if (val == "C" || val == "Organization") {
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
  changeBusinessType(e) {
    let val = e.source.triggerValue;
    if (val == "Others") {
      alert("Refer To Ho..");
      this.setFormVal("businessType", null);
    }
  }
  setAnnexureWithValue(name, val) {
    if (val) {
      this.annexureWithValue.push({ name: name, value: val });
      console.log(this.annexureWithValue);
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
    console.log(this.quoteGeneraion.value.policyDate);
    if (this.annexureForm.value.detailSections[i].coverType != "") {
      let total = 0;
      let currentValue = this.annexureForm.value.detailSections[i].sumins;
      for (let annexure of this.annexureForm.value.detailSections) {
        if (
          annexure.coverType ==
          this.annexureForm.value.detailSections[i].coverType
        ) {
          total = total + Number(annexure.sumins);
        }
      }
      if (this.annexureForm.value.detailSections[i].coverType == "Burglary") {
        if (currentValue > this.burglaryTotal || total > this.burglaryTotal) {
          this.getCommonAnnexureError(i, this.burglaryTotal);
          // this.annexureForm.value.detailSections[i].sumins=0;
          return;
        }
      }
      if (
        this.annexureForm.value.detailSections[i].coverType ==
        "Fire & Allied Perils"
      ) {
        if (currentValue > this.totalFirSum || total > this.totalFirSum) {
          this.getCommonAnnexureError(i, this.totalFirSum);
          return;
        }
      } else {
        let annexuredata = this.annexureWithValue.filter((data) => {
          return (
            data.name == this.annexureForm.value.detailSections[i].coverType
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
        this.annexureForm.value.detailSections[i].coverType,
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
  contactNo(data) {
    if (data.length != 10) {
      alert("Please Enter 10 digit only");
      this.setFormVal("contactNo", null);
    }
  }
  getDetails(val, type = "O") {
    this.loading = true;
    let obj = { pincode: val };
    this.api.getStateCode(obj).subscribe(
      (sus) => {
        if (sus.ResponseFlag == 1) {
          let res = JSON.parse(sus["ResponseMessage"]).Table;
          if (res.length) {
            if (type == "O") {
              this.stateCode = res[0].StateCode;
              console.log(this.stateName);
              this.stateName = res[0].StateName.replace("&", "And");
              this.country = res[0].CountryCode;
              this.stateCode = res[0].StateCode;
              this.landmarkName = res[0].LandmarkName;
              this.api
                .getEQZone(res[0].DistrictName, res[0].StateName)
                .subscribe((sus) => {
                  this.loading = false;
                  if (sus.ResponseFlag == 1) {
                    let res = JSON.parse(sus["ResponseMessage"]).Table;
                    if (res.length) {
                      let zone = res[0].Zone;
                      this.currentZoneNo = zone;
                      if (zone == "1") {
                        this.currentZone = this.zone1;
                      } else if (zone == "2") {
                        this.currentZone = this.zone2;
                      } else if (zone == "3") {
                        this.currentZone = this.zone3;
                      } else {
                        this.currentZone = this.zone4;
                      }
                      this.FLOP =
                        this.buildingRate + this.fireSTFI + this.currentZone;
                      this.setRiskRate("NH");
                      this.quoteGeneraion.controls["zoneNo"].setValue(zone);
                    } else {
                      alert("Zone not fetched please select mannualy!!");
                      this.quoteGeneraion.controls["zoneNo"].setValue("");
                    }
                  }
                });
            } else {
              this.loading = false;
            }
          } else {
            if (type == "O") {
              this.quoteGeneraion.controls["pincode"].setValue("");
              alert("Invalid Pin code, Please check!");
            }
          }
        } else {
          alert("Invalid Pin code, Please check!");
        }
        this.loading = false;
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
      return true;
      //this.quoteGeneraion.controls[formControlName].setErrors("");
    }
  }
  policyDownload(i) {
    console.log(i);
    this.router.navigate(["policyCopy", i]);
  }

  policystart() {
    this.quoteGeneraion.patchValue({
      pincode: "",
      zoneNo: "",
      fireBuildingPre: "",
      fireContent: "",
      fireContentP: "",
      fireBuilding: "",
    });
  }

  verifyckyc() {
    this.loading = true;

    // this.updateQuote();

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
                    this.quoteGeneraion.value.customerType == "C"
                      ? sus.result.customer_name
                      : sus.result.first_name +
                        " " +
                        (sus.result.middle_name == null
                          ? ""
                          : sus.result.middle_name),
                  lastName:
                    this.quoteGeneraion.value.customerType == "C"
                      ? ""
                      : sus.result.last_name,
                  idnum: sus.result.id_num,
                  proposal: "",
                });
                this.loading = false;
                alert("CKYC Status : verified!");
                this.verfyilagf = true;
                this.disableckyc = true;
                let text =
                  "On Click of OK, you are agreeing to issue the policy with CKYC name Please confirm ? \n" +
                  sus.result.customer_name;
                if (confirm(text) == true) {
                  $(".coverForm input").prop("disabled", true);
                } else {
                  $(".coverForm input").prop("disabled", false);
                }
              } else {
                this.loading = false;
                alert("CKYC Status : Verification failed!");
                this.verfyilagf = true;
                this.disableckyc = true;

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
  setRiskRate(v) {
    console.log(v, this.currentZoneNo);
    var date = new Date(this.quoteGeneraion.value.policyDate);
    var month = String(date.getMonth() + 1);
    month = month.length == 1 ? "0" + month : month;
    var day = String(date.getDate());
    day = day.length == 1 ? "0" + day : day;
    var year = date.getFullYear();
    var startDt = String(year) + month + day;

    this.policystartDt = startDt;
    // console.log(this.policystartDt);
    if (this.policystartDt < "20220412") {
      this.riskRate =
        v == "NH"
          ? this.currentZoneNo == "1"
            ? 1.111
            : this.currentZoneNo == "2"
            ? 1.011
            : this.currentZoneNo == "3"
            ? 0.97
            : 0.921
          : v == "H"
          ? this.currentZoneNo == "1"
            ? 0.747
            : this.currentZoneNo == "2"
            ? 0.604
            : this.currentZoneNo == "3"
            ? 0.533
            : 0.462
          : 0;
      // this.riskRate =0.53;
      console.log(this.riskRate);
      this.electronicEqRate =
        this.currentZoneNo == "1"
          ? 0.05
          : this.currentZoneNo == "2"
          ? 0.025
          : this.currentZoneNo == "3"
          ? 0.01
          : 0.005;
      this.flopRate =
        this.currentZoneNo == "1"
          ? 1.177
          : this.currentZoneNo == "2"
          ? 1.048
          : this.currentZoneNo == "3"
          ? 0.983
          : 0.919;
    } else {
      this.riskRate = 0.53;
      this.electronicEqRate =
        this.currentZoneNo == "1"
          ? 0.05
          : this.currentZoneNo == "2"
          ? 0.025
          : this.currentZoneNo == "3"
          ? 0.01
          : 0.005;
      this.flopRate =
        this.currentZoneNo == "1"
          ? 1.177
          : this.currentZoneNo == "2"
          ? 1.048
          : this.currentZoneNo == "3"
          ? 0.983
          : 0.919;
    }
    console.log(this.riskRate);
    this.setLodDis();
  }
  setLodDis() {
    let ageBuild = this.quoteGeneraion.value.ageOfBuild;
    let fireProtet = this.quoteGeneraion.value.fireProtection;
    let conDtls = this.quoteGeneraion.value.constructDetails;
    let prvLoss = this.quoteGeneraion.value.previousLoos;
    let loadDisc =
      Number(ageBuild) + Number(fireProtet) + Number(conDtls) + Number(prvLoss);
    this.loadingDisc = Number(
      (this.riskRate + (this.riskRate * loadDisc) / 100).toFixed(4)
    );
    if (this.quoteGeneraion.value.fireBuilding > 1) {
      this.buildIngPre(this.quoteGeneraion.value.fireBuilding, "1A**");
    }
    if (this.quoteGeneraion.value.fireContent > 1) {
      this.fireContentPre(this.quoteGeneraion.value.fireContent);
    }
    if (this.quoteGeneraion.value.FLOPSum > 1) {
      this.setFLOPPre(this.quoteGeneraion.value.FLOPSum);
    }
  }
  setSpCode(o) {
    console.log(o);
    this.bankName = o.bankname;
    this.branchName = o.BRANCH_NAME;
    console.log(this.branchName);
    this.branchCode = o.SOL_ID;
    this.fgBrachCode = o.FGBranchCode;
    console.log(this.fgBrachCode);
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
    console.log(val);
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
    console.log(v.instrumentdate, e);
    if (e.target.checked) {
      this.totalRA += parseInt(v.balanceamt);
      this.multipleReceipt.push(v.receiptno);
      this.payerid = v.code;
      this.instrumentdate = v.instrumentdate;
    } else {
      this.totalRA = this.totalRA - v.balanceamt;
      this.multipleReceipt.splice(v.receiptno);
    }
    console.log(this.multipleReceipt);
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
  getAge() {}
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
    console.log(c);
    return (
      (c > 64 && c < 91) ||
      (c > 96 && c < 123) ||
      c == 8 ||
      c == 32 ||
      (c >= 48 && c <= 57)
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

  setPolTenure(val) {
    if (this.quoteGeneraion.value.fireBuilding > 1) {
      if (this.quoteGeneraion.value.buildingAge == "" || this.quoteGeneraion.value.fireProtection == "" || this.quoteGeneraion.value.roundTheClock == "") {
        alert("Please select all mandatory drop down!");
        this.quoteGeneraion.patchValue({
          fireBuilding: 0,
          fireContentP: 0
        });
        return false;
      }
    }
    //this.setDiscount();
    this.changRiskStart();
  }

  changRiskStart() {
    let date = this.quoteGeneraion.value.riskDate;
    
    
    alert(this.startdate);
    this.startdate= this.api.getFormattedDate(date, "mm/dd/yyyy")
    alert(this.startdate);
    if (date) {
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      var c = new Date(year + this.quoteGeneraion.value.polTenure, Number(month), Number(day) - 1);
      var endDt = c.getFullYear().toString() + "-" + (c.getMonth() + 1) + "-" + c.getDate();
      endDt = this.api.getFormattedDate(endDt, "mm/dd/yyyy");
      this.quoteGeneraion.patchValue({
        riskEndDate: endDt
      });
    }
  }

  
}
