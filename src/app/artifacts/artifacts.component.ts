import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtifactService } from '../service.service';
import { HeaderComponent } from "../header/header.component";
import { AddArtifactComponent } from '../addartifact/addartifact.component';
import { MatDialog } from '@angular/material/dialog';
import { EditArtifact } from '../service.service';
import { EditArtifactDialogComponent } from '../editartifactdialog/editartifactdialog.component';

@Component({
  selector: 'app-artifacts',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './artifacts.component.html',
  styleUrls: ['./artifacts.component.css'],
  providers: [ArtifactService]
})
export class ArtifactsComponent implements OnInit {
  artifacts: any[] = []; 

  artifactToEdit : any;
  
  

  constructor(private artifactService: ArtifactService,public dialog :MatDialog,private EditArtifact : EditArtifact) {}

  ngOnInit() {
    this.loadArtifacts();
  }

  
  loadArtifacts() {
    this.artifactService.getAllArtifacts().subscribe({
      next: (data) => {
        this.artifacts = data;
      },
      error: (error) => {
        console.error('Error fetching artifacts:', error);
      }
    });
  }


  openAddArtifactDialog(): void {
    
    const dialogRef = this.dialog.open(AddArtifactComponent, {
      width: '500px',  
      
      
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Artifact saved successfully');
        
      }
    });
  }





  openEditArtifactDialog(artifact: any): void {
   
    this.artifactToEdit = { ...artifact };
  
    
    const dialogRef = this.dialog.open(EditArtifactDialogComponent, {
      width: '500px',
      data: this.artifactToEdit,  
    });
  
    
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        
        this.updateArtifact(result.artifactId, result);
      }
    });
  }
  
  
  updateArtifact(id: number, updatedArtifact: any): void {
    this.EditArtifact.updateArtifact(id, updatedArtifact).subscribe({
      next: (response) => {
        console.log('Artifact updated successfully:', response);
        this.loadArtifacts();  
      },
      error: (error) => {
        console.error('Error updating artifact:', error);
      },
      complete: () => {
        console.log('Artifact update operation completed');
      }
    });
  }
  

  viewArtifactDetails(artifact: any) {
   
    const artifactDetailsUrl = `artifact-details/${artifact.artifactId}`;
    window.open(artifactDetailsUrl, '_blank');
  }
}
