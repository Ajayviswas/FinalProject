import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AddArtifactService } from '../service.service';


@Component({
  selector: 'app-addartifact',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './addartifact.component.html',
  styleUrls: ['./addartifact.component.css']
})
export class AddArtifactComponent {
openAddArtifactDialog() {
throw new Error('Method not implemented.');
}
  artifact = {
    siteId: 0,
    name: '',
    material: '',
    condition: '',
    culturalSignificance: '',
    dateFound: new Date().toISOString(),
    preservationStatus: ''
  };

  constructor(
    public dialogRef: MatDialogRef<AddArtifactComponent>,
    private addArtifactService: AddArtifactService,
    public dialog: MatDialog
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.addArtifactService.addArtifact(this.artifact).subscribe({
      next: () => {
        this.dialogRef.close(true); 
      },
      error: (error) => {
        console.error('Error saving artifact:', error);
      }
    });
  }

  
}
