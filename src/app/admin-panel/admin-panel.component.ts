import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import $ from 'jquery';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  bulkUploadFlag: boolean = false;
  fileSelected: boolean = false;
  userDetailsForm: any;
  loading: boolean = false;
  commitFileFlag: boolean = false;
  edituserFlag: boolean = false;
  toggleApprovalFlag: boolean = false;
  toogleMyUploadsflag: boolean = false;
  bankMapFlag: boolean = false;
  bankMasterEditForm: any;
  bankMappingForm: any;
  editMode: boolean = false;
  date = new Date();
  hidePassword = true;
  currentDateTime = this.date.getFullYear() + "-" + (this.date.getUTCMonth() + 1) + "-" + this.date.getDate() + " " + this.date.getHours() + ":" + this.date.getMinutes() + ":" + this.date.getSeconds() + "." + this.date.getMilliseconds()
  isFileSelected = false;
  loggedUser: any;
  interval: any;
  processTime: number = 0;
  fileLoadingflag: boolean = false;
  mappingFileSelectedFlag = new FormControl('', [Validators.required]);
  banksMappedToUser = []
  // rights managenment
  isAdmin: any;
  bulkUploadUser: boolean = false;
  canModifyBankMaster: boolean = false;
  canCreateUser: boolean = false;
  canMapUserSolToBank: boolean = false;
  permissions: any;
  canViewDashBoard: boolean = false;
  isSuperUser: boolean = false;
  canMapSolToBanks: boolean = false;
  isbulkUploadApprover: boolean = false;
  uploadApprovalRequired: boolean = false;
  approvalPnFileUplodas = [];
  // AdminPanel Dashbiard
  dashBoardDataFetchFrmDt = this.date.getFullYear() + "-" + (this.date.getUTCMonth() + 1) + "-" + this.date.getDate() + " 00:00:00.000";
  bankMstrData: any;
  bankMstrReportData: any;
  uploadedFilesData: any;
  Math: Math;
  // Pagination
  pageEnd = 10;
  myFileUploadsPageEnd = 10;
  approvalPnPageEnd = 10;
  p = 1;
  myFileUploadsP = 1;
  approvalP = 1;
  public userList = [];
  id = '';
  type = '';
  filterdFiles = '';


  constructor(private api: CommonService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loggedUser = this.api.decy(sessionStorage.getItem('userDetails'))[0].UserId;

    this.bankMasterEditForm = new FormGroup({
      user_Id: new FormControl('', [Validators.required]),
      sol_Id: new FormControl('', [Validators.required]),
      bankName: new FormControl('', [Validators.required])
    })

    this.bankMappingForm = new FormGroup({
      solID: new FormControl('', [Validators.required]),
      bankName: new FormControl('', [Validators.required]),
      receiptUserName: new FormControl('', [Validators.required]),
      receiptVendorName: new FormControl('', [Validators.required]),
      createdBy: new FormControl(this.loggedUser, [Validators.required]),
      createdDate: new FormControl(this.currentDateTime, [Validators.required])
    })

    this.api.getUcoObjectRights(this.loggedUser).subscribe((sus) => {
      var objRights = JSON.parse(JSON.parse(sus).ResponseMessage).Table;
      if (JSON.parse(sus).ResponseFlag == "1") {
        if (JSON.parse(JSON.parse(sus).ResponseMessage).Table.length > 0) {
          this.permissions = JSON.parse(JSON.parse(sus).ResponseMessage).Table;
          this.bulkUploadUser = this.api.checkObjectRights(objRights, ["UcoBankMasterBulkUploadUser", "UcoSuperAdmin"], "Y");
          this.canModifyBankMaster = this.api.checkObjectRights(objRights, ["UcoBankMasterUserModification", "UcoSuperAdmin"], "Y");
          this.canCreateUser = this.api.checkObjectRights(objRights, ["UcoBankMasterUserCreation", "UcoSuperAdmin"], "Y");
          this.canViewDashBoard = this.api.checkObjectRights(objRights, ["UcoDashBoardUser", "UcoSuperAdmin"], "Y");
          this.isSuperUser = this.api.checkObjectRights(objRights, ["UcoSuperAdmin"], "Y");
          this.canMapSolToBanks = this.api.checkObjectRights(objRights, ["UcoSuperAdmin", "MasterSolMapping"], "Y");
          this.isbulkUploadApprover = this.api.checkObjectRights(objRights, ["BulkUploadApprover"], "Y");

          if (this.isbulkUploadApprover) {
            this.api.fetchApprovalPnUploads(this.loggedUser).subscribe((sus) => {
              if (JSON.parse(sus).ResponseFlag == "1") {
                this.approvalPnFileUplodas = JSON.parse(JSON.parse(sus).ResponseMessage).Table;
              }
            })
          }

          if (this.bulkUploadUser) {
            var result = this.api.getObjectRightByName(objRights, ['UcoBankMasterBulkUploadUser']);
            if (result['ApprovalRq'] === "Y") {
              this.uploadApprovalRequired = true;
            }
          }
        }
      }
    }, (err) => {
      console.log(err);
    })


    // Admin Panel data
    this.api.getAllBankIdsCreated(this.dashBoardDataFetchFrmDt, this.currentDateTime).subscribe((sus) => {
      if (JSON.parse(sus).ResponseFlag == 1) {
        this.bankMstrReportData = JSON.parse(JSON.parse(sus).ResponseMessage).Table;
      } else {
        console.log(JSON.parse(sus));
      }
    }, (err) => {
      console.log(err);
    })


    // Uploaded Files data
    this.api.fetchUploadedFiles().subscribe((sus) => {
      if (JSON.parse(sus).ResponseFlag == 1) {
        this.uploadedFilesData = JSON.parse(JSON.parse(sus).ResponseMessage).Table;
        // console.log(this.uploadedFilesData);
      } else {
        console.log(JSON.parse(sus));
      }

    }, (err) => {
      console.log(err);
    })
  }


  ngOnInit() {
  }


  toggleBulkIpload() {
    this.bulkUploadFlag = this.bulkUploadFlag == true ? false : true;
  }

  toggleApproval() {
    this.toggleApprovalFlag = this.toggleApprovalFlag == true ? false : true;
  }

  toogleMyUploads() {
    this.toogleMyUploadsflag = this.toogleMyUploadsflag == true ? false : true;
  }

  toggleEditPopup() {
    this.edituserFlag = this.edituserFlag == true ? false : true;
  }

  toggleBankMapPopup() {
    this.bankMapFlag = this.bankMapFlag == true ? false : true;
  }



  bulkFileUpload() {
    // console.log($('#bulkFile')[0].name);
    const formData = new FormData();
    if ($('#bulkFile')[0].files.length > 0) {
      this.loading = true;
      this.toggleBulkIpload();
      let file = $('#bulkFile')[0].files[0];
      let name = $('#bulkFile')[0].files[0].name;
      formData.append("FileByte", file);
      formData.append("FileName", name);
      //console.log(!this.uploadApprovalRequired);
      // call API
      if (!this.uploadApprovalRequired) {
        this.api.ucoBankMasterBulkUpload(formData, this.loggedUser).subscribe((sus) => {
          var blob = sus;
          var a = window.document.createElement("a");
          a.href = window.URL.createObjectURL(blob);
          a.download = sus.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ? "Bank Master.xlsx" : "Error " + this.currentDateTime + ".txt";
          document.body.appendChild(a);
          a.click();  // IE: "Access is denied";
          document.body.removeChild(a);
          this.loading = false;
        }, (err) => {
          console.log(err);
          this.loading = false;
        })
      } else {
        this.api.approvalPnFileUploadToServer(formData, this.loggedUser).subscribe((sus) => {
          //console.log(sus);
          if (sus == "File Uploaded Successfully") {
            alert(sus + " and sent for approval");
          } else {
            alert(sus);
          }
        }, (err) => {
          console.log(err);
        })
        this.loading = false;
      }
    } else {
      alert("Please select the file !")
    }
  }



  getBanksMappedByUserIdSolId() {
    if (this.bankMasterEditForm.value.user_Id != "" && this.bankMasterEditForm.value.sol_Id != "") {
      this.api.getAllbanksMappedByUserIdSolId(this.bankMasterEditForm.value.user_Id, this.bankMasterEditForm.value.sol_Id).subscribe((sus) => {
        if (JSON.parse(sus).ResponseFlag == "1" && JSON.parse(JSON.parse(sus).ResponseMessage).Table.length > 0) {
          this.banksMappedToUser = JSON.parse(JSON.parse(sus).ResponseMessage).Table;
        } else {
          alert("No Data Found !");
        }
      }, (err) => {
        console.log(err);
      })
    }
  }

  onSelectFile(event) {
    this.isFileSelected = false;
    if (event.target.files.length > 0) {
      this.loading = true;
      var fileExtention = event.target.files[0].name.split(".")[event.target.files[0].name.split(".").length - 1].toLowerCase();
      if (!(fileExtention == "xls" || fileExtention == "xlsx")) {
        alert("Bulk Upload : Support's only .xls & .xlsx file formates");
        this.loading = false;
      } else {
        const formData = new FormData();
        let file = event.target.files[0];
        let name = event.target.files[0].name;
        formData.append("FileByte", file);
        formData.append("FileName", name);
        if (event.target.id == "mappingExceldwn") {
          this.api.vldtSolBankMapFormate(formData).subscribe((sus) => {
            // console.log(sus);
            if (JSON.parse(sus).ResponseFlag != "1") {
              alert(JSON.parse(sus).ResponseMessage);
              this.mappingFileSelectedFlag.patchValue("");
            }
            this.loading = false;
          }, (err) => {
            this.isFileSelected = false;
            console.log(err);
            this.loading = false;
          })
        } else {
          this.api.vldtBlkExcelFormate(formData).subscribe((sus) => {
            if (JSON.parse(sus).ResponseFlag != "1") {
              alert(JSON.parse(sus).ResponseMessage);
            } else {
              this.isFileSelected = true;
            }
            this.loading = false;
          }, (err) => {
            this.isFileSelected = false;
            console.log(err);
            this.loading = false;
          })
        }

      }
    }
  }

  editBankMaster(bankMasterEdit) {
    this.loading = true;
    this.toggleEditPopup();
    this.api.fetchBankMaster(bankMasterEdit.user_Id, bankMasterEdit.sol_Id, bankMasterEdit.bankName.bankName).subscribe((res) => {
      if (JSON.parse(res).ResponseFlag == "1") {
        let data = JSON.parse(JSON.parse(res).ResponseMessage).Table[0];
        if (data) {
          if (this.api.checkBrachAccess(this.permissions, "UcoBankMasterUserModification", data.bankName)) {
            this.router.navigate(['/edit/' + bankMasterEdit.user_Id + "/" + bankMasterEdit.sol_Id + "/" + bankMasterEdit.bankName.bankName]);
          } else {
            alert("Not Authorized to edit  : " + data.bankName + " bank resourse");
          }
        } else {
          alert("No Data Found !");
        }
      }
      this.loading = false;
    }, (err) => {
      console.log(err);
      this.loading = false;
    })
    // Reset the forms 
    $('#user-edit-form')[0].reset();
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
    }, (err) => {
      console.log(err);
      this.loading = false;
    })
  }

  downloadBankMappingExcel() {
    this.loading = true;
    this.api.dwnSolBnkmapFormat().subscribe((sus) => {
      var blob = sus;
      var a = window.document.createElement("a");
      a.href = window.URL.createObjectURL(blob);
      a.download = "Bank Mapping Template.xlsx";
      document.body.appendChild(a);
      a.click();  // IE: "Access is denied";
      document.body.removeChild(a);
      this.loading = false;
    }, (err) => {
      console.log(err);
      this.loading = false;
    })
  }

  downloadServerFiles(filePath, Uuid) {
    this.loading = true;
    if (filePath != null || filePath != undefined) {
      this.api.downloadFilesFrmServer(filePath).subscribe((sus) => {
        var blob = sus;
        if (blob != null) {
          var a = window.document.createElement("a");
          a.href = window.URL.createObjectURL(blob);
          a.download = Uuid + ".xlsx";
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

  showHidePassthrough() {
    this.hidePassword = this.hidePassword == true ? false : true;
  }

  refreshPage() {
    window.location.reload();
  }


  navigate(url: string) {
    this.router.navigate([url]);
  }


  MapSolId(obj, event) {
    if (obj.status != "INVALID") {
      this.loading = true;
      this.api.mapSolidTobank(obj.value).subscribe((sus) => {
        // console.log(sus);
        let resp = JSON.parse(sus)
        if (resp.ResponseFlag == 1) {
          alert(JSON.parse(resp.ResponseMessage).Table[0].Status);
          this.ReSetMappingForm();
          this.mappingFileSelectedFlag.patchValue("");
        }
        this.loading = false;
      }, (err) => {
        console.log(err);
        this.loading = false;
      })
      return true;
    } else {
      const formData = new FormData();
      if ($('#mappingExceldwn')[0].files.length > 0) {
        this.loading = true;
        let file = $('#mappingExceldwn')[0].files[0];
        let name = $('#mappingExceldwn')[0].files[0].name;
        formData.append("FileByte", file);
        formData.append("FileName", name);
        // call API
        this.api.bankMappingBulkUpload(formData, this.loggedUser).subscribe((sus) => {
          // console.log(sus);
          var blob = sus;
          var a = window.document.createElement("a");
          a.href = window.URL.createObjectURL(blob);
          a.download = sus.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ? "Bank Mapping Master.xlsx" : "Error " + this.currentDateTime + ".txt";
          document.body.appendChild(a);
          a.click();  // IE: "Access is denied";
          document.body.removeChild(a);
          this.loading = false;
          this.ReSetMappingForm();
          this.toggleBankMapPopup();
          this.mappingFileSelectedFlag.patchValue("");
        }, (err) => {
          console.log(err);
          this.loading = false;
        })
      } else {
        alert("Please select the file !")
      }
    }
  }

  

  chnageStaus(uuid, status, batchId) {

    let filteredData = this.approvalPnFileUplodas.filter((item) => item.BatchId != batchId)
    this.api.ModifyUploadedFileStatus(uuid, status).subscribe((sus) => {
      if (JSON.parse(sus).ResponseFlag == 1) {
        alert('Success');
        this.approvalPnFileUplodas = filteredData;
      }
    }, (err) => {
      console.log(err);
    })
  }

  commitApprovedFiles(filePath, uuid, index) {
    this.commitFileFlag = true;
    this.api.approvedFileUpdateToDatbase(filePath, uuid, this.loggedUser).subscribe((sus) => {
      var blob = sus;
      if (blob != null) {
        var a = window.document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = sus.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ? "Bank Mapping Mater.xlsx" : "Error " + this.currentDateTime + ".txt";
        document.body.appendChild(a);
        a.click();  // IE: "Access is denied";
        document.body.removeChild(a);
        // Mart Status to completed
        this.uploadedFilesData[index].TransactionStatus = "Completed";
      } else {
        alert("Server did not return the file");
      }
      this.commitFileFlag = false;
    }, (err) => {
      if (err.status == 404) {
        alert("File does not exist server");
      } else {
        console.log(err);
      }
      this.commitFileFlag = false;
    })
  }

  ReSetMappingForm() {
    this.bankMappingForm.patchValue({ solID: '', bankName: '', receiptUserName: '', receiptVendorName: '', createdBy: this.loggedUser, createdDate: this.currentDateTime });
  }


}
