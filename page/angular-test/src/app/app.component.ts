import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import {  Customer, Service } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  customers: Customer[];

  constructor(service: Service) {
      this.customers =  service.getCustomers();
  }
}
