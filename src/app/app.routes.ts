import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutChildComponent } from './about/about-child/about-child.component';
import { SingleUserComponent } from './about/single-user/single-user.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: 'child',
        component: AboutChildComponent,
      },
    ],
  },
  { path: 'contact', component: ContactComponent },
  {
    path: 'user-detail',
    component: SingleUserComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
