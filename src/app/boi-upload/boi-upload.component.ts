import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CommonService } from '../common.service';
import $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boi-upload',
  templateUrl: './boi-upload.component.html',
  styleUrls: ['./boi-upload.component.scss']
})
export class BOIUploadComponent implements OnInit {
  quoteGeneraion:any;
  loading = false;
  userName:any;
  constructor(private api: CommonService, private router: Router) { }

  ngOnInit() {
    this.quoteGeneraion = new FormGroup({
      insName: new FormControl('', Validators.required),
      premium: new FormControl('', Validators.required),
      IMDCode: new FormControl('', Validators.required),
      FGBranch: new FormControl('', Validators.required),
      NEFTRefNo: new FormControl('', Validators.required),
      bankBranch: new FormControl('', Validators.required),
      FGStafID: new FormControl('', Validators.required),
      bankCustID: new FormControl('', Validators.required),
      bankStaffID: new FormControl('', Validators.required),
      bancaSegement: new FormControl('', Validators.required)
    });
    let sessionData = this.api.decy(sessionStorage.getItem('userDetails'));
    this.userName = sessionData[0].UserId;
  }
  get CD() { return this.quoteGeneraion.controls; }
  saveData(){
    if(this.quoteGeneraion.status == "VALID"){
      this.loading = true;
      const formData = new FormData();
      let obj = this.quoteGeneraion.value;
      obj.createdBy = this.userName;
      this.api.saveSalesData(this.quoteGeneraion.value).subscribe((obj)=>{
        console.log(obj);
        if(obj.ResponseFlag == '1'){
          formData.append("quoteNo", obj.ResponseMessage);
          if ($('#myFile')[0].files.length > 0) {
            let file = $('#myFile')[0].files[0];
            let name = $('#myFile')[0].files[0].name;
            formData.append("FileByte", file);
            formData.append("FileName", name);
          }
          if ($('#myFile1')[0].files.length > 0) {
            let file = $('#myFile1')[0].files[0];
            let name = $('#myFile1')[0].files[0].name;
            formData.append("FileByte1", file);
            formData.append("FileName1", name);
          }
          if ($('#myFile2')[0].files.length > 0) {
            let file = $('#myFile2')[0].files[0];
            let name = $('#myFile2')[0].files[0].name;
            formData.append("FileByte2", file);
            formData.append("FileName2", name);
          }
          if ($('#myFile1')[0].files.length > 0 || $('#myFile')[0].files.length > 0 || $('#myFile2')[0].files.length > 0) {
            this.api.uploadSalesDoc(formData).subscribe(res => {
              console.log(res);
              this.router.navigate(['boiDash']);
            }, err => {
              if (err.error["text"] == "Done" || err.error["text"] == "Success") {
                this.router.navigate(['boiDash']);
              }
            });
          }
        }
      }, err=>{
        console.log(err);
      });
    }
  }
  onSelectedFile(evt){
    let fn = evt.target.files[0].name.split(".")[evt.target.files[0].name.split(".").length-1].toLowerCase();
    if(fn == "pdf" || fn == "png" || fn == "jpg"){
      $(evt.currentTarget).parent().find('p').text(evt.target.files[0].name);
    }else{
      $(evt.currentTarget).val('');
      alert("Not a valid file format");
    }
  }
}
