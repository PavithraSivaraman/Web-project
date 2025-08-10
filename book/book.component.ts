import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  user: any;
  places: any[] = [];
  selectedPlace: string = '';
  numberOfTickets: number = 1;
  costPerHead: number = 0;
  totalCost: number = 0;
  bookingMessage: string = '';
  bookedTickets: any[] = [];
  cardno:string='';
  aadharFile: File | null = null;
  cvv:string='';
  editingTicketId: string | null = null;
  expiryDate: string = '';
  expiryError: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      alert('Please sign in to book tickets.');
      this.router.navigate(['/home']);
    }

    this.fetchPlaces();
  }

  fetchPlaces(): void {
    this.http.get('http://localhost:5000/places').subscribe({
      next: (res: any) => {
        this.places = res.places;
      },
      error: (err) => {
        alert('Error fetching places: ' + (err.error?.message || err.message));
      }
    });
  }

  onPlaceChange(): void {
    const selected = this.places.find(p => p.state === this.selectedPlace);
    this.costPerHead = selected ? selected.costPerHead : 0;
    this.calculateTotalCost();
  }

  calculateTotalCost(): void {
    this.totalCost = this.costPerHead * this.numberOfTickets;
  }

  onFileChange(event: any): void {
    this.aadharFile = event.target.files[0] ?? null;
  }

  bookTickets(): void {
    if (!this.user) {
      alert('Please sign in to book tickets.');
      return;
    }

    if (!this.aadharFile) {
      alert('Please upload your Aadhar/PAN card (PDF) before booking.');
      return;
    }
    const cardnoPattern = /^[0-9]+$/; 
    if(this.cardno.length<16 || this.cardno.length>16)
    {
      alert('Card Number must contain 16 digits');
      return;
    }
    if (!cardnoPattern.test(this.cardno)) {
      alert('Username should not contain any numbers.');
      return ;
    }
    if(this.cvv.length<3 || this.cvv.length>3)
      {
        alert('Invalid CVV');
        return;
      }
      if (!this.validateExpiryDate(this.expiryDate)) {
        alert('Please enter a valid expiry date in MM/YY format.');
        return;
      }
  
    const formData = new FormData();
    formData.append('username', this.user.username);
    formData.append('place', this.selectedPlace);
    formData.append('tickets', this.numberOfTickets.toString());
    formData.append('totalCost', this.totalCost.toString());
    formData.append('aadhar', this.aadharFile, this.aadharFile.name);

    this.http.post('http://localhost:5000/book', formData).subscribe({
      next: () => {
        this.bookingMessage = 'Booked successfully!';
        this.viewBookedTickets();
      },
      error: (err) => {
        this.bookingMessage = 'Error booking tickets: ' + (err.error?.message || err.message);
      }
    });
  }
  validateExpiryDate(date: string): boolean {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/; // MM/YY format
    const match = date.match(regex);
    
    if (!match) {
      this.expiryError = 'Invalid format. Please use MM/YY.';
      return false;
    }

    const month = parseInt(match[1], 10);
    const year = parseInt(match[2], 10) + 2000; // Convert YY to YYYY

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-based
    const currentYear = currentDate.getFullYear();

    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      this.expiryError = 'Expiry date cannot be in the past.';
      return false;
    }

    this.expiryError = ''; // Clear error if valid
    return true;
  }
  viewBookedTickets(): void {
    if (!this.user) {
      alert('Please sign in to view your booked tickets.');
      return;
    }

    this.http.get(`http://localhost:5000/bookedTickets/${this.user.username}`).subscribe({
      next: (res: any) => {
        this.bookedTickets = res.tickets.map((ticket: any) => ({
          ...ticket,
          isEditing: false
        }));
        this.editingTicketId = null;  // Reset any editing state
      },
      error: (err) => {
        alert('Error fetching booked tickets: ' + (err.error?.message || err.message));
      }
    });
  }

  deleteTicket(ticketId: string): void {
    this.http.delete(`http://localhost:5000/tickets/${ticketId}`).subscribe({
      next: () => {
        this.bookedTickets = this.bookedTickets.filter(ticket => ticket._id !== ticketId);
        alert('Ticket deleted successfully!');
      },
      error: (err) => {
        alert('Error deleting ticket: ' + (err.error?.message || err.message));
      }
    });
  }

  // Called when user clicks the Update button
  editTicket(ticket: any): void {
    if (!this.isEditable(ticket.bookedAt)) {
      alert('Editing is only allowed within 2 days of booking.');
      return;
    }
    this.editingTicketId = ticket._id;
    ticket.isEditing = true;
  }

  // Called when user clicks the Done button
  saveChanges(ticket: any): void {
    if (!this.isEditable(ticket.bookedAt)) {
      alert('Editing time window has expired.');
      this.editingTicketId = null;
      ticket.isEditing = false;
      return;
    }

    // Validate tickets count
    if (ticket.tickets <= 0) {
      alert('Number of tickets must be positive.');
      return;
    }

    const updatedTicket = {
      tickets: ticket.tickets,
      totalCost: ticket.tickets * this.costPerHead
    };

    this.http.put(`http://localhost:5000/tickets/${ticket._id}`, updatedTicket).subscribe({
      next: () => {
        alert('Changes saved successfully!');
        ticket.totalCost = updatedTicket.totalCost;
        ticket.isEditing = false;
        this.editingTicketId = null;
        this.viewBookedTickets();
      },
      error: (err) => {
        alert('Error saving changes: ' + (err.error?.message || err.message));
      }
    });
  }

  isEditable(bookedAt: Date): boolean {
    const bookingDate = new Date(bookedAt);
    const currentDate = new Date();
    const twoDaysLater = new Date(bookingDate);
    twoDaysLater.setDate(bookingDate.getDate() + 2);
    return currentDate <= twoDaysLater;
  }

  updateTotalCost(ticket: any): void {
    ticket.totalCost = ticket.tickets * this.costPerHead;
  }

  showSignin(): void {
    this.router.navigate(['/home']);
  }
}