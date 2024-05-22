import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  public loading = false;
  pageEnd = 10;
  p = 1;
  filterTicket:any;
  public userList = [];
  id = '';
  type = '';
  constructor(private api:CommonService, private route:Router, private activeR:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activeR.snapshot.queryParams.id;
    this.type = this.activeR.snapshot.queryParams.type;
    console.log(this.id, this.type);
    if(this.id && this.type){
      this.loading = true;
      let obj = {"id" : this.id, 'type':this.type};
      this.api.getData(obj).subscribe((sus)=>{
        console.log(sus);
        if(sus.ResponseFlag == '1'){
          this.userList = JSON.parse(sus.ResponseMessage)['Table'];
          console.log(this.userList);
        }
        this.loading = false;
      }, err =>{
        console.log(err);
      });
    }
  }

}
