import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-myprofile',
  standalone: false,
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent {
  user: any;
  isEditing = false;
  updatedData = {
    username: '',
    email: '',
    password: '',
    dob: ''
  };
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const storedUser  = localStorage.getItem('user');
    if (storedUser ) {
      this.user = JSON.parse(storedUser );
      this.updatedData = { ...this.user }; // Initialize with current user data
    } else {
      alert('Please sign in to view your profile.');
      this.router.navigate(['/home']);
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
  updateProfile() {
    this.userService.updateProfile(this.updatedData).subscribe({
      next: (res) => {
        alert('Profile updated successfully!');
        localStorage.setItem('user', JSON.stringify(res.user)); // Update local storage
        this.user = res.user; 
        this.isEditing = false; // Exit edit mode
      },
      error: (err) => {
        alert(err.error.message);
      }
    });
  }
  deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      this.userService.deleteAccount(this.user.email).subscribe({
        next: () => {
          alert('Account deleted permanently.');
          localStorage.removeItem('user'); // Clear user data
          this.router.navigate(['/home']); // Redirect to home
        },
        error: (err) => {
          alert(err.error.message);
        }
      });
    }
  }
}
