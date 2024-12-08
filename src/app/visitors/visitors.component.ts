import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import emailjs from 'emailjs-com';
import { VisitorsService } from '../service.service';
import { HeaderComponent } from "../header/header.component";
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-visitors',
  standalone: true,
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css'],
  imports: [HeaderComponent, DatePipe, CommonModule,FormsModule,ReactiveFormsModule]
})
export class VisitorsComponent implements OnInit {
  visitors$!: Observable<any[]>;

  
  user_id = 'YI8LJer92zBkLqTRZ';
  service_id = 'service_93oav16';
  template_id = 'template_ejtybwb';

  constructor(private visitorsService: VisitorsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    
    this.visitors$ = this.visitorsService.getAllVisitors();
  }

  // Function to open the booking dialog
  openBookingDialog(visitor: any): void {
    const dialogRef = this.dialog.open(BookingDialog, {
      width: '700px',
      data: visitor 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        this.sendEmail(result);
      }
    });
  }

  
  sendEmail(formData: any) {
    const templateParams = {
      from_name: formData.name,
      to_email: formData.email,
      phone: formData.phone,
      tour_guide: formData.tourGuide,
      date: formData.date,
      time: formData.time
    };

    emailjs.send(this.service_id, this.template_id, templateParams, this.user_id)
      .then((response) => {
        console.log('SUCCESS!', response);
        alert('Booking confirmed! Email sent.');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send email.');
      });
  }
}


@Component({
  selector: 'app-booking-dialog',
  template: `
    <h2>Booking Confirmation</h2>
    <form (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" [(ngModel)]="name" name="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" [(ngModel)]="email" name="email" required />
      </div>
      <div>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" [(ngModel)]="phone" name="phone" required />
      </div>

      <button type="submit">Confirm</button>
      <button type="button" (click)="cancel()">Cancel</button>
    </form>
  `,
  imports: [ CommonModule,FormsModule,ReactiveFormsModule],
  standalone :true
})
export class BookingDialog {
  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(
    public dialogRef: MatDialogRef<BookingDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

 
  onSubmit() {
    this.dialogRef.close({
      name: this.name,
      email: this.email,
      phone: this.phone,
      tourGuide: this.data.tourGuide,
      date: this.data.date,
      time: this.data.time
    });
  }

  
  cancel() {
    this.dialogRef.close();
  }
}
