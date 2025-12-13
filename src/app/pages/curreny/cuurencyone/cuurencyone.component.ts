import { Component, OnInit } from '@angular/core';
import { JsonplaceholderserviceService } from 'src/app/services/jsonplaceholderservice.service';

@Component({
  selector: 'app-cuurencyone',
  templateUrl: './cuurencyone.component.html',
  styleUrls: ['./cuurencyone.component.css']
})
export class CuurencyoneComponent implements OnInit{
  currency:string|undefined;
  constructor(private  jsonPlaceHolderService:JsonplaceholderserviceService){

  }
  ngOnInit(){
    this.jsonPlaceHolderService.currencyObservable.subscribe(x=>{
      console.log("Birinci Currency Component Haberdar Edildi "+x);
      this.currency=x;
    })
  }
}
