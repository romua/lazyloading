import { Component, OnInit } from '@angular/core';
import { GetCustomersService } from '../../../services/get-customers/get-customers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  public customer;

  constructor(private _getCustomersService: GetCustomersService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.customer = this._getCustomersService.getCustomersById(+params['id']);
    });
  }

}
