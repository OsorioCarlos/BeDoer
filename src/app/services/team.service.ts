import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

// API ROUTE
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private url: string = environment.API_URL + 'teams/';

  constructor(private http: HttpClient) { }

  get(id: number){
    return this.http.get(this.url + id);
  }
  
  post(team: any){
    return this.http.post(this.url, {name: team.name, description: team.desciption, user_id: team.user_id});
  }

  put(team: any){
    return this.http.put(this.url + team.id, {name: team.name, description: team.description});
  }

  delete(id: number){
    return this.http.delete(this.url + id);
  }
} 
