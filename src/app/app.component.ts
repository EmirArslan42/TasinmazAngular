import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasinmaz-frontend';

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
  /*
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
}
