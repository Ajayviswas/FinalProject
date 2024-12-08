import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddPublicationService } from '../service.service';  // Import your service
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addpublication',
  standalone :true,
  imports :[CommonModule,MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule,MatDialogModule],
  templateUrl: './addpublication.component.html',
  styleUrls: ['./addpublication.component.css']
})
export class AddPublicationComponent {
  publication = {
    siteId: 0,
    author: '',
    title: '',
    abstract: '',
    datePublished: new Date().toISOString(),
    fileLink: ''
  };
  dialog: any;

  constructor(
    public dialogRef: MatDialogRef<AddPublicationComponent>,
    private addPublicationService: AddPublicationService,
    
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.addPublicationService.addPublication(this.publication).subscribe({
      next: () => {
        this.dialogRef.close(true); 
      },
      error: (error) => {
        console.error('Error saving publication:', error);
      }
    });
  }

  openAddPublicationDialog(): void {
    const dialogRef = this.dialog.open(AddPublicationComponent, {
      width: '500px',  
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log('Publication saved successfully');
        
      }
    });
  }
}
