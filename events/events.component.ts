import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  showRegions = false;
  showSpiritual = false;
  showWild = false;

  toggleRegions(event: Event) {
    event.preventDefault();
    this.showRegions = !this.showRegions;
  }

  toggleSpiritual(event: Event) {
    event.preventDefault();
    this.showSpiritual = !this.showSpiritual;
  }

  toggleWild(event: Event) {
    event.preventDefault();
    this.showWild = !this.showWild;
  }

  changeImage(event: Event, newSrc: string) {
    const img = event.target as HTMLImageElement;
    img.src = newSrc;
  }

  changeOpacity(event: Event, opacity: number) {
    const img = event.target as HTMLImageElement;
    img.style.opacity = opacity.toString();
  }

}
