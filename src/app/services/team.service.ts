import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

/* Interface */
import { Team } from 'src/models/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { 

  }

  obtenerEquipos(){
    const url = 'http://127.0.0.1:8000/api/teams'

    return this.http.get<Team>( url );
  }

} 
