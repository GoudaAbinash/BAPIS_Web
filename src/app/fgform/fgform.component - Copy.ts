// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// import { CommonService } from '../common.service';
// import $ from 'jquery';
// import { ActivatedRoute, Router } from '@angular/router';
// import { UCOPaymentModel } from 'src/model/ucoPaymentModel';
// import { Receipt } from 'src/model/receipt';

// interface Animal { name: string; value: string; }

// @Component({
//   selector: 'app-fgform',
//   templateUrl: './fgform.component.html',
//   styleUrls: ['./fgform.component.scss']
// })
// export class FGFormComponent implements OnInit {
//   animals: Animal[] = [
//     { name: 'Mr', value: 'Mr' },
//     { name: 'Mrs', value: 'Mrs' },
//   ];
//   books: Animal[] = [
//     { name: 'Aquarium', value: '0336' },
//     { name: 'Automobile spare parts excluding Tyre', value: '0336' },
//     { name: 'Bakery products', value: '0336' },
//     { name: 'Beauty Salon and Barbar shops', value: '0336' },
//     { name: 'Book stores', value: '0336' },
//     { name: 'Canned Juices', value: '0336' },
//     { name: 'CDs, DVDs store', value: '0336' },
//     { name: 'Dairy shops', value: '0336' },
//     { name: 'Electric and hardware stores', value: '0336' },
//     { name: 'Florist Shops', value: '0336' },
//     { name: 'Frozen Food', value: '0336' },
//     { name: 'Fruits and Vegetables shop', value: '0336' },
//     { name: 'General stores', value: '0336' },
//     { name: 'Gifts shops and stores', value: '0336' },
//     { name: 'Glass trading shops', value: '0336' },
//     { name: 'Grocery Shop Like FMCG(Fast Moving Consumable Goods)', value: '0336' },
//     { name: 'Internet surfing/ cyber shops/Gaminig', value: '0336' },
//     { name: 'Laundry Shops', value: '0336' },
//     { name: 'Marble and Granite shops', value: '0336' },
//     { name: 'Meat shops and Fish shop', value: '0336' },
//     { name: 'Medical and General stores', value: '0336' },
//     { name: 'Mobile repairing shop', value: '0336' },
//     { name: 'Motor Vechile showroom', value: '0033' },
//     { name: 'Optician(Sells Glass and Contact Lenses)', value: '0336' },
//     { name: 'Others', value: '0031' },
//     { name: 'Pet Shops', value: '0336' },
//     { name: 'Plumbing and sanitory stores', value: '0336' },
//     { name: 'Pulses', value: '0336' },
//     { name: 'Pulses and Cereals', value: '0336' },
//     { name: 'Stationery', value: '0336' },
//     { name: 'Supermarket', value: '0336' },
//     { name: 'Tailor shops', value: '0336' },
//     { name: 'Tea, Coffee and Juices', value: '0336' },
//     { name: 'Toys Store', value: '0336' },
//     { name: 'Trading of Steel, Bricks, Cements', value: '0336' },
//     { name: 'Watches', value: '0336' },
//     { name: 'Chemical Shop', value: '0031' },
//     { name: 'Fire-cracker', value: '0031' },
//   ];
//   covers: Animal[] = [
//     { name: 'Building', value: '1A**' },
//     { name: 'Content', value: '1B**' },
//     { name: 'Tenant Liability', value: '1L**' },
//     { name: 'Alternate Accommodation', value: '1M**' },
//     { name: 'Escalation', value: '1O**' },
//     { name: 'Omission to Insure Addition', value: '1P**' }
//   ]
//   Burglary: Animal[] = [
//     { name: 'Content', value: '2A**' },
//     { name: 'First Loss Percentage', value: '' },
//   ]
//   Percentage = [
//     { name: '25' },
//     { name: '40' },
//     { name: '50' },
//     { name: '75' },
//   ]
//   Nominee: Animal[] = [
//     { name: 'Brother', value: 'BRO' },
//     { name: 'Sister', value: 'SIS' },
//     { name: 'ETC', value: 'ETC' }
//   ]
//   Alliedcheck = false;
//   buildingRate =0.66// 0.66;
//   terrorism = 0.15;
//   fireSTFI = 0.15;
//   eleEquip = 1.0;
//   eleSTFI = 0.300;
//   zone1 = 0.25;
//   zone2 = 0.15;
//   zone3 = 0.10;
//   zone4 = 0.05;
//   currentZone = 0.10;
//   portableComRate = 2.0;
//   airConditionRate = 2.5;
//   portableGenRate = 1.6; fgReceiptNo;
//   eleEquiOther = 1.0; burglaryTotal = 0;
//   FLOP = this.buildingRate + this.fireSTFI + this.currentZone;
//   burglaryRate =2;//0.2
//   personalAccidentRate = 0.15;
//   publicLiability = 0.1;
//   baggageRate = 1.5;
//   workRate = 0.55;
//   moneyInsurance = 0.25;
//   fidelityRate = 1.25;
//   signBoardRate = 2;
//   plateGlassRate = 1.0;
//   pedalCycleRate = 1.5;
//   quoteGeneraion: any;
//   netPremium = 0;
//   gst = 0;
//   totalPre = 0; annexureWithValue = [];
//   showQuote = false;
//   onSubmit = false;
//   checkCalc = true; 
//   addressFlag = true;
//   issueQuoteFlag = true;
//   updateQuoteFlag = false;
//   saveQuoteDetailsFlag = false;
//   makePaymentFlag = false;
//   loading = false; agentCode;
//   maximumDOB = new Date();
//   scrollContainer: any;
//   annexureForm: FormGroup;
//   employeeForm: FormGroup;
//   annexure = [];
//   salutationList=[];
//   detailExpData = [];
//   detailEmployeeExpData = [];
//   quoteNo = '';
//   totalFirSum = 0;
//   ridrectToPay = false;
//   showRedirectMsg = true;
//   customerName = '';
//   bankCustID = '';
//   AcNo: any;
//   trnID: any;
//   userName = '';
//   branchName = '';
//   branchCode = '';
//   stateCode = '';
//   currentID = '';currentStatus='';
//   isCompany=false;
//   policyText = "Please wait .. We are creating your Policy …";
//   policyNo = '';
//   spCode='';coverType='';
//   constructor(private api: CommonService, private elementRef: ElementRef
//     , private activeR: ActivatedRoute, private router: Router) { }

//   ngOnInit(): void {
//     this.currentID = this.api.decy(this.activeR.snapshot.paramMap.get("id"));
//      this.currentStatus=this.activeR.snapshot.paramMap.get("status");
//     this.quoteGeneraion = new FormGroup({
//       createdBy: new FormControl('', Validators.required),
//       branchName: new FormControl('', Validators.required),
//       coverType: new FormControl('SK', Validators.required),
//       tranType: new FormControl('New', Validators.required),
//       customerType: new FormControl('', Validators.required),
//       salutation: new FormControl('', Validators.required),
//       firstName: new FormControl('', Validators.required),
//       lastName: new FormControl('', Validators.required),
//       contactNo: new FormControl('', Validators.required),
//       email: new FormControl('', Validators.required),
//       policyDate: new FormControl('', Validators.required),
//       bankStaffID: new FormControl('', Validators.required),
//       bankCustID: new FormControl('', Validators.required),
//       customerAcNo: new FormControl('', Validators.required),
//       financInterest: new FormControl('', null),
//       imdGeneral: new FormControl('',  null),
//       businessType: new FormControl('', Validators.required),
//       pincode: new FormControl('', Validators.required),
//       spCode: new FormControl('', Validators.required),
//       add1: new FormControl('', null),
//       add2: new FormControl('', null),
//       add3: new FormControl('', null),
//       city: new FormControl('', null),
//       district: new FormControl('', null),
//       state: new FormControl('', null),
//       country: new FormControl('', null),
//       discount: new FormControl(0, null),
//       loading:new FormControl(0, null),
//       shopPincode: new FormControl('', null),
//       comadd1: new FormControl('', null),
//       comadd2: new FormControl('', null),
//       comadd3: new FormControl('', null),
//       comcity: new FormControl('', null),
//       comdistrict: new FormControl('', null),
//       comstate: new FormControl('', null),
//       comcountry: new FormControl('', null),
//       comPincode: new FormControl('', null),
//       panNo: new FormControl('', null),
//       GSTNo: new FormControl('', null),
//       fireAlliedPerils: new FormControl(false),
//       buildingCode: new FormControl('', null),
//       fireBuilding: new FormControl(null, null),
//       fireBuildingPre: new FormControl(null, null),
//       fireContent: new FormControl(null, null),
//       fireContentP: new FormControl(null, null),
//       fireTerrorism: new FormControl('', null),
//       fireTerrSum: new FormControl(null, null),
//       fireTerrPre: new FormControl(null, null),
//       FLOPMonth: new FormControl(0, null),
//       FLOPSum: new FormControl(null, null),
//       FLOPPre: new FormControl(null, null),
//       ternantSum: new FormControl(null, null),
//       ternantPre: new FormControl(null, null),
//       alteranteAccSum: new FormControl(null, null),
//       alteranteAccPre: new FormControl(null, null),
//       escalation: new FormControl("", null),
//       escalationSum: new FormControl(null, null),
//       escalationPre: new FormControl(null, null),
//       ommission: new FormControl("", null),
//       ommissionSum: new FormControl(null, null),
//       ommissionPre: new FormControl(null, null),
//       burglaryMain: new FormControl(false),
//       setBurglaryFlag: new FormControl(null, null),
//       burglaryContentSum: new FormControl(null, null),
//       burglaryContentPre: new FormControl(null, null),
//       setBurglaryFlag1: new FormControl(null, null),
//       burglaryPercent: new FormControl(null, null),  //testing
//       burglaryPercentSum: new FormControl(null, null),
//       burglaryPercentPre: new FormControl(null, null),
//       allRisk: new FormControl(false),
//       portableComputer: new FormControl(null, null),
//       portableComputerPre: new FormControl(null, null),
//       electronicEquiSum: new FormControl(null, null),
//       electronicEquiPre: new FormControl(null, null),
//       airCondition: new FormControl(null, null),
//       airConditionPre: new FormControl(null, null),
//       porGeneration: new FormControl(null, null),
//       porGenerationPre: new FormControl(null, null),
//       equiOther: new FormControl(null, null),
//       equiOtherPre: new FormControl(null, null),
//       personalAccident: new FormControl(0, null),
//       personalAccidentPre: new FormControl(null, null),
//       noOfEmp: new FormControl(null, null),
//       accidentDeath: new FormControl(0, null),
//       accidentDeathPre: new FormControl(null, null),
//       insuredAge: new FormControl(null, null),
//       nomineeName: new FormControl(null, null),
//       nomineeRel: new FormControl("", null),
//       publicLiability: new FormControl(null, null),
//       publicLiabilityPre: new FormControl(null, null),
//       baggage: new FormControl(null, null),
//       baggagePre: new FormControl(null, null),
//       workCompensationEmp: new FormControl(null, null),
//       workCompensationSalary: new FormControl(null, null),
//       workCompensationSum: new FormControl(null, null),
//       workCompensationPre: new FormControl(null, null),
//       cashInTransit: new FormControl(null, null),
//       cashInTransitPre: new FormControl(null, null),
//       cashInShafe: new FormControl(null, null),
//       cashInShafePre: new FormControl(null, null),
//       cashInCounter: new FormControl(null, null),
//       cashInCounterPre: new FormControl(null, null),
//       fidelityEmp: new FormControl(null, null),
//       fidelityLimit: new FormControl(null, null),
//       fidelitySum: new FormControl(null, null),
//       fidelityPre: new FormControl(null, null),
//       neonSign: new FormControl(null, null),
//       neonSignPre: new FormControl(null, null),
//       pedalCycle: new FormControl(null, null),
//       pedalCyclePre: new FormControl(null, null),
//       plateGlass: new FormControl(null, null),
//       plateGlassPre: new FormControl(null, null),
//       STFIFlag: new FormControl(null, null),
//       STFI: new FormControl(null, null),
//       EQFlag: new FormControl(null, null),
//       EQ: new FormControl(null, null),
//       totalPremium: new FormControl(0, null),
//       electronicEquip: new FormControl(false),
//       machinaryBreakdown: new FormControl(false),
//       personalAccidentMain: new FormControl(false),
//       legalLiabiity: new FormControl(false),
//       baggageMain: new FormControl(false),
//       workmenCompensation: new FormControl(false),
//       moneyinsurance: new FormControl(false),
//       employeeFidelity: new FormControl(false),
//       neonSignGlowSign: new FormControl(false),
//       pedalCycleMain: new FormControl(false),
//       plateGlassMain: new FormControl(false),
//       stfiMain: new FormControl(false),
//       earthQuake: new FormControl(false),
//       buildMain: new FormControl(false),
//       fireContentsMain: new FormControl(false),
//       terrorismMain: new FormControl(false),
//       fireLossMain: new FormControl(false),
//       tenantLiabiityMain: new FormControl(false),
//       alternateAccoMain: new FormControl(false),
//       escalationMain: new FormControl(false),
//       omissionMain: new FormControl(false),
//       portableMain: new FormControl(false),
//       electronicMain: new FormControl(false),
//       airConditionMain: new FormControl(false),
//       portableGeneratorMain: new FormControl(false),
//       equipmentMain: new FormControl(false),
//       accidentMain: new FormControl(false),
//       accidentMainEmp: new FormControl(false),
//       publicLiabilityMain: new FormControl(false),
//       domesticMain: new FormControl(false),
//       workmenMain: new FormControl(false),
//       cashInMain: new FormControl(false),
//       cashInSafeMain: new FormControl(false),
//       cashInCounterMain: new FormControl(false),
//       employeeMain: new FormControl(false),
//       neonSignMain: new FormControl(false),
//       pedalCycleNonMain: new FormControl(false),
//       fixedMain: new FormControl(false)
//     });
//     // $('.fw > mat-checkbox').on('click change', function(){
//     //   if(!$(this).hasClass('disable')){
//     //     $(this).next().slideToggle();
//     //   }
//     // });
//     // $('.one > mat-checkbox').on('click change', function(){
//     //   if(!$(this).hasClass('disable')){
//     //     $(this).next().toggleClass('hide');
//     //   }
//     // });

//     this.initFormSection();
//     this.addAnnexureForm();
    
//     this.branchName = JSON.parse(sessionStorage.getItem('userDetails'))[0].BRANCH_NAME;
//     this.branchCode = JSON.parse(sessionStorage.getItem('userDetails'))[0].SOL_ID;
//     this.userName = JSON.parse(sessionStorage.getItem('userDetails'))[0].UserId;
//     this.agentCode = JSON.parse(sessionStorage.getItem('userDetails'))[0].AgentCode;
//    //SPCode
//    this.spCode = JSON.parse(sessionStorage.getItem('userDetails'))[0].SPCode;
    
//    this.setFormVal("spCode",this.spCode);

   
//     this.quoteGeneraion.patchValue({
//       branchName: this.branchCode + " - " + this.branchName,
//       createdBy: this.userName
//     })
//     if (this.currentID != "") {
//       let id = decodeURIComponent(this.currentID);
//       this.loading = true;
//       let o = { 'id': id };
//       this.api.getQuoteDetails(o).subscribe((sus) => {
//         if (sus.ResponseFlag == 1) {
//           //console.log(JSON.parse(sus.ResponseMessage)['Table']);
//           let res = JSON.parse(sus.ResponseMessage)['Table'];
//           let allData = JSON.parse(res[0].allData);
//           let annexData = JSON.parse(res[0].annexureData);
//           console.log(annexData);
//           let empData = JSON.parse(res[0].empData);
//           console.log(empData);
//           this.addressFlag = false;

//           this.quoteGeneraion.patchValue(res[0]);
//           this.quoteGeneraion.patchValue(allData);
//           if(allData.customerType =='Organization')
//           {
//             this.isCompany=true;
//             // this.quoteGeneraion.get('lastName').setValidators(null); 
//              this.quoteGeneraion.get('lastName').setValidators(null); 
//             this.quoteGeneraion.get('lastName').setErrors(null);  
//           }
         
//           setTimeout(() => {
//             this.quoteGeneraion.patchValue({
//               add1: allData.add1,
//               add2: allData.add2,
//               add3: allData.add3,
//               city: allData.city,
//               district: allData.district,
//               state: allData.state,
//               country: allData.country,
//               comadd1: allData.comadd1,
//               comadd2: allData.comadd2,
//               comadd3: allData.comadd3,
//               comcity: allData.comcity,
//               comdistrict: allData.comdistrict,
//               comstate: allData.comstate,
//               comcountry: allData.comcountry,
//               panNo: allData.panNo,
//               GSTNo: allData.GSTNo
//             });
//           }, 100);
//           this.quoteNo = res[0].quoteNo;
//           this.trnID = res[0].trnID;
//           allData.fireAlliedPerils ? this.setAnnexureWithValue('Fire & Allied Perils',allData.fireBuilding) : '';
//           allData.burglaryMain ? this.setAnnexureWithValue('Burglary',allData.burglaryContentSum) : '';
//           allData.allRisk ? this.setAnnexureWithValue('All Risk',allData.portableComputer) : '';
//           allData.electronicEquip ? this.setAnnexureWithValue('Electronic Equipments',allData.electronicEquiSum) : '';
//           allData.machinaryBreakdown ? this.setAnnexureWithValue('Machinery Breakdown',(allData.airCondition + allData.porGeneration + allData.equiOther)  ) : '';
//           allData.personalAccidentMain ? this.setAnnexureWithValue('Personal Accident',(allData.personalAccident + allData.accidentDeath)) : '';
//           allData.legalLiabiity ? this.setAnnexureWithValue('Legal Liability',(allData.publicLiability)) : '';
//           allData.baggageMain ? this.setAnnexureWithValue('Baggage',(allData.baggage)) : '';
//           allData.workmenCompensation ? this.setAnnexureWithValue('Workmen Compensation',allData.workCompensationSum) : '';
//           allData.moneyinsurance ? this.setAnnexureWithValue('Money Insurance',(allData.cashInTransit + allData.cashInShafe + allData.cashInCounter )) : '';
//           allData.employeeFidelity ? this.setAnnexureWithValue('Employee Fidelity',allData.fidelityEmp) : '';
//           allData.neonSignGlowSign ? this.setAnnexureWithValue('Neon Sign / Glow Sign',allData.neonSign) : '';
//           allData.pedalCycleMain ? this.setAnnexureWithValue('Pedal Cycle',allData.pedalCycle) : '';
//           allData.plateGlassMain ? this.setAnnexureWithValue('Plate Glass',allData.plateGlass) : '';
//           allData.stfiMain ? this.setAnnexureWithValue('STFI',allData.STFI) : '';
//           allData.earthQuake ? this.setAnnexureWithValue('Earth Quake',allData.EQ) : '';
//           if (annexData) {
//             if (annexData.length > 1) {
//               annexData.forEach((item, key) => {
//                 console.log(item, key);
//                 if (key >= 1) {
//                   const control = <FormArray>this.annexureForm.get('detailSections');
//                   control.push(this.initForm());
//                 }
//                 const arr = <FormArray>this.annexureForm.controls.detailSections;
//                 arr.controls[key].patchValue(item);
//               });
//             } else {
//               const arr = <FormArray>this.annexureForm.controls.detailSections;
//               arr.controls[0].patchValue(annexData[0]);
//             }
//           }
//           if (empData.length) {
//             if (empData.length > 1) {
//               empData.forEach((item, key) => {
//                 console.log(item, key);
//  ///               if (key >= 1) {
//                   const control = <FormArray>this.employeeForm.get('detailEMPSections');
//                   control.push(this.initEmployeeForm());
//           //      }
//                 const arr = <FormArray>this.employeeForm.controls.detailEMPSections;
//                 arr.controls[key].patchValue(item);
//               });
//             } else {
//               const control = <FormArray>this.employeeForm.get('detailEMPSections');
//               control.push(this.initEmployeeForm());
//               const arr = <FormArray>this.employeeForm.controls.detailEMPSections;
//               arr.controls[0].patchValue(empData[0]);
//             }
//           }
//           setTimeout(() => {
//             $('.coverForm input').prop('disabled', true);
//             $('.fw > mat-checkbox, .one > mat-checkbox').addClass('disable');
//           }, 500);

//           this.issueQuoteFlag = false;
//           if (this.userName == res[0].createdBy) {
//             this.updateQuoteFlag = true;
//           } else {
//             this.updateQuoteFlag = false;
//             this.makePaymentFlag = true;
//             this.quoteGeneraion.disable();
//             this.annexureForm.disable();
//             this.employeeForm.disable();
//             setTimeout(() => {
//               $('.communicationAdd mat-checkbox').addClass('disable');
//               $('.hrefWrap,.removeFile').hide();
//             }, 500);
//             var d = new Date();
//             d.setFullYear(d.getFullYear() - 1, d.getMonth());
//             this.maximumDOB = d;
//           }
//           this.checkCalc = false;
//           this.showQuote = true;
//           this.validateAdd();
//         //  this.netPremium = parseInt(res[0].totalPremium);

//           this.netPremium= Number(res[0].totalPremium)
//           this.gst =Number((this.netPremium * 18 / 100).toFixed(2));
//           this.totalPre = this.netPremium + this.gst;
//           this.totalPre = parseInt(this.totalPre.toFixed(2));

//           // this.gst = this.netPremium * 18 / 100;
//           // this.totalPre = this.netPremium + this.gst;
//           // this.totalPre = parseInt(this.totalPre.toFixed(2));
//           this.getDetails(res[0].pincode);
//         }
//         this.loading = false;
//       }, err => {
//         console.log(err);
//         this.loading = false;
//       })
//     }
//   }

//   changeCoverType(e)
//   {
//   let val= e.value;
//   console.log(e);
//   this.coverType=val;
//   localStorage.setItem("coverType",val);

//   if(val !="SK")
//   {
//     this.router.navigate(['fireForm']); 
//   }
 
//   }
//   getSections(annexureForm,type='') {
//     if(type =='')
//     return annexureForm.controls.detailSections.controls;
//     else
//     return annexureForm.controls.detailEMPSections.controls;
//   }
//   get CD() { return this.quoteGeneraion.controls; }
//   get Ane() { return (<FormArray>this.annexureForm.get('detailSections')); }

//   get Emp() { return (<FormArray>this.employeeForm.get('detailEMPSections')); }

//   discountChange(e,type)
//   {
//     if(type =='D')
//     {
//       if(e.target.value > 60 )
//       {
//         alert("Disocunt Cannot be greater then 60%");
//         this.setFormVal("discount",0);
//         return;
//       }
//       else
//       {
//         this.setFormVal("loading",0);
//       }
//     }
//     else
//     {
//       if(e.target.value > 100 )
//       {
//         alert("Disocunt Cannot be greater then 100%");
//         this.setFormVal("loading",0);
//         return;
//       }
//       else
//         this.setFormVal("discount",0);
//     }
    

//   }
//   changeNoofEMP(e)
//   {
    
//     let value = Number(e.target.value);

//     if(this.employeeForm.controls.detailEMPSections.value.length)
//     {
//       const arr = <FormArray>this.employeeForm.controls.detailEMPSections;
//       arr.controls = [];
//     }
//     for(let i=0;i<value;i++)
//     {
//       this.addEMPForm();
//     }

    
//   }
  
//   addEMPForm(){
//     const control = <FormArray>this.employeeForm.get('detailEMPSections');
//       control.push(this.initEmployeeForm());
//   }
//   initFormSection() {
  
//     this.annexureForm = new FormGroup({
//       detailSections: new FormArray(this.detailExpData.map(item => {
//         const group = this.initForm();
//         group.patchValue(item);
//         return group;
//       }))
//     });

//     this.employeeForm = new FormGroup({
//       detailEMPSections: new FormArray(this.detailEmployeeExpData.map(item => {
//         const group = this.initEmployeeForm();
//         group.patchValue(item);
//         return group;
//       }))
//     });
//   }
  
//   initForm() {
//     return new FormGroup({
//       coverType: new FormControl('', Validators.required),
//       itemDesc: new FormControl('', Validators.required),
//       make: new FormControl('', Validators.required),
//       YearofMFG: new FormControl('', Validators.required),
//       sumins: new FormControl('', Validators.required)
//     });
//   }

//   initEmployeeForm() {
//     return new FormGroup({
//       insuredAge: new FormControl('', Validators.required),
//       insuredName: new FormControl('', Validators.required),
//       nomineeName: new FormControl('', Validators.required),
//       nomineeRel: new FormControl('', Validators.required),
//     });
//   }
//   setTotalFirSum() {
//     this.totalFirSum = this.quoteGeneraion.value.fireBuilding + this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireTerrSum + this.quoteGeneraion.value.FLOPSum + this.quoteGeneraion.value.ternantSum + this.quoteGeneraion.value.alteranteAccSum + this.quoteGeneraion.value.escalationSum + this.quoteGeneraion.value.ommissionSum;
//   }
//   buildIngPre(val, code) {
//     console.log(code);
//     this.quoteGeneraion.patchValue({
//       fireBuildingPre: val * this.buildingRate /1000   /// 1000,
//     });
//     this.setTotalFirSum();
//     this.quoteGeneraion.patchValue({
//       buildingCode: code
//     })
//     console.log(this.quoteGeneraion.value);
//   }
//   fireContentPre(val) {
//     this.quoteGeneraion.patchValue({
//       fireContentP: val * this.buildingRate /1000   /// 1000,
//     });
//     this.setTotalFirSum();
//   }
//   openEmpDetails()
//   {
  
//     $('.overlay, .popupClaim').addClass('active');
//     $("html, body").animate({ scrollTop: 0 }, "slow");

//   }
//   close()
//   {
//     $('.overlay, .popupClaim').removeClass('active');
//   }
//   setTerr(val)
//   {
//     if(!val.checked)
//     {
//       this.quoteGeneraion.patchValue({
//         fireTerrSum: 0,
//         fireTerrorism:"NO",
//         fireTerrPre:0
//       });
//       console.log(val)
//     }
//   }
//   setTerrPre(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 ) { //&& this.quoteGeneraion.value.fireBuilding > 1
//       if (val == "YES") {
//         this.quoteGeneraion.patchValue({
//           fireTerrSum: this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding
//         });
//         this.quoteGeneraion.patchValue({
//           fireTerrPre: this.quoteGeneraion.value.fireTerrSum * this.terrorism / 1000
//         });
//         this.FLOP = this.buildingRate + this.fireSTFI + this.currentZone + this.terrorism;
//       } else {
//         this.quoteGeneraion.patchValue({
//           fireTerrSum: 0
//         });
//         this.quoteGeneraion.patchValue({
//           fireTerrPre: 0
//         });
//         this.FLOP = this.buildingRate + this.fireSTFI + this.currentZone;
//       }
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         fireTerrorism: ""
//       });
//     }
//     this.setTotalFirSum();
//   }
//   setFLOPPre(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 ) { //&& this.quoteGeneraion.value.fireBuilding > 1
//       this.quoteGeneraion.patchValue({
//         FLOPPre: val * this.FLOP / 1000,
//       });
//     } else {
//       alert("Please select both Content");
//       this.quoteGeneraion.patchValue({
//         FLOPSum: "",
//       });
//     }
//     this.setTotalFirSum();
//   }

//   setFLOP(val)
//   {
//     if(!val.checked)
//     {
//       this.quoteGeneraion.patchValue({
//         FLOPPre: 0,
//         FLOPMonth:"0",
//         FLOPSum:0
//       });
//       console.log(val)
//     }
//   }
//   setTernatPre(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 ) { //&& this.quoteGeneraion.value.fireBuilding > 1
//       this.quoteGeneraion.patchValue({
//         ternantPre: val * (this.buildingRate /2) /1000 //orginal / 1000,  //FLOP
//       });
//     } else {
//       alert("Please select both Content");
//     }
//     this.setTotalFirSum();
//   }
//   setAlteranteAccPre(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 ) { //&& this.quoteGeneraion.value.fireBuilding > 1
//       this.quoteGeneraion.patchValue({
//         alteranteAccPre: val * this.buildingRate /1000 /// original 1000,   //FLOP
//       });
//     } else {
//       alert("Please select Content");
//     }
//     this.setTotalFirSum();
//   }
  
//   setEscalation(val)
//   {
//     if(!val.checked)
//     {
//       this.quoteGeneraion.patchValue({
//         escalationSum: 0,
//         escalation:"NO",
//         escalationPre:0
//       });
//       console.log(val)
//     }
//   }
//   setEscalationPre(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 ) { //&& this.quoteGeneraion.value.fireBuilding > 1
//       if (val == "YES") {
//         this.quoteGeneraion.patchValue({
//           escalationSum: this.quoteGeneraion.value.fireBuilding * 10 / 100
//         });
//         this.quoteGeneraion.patchValue({
//           escalationPre: this.quoteGeneraion.value.escalationSum * (this.FLOP / 2) / 1000
//         });
//       } else {
//         this.quoteGeneraion.patchValue({
//           escalationSum: 0
//         });
//         this.quoteGeneraion.patchValue({
//           escalationPre: 0
//         });
//       }
//     } else {
//       alert("Please select both Building and Content");
//     }
//     this.setTotalFirSum();
//   }
//   setOmmissionPre(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 ) { //&& this.quoteGeneraion.value.fireBuilding > 1
//       if (val == "YES") {
//         this.quoteGeneraion.patchValue({
//           ommissionSum: (this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * 5 / 100
//         });
//         this.quoteGeneraion.patchValue({
//           ommissionPre: this.quoteGeneraion.value.ommissionSum * this.buildingRate / 1000  //flop
//         });
//       } else {
//         this.quoteGeneraion.patchValue({
//           ommissionSum: 0
//         });
//         this.quoteGeneraion.patchValue({
//           ommissionPre: 0
//         });
//       }
//     } else {
//       alert("Please select both Building and Content");
//     }
//     this.setTotalFirSum();
//   }
//   setBurglary(e) {
//     // this.quoteGeneraion.patchValue({
//     // //  setBurglaryFlag1: false,
//     //   burglaryPercent: '',
//     //   burglaryPercentSum: '',
//     //   burglaryPercentPre: 0
//     // });
//    // $("#burglaryOpt2").addClass('hide');
//     if (this.quoteGeneraion.value.fireContent > 1 ) { //&& this.quoteGeneraion.value.fireBuilding > 1
//       this.quoteGeneraion.patchValue({
//         burglaryContentSum: this.quoteGeneraion.value.fireContent
//       });
//       this.quoteGeneraion.patchValue({
//         burglaryContentPre: (this.quoteGeneraion.value.burglaryContentSum * this.burglaryRate) / 1000
//       });
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         setBurglaryFlag: false
//       });
//       console.log($(e.currentTarget));
//      // $("#burglaryOpt1").addClass('hide');
//     }
//   }
//   setBurglaryPer(e) {
//   //   this.quoteGeneraion.patchValue({
//   //  //   setBurglaryFlag: false,
//   //     burglaryContentSum: '',
//   //     burglaryContentPre: 0
//   //   });
//    // $("#burglaryOpt1").addClass('hide');
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         setBurglaryFlag1: false
//       });
//     //  $("#burglaryOpt2").addClass('hide');
//     }
//   }
//   setBurglaryPercent(val) {
//     if (this.quoteGeneraion.value.fireContent > 1) { // && this.quoteGeneraion.value.fireBuilding > 1
//       this.quoteGeneraion.patchValue({
//         burglaryPercentSum: this.quoteGeneraion.value.fireContent * val / 100,
//       });
//       let rate = val == 25 ? 1.25 : val == 50 ? 1.5 : val == 75 ? 1.7 : 0;
//       this.quoteGeneraion.patchValue({
//         burglaryPercentPre: this.quoteGeneraion.value.burglaryPercentSum * rate / 1000,
//       });
//     } else {
//       alert("Please select  Content");
//     }
//   }
//   setSTFI() {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         STFI: (this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * this.fireSTFI / 1000
//       });
//     } else {
//       alert("Please select both Building and Content");
//     }
//   }
//   setEQ() {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         EQ: (this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * this.currentZone / 1000
//       });
//     } else {
//       alert("Please select both Building and Content");
//     }
//   }
//   setPortableComputer(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         portableComputerPre: val * this.portableComRate / 100 //original 1000
//       });

//       //  this.setAnnexureWithValue("All Risk",val);
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         portableComputer: ''
//       });
//     }
//   }
//   setElectronicEquiPre(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         electronicEquiPre:  val * (this.eleEquip + 0.025  ) / 100  // math .round+ 0.025 
//       });

//       //
//       this.setFormVal('stfiMain',true);
//       this.setFormVal('STFIFlag',true);
      
//     this.setSTFI();

   
//     this.setFormVal('earthQuake',true);
//     this.setFormVal('EQFlag',true);
    
//   this.setEQ();
//       // this.setAnnexureWithValue("Electronic Equipments",val);
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         electronicEquiPre: ''
//       });
//     }

//   }
//   setAirCondition(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         airConditionPre: val * this.airConditionRate / 100
//       });

//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         airCondition: ''
//       });
//     }
//   }
//   setPorGeneration(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         porGenerationPre: val * this.portableGenRate / 100
//       });

//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         porGeneration: ''
//       });
//     }
//   }
//   setEquiOther(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         equiOtherPre: val * this.eleEquiOther / 100
//       });
//       //  this.setAnnexureWithValue("Machinery Breakdown",val);
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         equiOther: ''
//       });
//     }
//   }
//   setPersonalAccident(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         personalAccidentPre: val * this.personalAccidentRate / 100
//       });

//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         personalAccident: ''
//       });
//     }
//   }
//   setAccidentDeath(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         accidentDeathPre: (this.quoteGeneraion.value.noOfEmp * val) * this.personalAccidentRate / 100
//       });

//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         accidentDeath: '0',
//         noOfEmp: ''
//       });
//     }
//   }
//   setPublicLiability(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         publicLiabilityPre: val * this.publicLiability / 100
//       });

//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         publicLiability: ''
//       });
//     }
//   }
//   setBaggage(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         baggagePre: val * this.baggageRate / 100
//       });
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         baggage: ''
//       });
//     }
//   }
//   setWorkCompensation(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         workCompensationSum: this.quoteGeneraion.value.workCompensationEmp * (val * 12)
//       });
//       this.quoteGeneraion.patchValue({
//         workCompensationPre: this.quoteGeneraion.value.workCompensationSum * this.workRate / 100
//       });
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         workCompensationEmp: '',
//         workCompensationSalary: ''
//       });
//     }
//   }
//   setCashInTransit(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         cashInTransitPre: val * this.moneyInsurance / 100
//       });
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         cashInTransit: ''
//       });
//     }
//   }
//   setCashInShafe(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         cashInShafePre: val * this.moneyInsurance / 100
//       });
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         cashInShafe: ''
//       });
//     }
//   }
//   setCashInCounter(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         cashInCounterPre: val * this.moneyInsurance / 100
//       });
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         cashInCounter: ''
//       });
//     }
//   }
//   setFidelity(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         fidelitySum: val * this.quoteGeneraion.value.fidelityEmp
//       });
//       this.quoteGeneraion.patchValue({
//         fidelityPre: this.quoteGeneraion.value.fidelitySum * this.fidelityRate / 100
//       });
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         cashInCounter: ''
//       });
//     }
//   }
//   setNeonSign(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         neonSignPre: val * this.signBoardRate / 100
//       });
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         neonSign: ''
//       });
//     }
//   }
//   setPedalCycle(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         pedalCyclePre: val * this.pedalCycleRate / 100
//       });
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         pedalCycle: ''
//       });
//     }
//   }
//   setPlateGlass(val) {
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1) {
//       this.quoteGeneraion.patchValue({
//         plateGlassPre: val * this.plateGlassRate / 100
//       });
//     } else {
//       alert("Please select both Building and Content");
//       this.quoteGeneraion.patchValue({
//         plateGlass: ''
//       });
//     }
//   }
//   addElePreSTFI() {
//     console.log(this.quoteGeneraion.value.STFIFlag);
//     if (this.quoteGeneraion.value.STFIFlag) {
//       this.quoteGeneraion.patchValue({
//         STFI: ((this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * this.fireSTFI / 1000) + (this.quoteGeneraion.value.electronicEquiSum * this.eleSTFI / 1000)
//       });
//     } else {
//       this.quoteGeneraion.patchValue({
//         STFI: (this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * this.fireSTFI / 1000
//       });
//     }
//   }
//   addElePreEQ() {
//     if (this.quoteGeneraion.value.EQFlag) {
//       this.quoteGeneraion.patchValue({
//         EQ: ((this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * this.currentZone / 1000) + (this.quoteGeneraion.value.electronicEquiSum * this.currentZone / 1000)
//       });
//     } else {
//       this.quoteGeneraion.patchValue({
//         EQ: (this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireBuilding) * this.currentZone / 1000
//       });
//     }
//   }
//   saveDetails() {
//     this.onSubmit = true;
//     console.log(this.quoteGeneraion.value);
//     if (this.quoteGeneraion.status == "VALID") {
//       this.api.saveData(this.quoteGeneraion.value).subscribe((sus) => {
//         console.log(sus);
//         if (sus.ResponseFlag == 1) {
//           alert("Data saved successfully");
//         }
//       }, err => {
//         console.log(err);
//       });
//     }
//   }
//   calculate() {
//     // if(this.quoteGeneraion.value.businessType =="")
//     // {

//     // }
//     if(!this.quoteGeneraion.value.setBurglaryFlag)
//     {
//       alert("Please Select  Contents under Burglary");
//       return;
//     }
//     console.log(this.quoteGeneraion.value);
//     // console.log(Object.keys(this.quoteGeneraion.value));
//     // for(let i = 0; i < Object.keys(this.quoteGeneraion.value).length; i++){
//     //   let kename =  Object.keys(this.quoteGeneraion.value)[i];
//     //   console.log(kename);
//     //   console.log(this.quoteGeneraion.value[kename.toString()]);
//     // }
//     if (this.quoteGeneraion.value.fireContent > 1 && this.quoteGeneraion.value.fireBuilding > 1 && (this.quoteGeneraion.value.burglaryContentSum > 1 || this.quoteGeneraion.value.burglaryPercent > 1)) {
//       this.showQuote = true;
//       this.netPremium = (this.quoteGeneraion.value.fireBuildingPre
//          + this.quoteGeneraion.value.fireContentP 
//          + this.quoteGeneraion.value.fireTerrPre 
//          + this.quoteGeneraion.value.FLOPPre 
//          + this.quoteGeneraion.value.ternantPre 
//          + this.quoteGeneraion.value.alteranteAccPre 
//          + this.quoteGeneraion.value.escalationPre 
//          + this.quoteGeneraion.value.ommissionPre 
//          + this.quoteGeneraion.value.burglaryContentPre 
//          + this.quoteGeneraion.value.burglaryPercentPre 
//          + this.quoteGeneraion.value.portableComputerPre 
//          + this.quoteGeneraion.value.electronicEquiPre 
//          + this.quoteGeneraion.value.airConditionPre 
//          + this.quoteGeneraion.value.porGenerationPre 
//          + this.quoteGeneraion.value.equiOtherPre 
//          + this.quoteGeneraion.value.personalAccidentPre
//          + this.quoteGeneraion.value.accidentDeathPre + this.quoteGeneraion.value.publicLiabilityPre + this.quoteGeneraion.value.baggagePre + this.quoteGeneraion.value.workCompensationPre + this.quoteGeneraion.value.cashInTransitPre + this.quoteGeneraion.value.cashInShafePre + this.quoteGeneraion.value.cashInCounterPre + this.quoteGeneraion.value.fidelityPre + this.quoteGeneraion.value.neonSignPre + this.quoteGeneraion.value.pedalCyclePre + this.quoteGeneraion.value.plateGlassPre + this.quoteGeneraion.value.STFI + this.quoteGeneraion.value.EQ).toFixed(2);
//       this.netPremium= Number(this.netPremium)
//      /// alert(this.netPremium * this.quoteGeneraion.value.discount /100 )//this.quoteGeneraion.value
//       this.gst =Number((this.netPremium * 18 / 100).toFixed(2));
//       this.totalPre = this.netPremium + this.gst;
//       this.totalPre = parseInt(this.totalPre.toFixed(2));
//       this.checkCalc = false;
//       this.quoteGeneraion.patchValue({
//         totalPremium: this.netPremium
//       })
//       $('.coverForm input').prop('disabled', true);
//       $('.fw > mat-checkbox, .one > mat-checkbox').addClass('disable');
//       this.scrollToBottom();
//       //this.scrollContainer = this.scrollFrame.nativeElement;
//     } else {
//       alert("Please select Mandatory Cover");
//     }

//   }
//   setFormVal(name,value)
//   {
//     // this.quoteGeneraion.patchValue({
//     //   name: value
//     // });
//     this.quoteGeneraion.get(name).setValue(value);

//   }
//   scrollToBottom() {
//     setTimeout(() => {
//       window.scroll({
//         top: $('body').outerHeight(),
//         behavior: 'smooth'
//       });
//     }, 100);
//   }
//   quote() {
//     this.onSubmit = true;
//     console.log(this.quoteGeneraion);
//     if(!this.quoteGeneraion.value.fireContentsMain)
//     {
//       alert("Please Select Contents")
//       return;
//     }
//     if (this.quoteGeneraion.status == "VALID") {
//       //let flag = this.BOENQ();
//       //let flag1 = this.generatePDF();
//       //console.log(flag, flag1);

//       this.loading = true;

//       let obj = this.quoteGeneraion.value;
//       this.burglaryTotal = this.quoteGeneraion.value.burglaryContentSum + this.quoteGeneraion.value.burglaryPercentSum;
//       this.createAnnexueList();
//       //burglaryPercent

//       obj.quoteType ="SK";
//       obj.allData = JSON.stringify(this.quoteGeneraion.value);
//       this.api.saveData(obj).subscribe((sus) => {
//         console.log(JSON.parse(sus.ResponseMessage));
//         if (sus.ResponseFlag == 1) {
//           alert("Data saved successfully");
//           this.quoteNo = JSON.parse(sus.ResponseMessage).Table[0].quoteNO;
//           this.addressFlag = false;
//           this.loading = false;
//           this.issueQuoteFlag = false;
//           this.saveQuoteDetailsFlag = true;
//           this.validateAdd();
//         }
//       }, err => {
//         console.log(err);
//       });
//     }
//   }

//   createAnnexueList() {
//     this.annexureWithValue = []
//     this.setAnnexureWithValue("Fire & Allied Perils", this.totalFirSum);
//     this.setAnnexureWithValue("Burglary", this.burglaryTotal);

//     let obj = this.quoteGeneraion.value;
//     this.setAnnexureWithValue("All Risk", obj.portableComputer);

//     this.setAnnexureWithValue("Electronic Equipments", obj.electronicEquiSum);

//     this.setAnnexureWithValue("Machinery Breakdown", obj.airCondition);
//     this.setAnnexureWithValue("Machinery Breakdown", obj.porGeneration);
//     this.setAnnexureWithValue("Machinery Breakdown", obj.equiOther);

//     this.setAnnexureWithValue("Personal Accident", obj.personalAccident);
//     this.setAnnexureWithValue("Personal Accident", obj.accidentDeath);

//     this.setAnnexureWithValue("Legal Liability", obj.publicLiability);

//     this.setAnnexureWithValue("Baggage", obj.baggage);

//     this.setAnnexureWithValue("Workmen Compensation", obj.workCompensationSum);

//     this.setAnnexureWithValue("Money Insurance", obj.cashInTransit);
//     this.setAnnexureWithValue("Money Insurance", obj.cashInShafe);
//     this.setAnnexureWithValue("Money Insurance", obj.cashInCounter);

//     this.setAnnexureWithValue("Employee Fidelity", obj.fidelityEmp);

//     this.setAnnexureWithValue("Neon Sign / Glow Sign", obj.neonSign);

//     this.setAnnexureWithValue("Pedal Cycle", obj.pedalCycle);

//     this.setAnnexureWithValue("Plate Glass", obj.plateGlass);

//     this.setAnnexureWithValue("STFI", obj.STFI);

//     this.setAnnexureWithValue("Earth Quake", obj.EQ);

//     //Employee Fidelity

//   }
//   updateQuote() {
//     let obj = this.quoteGeneraion.value;
//     obj.id = this.currentID;
//     obj.AnnexData = JSON.stringify(this.annexureForm.value.detailSections);
//     //obj.AnnexData = JSON.stringify(this.annexureForm.value.detailSections);
//     obj.allData = JSON.stringify(this.quoteGeneraion.value);
//     if (this.quoteGeneraion.status == "VALID") {
//       this.api.updateQuote(obj).subscribe((sus) => {
//         console.log(sus);
//         if (sus.ResponseFlag == 1) {
//           this.router.navigate(['quote']);
//         }
//       }, err => {
//         console.log(err);
//       });
//     }
//   }
//   saveQuoteDetails() {
//     if (this.quoteGeneraion.status == "VALID") {
//       this.loading = true;
//       this.trnID = "FGUBQTXN" + Math.floor(Math.random() * Math.floor(100000));
//       let obj1 = { 'allData': JSON.stringify(this.quoteGeneraion.value), 'AnnexureData': this.annexureForm.value.detailSections,'EmployeeData': JSON.stringify(this.employeeForm.value.detailEMPSections), 'quoteNo': this.quoteNo, 'trnID': this.trnID };
//       console.log(obj1);
//       this.api.updateData(obj1).subscribe((sus) => {
//         console.log(sus);
//         if ($('#myFile')[0].files.length == 0 && $('#myFile1')[0].files.length == 0 && sus.ResponseFlag == 1) {
//           this.router.navigate(['quote']);
//         }
//         //this.payment();
//       }, err => {
//         console.log(err);
//       });
//       const formData = new FormData();
//       formData.append("quoteNo", this.quoteNo);
//       if ($('#myFile')[0].files.length > 0) {
//         let file = $('#myFile')[0].files[0];
//         let name = $('#myFile')[0].files[0].name;
//         formData.append("FileByte", file);
//         formData.append("FileName", name);
//       }
//       if ($('#myFile1')[0].files.length > 0) {
//         let file = $('#myFile1')[0].files[0];
//         let name = $('#myFile1')[0].files[0].name;
//         formData.append("FileByte1", file);
//         formData.append("FileName1", name);
//       }
//       if ($('#myFile')[0].files.length > 0 || $('#myFile1')[0].files.length > 0) {
//         this.api.uploadDoc(formData).subscribe(res => {
//           console.log(res);
//           this.loading = false;
//           this.router.navigate(['quote']);
//         }, err => {
//           this.loading = false;
//           console.log(err.error["text"]);
//           if (err.error["text"] == "Done") {
//             this.loading = false;
//             this.router.navigate(['quote']);
//           }
//         });
//       }

//     }
//   }
//   getUcoData()
//   {
//     this.loading = true;
//     this.quoteGeneraion.enable();
//     this.annexureForm.enable();

//     this.customerName = this.quoteGeneraion.value.firstName + " " + this.quoteGeneraion.value.lastName;
//     this.bankCustID = this.quoteGeneraion.value.bankCustID;
//     this.AcNo =this.quoteGeneraion.value.customerAcNo;

//     let ucoPayment: UCOPaymentModel = new UCOPaymentModel();
//     ucoPayment.policy_sub_type = "CAR"; //will be changed
//     ucoPayment.cust_relation = "Self";
//     ucoPayment.proposal_no = this.quoteNo;
//     ucoPayment.rrn_no = this.trnID;
//     ucoPayment.premium_amt = String(this.netPremium);
//     ucoPayment.gst = String(this.gst);
//     ucoPayment.total_amt = String(this.totalPre);
//     ucoPayment.sum_assured_amt = String(this.totalFirSum);
//     ucoPayment.cust_id = this.bankCustID;
//     ucoPayment.acct_holder_name = this.customerName;
//     ucoPayment.cust_address = (this.quoteGeneraion.value.add1 + this.quoteGeneraion.value.add2
//       + this.quoteGeneraion.value.add3 + this.quoteGeneraion.value.city
//       + this.quoteGeneraion.value.district + this.quoteGeneraion.value.state
//       + this.quoteGeneraion.value.country);
//     ucoPayment.cust_pan = this.quoteGeneraion.value.panNo;
//     //  ucoPayment.cust_relation=this.quoteGeneraion.value.cus
//     ucoPayment.nominee_name = this.quoteGeneraion.value.nomineeRel;
//     ucoPayment.email_id = this.quoteGeneraion.value.email;
//     ucoPayment.mob_no =  String(this.quoteGeneraion.value.contactNo);
//     ucoPayment.acct_no = String(this.AcNo);
//     //ucoPayment.maker_id =this.us
//     // "maker_id": "1870_BH",
//     //"checker_id": "1870_ABH",
//     ucoPayment.maker_id = "1870_BH";
//     ucoPayment.checker_id = "1870_ABH";
//     //ucoPayment.free_text_1=this.customerName;
//     ucoPayment.insured_person_name_1 = this.customerName;
//     ucoPayment.policy_name = "SHOP";
//     ucoPayment.sp_code = this.quoteGeneraion.value.spCode; // "SP0071315035";

//     //  this.loading = false;
//     this.ridrectToPay = true;
//     return ucoPayment;
//   }
//   getReceiptData(ucoPayment)
//   {
//     let receiptData: Receipt = new Receipt();
//     receiptData.agentCode = this.agentCode;
//     receiptData.branchCode = this.branchCode;
//     receiptData.quoteNo = this.quoteNo;
//     receiptData.amount = ucoPayment.total_amt
//     receiptData.uid = ucoPayment.policy_ref_no.trim(); //transaction Id
//     receiptData.clientId = "40246539";
//     receiptData.fgTranNo = ucoPayment.rrn_no;
//     return receiptData;
//   }
//   callReceipt(receiptData,ucoPayment)
//   {
//     this.api.getReceipt(receiptData).subscribe((sus) => {
//       console.log(sus);
//       this.loading = false;
//       if (sus.ResponseFlag == 1) {
//         let data = JSON.parse(sus.ResponseMessage).Receipt[0];
//         //Successful
//         console.log(data);
//         if (data.Status == "Successful") {
//           this.fgReceiptNo = data.ReceiptNo;
//           let flag = this.generatePDF(ucoPayment);
//           console.log(flag);
//         }
//         else {
//           alert("Error in generating receipt!");
//           return;
//         }
//       }
//     });
//   }
//   payment() {
//     if (this.quoteGeneraion.status == "VALID") {
    
//       let ucoPayment: UCOPaymentModel = new UCOPaymentModel();
//       ucoPayment=this.getUcoData();

//       if(this.currentStatus)
//       {
//         let tran:any =this.activeR.snapshot.paramMap.get("transData");
//         tran=tran.split("|");
//         this.loading = true;
//         ucoPayment.policy_ref_no = tran[0];
//         let receiptData: Receipt = new Receipt();
//         receiptData=this.getReceiptData(ucoPayment);
//         let transDate = tran[1];
//         this.showRedirectMsg = false;
//         if (transDate) {
//           receiptData.tranDate =this.api.getFormattedSaveDate(new Date()); //transDate; //"28-12-2020"// transDate; //.replace("-","/");
//         }
//         if(this.currentStatus =="P")
//         {
//           this.callReceipt(receiptData,ucoPayment);
//         }
//         else if(this.currentStatus =="R")
//         {
//           this.fgReceiptNo=tran[2];
//           this.generatePDF(ucoPayment);
//         }
//         else if(this.currentStatus =="D")
//         {
//           this.updateUcoPolicy(ucoPayment);
//         }
 
//       }
//     else
//     {
//       this.api.ucoPayment(ucoPayment, "P").subscribe((sus) => {
//         let response = sus.split("|");

//         this.loading = false;
//         this.showRedirectMsg = false;
//         if (response.length == 0) {
//           alert("Something Went Wrong!!");
//           return;
//         }
//         if (response[0] == "S") {
//           this.loading = true;
//           ucoPayment.policy_ref_no = response[2];
//           let receiptData: Receipt = new Receipt();
//           receiptData=this.getReceiptData(ucoPayment);
//           let transDate = response[3]
//           if (transDate) {
//             receiptData.tranDate = this.api.getFormattedSaveDate(new Date()) //transDate; //.replace("-","/");
//           }
//           this.callReceipt(receiptData,ucoPayment);
//         }
//         else
//         {
//           this.ridrectToPay=false;
//           this.quoteGeneraion.disable();
//           alert(response[1]);
         
//         }

        
//       });
//     }

//     }
//   }
//   modify() {
//     this.checkCalc = true;
//     $('.coverForm input').prop('disabled', false);
//     $('.fw > mat-checkbox, .one > mat-checkbox').removeClass('disable');
//   }
//   BOENQ() {
//     let year = new Date(this.quoteGeneraion.value.policyDate).getFullYear();
//     // let month = parseInt(("0" + new Date(this.quoteGeneraion.value.policyDate).getMonth()).slice(-2));
//     // let day = parseInt(("0" + new Date(this.quoteGeneraion.value.policyDate).getDate()).slice(-2));
//     var month = String(new Date(this.quoteGeneraion.value.policyDate).getMonth() + 1);
//     month = (month.length == 2 ? "0" + month : month);
//     var day = String(new Date(this.quoteGeneraion.value.policyDate).getDate());
//     day = (day.length == 2 ? "0" + day : day);

//     let startDt = year.toString() + (month + 1) + day;


//     var c = new Date(year + 1, Number(month), Number(day) - 1);
//     var endDt = c.getFullYear().toString() + (c.getMonth() + 1) + c.getDate();
//     let sumIns = this.quoteGeneraion.value.fireBuilding + this.quoteGeneraion.value.fireContent + this.quoteGeneraion.value.fireTerrSum + this.quoteGeneraion.value.FLOPSum + this.quoteGeneraion.value.ternantSum + this.quoteGeneraion.value.alteranteAccSum + this.quoteGeneraion.value.escalationSum + this.quoteGeneraion.value.ommissionSum + this.quoteGeneraion.value.burglaryContentSum + this.quoteGeneraion.value.burglaryPercentSum + this.quoteGeneraion.value.portableComputer + this.quoteGeneraion.value.electronicEquiSum + this.quoteGeneraion.value.airCondition + this.quoteGeneraion.value.porGeneration + this.quoteGeneraion.value.equiOther + this.quoteGeneraion.value.personalAccident + this.quoteGeneraion.value.accidentDeath + this.quoteGeneraion.value.publicLiability + this.quoteGeneraion.value.baggage + this.quoteGeneraion.value.workCompensationSum + this.quoteGeneraion.value.cashInTransit + this.quoteGeneraion.value.cashInShafe + this.quoteGeneraion.value.cashInCounter + this.quoteGeneraion.value.fidelitySum + this.quoteGeneraion.value.neonSign + this.quoteGeneraion.value.pedalCycle + this.quoteGeneraion.value.plateGlass;
//     let obj = { 'agentCode': this.userName, 'clientCode': '40246539', 'startDate': startDt, 'endDate': endDt, 'pincode': this.quoteGeneraion.value.pincode, 'stateCode': this.stateCode, 'sumInsured': sumIns };
//     this.api.BOENQ(obj).subscribe((sus) => {
//       console.log(sus);
//       if (sus.ResponseFlag == 1) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//   }
//   generatePDF(ucoPayment) {
//     this.loading = true;
//     console.log(this.quoteGeneraion.value);
//     var date = new Date(this.quoteGeneraion.value.policyDate);
//     var month = String(date.getMonth() + 1);
//     month = (month.length == 1 ? "0" + month : month);
//     var day = String(date.getDate());
//     day = (day.length == 1 ? "0" + day : day);
//     var year = date.getFullYear();
//     var startDt = String(year) + month + day;
//     var c = new Date(year + 1, new Date(this.quoteGeneraion.value.policyDate).getMonth(), Number(day));
//     var emonth = String(c.getMonth() + 1);
//     emonth = (emonth.length == 1 ? "0" + emonth : emonth);
//     var eday = String(c.getDate() - 1);
//     eday = (eday.length == 1 ? "0" + eday : eday);
//     var endDt = String(c.getFullYear()) + emonth + eday;
//     let sumIns = Number(this.quoteGeneraion.value.fireBuilding ? this.quoteGeneraion.value.fireBuilding : 0) 
//       + Number(this.quoteGeneraion.value.fireContent ? this.quoteGeneraion.value.fireContent : 0) +
//       Number(this.quoteGeneraion.value.fireTerrSum ? this.quoteGeneraion.value.fireTerrSum : 0) +
//       Number(this.quoteGeneraion.value.FLOPSum ? this.quoteGeneraion.value.FLOPSum : 0) +
//       Number(this.quoteGeneraion.value.ternantSum ? this.quoteGeneraion.value.ternantSum : 0) +
//       Number(this.quoteGeneraion.value.alteranteAccSum ? this.quoteGeneraion.value.alteranteAccSum : 0) +
//       Number(this.quoteGeneraion.value.escalationSum ? this.quoteGeneraion.value.escalationSum : 0)
//       + Number(this.quoteGeneraion.value.ommissionSum ? this.quoteGeneraion.value.ommissionSum : 0)
//       + Number(this.quoteGeneraion.value.burglaryContentSum ? this.quoteGeneraion.value.burglaryContentSum : 0)
//       + Number(this.quoteGeneraion.value.burglaryPercentSum ? this.quoteGeneraion.value.burglaryPercentSum : 0)
//       + Number(this.quoteGeneraion.value.portableComputer ? this.quoteGeneraion.value.portableComputer : 0)
//       + Number(this.quoteGeneraion.value.electronicEquiSum ? this.quoteGeneraion.value.electronicEquiSum : 0)
//       + Number(this.quoteGeneraion.value.airCondition ? this.quoteGeneraion.value.airCondition : 0)
//       + Number(this.quoteGeneraion.value.porGeneration ? this.quoteGeneraion.value.porGeneration : 0)
//       + Number(this.quoteGeneraion.value.equiOther ? this.quoteGeneraion.value.equiOther : 0)
//       + Number(this.quoteGeneraion.value.personalAccident ? this.quoteGeneraion.value.personalAccident : 0)
//       + Number(this.quoteGeneraion.value.accidentDeath ? this.quoteGeneraion.value.accidentDeath : 0)
//       + Number(this.quoteGeneraion.value.publicLiability ? this.quoteGeneraion.value.publicLiability : 0)
//       + Number(this.quoteGeneraion.value.baggage ? this.quoteGeneraion.value.baggage : 0)
//       + Number(this.quoteGeneraion.value.workCompensationSum ? this.quoteGeneraion.value.workCompensationSum : 0)
//       + Number(this.quoteGeneraion.value.cashInTransit ? this.quoteGeneraion.value.cashInTransit : 0)
//       + Number(this.quoteGeneraion.value.cashInShafe ? this.quoteGeneraion.value.cashInShafe : 0)
//       + Number(this.quoteGeneraion.value.cashInCounter ? this.quoteGeneraion.value.cashInCounter : 0)
//       + Number(this.quoteGeneraion.value.fidelitySum ? this.quoteGeneraion.value.fidelitySum : 0)
//       + Number(this.quoteGeneraion.value.neonSign ? this.quoteGeneraion.value.neonSign : 0)
//       + Number(this.quoteGeneraion.value.pedalCycle ? this.quoteGeneraion.value.pedalCycle : 0)
//       + Number(this.quoteGeneraion.value.plateGlass ? this.quoteGeneraion.value.plateGlass : 0);
//     let obj = this.quoteGeneraion.value;
//     obj.clientCode = '40246539';
//     obj.startDate = startDt;
//     obj.endDate = endDt;
//     obj.stateCode = this.stateCode;
//     obj.sumInsured = sumIns;
//     obj.ratePortableComputer = this.portableComRate;
//     obj.rateElectronicEquipemnts = this.eleEquiOther;
//     obj.rateAirConditioner = this.airConditionRate;
//     obj.ratePorGenerationPre = this.portableGenRate;
//     obj.rateEquiOtherPre = this.eleEquiOther;
//     obj.agentCode = this.agentCode;
//     obj.receiptNo = this.fgReceiptNo;
//     obj.quoteNo = this.quoteNo;
//     this.api.createPDF(obj).subscribe((sus) => {
//       console.log(sus);
//       this.loading = false;
//       if (sus.ResponseFlag == 1) {
//         let res = JSON.parse(sus['ResponseMessage']).Table;
//         this.policyText = "Policy No - ";
//         this.policyNo = (res[0]['PolicyNumber']);
//         this.policyNo=this.policyNo.trim();
//         if(this.policyNo)
//         { 
//           if (!ucoPayment.policy_ref_no) {
//             res[0] = res[0]['PolicyNumber'];
//           }
//           ucoPayment.policy_name = res[0]['PremiumClass'];
//           this.updateUcoPolicy(ucoPayment);
//         }
//         else
//         {
//           alert("error while generating Policy!!");
//         }
//         console.log(res);
//         return true;
//       } else {
//         return false;
//       }
//     });
//   }

//   updateUcoPolicy(ucoPayment) {
//     this.loading = true;
//     this.api.ucoPayment(ucoPayment, "U").subscribe((response) => {
//       this.loading = false;
//       response = response.split("|");

//       if (response.length == 0) {
//         alert("Something Went Wrong!!");
//         return;
//       }
//       if (response[0] == "S") {
//         console.log(response[3]);
//         alert(response[3]);
//         return;
//       }
//     });
//     //console.log(ucoPayment);
//   }
//   setAddress(evt) {
//     console.log(evt);
//     if (evt.checked) {
//       this.quoteGeneraion.patchValue({
//         comadd1: this.quoteGeneraion.value.add1,
//         comadd2: this.quoteGeneraion.value.add2,
//         comadd3: this.quoteGeneraion.value.add3,
//         comcity: this.quoteGeneraion.value.city,
//         comdistrict: this.quoteGeneraion.value.district,
//         comstate: this.quoteGeneraion.value.state,
//         comcountry: this.quoteGeneraion.value.country,
//         comPincode: this.quoteGeneraion.value.shopPincode
//       });
//     } else {
//       this.quoteGeneraion.patchValue({
//         comadd1: '',
//         comadd2: '',
//         comadd3: '',
//         comcity: '',
//         comdistrict: '',
//         comstate: '',
//         comcountry: '',
//         comPincode:''
//       });
//     }
//   }
//   validateAdd() {
//     this.quoteGeneraion.removeControl('add1');
//     this.quoteGeneraion.addControl('add1', new FormControl('', Validators.required));
//     this.quoteGeneraion.removeControl('city');
//     this.quoteGeneraion.addControl('city', new FormControl('', Validators.required));
//     this.quoteGeneraion.removeControl('district');
//     this.quoteGeneraion.addControl('district', new FormControl('', Validators.required));
//     this.quoteGeneraion.removeControl('state');
//     this.quoteGeneraion.addControl('state', new FormControl('', Validators.required));
//     this.quoteGeneraion.removeControl('country');
//     this.quoteGeneraion.addControl('country', new FormControl('', Validators.required));
//     this.quoteGeneraion.removeControl('comadd1');
//     this.quoteGeneraion.addControl('comadd1', new FormControl('', Validators.required));
//     this.quoteGeneraion.removeControl('comcity');
//     this.quoteGeneraion.addControl('comcity', new FormControl('', Validators.required));
//     this.quoteGeneraion.removeControl('comdistrict');
//     this.quoteGeneraion.addControl('comdistrict', new FormControl('', Validators.required));
//     this.quoteGeneraion.removeControl('comstate');
//     this.quoteGeneraion.addControl('comstate', new FormControl('', Validators.required));
//     this.quoteGeneraion.removeControl('comcountry');
//     this.quoteGeneraion.addControl('comcountry', new FormControl('', Validators.required));
//     this.quoteGeneraion.removeControl('panNo');
//     this.quoteGeneraion.addControl('panNo', new FormControl('', Validators.required));
//   }
//   setAnnexure(evt, val) {
//     // if(evt.checked){
//     //   this.annexure.push(val);
//     // }else{
//     //   let i = this.annexure.indexOf(val);
//     //   this.annexure.splice(i, 1);
//     // }
//   }
//   changeCustomerType(e)
//   {
//     let val= e.value;
//     if(val =='Organization')
//     {
//      this.salutationList=['M/S'];
//      this.isCompany=true;
//     // this.quoteGeneraion.get('lastName').setValidators(null); 
//      this.quoteGeneraion.get('lastName').setValidators(null); 
//     this.quoteGeneraion.get('lastName').setErrors(null);
//     // this..removeControl('');
//     }
//     else
//     {
//       this.salutationList=["Mr","Miss","Mrs"];
//       this.isCompany=false;
//       this.quoteGeneraion.addControl('lastName', new FormControl('', Validators.required));
//     }
//   }
//   changeBusinessType(e)
//   {
//     let val= e.source.triggerValue;
//     if(val=="Others")
//     {
//       alert("Refer To Ho..");
//       this.setFormVal('businessType',null);
//     }
//   }

//   setAnnexureWithValue(name, val) {

//     //setAnnexureWithValue
//     if (val) {
//       this.annexureWithValue.push({ "name": name, "value": val });
//       console.log(this.annexureWithValue);
//     }

//   }
//   addAnnexureForm() {
//     const control = <FormArray>this.annexureForm.get('detailSections');
//     control.push(this.initForm());
//   }
//   removeAnnexureForm(index) {
//     const control = <FormArray>this.annexureForm.get('detailSections');
//     control.removeAt(index);
//   }
//   compareSumIn(i) {
//     console.log(this.quoteGeneraion.value.policyDate);
//     if (this.annexureForm.value.detailSections[i].coverType != '') {
//       let total = 0;
//       let currentValue = this.annexureForm.value.detailSections[i].sumins;
//       for (let annexure of this.annexureForm.value.detailSections) {
//         if (annexure.coverType == this.annexureForm.value.detailSections[i].coverType) {
//           total = total + annexure.sumins;
//         }
//       }
//       if (this.annexureForm.value.detailSections[i].coverType == "Burglary") {
//         if (currentValue > this.burglaryTotal || total > this.burglaryTotal) {
//           this.getCommonAnnexureError(i, this.burglaryTotal)
//           // this.annexureForm.value.detailSections[i].sumins=0;
//           return;
//         }
//       }
//       if (this.annexureForm.value.detailSections[i].coverType == "Fire & Allied Perils") {
//         if (currentValue > this.totalFirSum || total > this.totalFirSum) {
//           this.getCommonAnnexureError(i, this.totalFirSum)
//           return;
//         }
//       } else {
//         let annexuredata = this.annexureWithValue.filter((data) => {
//           return data.name == this.annexureForm.value.detailSections[i].coverType;
//         })
//         if (annexuredata.length > 0) {
//           annexuredata = annexuredata[0];
//           if (currentValue > annexuredata["value"] || total > annexuredata["value"]) {
//             this.getCommonAnnexureError(i, annexuredata["value"])
//             return;
//           }
//         }
//       }
//       console.log(this.annexureForm.value.detailSections[i].coverType, this.totalFirSum);
//     } else {
//       alert("Please select cover type");
//       //this.Ane.controls.forEach(group => group.get(this.annexureForm.value.detailSections[i].sumins).reset());
//       const arr = <FormArray>this.annexureForm.controls.detailSections;
//       arr.controls[i].patchValue({
//         sumins: 0
//       });
//     }
//   }
//   getCommonAnnexureError(i, value) {
//     alert(`Cover Value Cannot be greater than ${value} `);
//     const arr = <FormArray>this.annexureForm.controls.detailSections;
//     arr.controls[i].patchValue({
//       sumins: 0
//     });
//   }
//   getDetails(val,type='O') {
//     this.loading=true;
//     let obj = { 'pincode': val };
//     this.api.getStateCode(obj).subscribe((sus) => {
//       console.log(sus);
//       if (sus.ResponseFlag == 1) {
//         let res = JSON.parse(sus['ResponseMessage']).Table;
//         if (res.length) {
//           if(type=='O')
//           {
//             this.stateCode = res[0].StateCode;
//             this.loading=true;
//             this.api.getEQZone(res[0].DistrictName).subscribe((sus) => {
//               console.log(sus);
//               this.loading=false;
//               if (sus.ResponseFlag == 1) {
//                 let res = JSON.parse(sus['ResponseMessage']).Table;
//                 if (res.length) {
//                    let zone=res[0].Zone;
//                    if(zone == "1")
//                    {
//                      this.currentZone=this.zone1;
//                    }
//                    else if(zone == "2")
//                    {
//                      this.currentZone=this.zone2;
//                    }
//                    else if(zone == "3")
//                    {
//                      this.currentZone=this.zone3;
//                    }
//                    else
//                    {
//                      this.currentZone=this.zone4;
//                    }

//                    this.FLOP = this.buildingRate + this.fireSTFI + this.currentZone;

//                    console.log("currentZone" + this.currentZone);

//                 }
//               }
//               else
//               {

//               }
//               });
//           }
//           else{
//             this.loading=false;
//           }
//           // else{
//           //  // this.quoteGeneraion.controls["pincode"].setValue("");
//           // }
         
//           console.log(res);
//         }
//         else {
//           this.loading=false;
//           if(type=='O')
//           {
//             this.quoteGeneraion.controls["pincode"].setValue("");
//             alert('Invalid Pin code, Please check!');
//           }
         
//         }
//       } else {
//         alert('Invalid Pin code, Please check!');
//       }
//     }, err => {
//       this.loading=false;
//       console.log(err);
//     });
//   }
//   validateMaxMin(e, min, max) {
//     let formControlName = e.target.getAttribute('formControlName');
//     let selectForm = '';
//     let formControlName1 = '';
//     if ($(e.target).parent().next().find('select').length > 0) {
//       selectForm = $(e.target).parent().next().find('select').attr('formControlName');
//       formControlName1 = $(e.target).parent().next().next().find('input').attr('formControlName');
//     } else {
//       formControlName1 = $(e.target).parent().next().find('input').attr('formControlName');
//     }
//     let value = Number(e.target.value);
//     if (value < min || value > max) {
//       this.quoteGeneraion.controls[formControlName].setValue("");
//       this.quoteGeneraion.controls[formControlName1].setValue("");
//       if (selectForm != '') {
//         this.quoteGeneraion.controls[selectForm].setValue("0");
//       }
//       alert(`Value Should be between ${min} and ${max}`);
//       return false;
//     } else {
//       return true;
//       //this.quoteGeneraion.controls[formControlName].setErrors("");
//     }
//   }
//   policyDownload(i){
//     console.log(i);
//   //  let id = this.api.ency(encodeURIComponent(i));
//     this.router.navigate(['policyCopy', i]);
//   }
// }
