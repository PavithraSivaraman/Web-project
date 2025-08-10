import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-states',
  standalone: false,
  templateUrl: './states.component.html',
  styleUrl: './states.component.css'
})
export class StatesComponent {
  places = [
    { img: 'images/Kakochang-Waterfalls.webp', name: 'Assam', link: '/assam' },
    { img: 'images/PUNJAB.jpg', name: 'Punjab', link: '/punjab' },
    { img: 'images/Sonmarg-Jammu-Kashmir.jpg', name: 'Jammu and Kashmir', link: '/jk' },
    { img: 'images/ezhikkara-ernakulam-1728478133_9a7d55ee60c3af7f9db5.webp', name: 'Kerala', link: '/kerala' },
    { img: 'images/licensed-image (2).jpg', name: 'Maharashtra', link: '/maharastra' },
    { img: 'images/Top-10-tourist-places-to-visit-in-Himachal-Pradesh-26.jpg', name: 'Himachal Pradesh', link: '/hp' },
    { img: 'images/Tamil Nadu/Alagar Kovil.jpeg', name: 'Tamil Nadu', link: '/tn' },
    { img: 'images/karnataka/Stone-Chariot-Vittala-Temple-Hampi.jpg', name: 'Karnataka', link: '/karnataka' },
    { img: 'images/Rajasthan/reason_best_travel_spot_banner-min.jpg', name: 'Rajasthan', link: '/rajasthan' },
  ];
  
}
