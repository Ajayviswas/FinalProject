import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtifactService } from '../service.service';
import { HeaderComponent } from "../header/header.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-artifactdetails',
  standalone: true,
  imports: [HeaderComponent,DatePipe],
  templateUrl: './artifactdetails.component.html',
  styleUrl: './artifactdetails.component.css'
})
export class ArtifactDetailsComponent implements OnInit {
  artifact: any;

  constructor(
    private route: ActivatedRoute,
    private artifactService: ArtifactService
  ) {}

  ngOnInit() {
    const artifactId = this.route.snapshot.paramMap.get('id');
    if (artifactId) {
      this.artifactService.getArtifactById(artifactId).subscribe((data: any) => {
        this.artifact = data;
      });
    }
  }
}