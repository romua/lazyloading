import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProfileComponent } from './customer-list/customer-profile/customer-profile.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  },
  {
    path: ':id',
    component: CustomerProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
