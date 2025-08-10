import { Component } from '@angular/core';

@Component({
  selector: 'app-hp',
  standalone: false,
  templateUrl: './hp.component.html',
  styleUrl: './hp.component.css'
})
export class HpComponent {
  images = [
    { src: 'images/HP/Palampur.jpg', caption: 'Palampur' },
    { src: 'images/HP/manali-.webp', caption: 'Manali' },
    { src: 'images/HP/dharmsala.jpg', caption: 'Dharmsala' },
    { src: 'images/HP/Shimla.jpg', caption: 'Shimla' },
    { src: 'images/HP/Astronomical-Observatory.webp', caption: 'Astronomical Observatory' },
    { src: 'images/HP/Kalimpoo.jpg', caption: 'Kalimpoo' },
    { src: 'images/HP/kullu.jpg', caption: 'Kullu' },
    { src: 'images/HP/mandi.jpg', caption: 'Mandi' }
  ];

  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  places = [
    { src: 'images/HP/clock.jpg', alt: 'Grandeur', caption: 'Grandeur' },
    { src: 'images/HP/CAVES.jpg', alt: 'Historical', caption: 'Heritage' },
    { src: 'images/HP/spiritual.webp', alt: 'Spiritual', caption: 'Spiritual' },
    { src: 'images/HP/bridge.jpg', alt: 'Tranquility', caption: 'Tranquility' },
    { src: 'images/HP/Arts.jpg', alt: 'Art', caption: 'Art Forms' },
    { src: 'images/HP/wildlife.jpg', alt: 'Wildlife', caption: 'Wild' }
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
