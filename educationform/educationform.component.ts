import { Component } from '@angular/core';

@Component({
  selector: 'app-educationform',
  standalone: false,
  templateUrl: './educationform.component.html',
  styleUrl: './educationform.component.css'
})
export class EducationformComponent {
  user: {
    name: string;
    email: string;
    phone: string;
    propertyValue: number | undefined;
    loanAmount: number | undefined;
    term: string;
    coursename: string;
    courseinstitution: string;
  } = {
    name: '',
    email: '',
    phone: '',
    propertyValue: undefined,
    loanAmount: undefined,
    term: '',
    coursename: '',
    courseinstitution: ''
  };
  admissionLetter: File | null = null;
  previousRecords: File | null = null;
  idProof: File | null = null;

  constructor() {}

  // Optional: Calculate loan amount based on property value
  ngOnInit() {
    this.calculateLoanAmount();
  }

  calculateLoanAmount() {
    if (this.user.propertyValue) {
      // Example logic: 80% of property value
      this.user.loanAmount = this.user.propertyValue * 0.8;
    }
  }

  onFileChange(event: Event, type: string) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      if (type === 'admissionLetter') this.admissionLetter = file;
      if (type === 'previousRecords') this.previousRecords = file;
      if (type === 'idProof') this.idProof = file;
    }
  }

  onSubmit() {
    console.log('Form Submitted!');
    console.log('User Data:', this.user);
    console.log('Admission Letter:', this.admissionLetter);
    console.log('Previous Records:', this.previousRecords);
    console.log('ID Proof:', this.idProof);

    // TODO: Add service call to submit form and file data to backend
  }

}
