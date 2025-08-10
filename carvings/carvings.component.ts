import { Component } from '@angular/core';

@Component({
  selector: 'app-carvings',
  standalone: false,
  templateUrl: './carvings.component.html',
  styleUrl: './carvings.component.css'
})
export class CarvingsComponent {
  carvings = [
    { title: 'Ajanta Caves', description: 'Located in Maharashtra', famousFor: 'intricate Buddhist carvings and frescoes dating back to the 2nd century BCE' },
    { title: 'Ellora Caves', description: 'Also in Maharashtra', famousFor: 'mix of Buddhist, Hindu, and Jain rock-cut temples, especially the Kailasa temple' },
    { title: 'Khajuraho Temples', description: 'Located in Madhya Pradesh', famousFor: 'stunning erotic sculptures and intricate carvings depicting various aspects of life' },
    { title: 'Sun Temple, Konark', description: 'Located in Odisha', famousFor: 'exquisite stone carvings and designed in the shape of a giant chariot' },
    { title: 'Hampi Temples', description: 'Located in Karnataka', famousFor: 'stunning carvings and sculptures reflecting the grandeur of the Vijayanagara Empire' },
    { title: 'Meenakshi Temple', description: 'Located in Madurai, Tamil Nadu', famousFor: 'towering gopurams (gateway towers) adorned with intricate carvings' },
    { title: 'Brihadeeswarar Temple', description: 'Located in Thanjavur, Tamil Nadu', famousFor: 'grand architecture and detailed carvings, particularly of Nandi (the bull)' },
    { title: 'Sanchi Stupa', description: 'Located in Madhya Pradesh', famousFor: 'beautifully carved gateways depicting scenes from the life of Buddha' },
    { title: 'Elephanta Caves', description: 'Located near Mumbai', famousFor: 'impressive rock-cut sculptures, particularly the Trimurti of Lord Shiva' },
    { title: 'Chola Bronzes', description: 'Located in Tamil Nadu', famousFor: 'exquisite bronze sculptures of Hindu deities' }
  ];

  showDetails(carving: any): void {
    alert(`Title: ${carving.title}\nLocation: ${carving.description}\nFamous For: ${carving.famousFor}`);
  }
}
