import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SiteService } from '../service.service'; 
import { HeaderComponent } from "../header/header.component";
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddsiteComponent } from '../addsite/addsite.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditSiteDialogComponent } from '../editsitedialog/editsitedialog.component';
import { EditService } from '../service.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
  imports: [CommonModule, HeaderComponent, DatePipe,HttpClientModule,MatButtonModule,MatDialogModule],  
   
  standalone: true,
  providers: [SiteService],
})
export class SitesComponent implements OnInit {
  sites: any[] = [];
  showAllSites: boolean = true;
  mySites: any[] = [];  
  userId: string = '';
  userRole: string = '';
  siteToEdit: any;

  constructor(private siteService: SiteService,public dialog: MatDialog,private EditService :EditService) {}

  ngOnInit() {
    this.loadAllSites();
    this.userId = localStorage.getItem('userName') || 'Ajay';
    this.userRole = localStorage.getItem('userRole') || '';
  }


  isAdmin(): boolean {
    return this.userRole === 'Admin';
  }

  
  isArchaeologist(): boolean {
    return this.userRole === 'Archaeologist';
  }

  
  isResearcher(): boolean {
    return this.userRole === 'Researcher';
  }

  
  loadAllSites() {
    this.siteService.getAllSites().subscribe({
      next: (data) => {
        console.log(data);
        this.sites = data;
      },
      error: (error) => {
        console.error('Error fetching sites:', error);
      }
    });
  }

  loadMySites() {
    this.siteService.getMySites(this.userId).subscribe(
       (sites) => {
        this.mySites = sites;
        this.sites = sites;
      },
      (error) => {
        console.error('Error fetching my sites:', error);
      }
    );
  }

  toggleSiteView() {
    this.showAllSites = !this.showAllSites;
    if (this.showAllSites) {
      this.loadAllSites();
    } else {
      this.loadMySites();
    }
  }



  openAddSiteDialog() {
    const dialogRef = this.dialog.open(AddsiteComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadAllSites(); 
      }
    });
}


openEditSiteDialog(site: any) {
  this.siteToEdit = { ...site };  
  const dialogRef = this.dialog.open(EditSiteDialogComponent, {
    width: '500px',
    data: this.siteToEdit, 
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result) {
      
      this.updateSite(result.siteId, result);  
    }
  });
}


updateSite(id: number, updatedSite: any) {
  this.EditService.updateSite(id, updatedSite).subscribe({
    next: (response) => {
      console.log('Site updated successfully:', response);
      this.loadAllSites();
    },
    error: (error) => {
      console.error('Error updating site:', error);
    },
    complete: () => {
      console.log('Site update operation completed');
    }
  });
}


viewSiteDetails(site: any){
  console.log("ajay",site);
  const siteDetailsUrl = `/site-details/${site.SiteId}`;
  window.open(siteDetailsUrl, '_blank');  
}
}
