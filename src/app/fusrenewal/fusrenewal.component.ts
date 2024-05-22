import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { CommonService } from "../common.service";
import $ from "jquery";
import { ActivatedRoute, Router } from "@angular/router";
import { UCOPaymentModel } from "src/model/ucoPaymentModel";
import { Receipt } from "src/model/receipt";
import * as data from "../json/18092023occupation.json";
import * as data1 from "../json/occupation1.json";
declare var AJL;
interface Animal {
  name: string;
  value: string;
}

@Component({
  selector: 'app-fusrenewal',
  templateUrl: './fusrenewal.component.html',
  styleUrls: ['./fusrenewal.component.scss']
})
export class FusrenewalComponent implements OnInit {

  animals: Animal[] = [
    { name: "Mr", value: "Mr" },
    { name: "Mrs", value: "Mrs" },
  ];

  occupationList = data1;
  occupationList1 = data;

  covers: Animal[] = [
    { name: "Building", value: "1A**" },
    { name: "Content", value: "1B**" },
    { name: "Tenant Liability", value: "1L**" },
    { name: "Alternate Accommodation", value: "1M**" },
    { name: "Escalation", value: "1O**" },
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
  removalDebrisRate = 0.345;
  consultingRate = 0.345;
  escalationRate = 0.1725;

  impactRate = 0.01725;
  ommissionRate = 0.345;
  terrorisRate = 0.23;
  stfiRate = 0.075;
  eleEquip = 1.0;
  eleSTFI = 0.3;
  zone1 = 0.25;
  zone2 = 0.15;
  zone3 = 0.1;
  zone4 = 0.05;
  verfyilagf = false;
  ckycflag = false;
  industirlzone1 = 1.0;
  industirlzone2 = 0.5;
  industirlzone3 = 0.2;
  industirlzone4 = 0.1;
  nonIndustirlzone1 = 0.5;
  nonIndustirlzone2 = 0.3;
  nonIndustirlzone3 = 0.2;
  nonIndustirlzone4 = 0.1;
  currentZone = 0.05;
  currentZoneNo = "1";
  fgReceiptNo = "";
  totalBasicPremium = 0;
  basicOoccupationRate = 0;
  basicOoccupationRateTemp = 0;
  sfspStfiRate = 0;
  sfspStfiRateFix = 0;
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
  tenureList = ["1"];
  showQuote = false;
  onSubmit = false;
  checkCalc = true;
  addressFlag = true;
  issueQuoteFlag = true;
  updateQuoteFlag = false;
  saveQuoteDetailsFlag = false;
  saveAndPayment = false;
  makePaymentFlag = false;
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
  sumInsuredLimit: number;
  distancebrigade: any;
  basementstoa: any;
  goodhousek: any;
  electInswiring: any;
  distancebrigad: string;
  basementst: string;
  goodhouse: string;
  electInswir: string;
  detailExpData = [];
  quoteNo = "";
  totalFirSum = 0;
  branchFlag = true;
  ridrectToPay = false;
  showRedirectMsg = true;
  customerName = "";
  bankCustID = "";
  FGStafID = "";
  fgiBRCode;
  AcNo: any;
  trnID: any;
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
  country = "";
  fgBrachCode;
  industrialType = "";
  decline = "No";
  loadingDisc: number;
  yrDiscount: number;
  buildDisc: number;
  discountLoad = "";
  filterTicket = "";
  disableckyc = false;
  loginFlag = "";
  branchList = [];
  occupationObj: any;
  receiptList = [];
  showReceipt = false;
  totalRA = 0;
  multipleReceipt = [];
  payerid = "";
  disableValue = false;
  instrumentdate = "";
  duplicateNameFalg = false;
  checkReceiptAmt = false;
  disableSelect = false;
  checkBurglaryAmt = 0;
  paymentOptReq = false;
  checkBurgalaryPolicy = false;
  receiptusername = "";
  receiptvendorname = "";
  ageOfBuildingCode = "";
  fireProtectionCode = "";
  constructDetailsCode = "";
  landmarkName = "";
  policyNo1 = "";
  burgalarypolicyNo = "";
  bankName = "";
  changerate = "";
  ckycref = false;
  obj1: { userid: string; policyNo: any; };

  nwpolicyno = '';

  insuranceData: any;
  addresses: any;
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
  policystartDt: string;
  riskRate: number;
  electronicEqRate: number;
  flopRate: number;
  addressflag: boolean;
  policyrnwNo: any;
  policyIssuedFlag: boolean = false;
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
      policyNo: new FormControl('', Validators.required),
      bankName: new FormControl("", Validators.required),
      proposal: new FormControl("", null),
      createdBy: new FormControl("", Validators.required),
      branchName: new FormControl("", Validators.required),
      bankBranch: new FormControl("", Validators.required),
      fgBrachCode1: new FormControl("", Validators.required),
      fgbranchName: new FormControl("", Validators.required),
      tranType: new FormControl("Renewal", Validators.required),
      coverType: new FormControl("SFSP", Validators.required),
      customerType: new FormControl("Individual", Validators.required),
      salutation: new FormControl("", Validators.required),
      firstName: new FormControl("", Validators.required),
      // lastName: new FormControl("", Validators.required),
      contactNo: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      bankStaffID: new FormControl("", null),
      bankCustID: new FormControl("", null),
      FGStafID: new FormControl("", Validators.required),
      customerAcNo: new FormControl("", null),
      financInterest: new FormControl("", null),
      loanAcNo: new FormControl("", null),
      bankRefNo: new FormControl("", null),
      businessDesc: new FormControl(""),
      imdGeneral: new FormControl("", null),
      businessType: new FormControl("", null),
      loadingDisc: new FormControl("", null),
      pincode: new FormControl("", Validators.required),
      zoneNo: new FormControl("", Validators.required),
      spCode: new FormControl("", Validators.required),
      clientno: new FormControl('', Validators.required),
      polTenure: new FormControl("1", Validators.required),
      riskDate: new FormControl("", Validators.required),
      riskEndDate: new FormControl("", Validators.required),
      bancaSegement: new FormControl("", null),
      riskOcc: new FormControl("NH", Validators.required),
      OccupancyCode: new FormControl('', Validators.required),
      OccupancyName: new FormControl('', Validators.required),
      // buildingAge: new FormControl('', Validators.required),
      constructDetails: new FormControl("", null),
      distancebrigade: new FormControl("", null),
      basementstoa: new FormControl("", null),
      goodhousek: new FormControl("", null),
      electInswiring: new FormControl("", null),
      fireProtection: new FormControl("", null),
      buildingdetails: new FormControl("", null),
      plinthFounddetails: new FormControl("", null),
      plantMacndetails: new FormControl("", null),
      furnFixFitdetails: new FormControl("", null),
      fireContentdetails: new FormControl("", null),
      stockdetails: new FormControl("", null),
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
      country: new FormControl("India", null),
      comadd1: new FormControl("", null),
      comadd2: new FormControl("", null),
      comadd3: new FormControl("", null),
      comcity: new FormControl("", null),
      comlandmark: new FormControl("", null),
      comstate: new FormControl("", null),
      comcountry: new FormControl("India", null),
      panNo: new FormControl("", null),
      GSTNo: new FormControl("", null),
      iibLoading: new FormControl("", null),
      // fireAlliedPerils: new FormControl(false),
      buildingCode: new FormControl("", null),
      fireBuilding: new FormControl(null, null),
      fireBuildingPre: new FormControl(0, null),
      fireContent: new FormControl(null, null),
      fireContentP: new FormControl(0, null),
      plinthFound: new FormControl(null, null),
      plinthFoundP: new FormControl(0, null),
      plantMac: new FormControl(null, null),
      plantMacP: new FormControl(0, null),
      furnFixFit: new FormControl(null, null),
      furnFixFitP: new FormControl(0, null),
      stock: new FormControl(null, null),
      stockP: new FormControl(0, null),
      stockSel: new FormControl("", null),
      discount: new FormControl(0, null),
      loading: new FormControl(0, null),
      // otherStock: new FormControl(null, null),
      // otherStockP: new FormControl(null, null),
      longTermTerrorism: new FormControl("", null),
      fireTerrSum: new FormControl(null, null),
      longTermTerrSum: new FormControl(null, null),
      fireTerrPre: new FormControl(0, null),
      burglaryRate: new FormControl(null, null),
      burglarySum: new FormControl(null, null),
      burglaryPre: new FormControl(0, null),
      coverContentSum: new FormControl(null, null),
      coverContentPre: new FormControl(0, null),
      PASelfSum: new FormControl(null, null),
      PASelfPre: new FormControl(0, null),
      PASpouseSum: new FormControl(null, null),
      PASpousePre: new FormControl(0, null),
      longTermTerrPre: new FormControl(0, null),
      escalation: new FormControl("", null),
      escalationSum: new FormControl(null, null),
      escalationPre: new FormControl(null, null),
      ommission: new FormControl("", null),
      // for ckyc
      fullname: new FormControl("", null),
      idnum: new FormControl("", null),
      dobDate: new FormControl("", null),
      idtype: new FormControl("", null),
      gender: new FormControl("", null),
      ckycno: new FormControl(null, null),
      ommissionSum: new FormControl(null, null),
      ommissionPre: new FormControl(null, null),
      impactDamage: new FormControl(null, null),
      removalDebris: new FormControl(null, null),
      removalDebrisP: new FormControl(0, null),
      noOfEmp: new FormControl(null, null),
      insuredAge: new FormControl(null, null),
      nomineeName: new FormControl(null, null),
      nomineeRel: new FormControl("", null),
      STFIFlag: new FormControl(null, null),
      STFI: new FormControl(null, null),
      STFIPre: new FormControl(0, null),
      STFISel: new FormControl("YES", null),
      EQFlag: new FormControl(null, null),
      EQ: new FormControl(null, null),
      winNo: new FormControl("", null),
      applNo: new FormControl("", null),
      printFlag: new FormControl("", null),
      totalPremium: new FormControl(0, null),
      setBurglaryFlag1: new FormControl(null, null),
      burglaryPercent: new FormControl(null, null),
      PAFlag: new FormControl(null, null),
      eqMain: new FormControl(false),
      buildMain: new FormControl(false),
      fireContentsMain: new FormControl(false),
      plinthFoundMain: new FormControl(false),
      plantMacMain: new FormControl(false),
      furnFixFitMain: new FormControl(false),
      stockMain: new FormControl(false),
      terrorismMain: new FormControl(false),
      burglarymMain: new FormControl(false),
      coverContent: new FormControl(false),
      PASelfMain: new FormControl(false),
      PASpouseMain: new FormControl(false),
      nwpolicyno: new FormControl(''),

    });
    let myPastDate = new Date(this.maximumRiskD);
    myPastDate.setDate(myPastDate.getDate() - 30);
    this.maximumRiskD = new Date(myPastDate);
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
      this.userName = sessionData[0].UserId;
      this.agentCode = sessionData[0].AgentCode;
      this.fgiBRCode = sessionData[0].FGI_BR_CODE;
      this.spCode = sessionData[0].SPCode;
      this.bankName = sessionData[0].bankname;
      console.log(this.bankName);
    }
    //  alert(this.agentCode);

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
            this.changeCustomerType({ value: allData.customerType });
            this.policyNo = res[0].policyNumber;
            this.burgalarypolicyNo = res[0].policyNumber_burglary
              ? res[0].policyNumber_burglary
              : "";
            //this.currentStatus = res[0].currentStatus;
            setTimeout(() => {
              this.quoteGeneraion.patchValue({
                add1: allData.add1,
                add2: allData.add2,
                add3: allData.add3,
                city: allData.city,
                landmark: allData.landmark,
                state: allData.state,
                country: allData.country,
                comadd1: allData.comadd1,
                comadd2: allData.comadd2,
                comadd3: allData.comadd3,
                comcity: allData.comcity,
                comlandmark: allData.comlandmark,
                comstate: allData.comstate,
                comcountry: allData.comcountry,
                panNo: allData.panNo,
                GSTNo: allData.GSTNo,
                businessType: allData.businessType,
                buildingAge: allData.buildingAge,
                fireProtection: allData.fireProtection,
                constructDetails: allData.constructDetails,
                polTenure: allData.polTenure,
              });
            }, 100);
            this.loadingDisc =
              Number(allData.buildingAge) +
              Number(allData.fireProtection) +
              Number(allData.constructDetails);
            this.setRateAsPerOccupation(allData.businessType);
            this.quoteNo = res[0].quoteNo;
            this.trnID = res[0].trnID;

            this.totalFirSum =
              allData.fireBuilding +
              allData.fireContent +
              allData.plinthFound +
              allData.plantMac +
              allData.furnFixFit +
              allData.stock;

            allData.coverContent
              ? this.setAnnexureWithValue(
                "Cover for Valuable Contents",
                allData.coverContentSum
              )
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
            setTimeout(() => {
              $(".coverForm input").prop("disabled", true);
              $(".fw > mat-checkbox, .one > mat-checkbox").addClass("disable");
            }, 500);

            this.issueQuoteFlag = false;
            if (this.userName == res[0].createdBy) {
              if (this.loginFlag == "2" || this.loginFlag == "3") {
                this.paymentOptReq = true;
                this.makePaymentFlag = true;
              } else {
                this.updateQuoteFlag = true;
              }
              if (allData.burglarymMain && res[0].policyNumber_burglary == "") {
                this.makePaymentFlag = true;
                this.checkBurgalaryPolicy = true;
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
              this.maximumDOB = d;
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
            console.log(this.totalPre);
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
  }

  changeCustomerType(e) {
    let val = e.value;
    if (val == "Organization") {
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
      coverType: new FormControl("", Validators.required),
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
      } else if (type == "PF") {
        //plinthFound
        this.setFormVal("plinthFoundP", 0);
        this.setFormVal("plinthFound", 0);
      } else if (type == "PM") {
        this.setFormVal("plantMacP", 0);
        this.setFormVal("plantMac", 0);
      } else if (type == "FF") {
        this.setFormVal("furnFixFitP", 0);
        this.setFormVal("furnFixFit", 0);
      } else if (type == "S") {
        this.setFormVal("stockP", 0);
        this.setFormVal("stock", 0);
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
      Number(this.quoteGeneraion.value.fireContentP) +
      Number(this.quoteGeneraion.value.plinthFoundP) +
      Number(this.quoteGeneraion.value.plantMacP) +
      Number(this.quoteGeneraion.value.furnFixFitP) +
      Number(this.quoteGeneraion.value.stockP);
    this.totalFirSum =
      this.quoteGeneraion.value.fireBuilding +
      this.quoteGeneraion.value.fireContent +
      this.quoteGeneraion.value.plinthFound +
      this.quoteGeneraion.value.plantMac +
      this.quoteGeneraion.value.furnFixFit +
      this.quoteGeneraion.value.stock;
    this.checkBurglaryAmt =
      this.quoteGeneraion.value.furnFixFit +
      this.quoteGeneraion.value.plantMac +
      this.quoteGeneraion.value.stock +
      this.quoteGeneraion.value.fireContent;
    if (this.checkBurglaryAmt > 0 && this.quoteGeneraion.value.burglaryRate) {
      this.checkRate(this.quoteGeneraion.value.burglaryRate);
    }
  }
  checkMandateDropDown(formName) {
    // if (this.quoteGeneraion.value.fireProtection == "") {
    // alert("Please select all mandatory drop down!");
    // console.log(formName);
    // this.quoteGeneraion.get(formName).setValue(0);
    // return false;
    // } else {
    this.setTerrPre();
    return true;
    // }
  }
  buildIngPre(val, code) {
    this.setTotalFirSum();
    let flag = this.checkMandateDropDown("fireBuilding");
    if (flag) {
      this.quoteGeneraion.patchValue({
        fireBuildingPre: Number(
          (val * this.basicOoccupationRate) / 1000
        ).toFixed(2),
      });
    }
    this.quoteGeneraion.patchValue({
      buildingCode: code,
    });
  }
  fireContentPre(val) {
    this.setTotalFirSum();
    let flag = this.checkMandateDropDown("fireContent");
    if (flag) {
      this.quoteGeneraion.patchValue({
        fireContentP: Number(
          ((val * this.basicOoccupationRate) / 1000).toFixed(2)
        ),
      });
    }
  }
  plinthFoundPre(val) {
    this.setTotalFirSum();
    let flag = this.checkMandateDropDown("plinthFound");
    if (flag) {
      this.quoteGeneraion.patchValue({
        plinthFoundP: Number(
          ((val * this.basicOoccupationRate) / 1000).toFixed(2)
        ),
      });
    }
  }
  plantMacPre(val) {
    this.setTotalFirSum();
    let flag = this.checkMandateDropDown("plantMac");
    if (flag) {
      this.quoteGeneraion.patchValue({
        plantMacP: Number(
          ((val * this.basicOoccupationRate) / 1000).toFixed(2)
        ),
      });
    }
  }
  furnFixFitPre(val) {
    this.setTotalFirSum();
    let flag = this.checkMandateDropDown("furnFixFit");
    if (flag) {
      this.quoteGeneraion.patchValue({
        furnFixFitP: Number(
          ((val * this.basicOoccupationRate) / 1000).toFixed(2)
        ),
      });
    }
  }
  stockPre(val) {
    this.setTotalFirSum();
    let flag = this.checkMandateDropDown("stock");
    if (flag) {
      this.quoteGeneraion.patchValue({
        stockP: Number(((val * this.basicOoccupationRate) / 1000).toFixed(2)),
      });
    }
  }
  checkRate(v) {
    if (v < 0.1) {
      alert("Rate cannot less then 0.10");
      this.quoteGeneraion.patchValue({
        burglaryRate: 0,
      });
    } else {
      let amt = (this.checkBurglaryAmt * v) / 1000;
      this.quoteGeneraion.patchValue({
        burglarySum: this.checkBurglaryAmt,
        burglaryPre: amt,
      });
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
    this.coverType = val;
    if (val == "SK") {
      this.router.navigate(["fgForm"]);
    }
    if (val == "SFSP") {
      this.router.navigate(["sfsp"]);
    }
    else if (val == "FSL") {
      this.router.navigate(["fsl"]);
    } else if (val == "GLL") {
      this.router.navigate(["gll"]);
    }
    else {
      this.router.navigate(["fireForm"]);
    }
  }
  setBuildRate() {
    if (this.quoteGeneraion.value.polTenure > 9) {
      this.buildingRate = 0.00007;
    } else if (this.quoteGeneraion.value.polTenure == 3) {
      this.buildingRate = 0.000119;
    } else if (this.quoteGeneraion.value.polTenure == 4) {
      this.buildingRate = 0.000112;
    } else if (this.quoteGeneraion.value.polTenure == 5) {
      this.buildingRate = 0.000105;
    } else if (this.quoteGeneraion.value.polTenure == 6) {
      this.buildingRate = 0.000098;
    } else if (this.quoteGeneraion.value.polTenure == 7) {
      this.buildingRate = 0.000091;
    } else if (this.quoteGeneraion.value.polTenure == 8) {
      this.buildingRate = 0.000084;
    } else if (this.quoteGeneraion.value.polTenure == 9) {
      this.buildingRate = 0.000077;
    } else {
      this.buildingRate = this.basicOoccupationRate;
    }
  }
  range(start, end) {
    if (start === end) return [start];
    return [start, ...this.range(start + 1, end)];
  }
  setTerrPre() {
    let amount = 0;
    if (this.totalFirSum > 0) {
      amount = Number(
        ((this.totalFirSum * this.terrorisRate) / 1000).toFixed(2)
      );
      this.quoteGeneraion.patchValue({
        terrorismMain: true,
        fireTerrSum: Number(this.totalFirSum.toFixed(2)),
        fireTerrPre: Number(amount.toFixed(2)),
        // totalsum: Number((this.totalFirSum).toFixed(2))
      });
    } else {
      this.quoteGeneraion.patchValue({
        terrorismMain: false,
        fireTerrSum: 0,
        fireTerrPre: 0,
      });
    }
    // if(this.totalFirSum > this.sumInsuredLimit){
    //   alert('Total sum insured limit is Exceed');
    //   return false;

    // }
    //  return true;

    this.setTotalFirSum("N");
  }
  changRiskStart() {
     this.setRateAsPerOccupation(this.changerate);
    let date = this.quoteGeneraion.value.riskDate;
    console.log(date);
    if (date) {
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      //polTenure
      var c = new Date(
        year + Number(this.quoteGeneraion.value.polTenure),
        Number(month),
        Number(day) - 1
      );
      var endDt =
        c.getFullYear().toString() +
        "-" +
        (c.getMonth() + 1) +
        "-" +
        c.getDate();
      console.log(endDt);
      endDt = this.api.getFormattedDate(endDt, "mm/dd/yyyy");
      this.quoteGeneraion.patchValue({
        riskEndDate: endDt,
      });
      console.log(endDt);
      // if (endDt < '05/31/2023'){
      //   this.occupationList = data;
      //   // var o = this.occupationList['default'].find(function(data, i){
      //   //   if(data.Risk_Code === this.changerate){
      //   //     return data;
      //   //   }
      //   //   console.log(o,'Karthikl ')
      //   // });
      //   console.log(this.occupationList);
      // }else{
      //   this.occupationList = data1;
      //   console.log(this.occupationList);

      // }
    }
  }
  saveDetails() {
    this.onSubmit = true;
    console.log(this.quoteGeneraion.value);
    if (this.quoteGeneraion.status == "VALID") {
      this.api.saveData(this.quoteGeneraion.value).subscribe(
        (sus) => {
          console.log(sus);
          if (sus.ResponseFlag == 1) {
            alert("Data saved successfully");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  calculate() {
    this.showQuote = true;
    this.netPremium =
      Number(this.quoteGeneraion.value.fireBuildingPre) +
      Number(this.quoteGeneraion.value.fireContentP) +
      Number(this.quoteGeneraion.value.plinthFoundP) +
      Number(this.quoteGeneraion.value.plantMacP) +
      Number(this.quoteGeneraion.value.furnFixFitP) +
      Number(this.quoteGeneraion.value.stockP) +
      Number(this.quoteGeneraion.value.fireTerrPre) +
      Number(this.quoteGeneraion.value.burglaryPre);
    this.netPremium = parseFloat(this.netPremium.toFixed(3));
    let disLoad = 0;
    let netLocal = this.netPremium;
    this.discountLoad =
      (this.quoteGeneraion.value.discount > 0 ? "-" : "+") + disLoad.toFixed(2);
    this.gst = parseFloat(((netLocal * 18) / 100).toFixed(2));
    this.totalPre = netLocal + this.gst;
    this.totalPre = Math.round(this.totalPre);
    this.checkCalc = false;
    this.quoteGeneraion.patchValue({
      totalPremium: this.netPremium,
    });
    $(".coverForm input").prop("disabled", true);
    this.disableSelect = true;
    this.disableValue = true;
    $(".fw > mat-checkbox, .one > mat-checkbox").addClass("disable");
    this.quoteGeneraion.get("polTenure").disable();
    this.scrollToBottom();
    this.createAnnexueList();
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

    // this.quoteGeneraion.get('polTenure').enable();
    // if (this.checkCalc) {
    //   alert("Please click on calculate button !!");
    //   return false;
    // }

    console.log(this.quoteGeneraion.status);
    if (this.quoteGeneraion.status == "VALID") {
      this.loading = true;
      let obj = this.quoteGeneraion.value;
      if (this.quoteGeneraion.value.coverType == "FRG") {
        obj.quoteType = "FR";
      } else if (this.quoteGeneraion.value.coverType == "FSR") {
        obj.quoteType = "FS";

      } else if (this.quoteGeneraion.value.coverType == "FUS") {
        obj.quoteType = "FU";
      } else if (this.quoteGeneraion.value.coverType == "FBG") {
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
      obj.policyDate = this.startdate;
      console.log(obj);
      this.api.saveRNWData1(obj).subscribe((sus) => {
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
    //this.setAnnexureWithValue("Fire & Allied Perils", this.totalFirSum);
    let obj = this.quoteGeneraion.value;
    //this.setAnnexureWithValue("STFI", obj.STFI);
    //this.setAnnexureWithValue("Earth Quake", obj.EQ);
    this.setAnnexureWithValue(
      "Cover for Valuable Contents",
      obj.coverContentSum
    );
  }
  updateQuote() {
    let obj = this.quoteGeneraion.value;
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
    if (this.quoteGeneraion.status == "VALID") {
      if (this.loginFlag != "1") {
        if (this.quoteGeneraion.value.paymentMethod == "") {
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
      //if ($('#myFile')[0].files.length > 0){
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
                console.log(res);
                this.loading = false;
                if (this.loginFlag == "1") {
                  this.router.navigate(["quote"]);
                } else {
                  this.payment();
                }
              },
              (err) => {
                this.loading = false;
                console.log(err.error["text"]);
                if (
                  err.error["text"] == "Done" ||
                  err.error["text"] == "Success"
                ) {
                  this.loading = false;
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
      // }else{
      //   alert("Please upload Proposal Form to continue!")
      // }
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
    ucoPayment.premium_amt = String(this.netPremium);
    ucoPayment.gst = String(this.gst);
    ucoPayment.total_amt = String(this.totalPre);
    ucoPayment.sum_assured_amt = String(this.totalFirSum);
    ucoPayment.cust_id = this.bankCustID;
    //ucoPayment.FGStafID = this.FGStafID;
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
    //  ucoPayment.cust_relation=this.quoteGeneraion.value.cus
    ucoPayment.nominee_name = this.quoteGeneraion.value.nomineeRel;
    ucoPayment.email_id = this.quoteGeneraion.value.email;
    ucoPayment.mob_no = this.quoteGeneraion.value.contactNo;
    ucoPayment.acct_no = String(this.AcNo);
    //ucoPayment.maker_id = "1870_BH";
    //ucoPayment.checker_id = "1870_ABH";
    ucoPayment.maker_id = this.branchCode + "_BH";
    ucoPayment.checker_id = this.branchCode + "_ABH";
    //ucoPayment.free_text_1=this.customerName;
    ucoPayment.insured_person_name_1 = this.customerName;
    ucoPayment.policy_name = "SFSP";
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
    console.log(this.quoteGeneraion);
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
              console.log(tran);
              tran = tran.split("|");
              this.loading = true;
              //ucoPayment.policy_ref_no = tran[0]+Math.floor(Math.random() * 100000);  // For UAT
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
                if (this.checkBurgalaryPolicy) {
                  this.generateBurglaryPDF();
                } else {
                  this.updateUcoPolicy(ucoPayment);
                }
              } else if (this.currentStatus == "C") {
                this.generateBurglaryPDF();
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
          } else {
            this.loading = false;
            this.ridrectToPay = false;
            alert("There is some server issue please try again.");
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
    this.disableValue = true;
    $(".fw > mat-checkbox, .one > mat-checkbox").removeClass("disable");
    this.quoteGeneraion.get("polTenure").enable();
    //this.issueQuoteFlag = false;
    if (this.makePaymentFlag) {
      this.makePaymentFlag = false;
    }
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
      Number(this.quoteGeneraion.value.fireBuilding) +
      Number(this.quoteGeneraion.value.fireContent) +
      Number(this.quoteGeneraion.value.plinthFound) +
      Number(this.quoteGeneraion.value.plantMac) +
      Number(this.quoteGeneraion.value.furnFixFit) +
      Number(this.quoteGeneraion.value.stock) +
      Number(this.quoteGeneraion.value.consultingFees) +
      Number(this.quoteGeneraion.value.removalDebris);
    //+ this.quoteGeneraion.value.otherStock
    // +  Number(this.quoteGeneraion.value.impactDamage)
    //  +  Number(this.quoteGeneraion.value.fireTerrSum)
    //    +  Number(this.quoteGeneraion.value.escalationSum)
    //     +  Number(this.quoteGeneraion.value.ommissionSum)
    let obj = {
      agentCode: this.userName,
      clientCode: "40246539",
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
      obj.agentCode = this.agentCode;
      obj.zone = this.quoteGeneraion.value.zoneNo;
      console.log(obj);
      obj.startDate = startDt;
      obj.endDate = endDt;
      this.api.generate_FUS_PDF(obj).subscribe((sus) => {
        console.log(sus);
        this.loading = false;
        if (sus.ResponseFlag == 1) {
          let res = JSON.parse(sus["ResponseMessage"]).Table;
          this.policyText = "Policy No - ";
          this.policyNo = res[0]["PolicyNumber"];
          this.policyNo = this.policyNo.trim();
          this.policyIssuedFlag = true;
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
  generateBurglaryPDF() {
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
    let sumIns =
      (this.quoteGeneraion.value.fireBuilding
        ? this.quoteGeneraion.value.fireBuilding
        : 0) +
      (this.quoteGeneraion.value.fireContent
        ? this.quoteGeneraion.value.fireContent
        : 0) +
      (this.quoteGeneraion.value.plinthFound
        ? this.quoteGeneraion.value.plinthFound
        : 0) +
      (this.quoteGeneraion.value.plantMac
        ? this.quoteGeneraion.value.plantMac
        : 0) +
      (this.quoteGeneraion.value.furnFixFit
        ? this.quoteGeneraion.value.furnFixFit
        : 0) +
      (this.quoteGeneraion.value.stock ? this.quoteGeneraion.value.stock : 0) +
      (this.quoteGeneraion.value.consultingFees
        ? this.quoteGeneraion.value.consultingFees
        : 0) +
      (this.quoteGeneraion.value.removalDebris
        ? this.quoteGeneraion.value.removalDebris
        : 0);
    let obj = this.quoteGeneraion.value;
    obj.clientCode = this.fgClientId; //'40246539';
    obj.startDate = startDt;
    obj.endDate = endDt;
    obj.stateCode = this.stateCode;
    obj.sumInsured = this.checkBurglaryAmt;
    obj.agentCode = this.agentCode;
    let tran: any = this.activeR.snapshot.paramMap.get("transData");
    console.log(tran);
    if (tran != null && tran != "") {
      tran = tran.split("|");
      obj.receiptNo = tran[2];
    } else {
      obj.receiptNo = this.multipleReceipt[0];
    }
    obj.quoteNo = this.quoteNo;
    obj.bankBranch = this.fgiBRCode;
    obj.bankBranchCode = this.fgBrachCode;
    obj.insDate = insDate1;
    obj.spouseDate = spouseDate1;
    obj.zone = "0" + this.currentZoneNo;
    obj.ageOfBuildingCode = this.ageOfBuildingCode;
    obj.fireProtectionCode = this.fireProtectionCode;
    obj.constructDetailsCode = this.constructDetailsCode;
    obj.payerID = this.payerid;
    obj.receiptvendorname = this.receiptvendorname;
    obj.policyNo = this.policyNo;
    if (this.loadingDisc < 0) {
      obj.sign = "+";
      obj.discount = this.loadingDisc.toString().substring(1);
    } else {
      obj.sign = "-";
      obj.discount = this.loadingDisc;
    }
    this.api.generateBuglaryPDF(obj).subscribe((sus) => {
      console.log(sus);
      this.loading = false;
      //this.router.navigate(['quote']);
      if (sus.ResponseFlag == 1) {
        this.policyText = "Policy No - ";
        this.policyNo = this.policyNo;
        this.policyNo1 = sus.ResponseMessage;
        return true;
      } else {
        alert(sus.ResponseMessage);
        console.log(sus.ResponseMessage);
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
    this.api.get_FUS_PolicyDel(obj).subscribe((sus) => {
      this.loading = true;
      console.log(JSON.parse(sus.ResponseMessage));
      let res = JSON.parse(sus.ResponseMessage).Table[0];
      let clientDetails = JSON.parse(sus.ResponseMessage).Table[1];
      // let res1 = JSON.parse(sus.ResponseMessage).Table2[0];


      if (sus.ResponseFlag == "1") {
        {
          if (res.policystatus == "AR" || res.policystatus == "MR") {
            //if (res.contracttype == "FSR" || res.contracttype == "FRG" || res.contracttype == "FUS" || res.contracttype == "FBG")
            if (res.contracttype == "FUS") {

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
                // if(data.CVRCDE1=='1A**' || data.CVRCDE1=='1B**'){
                this.quoteGeneraion.patchValue({
                  fireAlliedPerils: true
                })
                if (data.CVRCDE1.trim() == '002') {
                  this.quoteGeneraion.patchValue({
                    buildMain: true,
                    fireBuilding: this.parsePremiumValue(data.CVRSI1),
                    fireBuildingPre: this.parsePremiumValue(data.PREMIUM1)
                  })

                }
                else if (data.CVRCDE1.trim() == '001') {
                  this.quoteGeneraion.patchValue({
                    plinthFoundMain: true,
                    plinthFoundP: this.parsePremiumValue(data.PREMIUM1),
                    plinthFound: this.parsePremiumValue(data.CVRSI1)
                  })

                }
                else if (data.CVRCDE1.trim() == '005') {
                  this.quoteGeneraion.patchValue({
                    plantMacMain: true,
                    plantMacP: this.parsePremiumValue(data.PREMIUM1),
                    plantMac: this.parsePremiumValue(data.CVRSI1)
                  })

                }
                else if (data.CVRCDE1.trim() == '006') {
                  this.quoteGeneraion.patchValue({
                    furnFixFitMain: true,
                    furnFixFitP: this.parsePremiumValue(data.PREMIUM1),
                    furnFixFit: this.parsePremiumValue(data.CVRSI1)
                  })

                }
                else if (data.CVRCDE1.trim() == '016') {
                  this.quoteGeneraion.patchValue({
                    stockMain: true,
                    stockP: this.parsePremiumValue(data.PREMIUM1),
                    stock: this.parsePremiumValue(data.CVRSI1)
                  })

                }
                else if (data.CVRCDE1.trim() == '008') {
                  this.quoteGeneraion.patchValue({
                    fireContentsMain: true,
                    fireContentP: this.parsePremiumValue(data.PREMIUM1),
                    fireContent: this.parsePremiumValue(data.CVRSI1)
                  })

                }

                // } 
                else if (data.CVRCDE1 == '2A**') {
                  this.quoteGeneraion.patchValue({
                    burglaryMain: true
                  })

                }
                else if (data.CVRCDE1 == '7C**') {
                  this.quoteGeneraion.patchValue({
                    legalLiabiity: true,
                    publicLiabilityMain: true,
                    publicLiabilityPre: this.parsePremiumValue(data.PREMIUM1),
                    publicLiability: this.parsePremiumValue(data.CVRSI1)
                  })

                }
                else if (data.CVRCDE1 == '3C**') {
                  this.quoteGeneraion.patchValue({
                    allRisk: true,
                    portableMain: true,
                    portableComputerPre: this.parsePremiumValue(data.PREMIUM1),
                    portableComputer: this.parsePremiumValue(data.CVRSI1)
                  })

                }
                else if (data.CVRCDE1 == '6A**') {
                  this.quoteGeneraion.patchValue({
                    personalAccidentMain: true,
                    accidentMain: true,
                    personalAccidentPre: this.parsePremiumValue(data.PREMIUM1),
                    personalAccident: this.parsePremiumValue(data.CVRSI1)
                  })

                }
                else if (data.CVRCDE1 == 'GA**') {
                  this.quoteGeneraion.patchValue({
                    pedalCycleMain: true,
                    pedalCycleNonMain: true,
                    pedalCycle: this.parsePremiumValue(data.CVRSI1),
                    pedalCyclePre: this.parsePremiumValue(data.PREMIUM1)

                  })

                }
                else if (data.CVRCDE1 == 'HA**') {
                  this.quoteGeneraion.patchValue({
                    neonSignGlowSign: true,
                    neonSignMain: true,
                    neonSign: this.parsePremiumValue(data.CVRSI1),
                    neonSignPre: this.parsePremiumValue(data.PREMIUM1)

                  })
                }
                else if (data.CVRCDE1 == 'DA**') {
                  this.quoteGeneraion.patchValue({
                    plateGlassMain: true,
                    fixedMain: true,
                    plateGlass: this.parsePremiumValue(data.CVRSI1),
                    plateGlassPre: this.parsePremiumValue(data.PREMIUM1)

                  })
                }
                else if (data.CVRCDE1 == 'FA**') {
                  this.quoteGeneraion.patchValue({
                    employeeFidelity: true,
                    employeeMain: true,
                    fidelitySum: this.parsePremiumValue(data.CVRSI1),
                    fidelityPre: this.parsePremiumValue(data.PREMIUM1)

                  })
                }
                else if (data.CVRCDE1 == 'EA**' || data.CVRCDE1 == 'EB**' || data.CVRCDE1 == 'EC**') {
                  this.quoteGeneraion.patchValue({
                    moneyinsurance: true,
                  })
                  if (data.CVRCDE1 == 'EA**') {
                    this.quoteGeneraion.patchValue({
                      cashInMain: true,
                      // employeeMain:true,
                      cashInTransit: this.parsePremiumValue(data.CVRSI1),
                      cashInTransitPre: this.parsePremiumValue(data.PREMIUM1)

                    })
                  }
                  else if (data.CVRCDE1 == 'EB**') {
                    this.quoteGeneraion.patchValue({
                      cashInSafeMain: true,
                      // employeeMain:true,
                      cashInShafe: this.parsePremiumValue(data.CVRSI1),
                      cashInShafePre: this.parsePremiumValue(data.PREMIUM1)

                    })
                  }
                  else if (data.CVRCDE1 == 'EC**') {
                    this.quoteGeneraion.patchValue({
                      cashInCounterMain: true,
                      // employeeMain:true,
                      cashInCounter: this.parsePremiumValue(data.CVRSI1),
                      cashInCounterPre: this.parsePremiumValue(data.PREMIUM1)

                    })
                  }
                }

                else if (data.CVRCDE1 == '4A**') {
                  this.quoteGeneraion.patchValue({
                    electronicEquip: true,
                    electronicMain: true,
                    electronicEquiSum: this.parsePremiumValue(data.CVRSI1),
                    electronicEquiPre: this.parsePremiumValue(data.PREMIUM1)

                  })

                }

                else if (data.CVRCDE1 == '5B**' || data.CVRCDE1 == '5C**' || data.CVRCDE1 == '5D**') {
                  this.quoteGeneraion.patchValue({
                    machinaryBreakdown: true,
                  })
                  if (data.CVRCDE1 == '5B**') {
                    this.quoteGeneraion.patchValue({
                      airConditionMain: true,
                      // employeeMain:true,
                      airCondition: this.parsePremiumValue(data.CVRSI1),
                      airConditionPre: this.parsePremiumValue(data.PREMIUM1)

                    })
                  }
                  else if (data.CVRCDE1 == '5C**') {
                    this.quoteGeneraion.patchValue({
                      portableGeneratorMain: true,
                      // employeeMain:true,
                      porGeneration: this.parsePremiumValue(data.CVRSI1),
                      porGenerationPre: this.parsePremiumValue(data.PREMIUM1)

                    })
                  }
                  else if (data.CVRCDE1 == '5D**') {
                    this.quoteGeneraion.patchValue({
                      equipmentMain: true,
                      // employeeMain:true,
                      equiOther: this.parsePremiumValue(data.CVRSI1),
                      equiOtherPre: this.parsePremiumValue(data.PREMIUM1)

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
                covertype: res.contracttype,
                riskDate: new Date(this.startdate),
                riskEndDate: this.enddate,
                add1: this.add1,
                add2: this.add2,
                add3: this.add3,
                landmark: this.add4,
                city: this.city,
                state: this.state,
                pincode: this.pincode,
                fgbranchName: this.fgbranchName,
                OccupancyCode: this.coverType == "FRG" ? this.OccupancyCode : this.OccupancyCode + this.OccupancyName[0],
                OccupancyName: this.coverType == "FRG" ? this.OccupancyName : this.OccupancyName.slice(1),
                sumInsured: this.TotalSI,
                businessType: res.OccupancyCode
              });
              console.log(this.quoteGeneraion);
              this.getDetails(res.pincode);
              this.setRateAsPerOccupation(res.OccupancyCode);

              this.setTerrPre();
              //alert("called");
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
  clearForm() {
    throw new Error("Method not implemented.");
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
    if (this.annexureForm.value.detailSections[i].coverType != "") {
      let total = 0;
      let currentValue = this.annexureForm.value.detailSections[i].sumins;
      for (let annexure of this.annexureForm.value.detailSections) {
        if (
          annexure.coverType ==
          this.annexureForm.value.detailSections[i].coverType
        ) {
          total = total + annexure.sumins;
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
  getDetails(val) {
    this.loading = true;
    let obj = { pincode: val };
    this.api.getStateCode(obj).subscribe(
      (sus) => {
        if (sus.ResponseFlag == 1) {
          let res = JSON.parse(sus["ResponseMessage"]).Table;
          if (res.length) {
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
                    this.currentZoneNo = res[0].Zone;
                    this.quoteGeneraion.controls["zoneNo"].setValue(
                      this.currentZoneNo
                    );
                    // alert(this.currentZoneNo);
                    this.setBasicOccupationRate(this.currentZoneNo);
                  } else {
                    alert("Zone not fetched please select mannualy!!");
                    this.quoteGeneraion.controls["zoneNo"].setValue("");
                  }
                }
              });
          } else {
            this.quoteGeneraion.controls["pincode"].setValue("");
            alert("Invalid Pin code, Please check!");
            this.loading = false;
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
      if (this.totalFirSum > this.sumInsuredLimit) {
        this.quoteGeneraion.controls[formControlName].setValue("");
        this.quoteGeneraion.controls[formControlName1].setValue("");
        this.quoteGeneraion.patchValue({
          fireTerrSum: 0,
          fireTerrPre: 0,
        });
        alert("Sum Insured is beyond the limit, Refer to UW");
        return false;
      }
      return true;
    }
  }
  policyDownload(i) {
    console.log(i);
    //let id = this.api.ency(i);
    this.router.navigate(["policyCopy", i]);
  }

  setRateAsPerOccupation(val) {
    
    // if (this.quoteGeneraion.value.riskDate == '')
    // {
    //  alert('Please select risk start date first!!');
    //  console.log(this.quoteGeneraion.value.businessType);
    //  this.quoteGeneraion.patchValue({
    //   businessType: '--Select--'
    // });

    // }

    console.log(val);

    // let date = this.quoteGeneraion.value.riskDate;
    // console.log(date);
    // if(date){
    //   let year = date.getFullYear();
    //   console.log(year);
    //   let month = date.getMonth();
    //   let day = date.getDate();
    //   //polTenure
    //   var c = new Date(year + Number(this.quoteGeneraion.value.polTenure), Number(month), Number(day) - 1);
    //   var endDt = c.getFullYear().toString() + "-" + (c.getMonth() + 1) + "-" + c.getDate();
    //   console.log(endDt);
    //   endDt = this.api.getFormattedDate(endDt, "mm/dd/yyyy");
    //   this.quoteGeneraion.patchValue({
    //     riskEndDate: endDt
    //   });
    //   console.log(endDt);
    //     if (endDt < '06/30/2023'){
    //   var o = this.occupationList['default'].find(function(item, i){
    //     if(item.Risk_Code === val){
    //       return item;
    //     }
    //   });
    // }else{
    var o = this.occupationList1["default"].find(function (item, i) {
      if (item.Risk_Code === val) {
        return item;
      }
    });
    // alert(o);
    if (o) {
      this.sumInsuredLimit = o.Sum_insured_limit;
      this.terrorisRate = o.Terrorism_Rate;
      this.industrialType = o.Industrial_Type;
      this.decline = o.Decline;
      this.basicOoccupationRateTemp = o.Zone[Number(this.currentZoneNo) - 1];
      console.log(this.basicOoccupationRateTemp);
      this.occupationObj = o;
    }
    this.setDiscount();
  }

  setBasicOccupationRate(z) {
    // alert("called");
    this.basicOoccupationRateTemp = this.occupationObj.Zone[z - 1];
    console.log(this.basicOoccupationRateTemp);
    this.setDiscount();
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

  setLodDis() { }

  resetloading() {
    if (this.quoteGeneraion.value.constructDetails !== 0) {
      this.quoteGeneraion.patchValue({
        constructDetails: 0,
      });
    }
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
                    this.quoteGeneraion.value.customerType == "Organization"
                      ? sus.result.customer_name
                      : sus.result.first_name +
                      " " +
                      (sus.result.middle_name == null
                        ? ""
                        : sus.result.middle_name),
                  lastName:
                    this.quoteGeneraion.value.customerType == "Organization"
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
                // this.updateQuote();
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

  setDiscount() {
    //alert("called");
    // let ageBuild = this.quoteGeneraion.value.buildingAge;
    let fireProtet = this.quoteGeneraion.value.fireProtection;
    let constructDetails = this.quoteGeneraion.value.constructDetails;
    let distancebrigad = this.quoteGeneraion.value.distancebrigade;
    let basementst = this.quoteGeneraion.value.basementstoa;
    let goodhouse = this.quoteGeneraion.value.goodhousek;
    let electInswir = this.quoteGeneraion.value.electInswiring;
    // this.ageOfBuildingCode = ageBuild == "5" ? "0005" : ageBuild == "0" ? "0000" : "0000";
    // this.fireProtectionCode = fireProtet == '2.5' ? "PREX" : fireProtet == "5" ? "HYRD" : fireProtet == "10" ? "FOAM" :fireProtet == "-10" ? "NFEA" : "00";
    // console.log(constructDetails);
    // this.ageOfBuildingCode= ageBuild;
    this.fireProtectionCode =
      fireProtet == "-5" ? "HYRD" : fireProtet == "0" ? "NFEA" : "NOTA";
    this.constructDetailsCode =
      constructDetails == "0"
        ? "PUKA"
        : constructDetails == "5"
          ? "KUCH"
          : "NOTA";
    this.distancebrigad =
      distancebrigad == "0"
        ? "0016"
        : distancebrigad == "-5"
          ? "0015"
          : distancebrigad == "-10"
            ? "0010"
            : "NOTA";
    this.basementst = basementst == "5" ? "YESS" : "NOTA";
    this.goodhouse = goodhouse == "5" ? "NONO" : "NOTA";
    this.electInswir = electInswir == "5" ? "LWEI" : "NOTA";

    this.loadingDisc =
      Number(constructDetails) +
      Number(fireProtet) +
      Number(distancebrigad) +
      Number(basementst) +
      Number(goodhouse) +
      Number(electInswir);
    console.log(this.loadingDisc);
    this.quoteGeneraion.patchValue({
      loadingDisc: this.loadingDisc,
    });
    if (this.loadingDisc > 0) {
      let parameterDisc =
        (this.basicOoccupationRateTemp * this.loadingDisc) / 100;
      this.basicOoccupationRate = this.basicOoccupationRateTemp + parameterDisc;
      var m = Number(
        (Math.abs(this.basicOoccupationRate) * 10000).toPrecision(15)
      );
      this.basicOoccupationRate =
        (Math.round(m) / 10000) * Math.sign(this.basicOoccupationRate);
      console.log(this.basicOoccupationRate);
    } else if (this.loadingDisc < 0) {
      let parameterDisc =
        (this.basicOoccupationRateTemp * this.loadingDisc) / 100;
      this.basicOoccupationRate = this.basicOoccupationRateTemp + parameterDisc;
      var m = Number(
        (Math.abs(this.basicOoccupationRate) * 10000).toPrecision(15)
      );
      this.basicOoccupationRate =
        (Math.round(m) / 10000) * Math.sign(this.basicOoccupationRate);
    } else if (this.loadingDisc == 0) {
      let parameterDisc =
        (this.basicOoccupationRateTemp * this.loadingDisc) / 100;
      this.basicOoccupationRate = this.basicOoccupationRateTemp - parameterDisc;
      var m = Number(
        (Math.abs(this.basicOoccupationRate) * 10000).toPrecision(15)
      );
      this.basicOoccupationRate =
        (Math.round(m) / 10000) * Math.sign(this.basicOoccupationRate);
    }

    if (this.quoteGeneraion.value.fireBuilding > 0) {
      this.buildIngPre(this.quoteGeneraion.value.fireBuilding, "1A**");
    }
    if (this.quoteGeneraion.value.fireContent > 0) {
      this.fireContentPre(this.quoteGeneraion.value.fireContent);
    }
    if (this.quoteGeneraion.value.plinthFound > 0) {
      this.plinthFoundPre(this.quoteGeneraion.value.plinthFound);
    }
    if (this.quoteGeneraion.value.plantMac > 0) {
      this.plantMacPre(this.quoteGeneraion.value.plantMac);
    }
    if (this.quoteGeneraion.value.furnFixFit > 0) {
      this.furnFixFitPre(this.quoteGeneraion.value.furnFixFit);
    }
    if (this.quoteGeneraion.value.stock > 0) {
      this.stockPre(this.quoteGeneraion.value.stock);
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
    console.log(amount);
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
        alert("Loading Cannot be greater then 100%");
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
    //alert(this.agentCode);
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
      if (this.checkBurgalaryPolicy) {
        this.checkReceiptAmt = false;
        this.showReceipt = false;
      } else {
        if (this.totalRA < this.totalPre) {
          this.checkReceiptAmt = true;
        } else {
          this.checkReceiptAmt = false;
          this.showReceipt = false;
        }
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
    this.setBasicOccupationRate(v);
  }
}

