import { Component,OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {

  isSignupVisible = false;
  isSigninVisible = false;
  timer = 0;
  colour = '#c60606';
  signupData = {
    username: '',
    email: '',
    password: '',
    dob: '',
    agree: false
  };

  signinData = {
    email: '',
    password: ''
  };
  user: any;
  isAdmin: boolean = false;
  errorMessage: string = '';
  dobError: string = '';
  checkboxError: string = '';
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // Load user from local storage
    const storedUser  = localStorage.getItem('user');
    if (storedUser ) {
      this.user = JSON.parse(storedUser ); // Set user state
    }
    const recentHeading = document.getElementById('recent-heading');
    if (recentHeading) {
      recentHeading.style.backgroundColor = this.colour;
      recentHeading.style.color = 'black';
    }
    setInterval(() => this.callTimer(), 1000);
  }

  callTimer(): void {
    const recentHeading = document.getElementById('recent-heading');
    if (recentHeading) {
      if (this.timer === 0) {
        recentHeading.style.backgroundColor = 'black';
        recentHeading.style.color = this.colour;
        this.timer = 1;
      } else {
        recentHeading.style.backgroundColor = this.colour;
        recentHeading.style.color = 'black';
        this.timer = 0;
      }
    }
  }

  showSignup(): void {
    this.isSignupVisible = true;
    this.isSigninVisible = false;
  }

  showSignin(): void {
    this.isSigninVisible = true;
    this.isSignupVisible = false;
  }

  onSignup() {
    if (!this.validateSignupData()) {
      return; // Stop if validation fails
    }
    this.userService.signup(this.signupData).subscribe({
      next: (res) => {
        alert('Signup Successful!');
        localStorage.setItem('user', JSON.stringify(res.user)); // Store user info
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert(err.error.message);
      }
    });
  }
  
  validateSignupData(): boolean {
    const usernamePattern = /^[a-zA-Z ]+$/; // No numbers in username
    const emailPattern = /^[a-zA-Z][a-zA-Z0-9._%+-]*@(gmail|yahoo|outlook|hotmail)\.com$/; // Email validation
    const passwordValid = this.signupData.password.length >= 8; // Password length
 
    if (!usernamePattern.test(this.signupData.username)) {
      this.errorMessage = 'Username should not contain any numbers.';
      return false;
    }
    if (!passwordValid) {
      this.errorMessage = 'Password must be at least 8 characters long.';
      return false;
    }
    if (!emailPattern.test(this.signupData.email)) {
      this.errorMessage = 'Email must be in the format: mailid@gmail.com, mailid@yahoo.com, etc.';
      return false;
    }
    const dob = new Date(this.signupData.dob);
    const currentYear = new Date().getFullYear();
    const birthYear = dob.getFullYear();

    if (birthYear < 1930 || birthYear > 2024) {
      this.dobError = 'Birth year must be between 1930 and 2024.';
      return false;
    } else {
      this.dobError = ''; 
    }

    // Checkbox Validation
    if (!this.signupData.agree) {
      this.checkboxError = 'You must agree to the terms and conditions.';
      return false;
    } else {
      this.checkboxError = ''; // Clear error if valid
    }
    this.errorMessage = ''; 
    return true;
  }
  onSignin() {
    this.userService.signin(this.signinData).subscribe({
      next: (res) => {
        alert('Login Successful!');
        localStorage.setItem('user', JSON.stringify(res.user));
        this.user = res.user;

        // Check if the user is admin
        this.isAdmin = this.user.email === 'admin@tourism.org.in'; // Set admin status
        if (this.isAdmin) {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/']); // Redirect to home for regular users
        }
      },
      error: (err) => {
        alert(err.error.message);
      }
    });
  }

  logout(): void {
    localStorage.removeItem('user'); 
    this.user = null; 
    alert('Logged out successfully!'); 
    this.router.navigate(['/home']); 
  }
}
