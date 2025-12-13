import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonplaceholderserviceService } from 'src/app/services/jsonplaceholderservice.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit{
  constructor(private jsonPlaceHolderService:JsonplaceholderserviceService,private route:ActivatedRoute){

  }
  ngOnInit(){

    // this.jsonPlaceHolderService.getPostList(1,10).subscribe(x=>{
    //   console.log(x);
    // })
    console.log(this.route.snapshot.data['postList'])
  }
}
