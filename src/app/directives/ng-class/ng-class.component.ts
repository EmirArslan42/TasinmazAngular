import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  isLarge:boolean = true;
  isRedBox:boolean = true;
  isBlueBorder:boolean = true;
  css:any={large:true,redBox:true,blueBorder:true};

  // applyClass(){
  //   this.isLarge = !this.isLarge;
  //   this.isRedBox = !this.isRedBox;
  //   this.isBlueBorder = !this.isBlueBorder;
  // }  
  applyClass(){
    this.css.large = !this.css.large;
    this.css.redBox = !this.css.redBox;
    this.css.blueBorder = !this.css.blueBorder;
  }
  constructor() { 

  }

  ngonInit(): void {
    
  }  
}
