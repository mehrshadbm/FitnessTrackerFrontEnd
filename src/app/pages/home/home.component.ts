import { Component } from '@angular/core';
import { NavComponent } from "../../nav/nav.component";
import { TopActivitiesComponent } from "./top-activities/top-activities.component";

@Component({
  selector: 'app-home',
  imports: [NavComponent, TopActivitiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
