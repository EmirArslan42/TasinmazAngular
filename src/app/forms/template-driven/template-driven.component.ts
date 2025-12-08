import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {
  save(form: NgForm) {
    console.log(form.value);    
    console.log('Form Submitted');
    alert('Form Submitted Successfully');
  }

  loginModel: loginModel
  constructor() {
    this.loginModel={username:'',password:'',rememberMe:false};
  }

  ngOnInit(): void {}
}

interface loginModel {
  username: string;
  password: string;
  rememberMe: boolean;
}
