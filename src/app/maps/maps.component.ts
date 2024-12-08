import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  standalone: true,
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {
  private L: any; 
  private map: any;

  async ngOnInit() {
    if (typeof window !== 'undefined') {
      
      const leaflet = await import('leaflet');
      this.L = leaflet;
      this.initMap();
    }
  }

  private initMap(): void {
    if (this.L) {
     
      this.map = this.L.map('map').setView([51.505, -0.09], 2);

     
      this.L.tileLayer(' http://b.tile.openstreetmap.org/8/127/85.png ', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.map);

      
    }
  }

  private addMarkers(): void {
    const sites = [
      { name: 'Pyramids of Giza', lat: 29.9792, lng: 31.1342 },
      { name: 'Stonehenge', lat: 51.1789, lng: -1.8262 },
      { name: 'Machu Picchu', lat: -13.1631, lng: -72.545 },
      { name: 'Great Wall of China', lat: 40.4319, lng: 116.5704 },
    ];

   
  }
}
