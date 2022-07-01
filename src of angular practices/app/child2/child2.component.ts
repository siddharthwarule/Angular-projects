import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template:`<h1>print no of capital charactors is  </h1>
  
            <h2>{{ans}}</h2>
  `,

})
export class Child2Component implements OnInit {
  
  ans:any

  constructor(private _obj:StringService) { }

  ngOnInit(): void {
   
   this.ans= this._obj.countCapital("I am SIddHarth");

  }

}
