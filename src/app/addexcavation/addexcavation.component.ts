import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { AddExcavationService } from '../service.service';  

@Component({
  selector: 'app-add-excavation',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, MatButtonModule],
  templateUrl: './addexcavation.component.html',
  styleUrls: ['./addexcavation.component.css']
})
export class AddExcavationComponent {
  excavation = {
    siteId: 0,
    title: '',
    startDate: new Date().toISOString(),
    endDate: new Date().toISOString(),
    leadArchaeologist: '',
    status: ''
  };

  constructor(
    public dialogRef: MatDialogRef<AddExcavationComponent>,
    private addExcavationService: AddExcavationService,
    public dialog: MatDialog
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.addExcavationService.addExcavation(this.excavation).subscribe({
      next: () => {
        this.dialogRef.close(true); 
      },
      error: (error) => {
        console.error('Error saving excavation:', error);
      }
    });
  }

  openAddExcavationDialog(): void {
    const dialogRef = this.dialog.open(AddExcavationComponent, {
      width: '500px',  
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Excavation saved successfully');
        
      }
    });
  }
}
