import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-download-policy',
  templateUrl: './download-policy.component.html',
  styleUrls: ['./download-policy.component.scss']
})
export class DownloadPolicyComponent implements OnInit {
  quoteNo = '';
  policy = '';
  error = '';
  loading = false;
  constructor(private api:CommonService, private activeR: ActivatedRoute) { }

  ngOnInit() {
    if(this.activeR.snapshot.paramMap.get("id")){
      let de=this.activeR.snapshot.paramMap.get("id");
      //let de=this.api.decy(this.api.ency("F0151069"));
      this.policy = de;
    }
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
        this.error= "Please enter a valid policy number!";
      });
    }else{
      this.error= "Please enter a valid policy number!";
    }
  }
}
