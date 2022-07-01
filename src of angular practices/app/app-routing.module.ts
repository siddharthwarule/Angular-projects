import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SubjectComponent } from './subject/subject.component';
import { InvaliedComponent } from './invalied/invalied.component';


const routes: Routes = [

{path:'batches',component:BatchesComponent},
{path:'about',component:AboutUsComponent},
{path:'subject',component:SubjectComponent},
//default route
{path:'',component:AboutUsComponent},
//wild cart route its should be in end only invalid rout
{path:'**',component:InvaliedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule
 { 

 }