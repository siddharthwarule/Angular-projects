import { Component, OnInit } from '@angular/core';

import{ArithmaticService} from '../arithmatic.service' ;

@Component({
  selector: 'app-demo',
  template:`<h1> Arithmatic Equations </h1>
  
           <h3>The result of Adition is {{totalSum}}    </h3>
           <h3>The result of substarction is {{totalSub}}    </h3>` ,

})
export class DemoComponent implements OnInit {

  
  public totalSum=0;
  
  public totalSub=0;


  constructor(private _obj:ArithmaticService) { }


  ngOnInit(): void {

    this.totalSum=this._obj.Add(12,12);

    this.totalSub=this._obj.sub(12,12);
  
  }

}
