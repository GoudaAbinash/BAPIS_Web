
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-renewaldash',
  templateUrl: './renewaldash.component.html',
  styleUrls: ['./renewaldash.component.scss']
})
export class RenewaldashComponent implements OnInit {
  quoteNo = '';
  loading = false;
  quoteList = [];
  userName = '';
  bankName='';
  filterTicket = '';
  pageEnd = 10;
  p = 1;
  receiptusername: '';
  receiptvendorname:'';
  constructor(private api:CommonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loading = true;
    let sessionData= this.api.decy(sessionStorage.getItem('userDetails'));
    this.userName = sessionData[0].UserId;
    this.bankName = sessionData[0].bankname;
    
    let obj = {'createdBy': this.userName,'bankName': this.bankName}  
    this.api.getRnwDash(obj).subscribe((sus)=>{
      if(sus.ResponseFlag == 1  ){
        this.quoteList = JSON.parse(sus.ResponseMessage)['Table'];
        console.log(this.quoteList);
      }
      this.loading =false;
    }, err=>{
      console.log(err);
      this.loading =false;
    })
  }
  edit(i,currentStatus,transactionNo,transactionDate,receiptNo,quoteType,clientId,policyNo){
    if(policyNo)
    {
      this.getPolicy(policyNo);
      return;
    }
    console.log(i,currentStatus,transactionNo,transactionDate,receiptNo,quoteType,clientId,policyNo);
    let id = this.api.ency(i.toString());
    currentStatus = currentStatus ==null ? '' : currentStatus;
    let transData=(currentStatus) ? transactionNo +"|" + transactionDate +  "|" + receiptNo + "|" + clientId  : '';
    this.router.navigate([(quoteType =='FS' ? 'fsrrenewal' : quoteType =='FR' ? 'fsrrenewal' :'fsrrenewal'), id, currentStatus, transData]);
  }
  view(i,currentStatus,transactionNo,transactionDate,receiptNo,quoteType,clientId,policyNo){
    let id = this.api.ency(i.toString());
    currentStatus = currentStatus ==null ? '' : currentStatus;
    let transData=(currentStatus) ? transactionNo +"|" + transactionDate +  "|" + receiptNo + "|" + clientId  : '';
    this.router.navigate([(quoteType =='FS' ? 'renewal' : quoteType =='FR' ? 'renewal' :'renewal'), id, currentStatus, transData]);
  }
  getPolicy(p){
    if(p != ''){
      this.loading = true;
      let obj = {'policyNo': p};
      this.api.getPolicyDoc(obj).subscribe((sus)=>{
        console.log(sus);
      //  importedSaveAs.saveData(sus, p);  
      var blob = sus;
      if (window.navigator.msSaveOrOpenBlob)  // IE hack;
          window.navigator.msSaveBlob(blob, p);
      else {
          var a = window.document.createElement("a");
          a.href = window.URL.createObjectURL(blob);
          a.download = p == "" ? "Template" : p + ".pdf";
          document.body.appendChild(a);
          a.click();  // IE: "Access is denied";
          document.body.removeChild(a);
        this.loading = false;
      }
        
      }, err=>{ 
        console.log(err);
        this.loading = false;
        //this.error= "Please enter a valid policy number!";
      });
    }else{
      //this.error= "Please enter a valid policy number!";
    }
  }
}
