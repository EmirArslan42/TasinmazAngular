import { Component } from '@angular/core';

@Component({
  selector: 'app-example2',
  template: `<h1>Example2 Component</h1><p>{{email}}</p>`,
  styles: [`.h1{color:blue;}`]
})
export class Example2Component {
  email:string="deneme@example.com";
}
