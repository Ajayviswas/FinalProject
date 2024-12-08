import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  userRole: string = ''; 

  

  ngOnInit() {
    
    this.userRole = localStorage.getItem('userRole') || ''; 
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
  
  

  isAdmin(): boolean {
    return this.userRole === 'Admin';
  }

  
  isArchaeologist(): boolean {
    return this.userRole === 'Archaeologist';
  }

  
  isResearcher(): boolean {
    return this.userRole === 'Researcher';
  }

  isConservator():boolean{
    return  this.userRole === 'Conservator';
  }


  logout(): void {
    
    localStorage.removeItem('userRole');
    
    
    this.router.navigate(['/']);  
  }

  
}
