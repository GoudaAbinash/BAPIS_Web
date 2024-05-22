import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-bulk-upload',
  templateUrl: './bulk-upload.component.html',
  styleUrls: ['./bulk-upload.component.scss']
})
export class BulkUploadComponent implements OnInit {
  userId;
  constructor(private api: CommonService) { }

  ngOnInit() {
    let sessionData = this.api.decy(sessionStorage.getItem('userDetails'));
    this.userId = sessionData[0].UserId;
  }

}
