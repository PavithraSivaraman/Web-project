import { Component } from '@angular/core';

@Component({
  selector: 'app-maharastra',
  standalone: false,
  templateUrl: './maharastra.component.html',
  styleUrl: './maharastra.component.css'
})
export class MaharastraComponent {
  images = [
    { src: 'images/Maharastra/Mumbai.jpg', caption: 'Mumbai' },
    { src: 'images/Maharastra/Taj Hote;.jpg', caption: 'Taj Hotel' },
    { src: 'images/Maharastra/Gateway of India2.jpeg', caption: 'Gateway of India' },
    { src: 'images/Maharastra/Lonavala.jpg', caption: 'Zaina Kadal Bridge' },
    { src: 'images/Maharastra/juhu-beach-mumbai-1.jpg', caption: 'Juhu Beach' },
    { src: 'images/Maharastra/shirdi-sai-temple.jpg', caption: 'Shirdi' },
    { src: 'images/Maharastra/amravati.jpg', caption: 'Amravati' },
    { src: 'images/Maharastra/Nanded.jpg', caption: 'Nanded' }
  ];

  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  places = [
    { src: 'images/Maharastra/Chhatrapati Sivaji Terminal.webp', alt: 'Chhatrapati Sivaji Terminal', caption: 'Grandeur' },
    { src: 'images/Maharastra/ellora caves.jpg', alt: 'Historical', caption: 'Heritage' },
    { src: 'images/Maharastra/Trimbakeshwar.jpg', alt: 'Trimbakeshwar', caption: 'Spiritual' },
    { src: 'images/Maharastra/tranquil.jpeg', alt: 'tranquil', caption: 'Tranquility' },
    { src: 'images/Maharastra/Lavani.jpg', alt: 'Art', caption: 'Art Forms' },
    { src: 'images/Maharastra/Maya_Tadoba_2.jpg', alt: 'Maya_Tadoba', caption: 'Wild' }
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
