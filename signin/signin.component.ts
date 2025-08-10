import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
// Import AuthService

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {
  captchaInput: string = '';
  captchaText: string = '';
  generatedCaptcha: string = '';
  email: string = '';
  password: string = '';

  @ViewChild('captchaForm') captchaForm!: NgForm; // Non-null assertion

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.generatedCaptcha = this.generateCaptcha();
    this.captchaText = this.generatedCaptcha;
  }

  generateCaptcha(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
  }

  reloadCaptcha(): void {
    this.generatedCaptcha = this.generateCaptcha();
    this.captchaText = this.generatedCaptcha;
  }

  onSubmit(): void {

    
    if (this.generatedCaptcha !== this.captchaInput.trim()) {
      alert("Incorrect Captcha! Please try again.");
      this.generatedCaptcha = this.generateCaptcha();
      this.captchaText = this.generatedCaptcha;
      this.captchaInput = ''; // Reset the captcha input field
    } else {
      console.log("Captcha is correct, submitting form...");
      // Debug log to ensure onSubmit() is invoked
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Captcha input:", this.captchaInput);
  
      // Make the login request via AuthService
      this.authService.login(this.email, this.password).subscribe(
        response => {
          console.log("Login successful:", response);
          // Handle success (e.g., navigate to the dashboard)
          // You can navigate to another page, show a success message, or handle the response as needed.
        },
        error => {
          console.log("Login error:", error);
          // Handle error (e.g., show an error message)
        }
      );
    }
  }
  
  
}
