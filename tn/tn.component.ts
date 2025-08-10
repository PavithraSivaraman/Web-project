import { Component } from '@angular/core';

@Component({
  selector: 'app-tn',
  standalone: false,
  templateUrl: './tn.component.html',
  styleUrl: './tn.component.css'
})
export class TnComponent {
  images = [
    { src: 'images/Tamil Nadu/pilgrim-centres.webp', caption: 'Airavatesvarar Temple' },
    { src: 'images/Tamil Nadu/kanyakumari.webp', caption: 'Kanyakumari' },
    { src: 'images/Tamil Nadu/m-n-chocolate-museum-ooty.webp', caption: 'Chocolate Museum' },
    { src: 'images/Tamil Nadu/pamban-bridge.jpg', caption: 'Pamban Bridge' },
    { src: 'images/Tamil Nadu/mamallapuram-shore-temple.webp', caption: 'Mamallapuram Shore Temple' },
    { src: 'images/Tamil Nadu/monuments.webp', caption: 'Mahabalipuram Shore Temple' },
    { src: 'images/Tamil Nadu/kanyakumari-wax-museum.webp', caption: 'Wax Museum' },
    { src: 'images/Tamil Nadu/scuba-diving-ecrchennai.webp', caption: 'ECR Chennai' },
    { src: 'images/Tamil Nadu/the-mudumalai-national-park.webp', caption: 'Mudumalai National Park' }
  ];

  currentIndex = 0;
  currentImage = this.images[this.currentIndex];

  places = [
    { src: 'images/Tamil Nadu/Vivekananda Rock.jpeg', alt: 'Vivekananda Rock', caption: 'Grandeur' },
    { src: 'images/Tamil Nadu/mahishasuramardini-cave-temple.webp', alt: 'Mahishasuramardini Cave Temple', caption: 'Heritage' },
    { src: 'images/Tamil Nadu/suchindram-shree-thanumalayan-swamy-temple.webp', alt: 'Suchindram', caption: 'Spiritual' },
    { src: 'images/Tamil Nadu/pykara-ooty.webp', alt: 'Pykara Ooty', caption: 'Tranquility' },
    { src: 'images/Tamil Nadu/Bharathanatyam.jpg', alt: 'Bharathanatyam', caption: 'Art Forms' },
    { src: 'images/Tamil Nadu/anamalai-tiger-reserve.webp', alt: 'Tiger Reserve', caption: 'Wild' }
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
