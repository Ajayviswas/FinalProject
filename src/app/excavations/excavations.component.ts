import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ExcavationsService } from '../service.service';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { AddExcavationComponent } from '../addexcavation/addexcavation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-excavations',
  standalone: true,
  imports: [HeaderComponent,DatePipe,CommonModule],
  templateUrl: './excavations.component.html',
  styleUrls: ['./excavations.component.css'],
  providers: [ExcavationsService]
})
export class ExcavationsComponent implements OnInit {
  excavations: any[] = [];

  constructor(private excavationsService: ExcavationsService,public dialog :MatDialog) {}

  ngOnInit() {
    this.loadExcavations();
  }

  loadExcavations() {
    this.excavationsService.getAllExcavations().subscribe({
      next: (data) => {
        this.excavations = data;
      },
      error: (error) => {
        console.error('Error fetching excavations:', error);
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
