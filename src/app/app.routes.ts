import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
