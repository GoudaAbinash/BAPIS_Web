import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import * as CryptoJS from "crypto-js";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  public api: any;
  private isLoggedin;
  encryptSecretKey = "FGUCO";
  constructor(private http: HttpClient, private route: Router) {
    this.isLoggedin = false;
    if (window.location.hostname == "localhost") {
      this.api = "http://localhost:61567/";
    } else {
        this.api = location.protocol + "//" + location.hostname + "/UCO/";
       //this.api = location.protocol + "//" + location.hostname + "/UCO_UAT/";
    }
  }
  setUserLogin() {
    this.isLoggedin = true;
    //	sessionStorage.setItem('loginStatus', this.isLoggedin);
  }
  logout() {
    //	sessionStorage.removeItem('loginStatus');  
    sessionStorage.clear();
    this.route.navigate(["/"]);
  }

  userValidate(obj): Observable<any> {
    return this.http.post(this.api + "api/Login/Authenticate", obj);
  }
  saveData(obj): Observable<any> {
    return this.http.post(this.api + "api/common/saveData", obj);
  }
  PrExportexceldoc(obj): Observable<any> {
    return this.http.post(this.api + "api/common/PrExportexceldoc", obj);
  }
  saveSalesData(obj): Observable<any> {
    return this.http.post(this.api + "api/common/saveSalesData", obj);
  }
  updateData(obj): Observable<any> {
    return this.http.post(this.api + "api/common/updateData", obj);
  }
  updateQuote(obj): Observable<any> {
    return this.http.post(this.api + "api/common/updateQuoteDetails", obj);
  }
  BOENQ(obj): Observable<any> {
    return this.http.post(this.api + "api/common/BOENQ", obj);
  }
  ucoPayment(obj, type = "P"): Observable<any> {
    return this.http.post(
      this.api + "api/UCOPayment/payment?type=" + type,
      obj,
      { responseType: "text" }
    );
  }
  getReceipt(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getReceipt", obj);
  }
  updateClient4ckyc(obj): Observable<any> {
    return this.http.post(this.api + "api/Renewal/updateClient4ckyc", obj);
  }
  createClient(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/createClient", obj);
  }
  createPDF(obj): Observable<any> {
    return this.http.post(this.api + "api/common/generatePDF", obj);
  }
  generateFirePDF(obj): Observable<any> {
    return this.http.post(this.api + "api/common/generateFirePDF", obj);
  }
  generateFSLPolicy(obj): Observable<any> {
    return this.http.post(this.api + "api/common/generateFSLPolicy", obj);
  }
  generateGLLPolicy(obj): Observable<any> {
    return this.http.post(this.api + "api/common/generateGLLPolicy", obj);
  }

  generateBuglaryPDF(obj): Observable<any> {
    return this.http.post(this.api + "api/common/generateBuglaryPDF", obj);
  }
  generateFireLongPDF(obj): Observable<any> {
    return this.http.post(this.api + "api/common/generateFireLongPDF", obj);
  }
  uploadDoc(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/uploadDoc", obj);
  }
  uploadSalesDoc(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/uploadSalesDoc", obj);
  }
  getData(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getData", obj);
  }
  getSalesData(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getSalesData", obj);
  }
  getStateCode(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getStateCode", obj);
  }
  getEQZone(obj, obj1): Observable<any> {
    return this.http.post(
      this.api +
        "api/Common/getEQZone?districtName=" +
        obj +
        "&StateName=" +
        obj1,
      obj,
      obj1
    );
  }
  DeshboardData(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/DeshboardData", obj);
  }
  getQuoteList(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getQuoteList", obj);
  }
  getQuoteDetails(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getQuoteDetails", obj);
  }
  generateWinNo(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/generateWinNo", obj);
  }
  getPolicyDoc(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getPolicyCopy", obj, {
      responseType: "blob",
    });
  }

  getPrPolicyDoc(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getPrPolicyCopy", obj, {
      responseType: "blob",
    });
  }

  getReceiptdetails(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getReceiptdetails", obj, {
      // responseType: "blob",
    });
  }
  getReceiptList(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getReceiptList", obj);
  }
  updateReceiptAndPayerID(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/updateReceiptAndPayerID", obj);
  }
  getGuestToken(): Observable<any> {
    return this.http
      .post("Security/TokenGuest", null)
      .pipe(map((data) => data));
  }

  // Renewal

  //Abinash 
  updateClient(obj): Observable<any> {
    return this.http.post(this.api + "api/Rnwl/createClient", obj);
  }

  createRnwlPDF(obj): Observable<any> {
    return this.http.post(this.api + "api/Rnwl/generatePDF", obj);
  }


  getRnwDash(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/getRnwDash", obj, {
      headers: headers,
    });
  }
  getPolicyDel(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/getPolicyDel", obj, {
      headers: headers,
    });
  }
  
  //FUS
  get_FUS_PolicyDel(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Rnwl/get_FUS_PolicyDel", obj, {
      headers: headers,
    });
  }
  
  //FRG
  get_FRG_PolicyDel(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Rnwl/get_FRG_PolicyDel", obj, {
      headers: headers,
    });
  }

  updateRnwData(obj): Observable<any> {
    return this.http.post(this.api + "api/renewal/updateRnwData", obj);
  }

  getRnwpolicy(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/getRnwpolicy", obj, {
      headers: headers,
    });
  }
  updateRnwReceiptAndPayerID(obj): Observable<any> {
    return this.http.post(
      this.api + "api/Renewal/updateRnwReceiptAndPayerID",
      obj
    );
  }

  saveRNWData(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/saveRNWData", obj, {
      headers: headers,
    });
  }
  getRNWReceipt(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/getRNWReceipt", obj, {
      headers: headers,
    });
  }
  // Cloning for all policy
  createFireRnwPDF(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/createFireRnwPDF", obj, {
      headers: headers,
    });
  }
  // FRG
  generateFireRnwPDF(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/generateFireRnwPDF", obj, {
      headers: headers,
    });
  }
// FSR
  generateFSRRnwPDF(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/generateFSRRnwPDF", obj, {
      headers: headers,
    });
  }
  // FUS
  generateFUSRnwPDF(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/generateFUSRnwPDF", obj, {
      headers: headers,
    });
  }
  // FBG
  generateFBGRnwPDF(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/generateFBGRnwPDF", obj, {
      headers: headers,
    });
  }
  getRnwDashDetails(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Renewal/getRnwDashDetails", obj, {
      headers: headers,
    });
  }

  // Admin Panel

  ucoBankMasterBulkUpload(obj, loggedUser): Observable<any> {
    const base64EncodedId = btoa(loggedUser);
    console.log(base64EncodedId);
    return this.http.post(
      this.api +
        "api/UcoAdmin/UploadDataFromExcelToDataBase?uploadedBy=" +
        base64EncodedId,
      obj,
      { responseType: "blob" }
    );
  }

  dwnloadClosedXmlExcel(): Observable<any> {
    return this.http.post(
      this.api + "api/UcoAdmin/DownloadUcoBankMasterExcelFormate",
      null,
      { responseType: "blob" }
    );
  }

  dwnSolBnkmapFormat(): Observable<any> {
    return this.http.post(
      this.api + "api/UcoAdmin/downloadBankSOLMappingExcel",
      null,
      { responseType: "blob" }
    );
  }

  vldtSolBankMapFormate(obj): Observable<any> {
    return this.http.post(
      this.api + "api/ucoAdmin/vldBulkBankMappingExcel",
      obj
    );
  }

  // --ckyc
  createCKYC(obj): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(this.api + "api/Common/CreateCKYC", obj, {
      headers: headers,
    });
  }

  getToken(obj): Observable<any> {
    var header = new HttpHeaders({
      "Content-Type": "application/json",
      Token: "96d5561b9f24deSL45b66gaa8dh",
    });
    console.error(obj);
    return this.http.post(
      "https://ekyc-uat.fggeneral.in/api/v1/generate-token",
      obj,
      { headers: header }
    );
  }

  generateToken(obj): Observable<any> {
    var header = new HttpHeaders({
      "Content-Type": "application/json",
      Token: "96d5561b9f24deSL45b66gaa8dh",
    });
    console.error(obj);
    return this.http.post("https://fgiic.arya.ai/api/v1/generate-token", obj, {
      headers: header,
    });
  }

  getCkyctoken(obj): Observable<any> {
    return this.http.post(this.api + "api/Common/getCkyctoken", obj);
  }

  approvalPnFileUploadToServer(obj, loggedUser): Observable<any> {
    return this.http.post(
      this.api + "api/UcoAdmin/UploadFileToServer?uploadedBy=" + loggedUser,
      obj
    );
  }

  fetchApprovalPnUploads(approverId): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(
      this.api + "api/UcoAdmin/getApprovalPnUploads",
      approverId,
      { headers: headers }
    );
  }

  approvedFileUpdateToDatbase(filePath, uuid, loggedUser): Observable<any> {
    return this.http.post(
      this.api +
        "api/UcoAdmin/downloadfileUpdateToDatabase?filePath=" +
        filePath +
        "&uuid=" +
        uuid +
        "&uploadedBy=" +
        loggedUser,
      null,
      { responseType: "blob" }
    );
  }

  ModifyUploadedFileStatus(uuid, status): Observable<any> {
    return this.http.post(
      this.api +
        "api/UcoAdmin/changeFileUploadStatus?uuid=" +
        uuid +
        "&newStatus=" +
        status,
      null
    );
  }

  bankMappingBulkUpload(obj, loggedUser): Observable<any> {
    const base64EncodedId = btoa(loggedUser);
    return this.http.post(
      this.api +
        "api/UcoAdmin/UploadExcelBankMappingData?uploadedBy=" +
        base64EncodedId,
      obj,
      { responseType: "blob" }
    );
  }

  downloadFilesFrmServer(filePath): Observable<any> {
    return this.http.post(
      this.api +
        "api/UcoAdmin/downloadExcelFileFromServer?filePath=" +
        filePath,
      null,
      { responseType: "blob" }
    );
  }

  downloadDocxFileFrmServer(fileName): Observable<any> {
    return this.http.post(
      this.api + "api/UcoAdmin/downloadDocxFileFromServer?fileName=" + fileName,
      null,
      { responseType: "blob" }
    );
  }

  fetchUploadedFiles(): Observable<any> {
    return this.http.post(
      this.api + "api/ucoAdmin/FetchAllUploadedFiles",
      null
    );
  }

  // getPolicyDoc(obj): Observable<any> {
  //   return this.http.post(this.api + 'api/Common/getPolicyCopy', obj,{responseType:'blob'});
  // }

  fetchBankMaster(userId, solId, bankName): Observable<any> {
    return this.http.post(
      this.api + "api/ucoAdmin/fetchBankMasterByUserIdSolIdBankName",
      { userId: userId, solId: solId, bankName: bankName }
    );
  }

  fetchReceipUserName_VendorName(solId, bankName): Observable<any> {
    return this.http.post(
      this.api + "api/ucoAdmin/FetchReciptVendor_UserName",
      { solId: solId, bankName: bankName }
    );
  }

  addUpdateUcoBankMaster(bankMasterObj): Observable<any> {
    return this.http.post(
      this.api + "api/ucoAdmin/addUpdateUcoBankmaster",
      bankMasterObj
    );
  }

  vldtBlkExcelFormate(obj): Observable<any> {
    return this.http.post(
      this.api + "api/ucoAdmin/validateBulkUploadExcel",
      obj
    );
  }

  getUcoObjectRights(userId): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(
      this.api + "api/UcoAdmin/GetUcoObjectRights",
      userId,
      { headers: headers }
    );
  }

  changePassword(obj): Observable<any> {
    return this.http.post(this.api + "api/UcoAdmin/ChangePassword", obj);
  }

  userIdSolIdBankComboExist(userId, solId, bankName): Observable<any> {
    return this.http.post(
      this.api + "api/UcoAdmin/UserIdSolIdBankNameCombExists",
      { userId: userId, solId: solId, bankName: bankName }
    );
  }

  getAllBankIdsCreated(fromDate, toDate): Observable<any> {
    return this.http.post(this.api + "api/UcoAdmin/GetBankMasterByDates", {
      fromdate: fromDate,
      toDate: toDate,
    });
  }

  mapSolidTobank(obj): Observable<any> {
    return this.http.post(this.api + "api/UcoAdmin/MapSolIdWithBankName", obj);
  }

  getBankDetailsFrmBankMapping(solId): Observable<any> {
    const headers = { "content-type": "application/json" };
    return this.http.post(
      this.api + "api/UcoAdmin/FetchBankDetailsFrmBankMapping",
      solId,
      { headers: headers }
    );
  }

  getAllbanksMappedByUserIdSolId(userId, solId): Observable<any> {
    return this.http.post(
      this.api + "api/ucoAdmin/GetMappedBanksBySolIdUserId",
      { userId: userId, solId: solId }
    );
  }

  checkObjectRights(rightsObj, rightNames, flag): boolean {
    let status = false;
    for (let i = 0; i < rightsObj.length; i++) {
      const element = rightsObj[i];
      for (let j = 0; j < rightNames.length; j++) {
        // console.log(rightNames[j]);
        if (element.Process == rightNames[j] && element.Flag == flag) {
          status = true;
          break;
        }
      }
    }
    return status;
  }

  getObjectRightByName(rightsObj, rightNames): boolean {
    for (let i = 0; i < rightsObj.length; i++) {
      const element = rightsObj[i];
      for (let j = 0; j < rightNames.length; j++) {
        // console.log(rightNames[j]);
        if (element.Process == rightNames[j]) {
          return element;
          break;
        }
      }
    }
  }

  checkBrachAccess(adBanks, process, bankName) {
    let status = false;
    for (let index = 0; index < adBanks.length; index++) {
      const _bankName = adBanks[index].bankName;
      const _process = adBanks[index].Process;
      const _flag = adBanks[index].Flag;
      if (_bankName == bankName && _process == process && _flag == "Y") {
        status = true;
        break;
      }
    }
    return status;
  }

  getbnkNamefrmRightsByPrcess(rightsObj, process) {
    let banks = [];
    rightsObj.forEach((element) => {
      if (element.Process == process && element.Flag == "Y") {
        banks.push(element.bankName);
      }
    });
    return banks;
  }

  ency(data) {
    try {
      return CryptoJS.AES.encrypt(data, this.encryptSecretKey).toString();
    } catch (e) {
      console.log(e);
    }
  }
  decy(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  getFullMonth() {
    let month = new Array(
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    );
    return month;
  }

  getFormattedDate(date, type = "") {
    if (!date) return null;
    date = new Date(date);
    var month = this.getFullMonth();
    var dd = date.getDate();
    var mmm = date.getMonth();
    var yyyy = date.getFullYear();
    console.log(yyyy);
    dd = dd < 10 ? "0" + dd : dd;
    var monthNumber: any = Number(mmm + 1);
    monthNumber = monthNumber < 10 ? "0" + monthNumber : monthNumber.toString();

    if (type == "") return dd + "/" + monthNumber + "/" + yyyy;
    else if (type == "dd/mon/yyyy") return dd + "-" + month[mmm] + "-" + yyyy;
    else if (type == "mm/dd/yyyy") return monthNumber + "/" + dd + "/" + yyyy;
    else if (type == "dd-mm-yyyy") return dd + "-" + monthNumber + "-" + yyyy;
    else if (type == "yyyy-mm-dd") return yyyy + "-" + monthNumber + "-" + dd;
    else if (type == "yyyymmdd") return yyyy + monthNumber + dd;
  }

  getFormattedSaveDate(date) {
    if (date) {
      return this.getFormattedDate(date, "dd-mm-yyyy");
    } else {
      return null;
    }
  }
}
