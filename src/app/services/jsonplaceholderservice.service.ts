import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { BehaviorSubject, catchError, filter, from, map, mergeMap, skip, take, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonplaceholderserviceService {

  constructor(private http: HttpClient) {}

  currencyObservable=new BehaviorSubject("Türk Lirası");

  // post (ekleme) işlemi
  create(createPost:Post){
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts',createPost);
  }
  // put (güncelleme) işlemi
  update(updatePost:Post){
    return this.http.put<Post>(`https://jsonplaceholder.typicode.com/posts/${updatePost.id}`,updatePost);
  }
  // delete (silme) işlemi
  delete(deletePost:Post){
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/posts/${deletePost.id}`);
  }

  public setCurrency(val:string){
    this.currencyObservable.next(val);
  }

  getPostList(page: number, pageSize: number) {
    // page:1 pageSize:5 -> 1,2,3,4,5
    // page:2 pageSize:5 -> 6,7,8,9,10
    // page:3 pageSize:5 -> 11,12,13,14,15
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        mergeMap((x) => from(x)),
        skip((page - 1) * pageSize),
        take(pageSize),
        map((x) => `${x.id}-${x.userId}-${x.title} `),
        toArray()
      );
  }

  getPost(id: number) {
    var queryParams = new HttpParams({
      fromString: 'name=emir&age=22',
    });

    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      { params: queryParams }
    );
  }

  getUserWithSearch(searchText: string) {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(mergeMap((x) => from(x)),filter(x=>x.name.toLowerCase().includes(searchText.toLowerCase())),map(x=>`${x.name} ${x.email}`),toArray());
  }
}

// getPostList() {
//   return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
// }

// getPost(id: number) {
// bir datayı ham olarak yani response'ı bu şekilde alırız ..

// const customHeader = new HttpHeaders({
//   'Content-Type': 'application/json',
//   Authorization: 'Bearer My Jwt',
// });

// return this.http.get<Post>(
//   `https://jsonplaceholder.typicode.com/posts/${id}`,
//   { observe: 'response', headers: customHeader }
// );

//   var queryParams=new HttpParams({
//     fromString:'name=emir&age=22',
//   });

//   return this.http.get<Post>(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {params:queryParams}
//   );
// }

//  getPost(id:number){
//   return this.http
//     .get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(catchError(e=>{
//       throw new Error("Data bulunamadı");
//     }));
//  }
