import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  standalone: false,
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  income: number = 0;
  expenses: number = 0;
  eligibilityAmount: number = 0;
  eligibilityMessage: string = '';

  calculateEligibility(): void {
    const net = this.income - this.expenses;
    const loanEligibility = net * 36;

    if (loanEligibility <= 0) {
      this.eligibilityAmount = 0;
      this.eligibilityMessage = 'You are not eligible for a personal loan.';
    } else {
      this.eligibilityAmount = loanEligibility;
      this.eligibilityMessage = 'Congratulations! This is your eligible loan amount.';
    }
  }
}
