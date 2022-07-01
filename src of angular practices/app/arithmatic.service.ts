
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})

export class ArithmaticService
 {
  
  constructor() { }

  public Add(NO1:number,No2:number)
  {

  var Ans:number=0;
  Ans=NO1+No2;
  
  return Ans;
  
}

 public sub(a:number,b:number)
 {

  var total = a-b;
   
   return total;

 }

}
