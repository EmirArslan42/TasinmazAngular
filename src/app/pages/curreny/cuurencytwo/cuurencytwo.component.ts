import { Component } from '@angular/core';
import { JsonplaceholderserviceService } from 'src/app/services/jsonplaceholderservice.service';

@Component({
  selector: 'app-cuurencytwo',
  templateUrl: './cuurencytwo.component.html',
  styleUrls: ['./cuurencytwo.component.css'],
})
export class CuurencytwoComponent {
  
  currency:string|undefined;
  constructor(private jsonPlaceHolderService:JsonplaceholderserviceService) {}

  ngOnInit() {
    this.jsonPlaceHolderService.currencyObservable.subscribe((x) => {
      console.log('İkinci Currency Component Haberdar Edildi ' + x);
      this.currency=x;
    });
  }
}
