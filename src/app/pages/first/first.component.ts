import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

    constructor(private myService:MyserviceService){
      }
    
      ngOnInit(): void {
          // observable nesnesine subscribe olup dinleme
          this.myService.myObservable.subscribe({
            //console.log(x);   
            next(data){
              console.log("First Component: "+data);
            },     
            error(err){
              console.log(err);
            },
            complete(){
              console.log("First Component: Data yayınlama işlemi tamamlandı");          
            }
          })   
      }
}
