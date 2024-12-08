import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { SiteService } from '../service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sitedetails',
  standalone :true,
  imports: [DatePipe, HeaderComponent,CommonModule],
  templateUrl: './sitedetails.component.html',
  styleUrls: ['./sitedetails.component.css']
})
export class SiteDetailsComponent implements OnInit {
  siteId!:  number;
  site: any;  

  constructor(private route: ActivatedRoute,private siteService :SiteService) {}

  ngOnInit() {
    const siteId = this.route.snapshot.paramMap.get('id');
    if (siteId) {
      this.siteService.getSiteById(siteId).subscribe({
        next: (data) => {
          this.site = data;
        },
        error: (error) => {
          console.error('Error fetching site details:', error);
        }
      });
    }
  }
}
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CommonModule, DatePipe } from '@angular/common';
// import { HeaderComponent } from "../header/header.component";


// @Component({
//   selector: 'app-sitedetails',
//   standalone: true,
//   imports: [DatePipe, HeaderComponent,CommonModule],
//   templateUrl: './sitedetails.component.html',
//   styleUrls: ['./sitedetails.component.css']
// })
// export class SiteDetailsComponent implements OnInit {
//   siteId!: number;
//   site: any; // Store site details

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       this.siteId = +params.get('siteId')!; // Get siteId from URL
//       this.loadSiteDetails();
//     });
//   }

//   loadSiteDetails(): void {
//     // Fetch the site details using the siteId from the server (mocking data here)
//     this.site = {
//       siteId: this.siteId,
//       name: `Site ${this.siteId}`,
//       location: `Location `,
//       historicalPeriod: 'Example Period',
//       description: 'A detailed description of the archaeological site.',
//       discoveredBy: 'John Doe',
//       conservationStatus: 'Well Preserved',
//       dateDiscovered: new Date(),
//       imageUrl: 'https://via.placeholder.com/1200x400', // Example image URL
//       excavationPrograms: [
//         'Program 1: Detailed Exploration',
//         'Program 2: Preservation Work',
//         'Program 3: Artifact Recovery'
//       ],
//       artifacts: [
//         {
//           name: 'Artifact 1',
//           description: 'Description of Artifact 1.',
//           imageUrl: 'https://via.placeholder.com/200x150'
//         },
//         {
//           name: 'Artifact 2',
//           description: 'Description of Artifact 2.',
//           imageUrl: 'https://via.placeholder.com/200x150'
//         },
//         {
//           name: 'Artifact 3',
//           description: 'Description of Artifact 3.',
//           imageUrl: 'https://via.placeholder.com/200x150'
//         }
//       ]
//     };
//   }
// }
