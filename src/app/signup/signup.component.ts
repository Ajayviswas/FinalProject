import { NgComponentOutlet, NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgComponentOutlet,NgFor,FormsModule,NavbarComponent,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private authService: AuthService,private router: Router) {}

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      console.log('User Data:', this.user);
  
      
      this.authService.signup(this.user).subscribe({
        next: (response) => {
          console.log('User registered successfully:', response);
          alert('Signup successful!');
          
          this.router.navigate(['/mainpage']);
        },
        error: (error) => {
          console.error('Signup error:', error);
          alert('Signup failed. Please try again later.');
        },
        complete: () => {
          console.log('Signup process complete');
        }
      });
    } else {
      console.log('Form is invalid');
      alert('Please fill out the form correctly');
    }
  }
}
