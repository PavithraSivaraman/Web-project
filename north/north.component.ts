import { Component } from '@angular/core';

@Component({
  selector: 'app-north',
  standalone: false,
  templateUrl: './north.component.html',
  styleUrl: './north.component.css'
})
export class NorthComponent {
  showDetails: boolean = true;

  events = [
    {
      title: 'Holi Festival',
      date: 'March 8, 2025',
      location: 'Various cities across North India',
      description: 'Celebrate the festival of colors with music, dance, and traditional sweets.'
    },
    {
      title: 'International Yoga Day',
      date: 'June 21, 2025',
      location: 'Rishikesh, Uttarakhand',
      description: 'Join thousands in practicing yoga along the banks of the Ganges.'
    },
    {
      title: 'Diwali Festival',
      date: 'October 22, 2025',
      location: 'Amritsar, Punjab',
      description: 'Experience the grand celebrations of lights and fireworks.'
    },
    {
      title: 'Mountain Festival',
      date: 'August 15, 2025',
      location: 'Manali, Himachal Pradesh',
      description: 'A celebration of local culture, crafts, and cuisine in the scenic mountains.'
    },
    {
      title: 'Navratri Festival',
      date: 'October 2025',
      location: 'Various cities in North India',
      description: 'A nine-night festival dedicated to the worship of Goddess Durga, featuring dance and music.'
    },
    {
      title: 'International Trade Fair',
      date: 'November 14-27, 2025',
      location: 'New Delhi',
      description: 'A major trade fair showcasing products from various sectors, attracting exhibitors and visitors from around the world.'
    },
    {
      title: 'Gudi Padwa',
      date: 'March 2025',
      location: 'Various cities in North India',
      description: 'The Marathi New Year celebrated with traditional food, music, and dance.'
    },
    {
      title: 'Chardham Yatra',
      date: 'April to November 2025',
      location: 'Uttarakhand',
      description: 'A pilgrimage to the four sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath.'
    },
    {
      title: 'Jaisalmer Desert Festival',
      date: 'February 2025',
      location: 'Jaisalmer, Rajasthan',
      description: 'A vibrant festival celebrating the culture of Rajasthan with folk music, dance, and camel races.'
    },
    {
      title: 'Rath Yatra',
      date: 'July 2025',
      location: 'Puri, Odisha',
      description: 'The famous chariot festival of Lord Jagannath, attracting thousands of devotees.'
    }
  ];

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
