import { Component, OnInit } from '@angular/core';
import{StringService} from '../string.service';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child3',
  template:`<h1>print no of capital charactors is  </h1>
  
  <h2>{{Ans1}}</h2>
  

  
<h1> To print number is prime or not </h1>
<h2>{{Ans2}}</h2>
  
  `
})
export class Child3Component implements OnInit {

Ans1:any;
Ans2:any;

  constructor(private _obj2:StringService,private _obj3:NumberService) { }
  ngOnInit(): void {
  this.Ans1=this._obj2.countCapital("SIdDDHarth WaruLe");
  this.Ans2=this._obj3.chkPrime(12);  
  }

}
