import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {
  isShow:boolean=true;
  constructor() { 

  }
  ngOnInit(): void {

  }

  showHide():void{
    this.isShow = !this.isShow;
  }
}
