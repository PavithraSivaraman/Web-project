import { Component } from '@angular/core';

@Component({
  selector: 'app-jk',
  standalone: false,
  templateUrl: './jk.component.html',
  styleUrl: './jk.component.css'
})
export class JkComponent {
  images = [
    { src: 'images/JK/Dal Lake.jpg', caption: 'Dal Lake' },
    { src: 'images/JK/Sonamgarg.jpg', caption: 'Sonamgarg' },
    { src: 'images/JK/Zaina Kadal Bridge.jpg', caption: 'Zaina Kadal Bridge' },
    { src: 'images/JK/Shalimar Garden.webp', caption: 'Shalimar Garden' },
    { src: 'images/JK/Nigeen Lake.webp', caption: 'Nigeen Lake' },
    { src: 'images/JK/gulmarg.jpg', caption: 'Gulmarg' },
    { src: 'images/JK/boat house.jpg', caption: 'Kashmir Boat House' },
    { src: 'images/JK/betaab-valley-1.jpg', caption: 'Pahalgam' }
  ];

  places = [
    { src: 'images/JK/Jama_Masjid.jpg', alt: 'Jama_Masjid', caption: 'Grandeur' },
    { src: 'images/JK/amar-mahal-palace.jpg', alt: 'Historical', caption: 'Heritage' },
    { src: 'images/JK/Amarnath Temple.jpg', alt: 'Kamakhya', caption: 'Spiritual' },
    { src: 'images/JK/Pahalgam.jpg', alt: 'Pahalgam', caption: 'Tranquility' },
    { src: 'images/JK/art-crafts1.jpg', alt: 'Art', caption: 'Art Forms' },
    { src: 'images/JK/Hanguls.webp', alt: 'Hanguls', caption: 'Wild' }
  ];

  currentImage = this.images[0];
  private currentIndex = 0;

  ngOnInit() {
    setInterval(() => this.changeImage(), 2000);
  }

  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }
}
