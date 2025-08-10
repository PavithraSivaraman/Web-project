import { Component } from '@angular/core';

@Component({
  selector: 'app-rajasthan',
  standalone: false,
  templateUrl: './rajasthan.component.html',
  styleUrl: './rajasthan.component.css'
})
export class RajasthanComponent {
  images = [
    { src: 'images/Rajasthan/Feature-image-Rajasthan-tourism.jpg', caption: 'Rajasthan' },
    { src: 'images/Rajasthan/jaislamer.jpg', caption: 'Jaislamer' },
    { src: 'images/Rajasthan/Hawa Mahal.webp', caption: 'Hawa Mahal' },
    { src: 'images/Rajasthan/machkund temple-dholpur.jpg', caption: 'Dholpur' },
    { src: 'images/Rajasthan/chittorgarh-fort.jpg', caption: 'Chittorgarh Fort' },
    { src: 'images/Rajasthan/mehrangarh-fort-jodhpur-rajasthan.jpg', caption: 'Jodhpur' },
    { src: 'images/Rajasthan/alwar-city-palace.jpg', caption: 'Alwar' },
    { src: 'images/Rajasthan/Lake Pichola.jpeg', caption: 'Lake Pichola' },
    { src: 'images/Rajasthan/Bundi-Rajasthan.webp', caption: 'Bundi' }
  ];

  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  places = [
    { src: 'images/Rajasthan/hawa-mahal-jaipur.jpg', alt: 'Hawa Mahal', caption: 'Grandeur' },
    { src: 'images/Rajasthan/Sheeh Mahal.webp', alt: 'Sheesh Mahal', caption: 'Heritage' },
    { src: 'images/Rajasthan/ajmer-dargha.jpg', alt: 'Ajmer Dargah', caption: 'Spiritual' },
    { src: 'images/Rajasthan/Desert.webp', alt: 'Desert', caption: 'Tranquility' },
    { src: 'images/Rajasthan/Art.webp', alt: 'Art', caption: 'Art Forms' },
    { src: 'images/Rajasthan/Wildlife-of-Rajasthan.jpg', alt: 'Wildlife', caption: 'Wild' }
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
