import { Component } from '@angular/core';

@Component({
  selector: 'app-loan',
  standalone: false,
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent {

  loans = [
    {
      title: 'Transform Your Dreams into Reality!',
      description: 'Need funds for a home renovation, debt consolidation, or unexpected expenses? Our personal loans offer competitive rates and flexible terms tailored to your needs.',
      link: '/personal',
      image: '/img/loans/1.jpg'
    },
    {
      title: 'Invest in Your Future with Education Loans!',
      description: 'Dreaming of higher education or vocational training? Our education loans provide the financial support you need to pursue your academic goals.',
      link: '/education',
      image: '/img/loans/2.jpg'
    },
    {
      title: 'Make Your Dream Home a Reality!',
      description: 'Ready to buy your dream home? Our home loans offer competitive interest rates and flexible repayment options to fit your budget.',
      link: '/homeloan',
      image: '/img/loans/3.jpg'
    },
    {
      title: 'Hit the Road with Confidence – Car Loans!',
      description: 'Ready to drive your dream car? Our car loans provide quick approvals, competitive interest rates, and flexible repayment terms. Whether its a brand newride or a preowned vehicle,we’ve got you covered! ' ,
      link: '/signin',
      image: 'img/car.jpg' 
    }
    
  ];

  changeOpacity(event: MouseEvent, op: number) {
    const target = event.target as HTMLImageElement;
    target.style.opacity = `${op}`;
  }

}
