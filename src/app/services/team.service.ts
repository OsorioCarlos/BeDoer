import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

// API ROUTE
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  url: string = environment.API_URL + 'teams/';

  constructor(private http: HttpClient) { }

  get(id: number){
    this.url += id;
    return this.http.get(this.url);
  }
  
  post(team: object){
    return this.http.post(this.url, team);
  }

  put(id: number, team: object){
    this.url += id;
    return this.http.put(this.url, team);
  }

  delete(id: number){
    this.url += id
    return this.http.delete(this.url);
  }
} 
