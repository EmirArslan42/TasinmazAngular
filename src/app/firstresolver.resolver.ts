import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { delay, Observable, of } from 'rxjs';
import { JsonplaceholderserviceService } from './services/jsonplaceholderservice.service';

@Injectable({
  providedIn: 'root'
})
export class FirstresolverResolver implements Resolve<string[]> {

  constructor(private jsonPlaceHolderService:JsonplaceholderserviceService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
     
   return this.jsonPlaceHolderService.getPostList(1,10).pipe(delay(5000));
  }
}
