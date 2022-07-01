import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

   public countCapital(str:String){
   
  var cap=(str.match(/[A-Z]/g)||[]).length;

  return cap;

   }



}
