import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
  checked = false;
  indeterminate = false;

  selectedCategory: any[];
  Category: any[];
  constructor() { }

  equals(objOne, objTwo) {
    if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
      return objOne.id === objTwo.id;
    }
  }
  
  selectAll(select: NgModel, values) {
    select.update.emit(values); 
  }

  deselectAll(select: NgModel) {
    select.update.emit([]); 
  }

  ngOnInit(){
    this.Category = [
      {id: 1, viewValue: "Maker"},
      {id: 2, viewValue: "Checker"},
    ]
  }
  saveData(){
    
  }
}
