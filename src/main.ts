import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { HttpClient,HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';







const appConfig = {
  providers: [
    // Enable HttpClient with fetch API support
    provideHttpClient(withFetch()), // This enables fetch support for HttpClient

    // Other providers you might need
    importProvidersFrom(HttpClientModule),  // Ensure HttpClientModule is provided
    provideRouter(routes), provideAnimationsAsync()  // Your router configuration
  ]
};










bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
