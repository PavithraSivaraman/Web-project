import { Component } from '@angular/core';

@Component({
  selector: 'app-travel',
  standalone: false,
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent {
  images = [
    { src: 'images/Kerala/Eravikulam NP.jpg', caption: 'Eravikulam National Park' },
    { src: 'images/Kerala/Alleppey.jpg', caption: 'Alleppey' },
    { src: 'images/Kerala/munnar.jpg', caption: 'Munnar' },
    { src: 'images/Kerala/SabarimalaTemple2.jpg', caption: 'Sabarimala Temple' },
    { src: 'images/Kerala/Thrippunithura-Elephants8_crop.jpg', caption: 'Thrippunithura-Elephants' },
    { src: 'images/Kerala/thumboormozhi.webp', caption: 'Thumboormozhi' },
    { src: 'images/Kerala/Periyar NP.avif', caption: 'Periyar National Park' },
    { src: 'images/Kerala/thonikadavu-heart-island.webp', caption: 'Thonikadavu Heart Island' }
  ];

  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  places = [
    { src: 'images/Kerala/Koonan Kurish Church.jpeg', alt: 'Koonan Kurish Church', caption: 'Grandeur' },
    { src: 'images/Kerala/Kattilmadam_Temple,_Chalapuram_Kerala.jpg', alt: 'Kattilmadam_Temple', caption: 'Heritage' },
    { src: 'images/Kerala/Peruvanam_Mahadeva_temple,_Cherpu.jpg', alt: 'Peruvanam_Mahadeva_temple', caption: 'Spiritual' },
    { src: 'images/Kerala/varkala.jpg', alt: 'varkala', caption: 'Tranquility' },
    { src: 'images/Kerala/kathakali-3453094_1280.jpg', alt: 'Art', caption: 'Art Forms' },
    { src: 'images/Kerala/Malabar Tragon.webp', alt: 'Malabar Tragon', caption: 'Wild' }
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
