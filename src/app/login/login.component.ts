import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  msg = "";
  loading = false;
  bankName: '';
  hide = true;
  loginFlag: any;
  
  constructor(private api: CommonService, private router: Router) { }

  ngOnInit() {
    sessionStorage.clear();
    this.loginForm = new FormGroup({
      bankName: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  
  }

  downloadExcelFormate() {
    this.loading = true;
    this.api.dwnloadClosedXmlExcel().subscribe((sus) => {
      var blob = sus;
      var a = window.document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = "Bank Master Template.xlsx";
      
      document.body.appendChild(a);
      a.click();  // IE: "Access is denied";
      document.body.removeChild(a);
      this.loading = false;
      alert("Please fill the data and send it to IT via an ask-IT ticket!");
    }, (err) => {
      console.log(err);
      this.loading = false;
    })
  }
  get CD() { return this.loginForm.controls; }
  login(obj) {
    if (this.loginForm.status == "VALID") {
      this.loading = true;

      this.api.userValidate(obj).subscribe((sus) => {
        console.log(sus);
        let res = JSON.parse(sus.res);
        console.log(res);
        if (res.ResponseFlag == 1) {
        
          sessionStorage.setItem('userDetails', this.api.ency(res.ResponseMessage));
          let res1=JSON.parse(res['ResponseMessage']);
          if(res1[0].loginFlag=="5"){
          this.router.navigate(['prkit']);
          sessionStorage.setItem('t', sus.token);
        }else{
          sessionStorage.setItem('userDetails', this.api.ency(res.ResponseMessage));
          // Admin Panel
          this.api.getUcoObjectRights(this.loginForm.value.username).subscribe((sus) => {
            sessionStorage.setItem('ucoObjRights', this.api.ency(JSON.parse(sus).ResponseMessage));
          })
          this.router.navigate(['quote']);
          sessionStorage.setItem('t', sus.token);
        }
        } else {
          this.msg = "Wrong Username or password!";
        }
        this.loading = false;
      }, err => {
        console.log(err);
        this.loading = false;
      })
    }
  }
}
