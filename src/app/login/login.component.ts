import { Component,NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginService } from '../service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgComponentOutlet, NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';





@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent,FormsModule,HttpClientModule,MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    name: '',
    email: '',
    password: '',
    role: ''
  };

  constructor(private LoginService: LoginService,private router: Router,private snackBar: MatSnackBar) {}


  

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      console.log('User Data:', this.user);
  
      
      this.LoginService.signup(this.user).subscribe({
        next: (response) => {
          console.log('Loggedin successfully:', response);
          this.snackBar.open('Login successful!', 'Close', {
            duration: 3000, 
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snackbar-success'], 
          });


           
           localStorage.setItem('userName', this.user.name);
           localStorage.setItem('userRole',this.user.role);
          
          this.router.navigate(['/mainpage']);
        },
        error: (error) => {
          console.error('Login error:', error);

          
          this.snackBar.open('Login failed. Please try again.', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['snackbar-error'], 
          });
        },
        complete: () => {
          console.log('Login process complete');
        }
      });
    } else {
      console.log('Form is invalid');
      this.snackBar.open('Please fill out the form correctly', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snackbar-warning'], 
      });
    }
  }  
}

