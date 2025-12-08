import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasinmaz-frontend';

  save(input:string){
    console.log(`Kaydedildi ${input}`);
    alert(`Kaydedildi ${input}`);
  }

}

interface IProduct{
  Name:string;
  Price:number;
  sayHello():string;
}

class Car implements IProduct{
  Name: string="Telefon";
  Price: number=49999;

  constructor(name:string,price:number){
    this.Name=name;
    this.Price=price;
  }
  sayHello(): string {
    return "Merhaba";
  }
}

/*
class Product{

  // Fields
  name:string;
  price:number;
  category:string;
  isPublish:boolean;

  // Constructor
  constructor(name:string,price:number,category:string,isPublish:boolean){
    this.name=name;
    this.price=price;
    this.category=category;
    this.isPublish=isPublish;
  }

  // Methods
  // Topla(a1:number,a2:number):number // bişey dönmeyeceksek void yazılır
  // {
  //   let b1=10;
  //   let b2=15;
  //   return a1+a2;
  // }

  topla(a1:number,a2:number):number{
    return a1+a2;
  }


}
  
class Product2 extends Product{ // miras alma işleminde extends kullanılır

  // public -> her yerden erişilebilir
  // private -> sadece tanımlandığı sınıfın içinde erişilebilir
  // protected -> tanımlandığı sınıf ve o sınıftan türeyen sınıflarda erişilebilir

  constructor(name:string,price:number,category:string,isPublish:boolean,farkliParametre:Date){
    super(name,price,category,isPublish);

  }
  method2(){
    this.topla(5,10);
    this.name;
    this.price; // method ve değişkenlere erişim sağlandı
  }
}

  name="Emir";
  isUser=true;

  constructor(){
    console.log(`name: ${this.name}`);
    //console.log("name: "+this.name);
    console.log(`isUser: ${this.isUser}`);
  }

  MethodOrnek(){ //method içinde değişken tanımlama let,var,const ile yapılır
    let city:string="Istanbul";
    console.log(`city: ${city}`);
  }

  createdDare:Date=new Date();
  names:string[]=["Emir","Dilay","Eren"];
  isUsers:boolean[]=[true,false,true,false];
  //deneme:string=1; bu hata almamıza sebep olacaktır
  type:any=1; //any türü her türlü değeri alabilir
  type1:unknown=1; //unknown türü herhangi bir değeri alabilir ama o değeri kullanmadan önce tür kontrolü yapmalıyız

  Method1(){
    this.type.toFixed();
    //this.type1.toFixed(); //hata verir
    (this.type1 as number).toFixed(); //hata vermez çünkü tür kontrolü yapıldı
  }
*/

