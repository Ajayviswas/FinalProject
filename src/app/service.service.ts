import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://localhost:7197/login';  // Replace with  actual backend API URL

  constructor(private http: HttpClient) { }

  signup(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  getSiteById(siteId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${siteId}`);
  }

  private apiUrl = 'https://localhost:7197/api/Site';  // Replace with your actual API URL

  private apiU = 'https://localhost:7197/api/Site/discoveredby'

  constructor(private http: HttpClient) {}

  // Fetch All Sites
  getAllSites(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch My Sites (Implement your logic to filter or fetch specific sites)
  getMySites(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiU}/${userId}`);
  }
}


@Injectable({
  providedIn: 'root',
})
export class ArtifactService {
  getArtifactById(artifactId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${artifactId}`);
  }

  private apiUrl = 'https://localhost:7197/api/Artifact'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch all artifacts
  getAllArtifacts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {
  private apiUrl = 'https://localhost:7197/api/Publication'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getPublicationById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getAllPublications(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}


@Injectable({
  providedIn: 'root'
})
export class ExcavationsService {
  private apiUrl = 'https://localhost:7197/api/Excavation'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  

  // Fetch all excavations
  getAllExcavations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}



@Injectable({
  providedIn: 'root'
})
export class AddSiteService {

  private apiUrl = 'https://localhost:7197/api/Site';  // Replace with  actual backend API URL

  constructor(private http: HttpClient) { }

  addSite(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}


@Injectable({
  providedIn: 'root'
})
export class AddArtifactService {

  private apiUrl = 'https://localhost:7197/api/Artifact'; // Update this URL with the actual backend API URL

  constructor(private http: HttpClient) { }

  addArtifact(artifactData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, artifactData);
  }
}


@Injectable({
  providedIn: 'root',
})
export class AddPublicationService {
  private apiUrl = 'https://localhost:7197/api/Publication';  // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  addPublication(publication: any): Observable<any> {
    return this.http.post(this.apiUrl, publication);
  }
}


@Injectable({
  providedIn: 'root'
})
export class AddExcavationService {

  private apiUrl = 'https://localhost:7197/api/Excavation';  // Adjust API URL

  constructor(private http: HttpClient) {}

  addExcavation(excavation: any): Observable<any> {
    return this.http.post(this.apiUrl, excavation);
  }
}





@Injectable({
  providedIn: 'root',
})
export class EditService {
  private apiUrl = 'https://localhost:7197/api/Site';  // Adjust the API URL as needed

  constructor(private http: HttpClient) {}

  // Method to update site details
  updateSite(id: number, siteData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, siteData);
  }
}


@Injectable({
  providedIn: 'root',
})
export class EditArtifact {
  private apiUrl = 'https://localhost:7197/api/Artifact';  // Adjust the API URL as needed

  constructor(private http: HttpClient) {}

  // Method to update site details
  updateArtifact(id: number, artifactData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, artifactData);
  }
}



@Injectable({
  providedIn: 'root',
})
export class ConservationProjectsService {
  private apiUrl = 'https://localhost:7197/api/ConservationProject'; // Adjust the backend URL accordingly

  constructor(private http: HttpClient) {}

  // Method to get all conservation projects
  getConservationProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

@Injectable({
  providedIn: 'root',
})
export class VisitorsService {
  private apiUrl = 'https://localhost:7197/api/VisitorTour';  // Your API URL

  constructor(private http: HttpClient) {}

  // Method to fetch all visitors
  getAllVisitors(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  private apiUrl = 'https://localhost:7197/api/Report'; // Backend endpoint URL

  constructor(private http: HttpClient) {}

  getAllReports(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Fetches all reports
  }
}