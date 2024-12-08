
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-editsitedialog',
  standalone :true,
  imports : [MatFormField,CommonModule,FormsModule,MatButtonModule,MatInputModule],
  templateUrl: './editsitedialog.component.html',
  styleUrls: ['./editsitedialog.component.css'],
})
export class EditSiteDialogComponent {
  site: any;

  constructor(
    public dialogRef: MatDialogRef<EditSiteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.site = { ...data };  
  }

  
  save() {
    this.dialogRef.close(this.site);
  }

  
  cancel() {
    this.dialogRef.close();
  }
}
