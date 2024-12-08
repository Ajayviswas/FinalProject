import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';



@Component({
  selector: 'app-editartifactdialog',
  standalone: true,
  imports: [FormsModule,MatButtonModule,MatInputModule,CommonModule,MatFormField,MatDialogModule],
  templateUrl: './editartifactdialog.component.html',
  styleUrl: './editartifactdialog.component.css'
})
export class EditArtifactDialogComponent {
  artifact: any;

  constructor(
    public dialogRef: MatDialogRef<EditArtifactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  
  ) {
    this.artifact = { ...data.artifact };  
  }

  saveChanges(): void {
    this.dialogRef.close(this.artifact);  
  }

  cancel(): void {
    this.dialogRef.close();  
}
}