import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'listofproducts',component:DisplayproductComponent},
  {path:'productinfo/:id',component:ProductinfoComponent},
  {path:'addproduct/:id',component:AddproductComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'deleteproduct/:id',component:DeleteproductComponent},
  {path:'updateproduct/:id',component:UpdateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
