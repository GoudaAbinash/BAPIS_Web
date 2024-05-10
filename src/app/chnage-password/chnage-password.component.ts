import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-chnage-password',
  templateUrl: './chnage-password.component.html',
  styleUrls: ['./chnage-password.component.scss']
})
export class ChnagePasswordComponent implements OnInit {


  chgPasswordFrm: FormGroup;
  loading: boolean = false;
  hidePassword: boolean = true;
  hideNewPassword: boolean = true;
  loggedInUser: any;
  errMsg: any = "";
  constructor(private api: CommonService, private router: Router) {
    this.loggedInUser = this.api.decy(sessionStorage.getItem('userDetails'))[0].UserId
    this.chgPasswordFrm = new FormGroup({
      userId: new FormControl(this.loggedInUser, [Validators.required]),
      oldPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required])
    })
  }


  ngOnInit() {
  }

  chgPassword(event) {
    event.preventDefault();
    let newPasswd = this.chgPasswordFrm.value.newPassword;
    let oldPassword = this.chgPasswordFrm.value.oldPassword;
    if (newPasswd == oldPassword) {
      this.errMsg = "old password and new password is same";
    } else if (newPasswd.length < 8) {
      this.errMsg = "Min Password lenght is 8";
    } else {
      // api call
      this.api.changePassword(this.chgPasswordFrm.value).subscribe((sus) => {
        let res = JSON.parse(sus);
        if (res.ResponseFlag == 1) {
          //ResponseMessage
          if (JSON.parse(res.ResponseMessage).Table[0].Status != "In-valid old password") {
            alert(JSON.parse(res.ResponseMessage).Table[0].Status);
            this.router.navigate(['/']);
          } else {
            alert(JSON.parse(res.ResponseMessage).Table[0].Status);
          }
        }
        // console.log(JSON.parse(res.ResponseMessage).Table);
      }, (error) => {
        console.log(error);
      })
    }
  }
}