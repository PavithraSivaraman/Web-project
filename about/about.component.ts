import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';

declare var google: any;


@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  show = true;
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  constructor() {}

  ngOnInit(): void {
    this.initMap();
  }

  // Set the cursor to white on hover
  setCursor(event: any) {
    event.target.style.background = 'white';
  }

  // Reset the cursor on mouse out
  setCursor1(event: any) {
    event.target.style.background = '#212529';
  }

  rate() {
    alert('Thank you for your interest! You can now leave your feedback.');
  }
  
  testimonials = [
    {
      name: 'Maria Smith',
      time: '25 min ago',
      message: 'Incredible service! 💯',
      rating: 5,
      emoji: '😍'
    },
    {
      name: 'Marta Black',
      time: '30 min ago',
      message: 'Very easy to understand and use. 👌',
      rating: 4,
      emoji: '😊'
    },
    {
      name: 'Carl Brown',
      time: '1 hour ago',
      message: 'Helped me secure my first business loan!',
      rating: 5,
      emoji: '🚀'
    },
    {
      name: 'Paul David',
      time: '2 hours ago',
      message: 'Professional and responsive team. 👍',
      rating: 4,
      emoji: '👏'
    }
  ];

  emojis = ['😊', '😍', '👍', '😐', '😕', '👏', '🚀'];

  newFeedback = {
    name: '',
    email: '',
    message: '',
    rating: 0,
    emoji: ''
  };

  submitFeedback() {
    if (this.newFeedback.name && this.newFeedback.message) {
      this.testimonials.unshift({
        name: this.newFeedback.name,
        time: 'Just now',
        message: this.newFeedback.message,
        rating: this.newFeedback.rating,
        emoji: this.newFeedback.emoji
      });
      this.newFeedback = { name: '', email: '', message: '', rating: 0, emoji: '' };
      this.toggleModal();
    }
  }


  //fourth
  authorities = [
    {
      img: '../img/brands/1.png',
      title: 'Financial Conduct Authority',
      description: 'Adhering to the FCA ensures consumer protection and financial confidence. We provide transparent and responsible lending to empower informed financial decisions.',
      type: 'card-blue'
    },
    {
      img: '../img/brands/2.png',
      title: 'Prudential Regulation Authority',
      description: 'Aligned with PRA standards, we ensure financial stability, allowing users to manage their financial journey with trust and peace of mind.',
      type: 'card-purple'
    },
    {
      img: '../img/brands/3.png',
      title: 'Peer-to-Peer Finance Association',
      description: 'Being a member of P2PFA showcases our commitment to safety and accessibility in financial solutions, building a secure bridge between borrowers and investors.',
      type: 'card-green'
    }
  ];
  
  
  @ViewChild('fourthSection') fourthSection!: ElementRef;

  ngAfterViewInit() {
    // You can now safely access fourthSection in this lifecycle hook
    // Make sure it's accessible after the view is initialized
  }

  scrollToSection(): void {
    // This will scroll the page to the element with id 'fourth'
    this.fourthSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  // Map initialization
  initMap(): void {
    const centerSouthIndia = { lat: 11.1271, lng: 78.6569 }; // Center of South India

    // Create the map instance
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: centerSouthIndia,
    });

    // Create an array of branch locations
    const branches = [
      { lat: 9.1549, lng: 77.8070, title: 'Sivakasi', details: '📍Branch: Sivakasi<br>📞 Contact No: 6778896745<br>📧 Email: financebrochennai@gmail.com<br>📸 Instagram: @financebro' },
      { lat: 9.9258, lng: 78.1198, title: 'Madurai', details: '📍Branch: Madurai<br>📞 Contact No: 6778896745<br>📧 Email: financebrochennai@gmail.com<br>📸 Instagram: @financebro'},
      { lat: 10.3648, lng: 77.9980, title: 'Dindigul', details: '📍Branch: Dindigul<br>📞 Contact No: 6778896745<br>📧 Email: financebrochennai@gmail.com<br>📸 Instagram: @financebro' },
      { lat: 11.0168, lng: 76.9558, title: 'Coimbatore', details: '📍Branch: Coimbatore<br>📞 Contact No: 6778896745<br>📧 Email: financebrochennai@gmail.com<br>📸 Instagram: @financebro' },
      { lat: 13.0827, lng: 80.2707, title: 'Chennai', details: '📍Branch: Chennai<br>📞 Contact No: 6778896745<br>📧 Email: financebrochennai@gmail.com<br>📸 Instagram: @financebro' },
      { lat: 10.7905, lng: 78.7047, title: 'Tiruchi', details: '📍Branch: Tiruchi<br>📞 Contact No: 6778896745<br>📧 Email: financebrochennai@gmail.com<br>📸 Instagram: @financebro' }
    ];

    const infoWindow = new google.maps.InfoWindow();

    // Loop through branch data and create markers
    branches.forEach(function(branch) {
      const marker = new google.maps.Marker({
        position: { lat: branch.lat, lng: branch.lng },
        map: map,
        title: branch.title
      });

      // Event listener for showing the info window when a marker is clicked
      marker.addListener('click', function() {
        infoWindow.setContent(branch.details);
        infoWindow.open(map, marker);
      });
    });
  }

}