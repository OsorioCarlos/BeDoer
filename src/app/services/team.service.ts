import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  _API = environment.urlAPI;

  constructor(private http: HttpClient) { 

  }

  getTeam(){
    this.http.get('http://127.0.0.1:8000/api/teams').subscribe(data => {
      console.log(data);
    });
    console.log("El Sercicio de los teams esta funcionando");
  }


} 
