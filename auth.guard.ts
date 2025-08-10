import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    
    if (user) {
      // Check if the user is an admin
      if (user.email === 'admin@tourism.org.in') {
        // If admin, prevent access to the "Plan Your Trip" page
        this.router.navigate(['/home']); // Redirect to home or another page
        alert('You cannot view this page.');
        return false;
      }
      return true; // Allow access for non-admin users
    } else {
      this.router.navigate(['/home']);
      alert('Please sign in to access this page.');
      return false;
    }
  }
}