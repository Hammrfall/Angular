import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  address:Address;
  constructor() {
    this.name = "bob"
   }

  ngOnInit() {
    this.name = "fred";
    this.address = {
      street: '6112 Roxey road',
      city: 'beantown',
      state: 'MA',
      zip: 30210
    }
  }

}


class Address {
  street:string;
  city:string;
  state:string;
  zip:number;
}