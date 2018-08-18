import { Component, OnInit } from '@angular/core';
import { GetCustomersService } from '../../services/get-customers/get-customers.service'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public customers = [];
  constructor(private _getCustomersService: GetCustomersService) { }

  ngOnInit() {
    this.customers = this._getCustomersService.getAllCustomers();
  }

}
