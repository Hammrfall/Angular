import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[]; //you can use the any type to give it the flexibility of Var in javaScript
  constructor() {
    this.name = "bob"
   }

  ngOnInit() {
    this.name = "fred";
    this.age = 29;
    this.email='me@me.com'
    this.address = {
      street: '6112 Roxey road',
      city: 'beantown',
      state: 'MA',
      zip: 30210
    }
    this.hobbies= ['writing code', 'playing board Games', 'going to Disney'];

  }

  onClick(){
    this.name="Barbarella"
    this.hobbies.splice(2,0,'Horseback riding')
  }
  adHobby(hobby){
    
    this.hobbies.unshift(hobby)
    console.log(this.hobbies)
    return false;
  }
  deleteHobby(hobby){
    for(let i=0; i < this.hobbies.length;i++){
      if (hobby == this.hobbies[i]){
        this.hobbies.splice(i,1)
        break;
      } 
    }
  }
} 


class Address { //could have been interface instead of class - both work)
  street:string;
  city:string;
  state:string;
  zip:number;
}