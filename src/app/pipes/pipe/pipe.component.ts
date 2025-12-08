import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  price:number=1250;
  myDate:Date=new Date();
  person1:Person={firstName:"Emir",lastName:"Arslan",age:22};
  person2:any={first:"Hasan",last:"Aydın",age:40};
  constructor() { 

  }

  ngOnInit(): void {
  }
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}