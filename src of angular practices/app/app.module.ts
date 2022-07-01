import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildComponent } from './child/child.component';
import { ChildtoParentComponent } from './childto-parent/childto-parent.component';
import { DemoComponent } from './demo/demo.component';
import{ArithmaticService} from './arithmatic.service';
import{NumberService} from './number.service';
import { Child1Component } from './child1/child1.component';
import {StringService} from './string.service';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { BatchesComponent } from './batches/batches.component';


@NgModule({
  declarations: [
    AppComponent,
    MarvellousComponent,
    FirstComponent,
    SecondComponent,
    ChildComponent,
    ChildtoParentComponent,
    DemoComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    BatchesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [ArithmaticService,NumberService,StringService],
  bootstrap: [AppComponent],
})
export class AppModule { }
