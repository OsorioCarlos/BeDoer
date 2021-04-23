import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

// API ROUTE
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = environment.API_URL + 'users/';

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get(this.url);
  }

  put(id: number, user: object){
    return this.http.put(this.url + id, user);
  }

  delete(id: number){
    return this.http.delete(this.url + id);
  }
} 
