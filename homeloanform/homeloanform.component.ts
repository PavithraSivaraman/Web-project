import { Component } from '@angular/core';

@Component({
  selector: 'app-homeloanform',
  standalone: false,
  templateUrl: './homeloanform.component.html',
  styleUrls: ['./homeloanform.component.css']
})
export class HomeloanformComponent {

  user = {
    name: '',
    email: '',
    phone:'',
    dob: '',
    city: '',
    country: '',
    subscription: '',
    propertyValue: null,
    loanAmount: null,
    term: '',
    interestRate: null
  };

  onSubmit() {
    console.log('Registration submitted', this.user);
    // handle form submission logic here
  }
}