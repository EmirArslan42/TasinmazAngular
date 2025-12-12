import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService implements OnInit{
  myObservable:Observable<string>;
  constructor() {
    // observable nesnesi oluşturma
       this.myObservable=new Observable<string>(data=>{
        data.next("emir oberservable nesnesi");
        data.next("dilay");
        //data.error("Öylesine bir hata oluşturduk")
        data.complete(); // data yayınlama işleminin sona geldiğini söylüyoruz
      });
   }

  ngOnInit(): void {
      
  }
}
