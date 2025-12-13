import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { JsonplaceholderserviceService } from 'src/app/services/jsonplaceholderservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  search=new FormControl('');

  searchResultList:string[]=[];
  

  constructor(private jsonPlaceHolderService:JsonplaceholderserviceService){

  }
  ngOnInit(){
    this.search.valueChanges.subscribe(x=>{
      this.jsonPlaceHolderService.getUserWithSearch(x as string).subscribe(y=>{
        this.searchResultList=y;
      })
      //console.log(`Value: ${x}`);
      
    })
  }
}
