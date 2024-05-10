import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import $ from 'jquery';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-bank-master-user',
  templateUrl: './add-bank-master-user.component.html',
  styleUrls: ['./add-bank-master-user.component.scss']
})
export class AddBankMasterUserComponent implements OnInit {

  bulkUploadFlag: boolean = false;
  fileSelected: boolean = false;
  userDetailsForm: any;
  loading: boolean = false;
  edituserFlag: boolean = false;
  bankMasterEditForm: any;
  date = new Date();
  hidePassword = true;
  currentDateTime = this.date.getFullYear() + "-" + (this.date.getUTCMonth() + 1) + "-" + this.date.getDate() + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() + "." + this.date.getMilliseconds()
  isFileSelected = false;
  loggedUser: any;
  validUserIdSolIdCombo: boolean = false;
  Vendor_Receipt_BankName: any;
  // rights managenment variables
  isAdmin: any;
  canCreate: boolean = false;
  permissions: any;
  permittedBanks = [];
  constructor(private location: Location, private api: CommonService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loading = true;
    this.loggedUser = this.api.decy(sessionStorage.getItem('userDetails'))[0].UserId;

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
      agentCode: new FormControl('', [Validators.required]),
      SpCode: new FormControl('', [Validators.required]),
      bankName: new FormControl('', [Validators.required]),
      receiptUserName: new FormControl('', [Validators.required]),
      receiptVendorName: new FormControl('', [Validators.required]),
    })

    this.api.getUcoObjectRights(this.loggedUser).subscribe((sus) => {
      var objRights = JSON.parse(JSON.parse(sus).ResponseMessage).Table;
      if (JSON.parse(sus).ResponseFlag == "1") {
        if (JSON.parse(JSON.parse(sus).ResponseMessage).Table.length > 0) {
          if (!this.api.checkObjectRights(objRights, ["UcoBankMasterUserCreation", "UcoSuperAdmin"], "Y")) {
            this.router.navigate(['/quote']);
          } else {
            this.canCreate = true;
            this.permissions = JSON.parse(JSON.parse(sus).ResponseMessage).Table;
            this.permittedBanks = this.api.getbnkNamefrmRightsByPrcess(this.permissions, "UcoBankMasterUserCreation");
          }
        }
      }
      this.loading = false;
    }, (err) => {
      console.log(err);
      this.loading = false;
    });

  }

  ngOnInit() {
  }

  createUser(userObj, event) {
    if (userObj.status != "INVALID") {
      this.loading = true;
      this.api.userIdSolIdBankComboExist(this.userDetailsForm.value.userId, this.userDetailsForm.value.solId, this.userDetailsForm.value.bankName).subscribe((sus) => {
        if (JSON.parse(sus).ResponseFlag == "1") {
          let res = JSON.parse(JSON.parse(sus).ResponseMessage).Table[0];
          if (res.Status == "Y") {
            alert("This USER ID :" + this.userDetailsForm.value.userId + " and SOL ID : " + this.userDetailsForm.value.solId + " and bank :" + this.userDetailsForm.value.bankName + " combination already exists");
            this.userDetailsForm.patchValue({ userId: '', solId: '' });
            this.validUserIdSolIdCombo = false;
            this.loading = false;
          } else {
            this.api.addUpdateUcoBankMaster(userObj.value).subscribe((res) => {
              if (JSON.parse(res).ResponseFlag == "1") {
                alert(JSON.parse(JSON.parse(res).ResponseMessage).Table[0].Status);
                window.location.reload();
              } else {
                alert(JSON.parse(res).ResponseMessage);
              }
              this.loading = false;
            }, (err) => {
              alert(err.message);
              this.loading = false;
            })
          }
        }
      }, (err) => {
        console.log(err);
        this.loading = false;
      })
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  showHidePassthrough() {
    this.hidePassword = this.hidePassword == true ? false : true;
  }

  previous() {
    this.location.back();
  }

  setReceiptUserVendorBank(event) {
    if (event.value != undefined && this.userDetailsForm.value.solId != "") {
      this.api.fetchReceipUserName_VendorName(this.userDetailsForm.value.solId, event.value).subscribe((sus) => {
        if (JSON.parse(sus).ResponseFlag == "1" && JSON.parse(JSON.parse(sus).ResponseMessage).Table.length > 0) {
          //console.log(sus);
          let data = JSON.parse(JSON.parse(sus).ResponseMessage).Table[0];
          this.userDetailsForm.patchValue({ receiptUserName: data.ReceiptUserName, receiptVendorName: data.ReceiptVendorName });
        } else {
          alert(this.userDetailsForm.value.solId + " is not mapped with " + event.value);
          this.userDetailsForm.patchValue({ receiptUserName: '', receiptVendorName: '', solId: '', bankName: '' });
        }

      }, (err) => {
        console.log(err);
      })
    } else {
      this.userDetailsForm.patchValue({ receiptUserName: '', receiptVendorName: '', bankName: '' });
    }
  }

}