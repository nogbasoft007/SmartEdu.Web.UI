import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient
import { provideRouter } from '@angular/router'; // Import provideRouter
import { routes } from './app/app.routes';

// Define your application configuration
const appConfig = {
  providers: [
    provideHttpClient(), // Provide HttpClient
    provideRouter(routes), // Provide Router with your routes
  ],
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));