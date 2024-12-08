import { Component, OnInit } from '@angular/core';
import { SiteService } from '../service.service';
import { HeaderComponent } from "../header/header.component"; 
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
// import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-mysite',
  standalone :true,
  templateUrl: './mysite.component.html',
  styleUrls: ['./mysite.component.css'],
  imports: [HeaderComponent,DatePipe,CommonModule],
  providers :[SiteService]
})
export class MySiteComponent implements OnInit {

  allSites: any[] = [];  
  mySites: any[] = [];   
  userId: string = 'Ajay';  

  constructor(private siteService: SiteService) { }

  ngOnInit(): void {
    
    this.getAllSites();
  }

  
  getAllSites(): void {
    this.siteService.getAllSites().subscribe(
      (sites) => {
        this.allSites = sites;
      },
      (error) => {
        console.error('Error fetching sites:', error);
      }
    );
  }

 
  getMySites(): void {
    this.siteService.getMySites(this.userId).subscribe(
      (sites) => {
        this.mySites = sites;
      },
      (error) => {
        console.error('Error fetching user-specific sites:', error);
      }
    );
  }

 
  onMySitesClick(): void {
    this.getMySites(); 
  }
}
