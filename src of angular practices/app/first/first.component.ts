import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})


export class FirstComponent  
{
   //charectoristics
  name :string="siddharth Avinash Warule";

  //Behaviors
  Display():string{

    var ret:string="Hello "+this.name;

    return ret;
  }


  addition(no1:number,no2:number)
{

  return no1+no2;

}

}
