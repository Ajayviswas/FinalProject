import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../service.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-publicationdetails',
  standalone: true,
  imports: [DatePipe, CommonModule, HeaderComponent],
  templateUrl: './publicationdetails.component.html',
  styleUrl: './publicationdetails.component.css'
})
export class PublicationdetailsComponent {
  publication: any;  

  constructor(
    private route: ActivatedRoute,  
    private publicationService: PublicationsService  
  ) {}
  
  ngOnInit(): void {
    
    const publicationId = this.route.snapshot.paramMap.get('id');
    
    if (publicationId) {
      
      this.publicationService.getPublicationById(publicationId).subscribe({
        next: (data: any) => {
          this.publication = data;  
        },
        error: (error) => {
          console.error('Error fetching publication details:', error);
        }
      });
    } else {
      console.error('No publication ID found in the route.');
    }
  }
  
}
