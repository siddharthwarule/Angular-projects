import { Component, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-childto-parent',
  templateUrl: './childto-parent.component.html',
  styleUrls: ['./childto-parent.component.css']
})
export class ChildtoParentComponent
 {


// EventEmitter is like a laser to send the data to @output is use to send across the component
// we making its objects and do emit method on it emit method is send to parent using parameter


public Massage=["sid","sonu","siddharth"];

 @Output() public MyEvent=new EventEmitter();

public sendMassage()
{
  this.MyEvent.emit(this.Massage);
}

}


