import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeloan',
  standalone: false,
  templateUrl: './homeloan.component.html',
  styleUrls: ['./homeloan.component.css']
})

export class HomeloanComponent {
  loanAmount: number = 1000000;  // Default loan amount
  tenure: number = 10;           // Default tenure in years
  interestRate: number = 7.5;    // Default interest rate
  emi: number = 0;
  interestAmount: number = 0;
  totalAmount: number = 0;
  totalPayment: number = 0;
  totalInterest: number = 0;
  
  updateLoanAmount(): void {
    const loanAmount = parseFloat((<HTMLInputElement>document.getElementById('loanAmount')).value);
    this.loanAmount = loanAmount;
    this.calculateEMI();
  }

  updateTenure(): void {
    const tenure = parseInt((<HTMLInputElement>document.getElementById('tenure')).value);
    this.tenure = tenure;
    this.calculateEMI();
  }

  updateInterestRate(): void {
    const interestRate = parseFloat((<HTMLInputElement>document.getElementById('interestRate')).value);
    this.interestRate = interestRate;
    this.calculateEMI();
  }

  calculateEMI(): void {
    const principal = this.loanAmount;
    const tenureInMonths = this.tenure * 12; // Convert years to months
    const interest = this.interestRate / 12 / 100; // Monthly interest rate

    this.emi = (principal * interest * Math.pow(1 + interest, tenureInMonths)) / (Math.pow(1 + interest, tenureInMonths) - 1);
    this.totalPayment = this.emi * tenureInMonths;
    this.totalInterest = this.totalPayment - principal;

    // Update UI
    this.updateDisplay();
  }

  updateDisplay(): void {
    document.getElementById('emiDisplay')!.innerText = `₹ ${this.emi.toFixed(2)}`;
    document.getElementById('principalDisplay')!.innerText = `₹ ${this.loanAmount.toLocaleString()}`;
    document.getElementById('interestDisplayTotal')!.innerText = `₹ ${this.totalInterest.toFixed(2)}`;
    document.getElementById('totalDisplay')!.innerText = `₹ ${this.totalPayment.toFixed(2)}`;
  }

  constructor(private router: Router) {}

  submitApplication() {
    // Perform logic (form validation, data submission, etc.)
    console.log('Submitting application...');

    // After logic, navigate to the homeloanform route
    this.router.navigate(['/homeloanform']);
  }

  // Initialize EMI calculation on component load
  ngOnInit(): void {
    this.calculateEMI();
  }
}