import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-assam',
  standalone: false,
  templateUrl: './assam.component.html',
  styleUrl: './assam.component.css'
})
export class AssamComponent implements OnInit {
  images = [
    { src: 'images/Assam/Nameri-National-Park-assam-Rufous-necked-hornbill.webp', caption: 'Nameri National Park' },
    { src: 'images/Assam/Manas-National-Park_18th-oct.webp', caption: 'Manas National Park' },
    { src: 'images/Assam/1503470838900-Shiva Dol.webp', caption: 'Shiva Dhol' },
    { src: 'images/Assam/GUWAHATI.jpg', caption: 'Guwahati' },
    { src: 'images/Assam/Bongaigaon.webp', caption: 'Bongaigaon' },
    { src: 'images/Assam/Tea-estate-in-assam.webp', caption: 'Tea Estate' },
    { src: 'images/Assam/Gibbon-Wildlife-Sanctuary.webp', caption: 'Gibbon Wildlife Sanctuary' },
    { src: 'images/Assam/Mahabahu.jpg', caption: 'Mahabahu' }
  ];

  places = [
    { src: 'images/Assam/Guwahati_Planetarium_20190710114408.jpg', caption: 'Grandeur', alt: 'Guwahati_Planetarium' },
    { src: 'images/Assam/Historical.jpeg', caption: 'Heritage', alt: 'Historical' },
    { src: 'images/Assam/Kamakhya.jpeg', caption: 'Spiritual', alt: 'Kamakhya' },
    { src: 'images/Assam/Waterfall.jpeg', caption: 'Tranquility', alt: 'Waterfall' },
    { src: 'images/Assam/Sattriya Nritya.jpg', caption: 'Art Forms', alt: 'Sattriya' },
    { src: 'images/Assam/Kaziranga.jpeg', caption: 'Wild', alt: 'Rhino' }
  ];

  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  ngOnInit(): void {
    setInterval(() => {
      this.changeImage();
    }, 2000);
  }

  changeImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }
}
