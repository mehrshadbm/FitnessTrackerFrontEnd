import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity-model';
import { ActivityFilter } from '../models/activityfilter-model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = 'https://localhost:7021/Activity';
  private httpClient = inject(HttpClient);

  getActivities(): Observable<Activity> {
    return this.httpClient.get<any>(this.baseUrl);
  }
  
  removeActivity(id: string): Observable<Activity> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }

  addActivity(activity: any): Observable<Activity> {
    return this.httpClient.post<any>(this.baseUrl, activity);
  }
  
  updateActivity(activity: any): Observable<Activity> {
    return this.httpClient.put<any>(this.baseUrl, activity);
  }

  getFilteredActivities(filters: ActivityFilter): Observable<Activity[]> {
    const params = new HttpParams({ fromObject: filters as any});
    return this.httpClient.get<Activity[]>(`${this.baseUrl}/Top`, { params });
  }
}