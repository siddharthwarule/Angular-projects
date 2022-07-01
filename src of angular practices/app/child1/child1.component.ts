import { Component, OnInit } from '@angular/core';
import{NumberService} from '../number.service'

@Component({
  selector: 'app-child1',
  template:`<h1> To print number is prime or not... </h1>
                <h2>{{ans}}</h2>
  `,
})
export class Child1Component implements OnInit {

  ans:any;
  
  constructor(private _obj:NumberService) {

    

   }

  ngOnInit(): void {
     

    this.ans=this._obj.chkPrime(10);


  }

}
