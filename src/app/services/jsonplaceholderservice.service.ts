import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderserviceService {

  constructor(private http:HttpClient) {

   }

   getPostList(){
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts');
   }

   getPost(id:number){ // bir datayı ham olarak yani response'ı bu şekilde alırız ..

    const customHeader=new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Bearer My Jwt',
    });


    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`,{observe:"response",headers:customHeader});
   }

  //  getPost(id:number){
  //   return this.http
  //     .get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(catchError(e=>{
  //       throw new Error("Data bulunamadı");
  //     }));
  //  }
}
