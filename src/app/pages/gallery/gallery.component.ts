import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsonplaceholderserviceService } from 'src/app/services/jsonplaceholderservice.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  currencyList:string[]=["Türk Lirası","Dolar"];
  selectCurrency=new FormControl('Türk Lirası');
  constructor(private jsonPlaceHolderService:JsonplaceholderserviceService){

  }
  ngOnInit(){
    this.selectCurrency.valueChanges.subscribe(x=>{
      console.log(x);
      this.jsonPlaceHolderService.setCurrency(x as string);
    })
  }
}
