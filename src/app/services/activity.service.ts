import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = 'https://localhost:7021/Activity';
  private httpClient = inject(HttpClient);

  getActivities(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl);
  }
  
  removeActivity(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  }

  addActivity(activity: any): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, activity);
  }
  
  updateActivity(activity: any): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl, activity);
  }
}
