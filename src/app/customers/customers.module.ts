import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerProfileComponent } from './customer-list/customer-profile/customer-profile.component';
import { GetCustomersService } from '../services/get-customers/get-customers.service'

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [GetCustomersService],
  declarations: [CustomerListComponent, CustomerProfileComponent]
})
export class CustomersModule { }
