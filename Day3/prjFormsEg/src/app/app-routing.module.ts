import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentcrudComponent } from './departmentcrud/departmentcrud.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Reactiveforms1Component } from './reactiveforms1/reactiveforms1.component';
import { Reactiveforms2Component } from './reactiveforms2/reactiveforms2.component';
import { TemplatedformsComponent } from './templatedforms/templatedforms.component';

//add thr route details
const routes: Routes = [
  //setting a default page for application
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:TemplatedformsComponent},
  {path:'login',component:Reactiveforms1Component},
  {path:'department',component:DepartmentcrudComponent},
  {path:'register1',component:Reactiveforms2Component},

  //page not found
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
