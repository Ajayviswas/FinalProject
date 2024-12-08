import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../service.service';
import { single } from 'rxjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-analytics',
  standalone: true,
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  imports: [NgxChartsModule, HeaderComponent] 
  
})
export class AnalyticsComponent implements OnInit {
  reports: any[] = [];

  
  public pieChartData: any[] = [];
  public pieChartView: [number, number] = [700, 400];

  
  public barChartData: any[] = [];
  public barChartView: [number, number] = [700, 400];

  constructor(private reportsService: ReportsService) {}

  ngOnInit(): void {
    this.fetchReports();
  }

  fetchReports(): void {
    this.reportsService.getAllReports().subscribe({
      next: (data) => {
        this.reports = data;

        console.log('Fetched Reports:', this.reports);  

        
        const reportTypeCounts = this.countByReportType(data);
       console.log('Report Type Counts:', reportTypeCounts);  
  
       this.pieChartData = this.preparePieChartData(reportTypeCounts);
        console.log('Prepared Pie Chart Data:', this.pieChartData);  
  
       
        const reportsBySite = this.countBySite(data);
        console.log('Reports by Site:', reportsBySite);  
  
        this.barChartData = this.prepareBarChartData(reportsBySite);
        console.log('Prepared Bar Chart Data:', this.barChartData);
      },
    });
  }

  countByReportType(reports: any[]): any {
    return reports.reduce((acc, report) => {
      
      const reportType = report.reportType;
      console.log("rt = ",reportType);
      if (reportType !== undefined && reportType !== null) {
        
        acc[reportType] = (acc[reportType] || 0) + 1;
      } else {
       
        acc['undefined'] = (acc['undefined'] || 0) + 1;
      }
      return acc;
    }, {});
  }

  countBySite(reports: any[]): any {
    return reports.reduce((acc, report) => {
      
      const siteId = report.siteId;
      if (siteId !== undefined) {
        acc[siteId] = (acc[siteId] || 0) + 1;
      } else {
        
        acc['undefined'] = (acc['undefined'] || 0) + 1;
      }
  
      console.log("acc = ", acc);
      return acc;
    }, {});
  }

  
  preparePieChartData(data: any): any[] {
    return Object.entries(data).map(([key, value]) => ({
      name: key,
      value: value
    }));
  }

  
  prepareBarChartData(data: any): any[] {
    console.log(data);
    return Object.entries(data).map(([key, value]) => ({
      name: key,
      value: value
    }));
  }
}
