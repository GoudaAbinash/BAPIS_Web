import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boi-dashboard',
  templateUrl: './boi-dashboard.component.html',
  styleUrls: ['./boi-dashboard.component.scss']
})
export class BOIDashboardComponent implements OnInit {
  quoteNo = '';
  loading = false;
  quoteList = [];
  userName = '';
  filterTicket = '';
  pageEnd = 10;
  p = 1;
  link:any;
  constructor(private api:CommonService, private router: Router) { }

  ngOnInit() {
    this.link = this.api.api;
    this.loading = true;
    let sessionData= this.api.decy(sessionStorage.getItem('userDetails'));
    this.userName = sessionData[0].UserId;
    let obj = {'createdBy': this.userName}
    this.api.getSalesData(obj).subscribe((sus)=>{
      console.log(JSON.parse(sus.ResponseMessage)['Table']);
      if(sus.ResponseFlag == 1){
        this.quoteList = JSON.parse(sus.ResponseMessage)['Table'];
      }
      this.loading =false;
    }, err=>{
      console.log(err);
      this.loading =false;
    });
  }

}
