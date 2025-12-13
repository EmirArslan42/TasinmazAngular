import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { JsonplaceholderserviceService } from '../services/jsonplaceholderservice.service';

@Component({
  selector: 'app-ornek',
  templateUrl: './ornek.component.html',
  styleUrls: ['./ornek.component.css'],
})
export class OrnekComponent implements OnInit {
  post: Post | undefined;
  constructor(private jsonPlaceHolderService:JsonplaceholderserviceService) {}
  // ngOnInit() {
  //   this.jsonPlaceHolderService.getPost(1).subscribe(x=>{
  //     this.post=x;
  //   })

  ngOnInit() {
    this.jsonPlaceHolderService.getPost(2).subscribe({
      next:(x)=>this.post=x,
      error:(e:Error)=>console.warn(e),
      complete:()=>console.log("İstek tamamlandı"),
    });
  }
}
