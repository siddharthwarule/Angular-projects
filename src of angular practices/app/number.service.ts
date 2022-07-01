import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }
  public chkPrime(NO:number)
  {

  var Ans:number=0;

  var res =0;
   
  if(NO==1){
   return "no is not prime not composis"
  }
  for(var i=2;i<=NO;i++){

    res= NO % i
  }

if(res==0)
{
return "No is not prime";
}
  else{
    return "No is prime"
  }
  }
}
