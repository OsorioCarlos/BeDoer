import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  get(query: string): Observable<any> {
    const url = `${environment.API_URL}${query}`;
    return this.http.get<any>(url);
  }

}
