import { Component } from '@angular/core';

@Component({
  selector: 'app-personalform',
  standalone: false,
  templateUrl: './personalform.component.html',
  styleUrls: ['./personalform.component.css']
})
export class PersonalformComponent {
  user = {
    fullName: '',
    email: '',
    phone: '',
    amount: null,
    term: '',
    employmentStatus: '',
    employerName: '',
    monthlyIncome: null,
    loanPurpose: '',
    idProof: null,
    incomeProof: null
  };

  onSubmit() {
    // Normally, you'd send this data to a backend server
    console.log('Form submitted successfully!');
    console.log(this.user);
    
    // For file upload handling (if needed):
    // You’d typically use FormData to upload files via HTTP POST

    alert('Application submitted!');
  }

}
