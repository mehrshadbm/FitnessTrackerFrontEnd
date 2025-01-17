import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Activity, ActivityType } from '../../../models/activity-model';
import { ActivityService } from '../../../services/activity.service';
import { ActivityFilter } from '../../../models/activityfilter-model';

@Component({
  selector: 'app-top-activities',
  imports: [DatePipe, DecimalPipe],
  templateUrl: './top-activities.component.html',
  styleUrl: './top-activities.component.css',
})
export class TopActivitiesComponent {
  private activityService = inject(ActivityService);
  activities: Activity[] = [];
  filters: ActivityFilter = {};

  constructor() {
    this.loadActivities();
  }

  loadActivities() {
    this.activityService.getFilteredActivities(this.filters).subscribe(
      (data) => {
        this.activities = data;
        console.log(this.activities);
      }
    )
  }
  getActivityTypeName(activityType: ActivityType): string {
    return ActivityType[activityType];
  }
  getActivityImageName(activityType: ActivityType): string {
    switch (activityType) {
      case ActivityType.Running:
        return 'run.png';
      case ActivityType.Cycling:
        return 'cycle.png';
      case ActivityType.Lifting:
        return 'lift.png';
      case ActivityType.Walking:
        return 'walk.png';
      case ActivityType.Swimming:
        return 'swim.png';
      default:
        return 'logo.png';
    }
  }
  
  
}
