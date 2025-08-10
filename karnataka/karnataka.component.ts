import { Component } from '@angular/core';

@Component({
  selector: 'app-karnataka',
  standalone: false,
  templateUrl: './karnataka.component.html',
  styleUrl: './karnataka.component.css'
})
export class KarnatakaComponent {
  images = [
    { src: 'images/karnataka/Bangalore-1536x1150.jpg', caption: 'Bangalore' },
    { src: 'images/karnataka/Mysore-Palace2.webp', caption: 'Mysore' },
    { src: 'images/karnataka/Coor Resort.avif', caption: 'Coorg' },
    { src: 'images/karnataka/Malpe-Beach-800x450-1.jpg', caption: 'Malpe Beach' },
    { src: 'images/karnataka/Hampi.jpg', caption: 'Hampi' },
    { src: 'images/karnataka/24columnar-lava-of-st-mary-island-udupi-district1.jpg', caption: 'Udupi' },
    { src: 'images/karnataka/Belur.jpeg', caption: 'Belur' },
    { src: 'images/karnataka/SIVAMOGGA.jpg', caption: 'Shivamogga' },
    { src: 'images/karnataka/Bijapur.jpg', caption: 'Bijapur' }
  ];

  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  places = [
    { src: 'images/karnataka/Mysore Palace 2.jpg', alt: 'Mysore Palace', caption: 'Grandeur' },
    { src: 'images/karnataka/GALIMANTAPA,ChitraDurga.jpg', alt: 'Galimantapa', caption: 'Heritage' },
    { src: 'images/karnataka/Murudeshwar.jpg', alt: 'Murudeshwar', caption: 'Spiritual' },
    { src: 'images/karnataka/Coorg.webp', alt: 'Coorg', caption: 'Tranquility' },
    { src: 'images/karnataka/Yakshagana-2.jpg', alt: 'Yakshagana', caption: 'Art Forms' },
    { src: 'images/karnataka/Tiger-Safaris-Destination-Banner.jpg', alt: 'Tiger Safari', caption: 'Wild' }
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.changeImage();
    }, 2000);
  }

  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }
}
