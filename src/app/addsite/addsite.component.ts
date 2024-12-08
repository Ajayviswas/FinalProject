import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AddSiteService } from '../service.service';

@Component({
  selector: 'app-addsite',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule],
  templateUrl: './addsite.component.html',
  styleUrl: './addsite.component.css'
})








export class AddsiteComponent {
  site = {
    name: '',
    location: '',
    historicalPeriod: '',
    description: '',
    discoveredBy: '',
    conservationStatus: '',
    dateDiscovered: new Date()
  };
  constructor(
    public dialogRef: MatDialogRef<AddsiteComponent>,
    private AddSiteService: AddSiteService
  ) {}
  onCancel(): void {
    this.dialogRef.close();
  }
  onSave(): void {
    this.AddSiteService.addSite(this.site).subscribe({
      next: () => {
        this.dialogRef.close(true); 
      },
      error: (error) => {
        console.error('Error saving site:', error);
      }
    });
  }
}
