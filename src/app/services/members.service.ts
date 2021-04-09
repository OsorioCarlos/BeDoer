import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }
  
  get(url: string, id: number) {
    url = environment.API_URL + url + '/' + id;
    return this.http.get(url);
  }
}
