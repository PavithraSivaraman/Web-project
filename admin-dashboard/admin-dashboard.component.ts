import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: any[] = [];
  tickets: any[] = [];
  revenueData: any[] = [];
  overallTotalTickets: number = 0;
  grandTotalRevenue: number = 0;
  newPlace: { state: string; cost: number | null } = { state: '', cost: null };
  totalPlaces: number = 0;
  showAddPlaceForm: boolean = false;
  places: any[] = [];
  isViewingUsers: boolean = false;
  isViewingPlaces: boolean = false;
  isViewingTickets: boolean = false;
  isViewingRevenue: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
   
  }

  closeView(): void {
    this.isViewingUsers = false;
    this.isViewingPlaces = false;
    this.isViewingTickets = false;
    this.isViewingRevenue = false;
  }

  viewUsers(): void {
    this.closeView();
    this.isViewingUsers = true;

    this.http.get('http://localhost:5000/users').subscribe({
      next: (res: any) => {
        this.users = res.users.filter((user: { email: string }) => user.email !== 'admin@tourism.org.in');
      },
      error: (err) => {
        alert('Error fetching users: ' + err.error.message);
      }
    });
  }

  viewPlaces(): void {
    this.closeView();
    this.isViewingPlaces = true;

    this.http.get('http://localhost:5000/places').subscribe({
      next: (res: any) => {
        this.places = res.places.map((place: any) => ({
          ...place,
          isEditing: false,
          originalCost: place.costPerHead
        }));
        this.totalPlaces = this.places.length;
      },
      error: (err) => {
        alert('Error fetching places: ' + err.error.message);
      }
    });
  }

  viewTickets(): void {
    this.closeView();
    this.isViewingTickets = true;

    this.http.get('http://localhost:5000/tickets').subscribe({
      next: (res: any) => {
        this.tickets = res.tickets;
        this.tickets.forEach(ticket => {
          this.http.get(`http://localhost:5000/users/${ticket.username}`).subscribe({
            next: (userRes: any) => {
              ticket.user = userRes.user;
            },
            error: (err) => {
              console.error('Error fetching user details:', err);
            }
          });
        });
      },
      error: (err) => {
        alert('Error fetching tickets: ' + err.error.message);
      }
    });
  }

  viewRevenue(): void {
    this.closeView();
    this.isViewingRevenue = true;

    this.http.get('http://localhost:5000/revenue').subscribe({
      next: (res: any) => {
        this.revenueData = res.revenueData;
        this.overallTotalTickets = res.overallTotalTickets;
        this.grandTotalRevenue = Number(res.grandTotalRevenue);
      },
      error: (err) => {
        alert('Error fetching revenue data: ' + err.error.message);
      }
    });
  }

  // New method to load places count
  loadPlacesCount(): void {
    this.http.get('http://localhost:5000/places').subscribe({
      next: (res: any) => {
        this.totalPlaces = res.places.length;
      },
      error: (err) => {
        console.error('Error fetching places:', err);
        this.totalPlaces = 0;
      }
    });
  }
 // Function to fetch total places from the database
  fetchTotalPlaces(): void {
    this.http.get('http://localhost:5000/places').subscribe({
      next: (res: any) => {
        this.totalPlaces = res.totalPlaces; 
      },
      error: (err) => {
        console.error('Error fetching total places:', err);
      }
    });
  }
  addPlace(): void {
    if (this.newPlace.state && this.newPlace.cost) {
      this.http.post('http://localhost:5000/places', this.newPlace).subscribe({
        next: (res: any) => {
          alert('Place added successfully!');
          this.newPlace = { state: '', cost: null }; // Reset the form
          this.fetchTotalPlaces(); // Refresh total places
          this.showAddPlaceForm = false; // Hide the form after adding
        },
        error: (err) => {
          alert('Error adding place: ' + err.error.message);
        }
      });
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Function to toggle the visibility of the add place form
  toggleAddPlaceForm(): void {
    this.showAddPlaceForm = !this.showAddPlaceForm;
  }

updatePlace(place: any): void {
  place.isEditing = true;
}

doneUpdating(place: any): void {
  if (place.costPerHead == null || place.costPerHead <= 0) {
    alert('Cost per head must be a positive number.');
    return;
  }

  const updateData = { costPerHead: place.costPerHead };

  this.http.put(`http://localhost:5000/places/${place._id}`, updateData).subscribe({
    next: (res: any) => {
      alert('Place updated successfully!');
      place.isEditing = false;
      place.originalCost = place.costPerHead;
    },
    error: (err) => {
      alert('Error updating place: ' + err.error.message);
    }
  });
}

deletePlace(placeId: string): void {
  if (confirm('Are you sure you want to delete this place?')) {
    this.http.delete(`http://localhost:5000/places/${placeId}`).subscribe({
      next: (res: any) => {
        alert('Place deleted successfully!');
        // Remove the deleted place from the local array
        this.places = this.places.filter(p => p._id !== placeId);
        // Update total places count
        this.totalPlaces = this.places.length;
      },
      error: (err) => {
        alert('Error deleting place: ' + err.error.message);
      }
    });
  }
}
}