import { Component } from '@angular/core';

@Component({
  selector: 'app-punjab',
  standalone: false,
  templateUrl: './punjab.component.html',
  styleUrl: './punjab.component.css'
})
export class PunjabComponent {
  currentIndex: number = 0;

  images = [
    { src: 'images/Punjab/Amristar.webp', caption: 'Amristar' },
    { src: 'images/Punjab/Jalandhar 2.jpg', caption: 'Jalandhar' },
    { src: 'images/Punjab/Patiala.avif', caption: 'Patiala' },
    { src: 'images/Punjab/Ludhiana.webp', caption: 'Ludhiana' },
    { src: 'images/Punjab/Amristar Temple.webp', caption: 'Golden Temple' },
    { src: 'images/Punjab/Zirakpur.avif', caption: 'Zirakpur' },
    { src: 'images/Punjab/Sri Durgiana Temple.avif', caption: 'Sri Durgiana Temple' },
    { src: 'images/Punjab/Amristar Palace.avif', caption: 'Amristar Palace' },
    { src: 'images/Punjab/Gurudwara Sant Mandal Angita Sahib.avif', caption: 'Gurudwara Sant Mandal Angita Sahib' }
  ];

  staticCards = [
    { src: 'images/Punjab/DreamCity -Ludhiana.webp', alt: 'Ludhiana', caption: 'Grandeur' },
    { src: 'images/Punjab/Jallianwala Bagh.webp', alt: 'Jallianwala Bagh', caption: 'Heritage' },
    { src: 'images/Punjab/Jalandhar.jpg', alt: 'Jalandhar', caption: 'Spiritual' },
    { src: 'images/Punjab/makalu-barun-national-park-punjab.jpg', alt: 'Makula barun', caption: 'Tranquility' },
    { src: 'images/Punjab/Bhangra.webp', alt: 'Bhangra', caption: 'Art Forms' },
    { src: 'images/Punjab/Bir moti-bagh WS.jpg', alt: 'Deer', caption: 'Wild' }
  ];

  currentImage = this.images[0];

  ngOnInit() {
    setInterval(() => {
      this.changeImage();
    }, 2000);
  }

  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
}
}