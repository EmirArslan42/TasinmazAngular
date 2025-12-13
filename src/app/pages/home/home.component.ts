import { Component, OnInit } from '@angular/core';
import { catchError, concatMap,defer,delay,distinct,filter,find,first,from,fromEvent,interval,last,map,mapTo,mergeMap,Observable,of,range,reduce,retry,single,skip,skipUntil,skipWhile,switchMap,take,takeLast,takeWhile,tap,timer,toArray,} from 'rxjs';
import { MyserviceService } from 'src/app/myservice.service';
import {ajax} from "rxjs/ajax"
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Post } from 'src/app/models/post';
import { JsonplaceholderserviceService } from 'src/app/services/jsonplaceholderservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //ngOnInit(): void {
    // observable nesnesine subscribe olup dinleme
    // this.myService.myObservable.subscribe({
    //   //console.log(x);
    //   next(data){
    //     console.log(data);
    //   },
    //   error(err){
    //     console.log(err);
    //   },
    //   complete(){
    //     console.log("Data yayınlama işlemi tamamlandı");
    //   }
    // })

    // let values=of('angular',2,[1,2,3],5.56); // tanımladığımız değerleri subscriberlara aktarmak için kullanırız
    // values.subscribe(x=>{
    //   console.log(x);
    // });

    // let values=interval(100) // belirli aralıklarla veri yayınlamamız gerekiyorsa timer kurmadan işimizi halledebiliriz
    // values.subscribe(x=>{
    //   console.log(x);
    // });

    // let values=timer(3000) // uygulama ayağa kalktıktan 3 sn sonra çalışsın istiyorsak kullanırız
    // //timer(3000,1000) -> ilk 3 saniye yayın yapmaz,3 saniyeden sonra başlar ve her saniye gönderir
    // values.subscribe({
    //   next:(val)=>console.log("Reklam Gösterildi"),
    //   error:(e)=>console.log(e),
    //   complete:()=>console.log("Tamamlandı"),
    // });

    // let values=range(10,15) // 10'dan başlayıp 15 tane veri göndermemizi sağlar
    // values.subscribe({
    //   next:(val)=>console.log(val),
    //   error:(e)=>console.log(e),
    //   complete:()=>console.log("Tamamlandı"),
    // });

    // let ofObservable = of(new Date());
    // let deferObservable=defer(()=>of(new Date()));
    // let timerObservable = timer(3000);

    // timerObservable.subscribe((x) => { // bu bize 3 saniye önceki değeri verirken
    //   ofObservable.subscribe({
    //     next: (val) => console.log(`of : ${val}`),
    //     error: (err) => console.log(err),
    //     complete: () => console.log('Tamamlandı'),
    //   });

    // deferObservable.subscribe({ // defer ise çalıştığı zaman gidio güncel olan 3 sn sonraki değeri verir
    //   next: (val) => console.log(`def: ${val}`),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('Tamamlandı'),
    // });

    // const map=new Map();
    // map.set(1,"Kitap 1");
    // map.set(2,"Kitap 2");
    // map.set(3,"Kitap 3");

    // let operatorOfFrom = from(map); // from'un of'dan farkı fromun bir dizi almasıdır,aynı işi yapıyorlar...

    // operatorOfFrom.subscribe({
    //   next: (val) => console.log(`key : ${val[0]}, val: ${val[1]}`),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('Tamamlandı'),
    // });

    // const myArray=from([5,7,9,10,12,14,20,33]);

    // myArray.pipe(first(x=>x>12)).subscribe(x=>{ // subscribe' a ulaşmadan önce şartı sasğlayan ilk değeri yakalamamızı sağlar
    //   console.log(x);
    // },err=>console.log("Item bulunamadı")) // şartı sağlamazsa hata fırlatır.Find böyle değil hata fırlatmaz, undefined döner

    // const myArray=from([5,7,9,10,12,14,20,33]);

    // myArray.pipe(find(x=>x>12)).subscribe(x=>{ // subscribe' a ulaşmadan önce şartı sasğlayan ilk değeri yakalamamızı sağlar
    //   console.log(x);
    // }) // şartı sağlamazsa hata fırlatır.Find böyle değil hata fırlatmaz, undefined döner

    // const myArray=from([5,7,9,10,12,14,20,33]);

    // myArray.pipe(last(x=>x>12)).subscribe(x=>{ // subscribe' a ulaşmadan önce şartı sasğlayan son değeri yakalamamızı sağlar
    //   console.log(x);
    // })

    // const myArray=from([5,7,9,10,12,14,20,33]);

    // myArray.pipe(filter(x=>x<32),last()).subscribe(x=>{ // subscribe' a ulaşmadan önce şartı sasğlayan son değeri yakalamamızı sağlar
    //   console.log(x);
    // })

    // const myArray=from([5,7,9,10,12,14,20,33]);

    // myArray.pipe(filter(x=>x>10),last()).subscribe(x=>{ // subscribe' a ulaşmadan önce tüm değerleri verir
    //   console.log(x);
    // })

    // const myArray=from([5,7,9,10,12,14,20,33]);

    // myArray.pipe(single(x=>x>22)).subscribe(x=>{ // şartı sağlayan elemanı döner,ama birden fazla eleman varsa hata döner...
    //   console.log(x);
    // })

    // const myArray=from([5,7,10,5]);

    // myArray.pipe(distinct()).subscribe(x=>{ // bir dizideki tekrarlayan değerleri teke düşürür
    //   console.log(x);
    // })

    // const myArray=from([1,2,3,4,5,6,7,8,9,10]);

    // myArray.pipe(skip(4)).subscribe(x=>{ // subscribe'a gelmeden atlama yapabilmemizi sağlar
    //   console.log(x);
    // })

    // const myArray=from([1,2,3,4,5,6,7,8,9,10]);

    // myArray.pipe(skipWhile(x=>x<5)).subscribe(x=>{ // subscribe'a gelmeden şarta bağlı atlama yapabilmemizi sağlar
    //   console.log(x);
    // })

    // const myArray=interval(1000);

    // myArray.pipe(skipUntil(timer(5000))).subscribe(x=>{ // bu observable nesnesi data yayınlayıncaya kadar bekletir..
    //   console.log(x);
    // })

    // const names = from([
    //   { name: 'ahmet', surname: 'yıldırım', email: 'ahmet@outlook.com' },
    //   { name: 'mehmet', surname: 'yılmaz', email: 'mehmet@outlook.com' },
    //   { name: 'hasan', surname: 'çakır', email: 'hasan@outlook.com' },
    //   { name: 'yılmaz', surname: 'sümbül', email: 'yılmaz@outlook.com' },
    // ]);

    // names.pipe(map(x=>`${x.name} ${x.surname} (${x.email})`)).subscribe((x) => {
    //   // map operatörü akıştaki datada değişiklik yapmamızı sağlar .. gelen akıştaki keyword'e erişerek yaparız bunu
    //   console.log(x);
    // });

    // const click=fromEvent(document,"click");
    // click.pipe(mapTo("Merhaba neden ekrana tıklıyorsun ???")).subscribe((x)=>{
    //   console.log(x); // ekrana her tıkladığımızda pipe' a girerek bizim sabit mesajımızı yayınlar

    // })

    // let names = from([
    //   { name: 'ahmet', surname: 'yıldırım', email: 'ahmet@outlook.com' },
    //   { name: 'mehmet', surname: 'yılmaz', email: 'mehmet@outlook.com' },
    //   { name: 'hasan', surname: 'çakır', email: 'hasan@outlook.com' },
    //   { name: 'yılmaz', surname: 'sümbül', email: 'yılmaz@outlook.com' },
    // ]);

    // names.pipe(mapTo("Akıştan ne data gelirse gelsin bu mesaj yayınlanacak..")).subscribe((x) => {
    //   // sabit bir değer yayınlamak istediğimizde kullanırız
    //   console.log(x);
    // });

    // iki farklı observable nesnesinin birlikte kullanılmasını sağlar
    // var stringArray=of('a','b','c','d');
    // var numberArray=of(1,2,3);

    // stringArray.pipe(mergeMap(x=>numberArray.pipe(map(y=>x+y)))).subscribe(x=>{
    //   console.log(x);
    // })

    //observable nesnesini değiştirmemize olanak tanır
    // const myClick=fromEvent(document,"click");
    // myClick.pipe(switchMap(()=>timer(1000))).subscribe(x=>{
    //   console.log(x);
    // });

    // var stringArray=of('a','b','c','d');
    // var numberArray=of(1,2,3);

    // stringArray.pipe(mergeMap(x=>numberArray.pipe(delay(5000),map(y=>x+y)))).subscribe(x=>{
    //   console.log(x); // merge burada toplu bir birleştirme yapar, hepsini birlikte verir.
    // })

    // var stringArray=of('a','b','c','d');
    // var numberArray=of(1,2,3);

    // stringArray.pipe(concatMap(x=>numberArray.pipe(delay(5000),map(y=>x+y)))).subscribe(x=>{
    //   console.log(x); // concatMap ise; stringArray'in her elemanından sonra ekrana yazar
    // })

    // toArray operatörü array'e dönüştürme işlemini yapar
    // var stringArray=of('a','b','c','d');

    // stringArray.pipe(toArray()).subscribe(x=>{
    //   console.log(x);
    // })

    // tap metodu: data akarken nesneye bir etkisi yoktur.Loglama yapmak istediğimizde kullanabiliriz.
    // var numberArray=of(1,2,3,4,5);

    // numberArray.pipe(tap(x=>console.log(`${x} datası geldi`))).subscribe(x=>{
    //   console.log(x);
    // })

    // var numberArray = of(1, 2, 3, 4, 5);

    // numberArray
    //   .pipe(tap((x) => console.log(`${x} datası geldi`)))
    //   .subscribe((x) => {
    //     console.log(x);
    //   });

    // istek atarken başarısız olursa başarılı olana kadar 3 kere daha daneyecek
    // ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(retry(3)).subscribe(x=>{
    //   console.log(x);     
    // })

    // var data=interval(1000).pipe(map(val=>{
    //   if(val>6){
    //     throw "Değer 6'dan büyük olamaz";
    //   }
    //   return val;
    // }),catchError(e=>of(`Hata Var: ${e}`)))

    // data.subscribe({
    //   next:(val)=>{console.log(val)},
    //   error:(err)=>{console.log('Bu hata subscribe tarafından ele alındı')},
      
    // });

//}

user:User | undefined;
postList:string[]=[];
isLoading:boolean=true;

constructor(private myService: MyserviceService,private jsonPlaceHolderService:JsonplaceholderserviceService) {}

  ngOnInit(): void {    
      this.jsonPlaceHolderService.getPostList(3,15).subscribe((x) => {
        //console.log(x);
        this.postList=x
        this.isLoading=false;
      });
  }
}

