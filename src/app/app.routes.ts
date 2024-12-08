import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SitesComponent } from './sites/sites.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PublicationsComponent } from './publications/publications.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ExcavationsComponent } from './excavations/excavations.component';
import { SiteDetailsComponent } from './sitedetails/sitedetails.component';
import { ArtifactDetailsComponent } from './artifactdetails/artifactdetails.component';
import { PublicationdetailsComponent } from './publicationdetails/publicationdetails.component';
import { ConservationprojectsComponent } from './conservationprojects/conservationprojects.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { MapsComponent } from './maps/maps.component';
import { AnalyticsComponent } from './analytics/analytics.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path:'sites',component :SitesComponent},
    {path:'artifacts',component :ArtifactsComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'publications',component:PublicationsComponent},
    { path: 'excavations', component: ExcavationsComponent },
    {path :'mainpage',component:MainpageComponent},
    { path: 'site-details/:siteId', component: SiteDetailsComponent },
    { path: 'artifact-details/:id', component: ArtifactDetailsComponent },
    { path: 'publication-details/:id', component: PublicationdetailsComponent },
    {path :'conservationprojects',component :ConservationprojectsComponent},
    {path :'visitors',component :VisitorsComponent},
    { path: 'maps', component: MapsComponent },
    { path: 'analytics', component: AnalyticsComponent }

      // Use HomeComponent for the root path
  ];

  export const appProviders = [
    HttpClientModule,  // Include HttpClientModule to enable HTTP requests
    FormsModule,       // Include FormsModule for form handling
  ];