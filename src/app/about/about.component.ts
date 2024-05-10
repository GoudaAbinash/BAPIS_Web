import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
name='araon'
isMyClick:number=0
  constructor() { }

  ngOnInit() {

  }
  myClick()
  {
    alert("myClick()");
    this.isMyClick=1;
  }

}
