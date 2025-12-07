import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-click',
  templateUrl: './event-click.component.html',
  styleUrls: ['./event-click.component.css']
})
export class EventClickComponent implements OnInit {
  // one-way binding örneği
  count:number = 1;

  constructor(){
    console.log("Constructor çalıştı!");
  }

  ngOnInit():void{  
    console.log("ngOnInit çalıştı!");
  }

  writeToConsole():void{
    console.log("Butona tıklandı!");
  }

  increaseCount():void{
    this.count++;
  }

  decreaseCount():void{
    this.count--;
  }

}
