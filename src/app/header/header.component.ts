import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() quoteNo: string = "";
  userId;
  loginFlag;
  isAdmin: boolean = false;
  externalWindow:any;
  constructor(private api: CommonService) { }

  ngOnInit() {
    let sessionData = this.api.decy(sessionStorage.getItem('userDetails'));
    this.userId = sessionData[0].UserId;
    this.loginFlag = sessionData[0].loginFlag;
    // this.userId = JSON.parse(sessionStorage.getItem('userDetails'))[0].UserId;

    this.api.getUcoObjectRights(this.userId).subscribe((sus) => {
      console.log(JSON.parse(JSON.parse(sus).ResponseMessage).Table);
      if (JSON.parse(JSON.parse(sus).ResponseMessage).Table.length > 0) {
        this.isAdmin = true;
      }
    })
  }
  logout() {
    this.api.logout();
  }
  


  switchTab() {
    if (window.location.hostname == "localhost") {
      this.externalWindow = window.open('http://localhost:4200/#/banca-bulk-uploader', 'banca-bulk-uploader', 'width=600,height=400,left=200,top=200');
    } else {
        //var url = location.protocol + "//" + location.hostname + "/UCO/";
        var url = location.protocol + "//" + location.hostname + "/UCO_UAT/";
        this.externalWindow = window.open(url+'web/#/banca-bulk-uploader', 'banca-bulk-uploader', 'width=600,height=400,left=200,top=200');
       
    }
  }
}
