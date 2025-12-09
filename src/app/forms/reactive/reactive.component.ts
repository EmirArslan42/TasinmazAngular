import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent {
  countryMenu: CountryDropMenu[] = [
    { text: 'Türkiye', value: 1 },
    { text: 'Almanya', value: 2 },
    { text: 'Fransa', value: 3 },
  ];
  genderMenu: GenderRadioMenu[] = [
    { text: 'Erkek', value: 1 },
    { text: 'Kadın', value: 2 },
  ];

  loginForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: fb.control('', Validators.required), // formControl name
      password: fb.control('', [Validators.required, Validators.minLength(4)]),
      rememberMe: false,
      country: fb.control('', Validators.required),
      gender: 1,
      birthDate: fb.control('', [Validators.required, this.isOldEnough]),
    });
  }

  ngOnInit(): void {}

  signIn() {
    console.log(this.loginForm.value);
  }

  isInValidMessageShow(formControlName: string): boolean | undefined {
    return (
      this.loginForm.get(formControlName)?.invalid &&
      (this.loginForm.get(formControlName)?.dirty ||
        this.loginForm.get(formControlName)?.touched)
    );
  }

  isValid(formControlName: string): boolean {
    let formControl = this.loginForm.get(formControlName);

    if (!(formControl?.invalid && (formControl.dirty || formControl.touched)))
      return false;
    if (formControl.errors?.['required']) return true;
    if (formControl.errors?.['minlength']) return true;
    return false;
  }
  isSuccessValid(formControlName: string): boolean {
    let formControl = this.loginForm.get(formControlName);

    if (formControl?.valid && (formControl.dirty || formControl.touched))
      return true;
    return false;
  }
  isOldEnough(control: FormControl): { isYoung: true } | null {
    let birthDate = new Date(control.value);
    birthDate.setFullYear(birthDate.getFullYear() + 18);
    return birthDate < new Date() ? null : { isYoung: true };
  }
}
