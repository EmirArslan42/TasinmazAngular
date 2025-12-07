import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  names:string[]=["Ahmet","Mehmet","Hasan"];
  userList:User[]=[];
  constructor() { 
    this.userList.push(new User(1,"Emir","emir@outlook.com"));
    this.userList.push(new User(2,"Ali","ali@outlook.com"));
    this.userList.push(new User(3,"Veli","veli@outlook.com"));
  }
  ngOnInit(): void {

  }

}
