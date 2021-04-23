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

  get(){
    return this.http.get(this.url);
  }
  
  post(team: any){
    return this.http.post(this.url, team);
  }

  put(team: any){
    return this.http.put(this.url + team.id, {name: team.name, description: team.description});
  }

  delete(id: number){
    return this.http.delete(this.url + id);
  }
} 
