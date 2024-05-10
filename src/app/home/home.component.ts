import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quoteNo = '';
  loading = false;
  quoteList = [];
  userName = '';
  filterTicket = '';
  pageEnd = 10;
  p = 1;
  constructor(private api:CommonService, private route:Router) { }

  ngOnInit() {
    this.loading = true;
    let sessionData= this.api.decy(sessionStorage.getItem('userDetails'));
    this.userName = sessionData[0].UserId;
    let obj = {'createdBy': this.userName}
    this.api.DeshboardData(obj).subscribe((sus)=>{
      if(sus.ResponseFlag == 1){
        this.quoteList = JSON.parse(sus.ResponseMessage)['Table'];
      }
      this.loading =false;
    }, err=>{
      console.log(err);
      if(err.status == '401'){
        this.api.logout();
      }
      this.loading =false;
    })
  }

  
  redirectToQuote(i,currentStatus,transactionNo,transactionDate,receiptNo,quoteType,clientId,policyNumber){
    if(policyNumber)
    {
      this.getPolicy(policyNumber);
      return;
    }
    console.log(i,currentStatus,transactionNo,transactionDate,receiptNo,quoteType,clientId,policyNumber);
    let id = this.api.ency(i.toString());
    console.log(id);
    currentStatus = currentStatus ==null ? '' : currentStatus;
    let transData=(currentStatus) ? transactionNo +"|" + transactionDate +  "|" + receiptNo + "|" + clientId  : '';
    console.log(currentStatus);
    // this.route.navigate([(quoteType =='SK' ? 'fgForm' : 'fireForm'), id, currentStatus, transData]);
    this.route.navigate([(quoteType =='SK' ? 'fgForm' : quoteType =='FS' ? 'sfsp' :'fireForm'), id, currentStatus, transData]);
  }

  view(i,currentStatus,transactionNo,transactionDate,receiptNo,quoteType,clientId,policyNumber){
    let id = this.api.ency(i.toString());
    currentStatus = currentStatus ==null ? '' : currentStatus;
    let transData=(currentStatus) ? transactionNo +"|" + transactionDate +  "|" + receiptNo + "|" + clientId  : '';
    this.route.navigate([(quoteType =='SK' ? 'fgForm' : quoteType =='FS' ? 'sfsp' :'fireForm'), id, currentStatus, transData]);
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
    //  this.error= "Please enter a valid policy number!";
    }
  }
}
//022-39020202
