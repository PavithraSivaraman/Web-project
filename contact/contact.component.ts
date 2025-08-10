import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  address: string = '1525 Anna Nagar Street, Chennai, TN';
  phone: string = '+91 6035354592';
  emailContact: string = 'FinancePro@gmail.com';
  businessHours: string = 'Everyday: 06:00 - 22:00';

  onSubmit(): void {
    if (this.name && this.email && this.subject && this.message) {
      console.log('Form Submitted', { name: this.name, email: this.email, subject: this.subject, message: this.message });
      alert('Your message has been sent!');
    } else {
      alert('Please fill in all the fields.');
    }
  }
}
