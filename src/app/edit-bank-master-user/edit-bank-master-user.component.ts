import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import $ from 'jquery';
import { CommonService } from '../common.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-bank-master-user',
  templateUrl: './edit-bank-master-user.component.html',
  styleUrls: ['./edit-bank-master-user.component.scss']
})
export class EditBankMasterUserComponent implements OnInit {

  userDetails: any;
  userDetailsForm: FormGroup;
  loading: boolean = false;
  editMode: boolean = false;
  date = new Date();
  userId: any;
  solId: any;
  bankName: any;
  serialNum: any;
  hidePassword = true;
  currentDateTime = this.date.getFullYear() + "-" + (this.date.getUTCMonth() + 1) + "-" + this.date.getDate() + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() + "." + this.date.getMilliseconds()
  loggedUser: any;
  canModify: any;
  permissions: any;
  constructor(private location: Location, private api: CommonService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loggedUser = this.api.decy(sessionStorage.getItem('userDetails'))[0].UserId;

    this.api.getUcoObjectRights(this.loggedUser).subscribe((sus) => {
      var objRights = JSON.parse(JSON.parse(sus).ResponseMessage).Table;
      if (JSON.parse(sus).ResponseFlag == "1") {
        if (JSON.parse(JSON.parse(sus).ResponseMessage).Table.length > 0) {
          if (!this.api.checkObjectRights(objRights, ["UcoBankMasterUserModification", "UcoSuperAdmin"], "Y")) {
            this.router.navigate(['/quote']);
          } else {
            this.canModify = true;
            this.permissions = JSON.parse(JSON.parse(sus).ResponseMessage).Table;
            // console.log(this.permissions);
          }
        }
      }
    })
    this.userDetailsForm = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      zone: new FormControl('', [Validators.required]),
      solId: new FormControl('', [Validators.required]),
      fgiBrCode: new FormControl('', [Validators.required]),
      branchName: new FormControl('', [Validators.required]),
      branchCategory: new FormControl('', [Validators.required]),
      fgiZone: new FormControl('', [Validators.required]),
      fgiOffice: new FormControl('', [Validators.required]),
      branchScale: new FormControl('', [Validators.required]),
      fgiBranchCategory: new FormControl('', [Validators.required]),
      createdDate: new FormControl(this.currentDateTime, [Validators.required]),
      updatedDate: new FormControl(this.currentDateTime, [Validators.required]),
      createdBy: new FormControl(this.loggedUser, [Validators.required]),
      updatedBy: new FormControl(this.loggedUser, [Validators.required]),
      fgBranchCode: new FormControl('', [Validators.required]),
      // pin: new FormControl('', [Validators.required]),
      agentCode: new FormControl('', [Validators.required]),
      SpCode: new FormControl('', [Validators.required]),
      loginFlag: new FormControl('', [Validators.required]),
      bankName: new FormControl('', [Validators.required]),
      receiptUserName: new FormControl('', [Validators.required]),
      receiptVendorName: new FormControl('', [Validators.required]),
    });
    this.editMode = true;
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['userId'];
      this.solId = params['solId'];
      this.bankName = params['bankName'];
      // console.log(params['userId']);
      // console.log(params['solId']);
    });
    if (this.userId != undefined && this.solId != undefined) {
      this.loading = true;
      this.api.fetchBankMaster(this.userId, this.solId, this.bankName).subscribe((res) => {
        // console.log(JSON.parse(res));
        if (JSON.parse(res).ResponseFlag == "1") {
          let data = JSON.parse(JSON.parse(res).ResponseMessage).Table;
          if (data.length > 0) {
            this.userDetails = JSON.parse(JSON.parse(res).ResponseMessage).Table[0];
            let data = JSON.parse(JSON.parse(res).ResponseMessage).Table[0];
            // console.log(JSON.parse(JSON.parse(res).ResponseMessage).Table[0]);
            this.serialNum = data.SR_NO;
            let details = {
              userId: data.UserId,
              zone: data.ZONE,
              solId: data.SOL_ID,
              fgiBrCode: data.FGI_BR_CODE,
              branchName: data.BRANCH_NAME,
              branchCategory: data.BRANCH_CATEGORY,
              fgiZone: data.FGI_ZONE,
              fgiOffice: data.FGI_OFFICE,
              branchScale: data.BRANCH_SCALE,
              fgiBranchCategory: data.FGI_BRANCH_CATEGORY,
              createdDate: data.CreatdDate.split('T')[0] + ' ' + data.CreatdDate.split('T')[1],
              updatedDate: this.currentDateTime,
              createdBy: data.CreatedBy,
              updatedBy: this.loggedUser,
              fgBranchCode: data.FGBranchCode,
              // pin: data.PIN,
              agentCode: data.AgentCode,
              SpCode: data.SPCode,
              loginFlag: data.loginFlag,
              bankName: data.bankName,
              receiptUserName: data.receiptusername,
              receiptVendorName: data.ReceiptVendorName,
            }

            this.userDetailsForm.setValue(details);

          } else {
            alert("No Data Found !")
            this.router.navigate(['/add-user']);
          }
          this.loading = false;
        }
      }, (err) => {
        console.log(err);
        this.loading = false;
      })
    }
  }

  ngOnInit() {
  }

  updateMaster(userObj, event) {
    if (userObj.status != "INVALID") {
      this.loading = true;
      this.api.addUpdateUcoBankMaster(userObj.value).subscribe((res) => {
        if (JSON.parse(res).ResponseFlag == "1") {
          alert(JSON.parse(JSON.parse(res).ResponseMessage).Table[0].Status);
          this.router.navigate(['/admin-panel']);
        } else {
          alert(JSON.parse(res).ResponseMessage);
        }
        this.loading = false;
      }, (err) => {
        this.loading = false;
        console.log(err);
      })
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  previous() {
    this.location.back();
  }
}



