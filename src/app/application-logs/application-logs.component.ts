import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-application-logs',
  templateUrl: './application-logs.component.html',
  styleUrls: ['./application-logs.component.scss']
})
export class ApplicationLogsComponent implements OnInit {
  logCompareForm: FormGroup;
  jsonStr1: any;
  jsonStr2: any;
  chnageDetect: any = [];
  isFormSubmitted: boolean = false;
  constructor(private location:  Location) {
    this.logCompareForm = new FormGroup({
      json1: new FormControl('', [Validators.required]),
      json2: new FormControl('', [Validators.required])
    })
  }

  ngOnInit() {
  }
 previous() {
    this.location.back();
  }
  compareLogs() {
    // console.log(this.logCompareForm.value);
    this.isFormSubmitted = true;
    this.logCompareForm.value.json1
    let str1 = JSON.parse(this.logCompareForm.value.json1);
    let str2 = JSON.parse(this.logCompareForm.value.json2);
    this.jsonStr1 = str1;
    this.jsonStr2 = str2;

    this.diff(str1, str2, '').forEach(element => {
      console.log(element.id.split('.')[1]);
      this.chnageDetect.push(element.id.split('.')[1]);
    });
    console.log(this.diff(str1, str2, ''));
    this.logCompareForm.patchValue(
      {
        json1: '',
        json2: ''
      }
    )
  }

  diff(a, b, namespace) {
    namespace = (namespace || '') + '.';

    var keysInA = Object.keys(a),
      keysInB = Object.keys(b);

    var diffA = keysInA.reduce(function (changes, key) {
      var ns = namespace + key;

      if (typeof b[key] == 'undefined') {
        return changes.concat([{ type: 'DELETED', id: ns }]);
      }

      if (a[key] !== b[key]) {
        return changes.concat([{ type: 'CHANGED', id: ns }]);
      }

      if (typeof (a[key] == b[key]) == 'object') {
        return this.diff(a[key], b[key], ns);
      }

      return changes;
    }, []);

    var diffB = keysInB.reduce(function (changes, key) {
      var ns = namespace + key;

      if (typeof a[key] == 'undefined') {
        return changes.concat([{ type: 'ADDED', id: ns }]);
      }

      return changes;
    }, []);

    return diffA.concat(diffB);
  }

}
