import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PublicationsService } from '../service.service'; 
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AddPublicationComponent } from '../addpublication/addpublication.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [HeaderComponent,DatePipe,CommonModule],
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  providers: [PublicationsService] 
})
export class PublicationsComponent implements OnInit {
  publications: any[] = [];

  constructor(private publicationsService: PublicationsService,public dialog: MatDialog) {}

  ngOnInit() {
    this.loadPublications();
  }

  loadPublications() {
    this.publicationsService.getAllPublications().subscribe({
      next: (data) => {
        this.publications = data;
      },
      error: (error) => {
        console.error('Error fetching publications:', error);
      }
    });
  }

  openAddPublicationDialog(): void {
    const dialogRef = this.dialog.open(AddPublicationComponent, {
      width: '500px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Publication saved successfully');
        
      }
    });
  }


  viewPublicationDetails(publication: any): void {
    const publicationDetailsUrl = `publication-details/${publication.publicationId}`; 
    window.open(publicationDetailsUrl, '_blank');
  }
}
