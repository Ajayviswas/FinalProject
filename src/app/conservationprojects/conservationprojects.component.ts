import { Component, OnInit } from '@angular/core';
import { ConservationProjectsService } from '../service.service'; 
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conservationprojects',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './conservationprojects.component.html',
  styleUrls: ['./conservationprojects.component.css']
})
export class ConservationprojectsComponent implements OnInit {
  conservationProjects: any[] = [];  

  constructor(private conservationProjectsService: ConservationProjectsService) {}

  ngOnInit(): void {
    this.loadConservationProjects();
  }

  
  loadConservationProjects() {
    this.conservationProjectsService.getConservationProjects().subscribe({
      next: (data) => {
        this.conservationProjects = data;
      },
      error: (error) => {
        console.error('Error fetching conservation projects:', error);
      }
    });
  }
}
