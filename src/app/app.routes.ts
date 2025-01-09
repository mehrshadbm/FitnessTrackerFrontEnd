import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivitiesComponent } from './pages/activities/activities.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'activities', component: ActivitiesComponent},
];
