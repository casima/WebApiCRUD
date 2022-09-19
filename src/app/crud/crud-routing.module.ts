import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

const routes: Routes = [
  {path: '', redirectTo: 'prod-list', pathMatch: 'full'},
  {path: 'prod-list', component: ProductListComponent},
  {path: 'prod-create', component: ProductFormComponent},
  {path: 'prod-update/:productId', component: ProductFormComponent},
  {path: 'prod-detail/:productId', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDRoutingModule { }
