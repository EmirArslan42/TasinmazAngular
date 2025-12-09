import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

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

  countryChange(value: any) {
    console.log(`Country: ${value}`); // country değişimini konsola yazdır
  }
  genderChange(value: any) {
    console.log(`Gender: ${value}`); // gender değişimini konsola yazdır
  }
  rememberMeChange(value: any) {
    console.log(`RememberMe: ${value}`); // rememberMe değişimini konsola yazdır
  }
  onChange(value: any) {
    console.log(`onChange: ${value}`); // onChange değişimini konsola yazdır
  }
  isValid(model:FormControl):boolean{
     if(!(model.invalid && (model.dirty || model.touched))) return false;
     if(model.errors?.['required']) return true;
     if(model.errors?.['minlength']) return true;
     return false;
  }
  isSuccessValid(model:FormControl):boolean{
    if(model.valid && (model.dirty || model.touched)) return true;
    return false;
  }

  loginModel: loginModel;
  loginModel2: loginModelClass;
  countryMenu: countryDropMenu[] = [
    { text: 'Seçiniz', value: 0 },
    { text: 'Türkiye', value: 1 },
    { text: 'Almanya', value: 2 },
    { text: 'Fransa', value: 3 },
  ];
  genderMenu:genderRadioMenu[]=[
    {text:'Erkek',value:1},
    {text:'Kadın',value:2},
  ];

  constructor() {
    this.loginModel = {
      username: '',
      password: '',
      rememberMe: false,
      country: 0,
      gender:1,
    };
    // this.loginModel2=new loginModelClass('','',false);
    this.loginModel2 = new loginModelClass();
  }

  ngOnInit(): void {}
}

interface countryDropMenu {
  text: String;
  value: number;
}

interface genderRadioMenu {
  text: String;
  value: number;
}

interface loginModel {
  username: string;
  password: string;
  rememberMe: boolean;
  country: number;
  gender:number;
}

class loginModelClass {
  username?: string;
  password?: string;
  rememberMe?: boolean;

  // constructor(username: string, password: string, rememberMe: boolean) {
  //   this.username = username;
  //   this.password = password;
  //   this.rememberMe = rememberMe;
  // }
}
