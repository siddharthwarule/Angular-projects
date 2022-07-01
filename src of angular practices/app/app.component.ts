import { Component } from '@angular/core';

// decoraters               
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'demo2';
 public Massage = "Hallo child components...";
  age = 22;

public Data : any;


}
