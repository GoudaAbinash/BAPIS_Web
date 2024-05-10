import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../common.service";
import { IMyDpOptions, IMyDateModel, IMyDate } from "mydatepicker";
import $ from "jquery";

@Component({
  selector: "app-prkit",
  templateUrl: "./prkit.component.html",
  styleUrls: ["./prkit.component.scss"],
})
export class PrkitComponent implements OnInit {
  public loading = false;
  myDatePickerOptions: IMyDpOptions = {
    dateFormat: "dd/mm/yyyy",
    showTodayBtn: true,
    todayBtnTxt: "Today",
  };
  PrMasterForm: FormGroup;
  reportErr: any;
  userId: "";
  prFlag: boolean;
  policy = "";
  receipt="";
  error = "";
  repStatus = false;
  Todate = false;
  maximumDate = new Date();
  constructor(private api: CommonService, private activeR: ActivatedRoute) {}

  ngOnInit() {
    let myFutureDat = new Date(this.maximumDate);
    console.log(myFutureDat);
    myFutureDat.setDate(myFutureDat.getDate() - 1);
    this.maximumDate = new Date(myFutureDat);

    if (this.activeR.snapshot.paramMap.get("id")) {
      let de = this.activeR.snapshot.paramMap.get("id");
      //let de=this.api.decy(this.api.ency("F0151069"));
      this.policy = de;
    }
    let sessionData = this.api.decy(sessionStorage.getItem("userDetails"));
    this.userId = sessionData[0].UserId;
    this.PrMasterForm = new FormGroup({
      FromDate: new FormControl("", Validators.required),
      ToDate: new FormControl("", Validators.required),
    });
  }
  toggleUploadPopup() {
    this.prFlag = this.prFlag == true ? false : true;
  }
  onDateChanged(event, id) {
    if (event.formatted == "") {
      $("#" + id)
        .next()
        .removeClass("active");
    } else {
      $("#" + id)
        .next()
        .addClass("active");
    }
  }

  getPolicy(p) {
    if (p != "") {
      this.loading = true;
      let obj = { policyNo: p, Userid: this.userId };
      console.log(obj);
      this.api.getPrPolicyDoc(obj).subscribe(
        (sus) => {
          console.log(sus);
          //  importedSaveAs.saveData(sus, p);
          var blob = sus;
          if (window.navigator.msSaveOrOpenBlob)
            // IE hack;
            window.navigator.msSaveBlob(blob, p);
          else {
            var a = window.document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = p == "" ? "Template" : p + ".pdf";
            document.body.appendChild(a);
            a.click(); // IE: "Access is denied";
            document.body.removeChild(a);
            this.loading = false;
          }
        },
        (err) => {
          console.log(err);
          this.loading = false;
          this.error = "Please enter a valid policy number!";
        }
      );
    } else {
      this.error = "Please enter a valid policy number!";
    }
  }

  getReceipt(p) {
    let obj = { ReceiptNo: p };
    this.loading = true;
    this.api.getReceiptdetails(obj).subscribe(
      (res) => {
        console.log(res);
        let path = "";
        console.log(res["DwnlLink"]);
        if (res["DwnlLink"]) {
          if (window.location.hostname == "localhost") {
            path += "assets/report/" + res["DwnlLink"];
          } else {
            path +=
              window.location.origin +
              window.location.pathname +
              "assets/report/" +
              res["DwnlLink"];
          }
          window.open(path, "_parent");
        } else {
          alert("No report found!");
          this.repStatus = true;
        }
        this.loading = false;
        this.PrMasterForm.reset();
        $("form label").removeClass("active");
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  // for pr report

  getReport(obj) {
    console.log(obj);
    let d1 = new Date(this.PrMasterForm.value.FromDate);
    let d2 = new Date(this.PrMasterForm.value.ToDate);
    console.log(d2);
    this.error = "";
    if (d1 > d2) {
      alert("From date can not greater then To date.");
    } else {
      let currentDate = new Date();

      let diffc = d1.getTime() - d2.getTime();
      let days = Math.round(Math.abs(diffc / (1000 * 60 * 60 * 24)));
      console.log(days);

      this.repStatus = false;
      if (days > 360) {
        alert("Select 360 days Date range.");
      } else {
        obj.FromDate = new Date(this.PrMasterForm.value.FromDate);
        obj.ToDate = new Date(this.PrMasterForm.value.ToDate);
        obj.Userid = this.userId;
        this.loading = true;
        this.api.PrExportexceldoc(obj).subscribe(
          (res) => {
            let path = "";
            console.log(res);
            console.log(res["DwnlLink"]);
            if (res["DwnlLink"]) {
              if (window.location.hostname == "localhost") {
                path += "assets/report/" + res["DwnlLink"];
              } else {
                path +=
                  window.location.origin +
                  window.location.pathname +
                  "assets/report/" +
                  res["DwnlLink"];
              }
              window.open(path, "_parent");
            } else {
              alert("No report found!");
              this.repStatus = true;
            }
            this.loading = false;
            this.PrMasterForm.reset();
            $("form label").removeClass("active");
          },
          (err) => {
            console.log(err);
            this.loading = false;
          }
        );
      }
    }
  }
  logout() {
    this.api.logout();
  }
}
