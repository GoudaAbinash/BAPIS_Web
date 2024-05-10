import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  constructor(private location: Location, private api: CommonService) { }
  loading = false;
  ngOnInit() {
  }

  previous() {
    this.location.back();
  }

  downloadDocxFileFrmServer(filePath, fileName) {
    this.loading = true;
    if (filePath != null || filePath != undefined) {
      this.api.downloadDocxFileFrmServer(filePath).subscribe((sus) => {
        var blob = sus;
        if (blob != null) {
          var a = window.document.createElement("a");
          a.href = window.URL.createObjectURL(blob);
          a.download = fileName + ".docx";
          document.body.appendChild(a);
          a.click();  // IE: "Access is denied";
          document.body.removeChild(a);
        } else {
          alert("Server did not return the file");
        }
        this.loading = false;
      }, (err) => {
        console.log(err);
        this.loading = false;
      })
    }
  }

  downloadExcelFormate() {
    this.loading = true;
    this.api.dwnloadClosedXmlExcel().subscribe((sus) => {
      var blob = sus;
      var a = window.document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = "Master Template.xlsx";
      document.body.appendChild(a);
      a.click();  // IE: "Access is denied";
      document.body.removeChild(a);
      this.loading = false;
    }, (err) => {
      console.log(err);
      this.loading = false;
    })
  }


}
