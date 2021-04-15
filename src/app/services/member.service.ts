import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url: string = environment.API_URL + 'members/';

  constructor(private http: HttpClient) { }
  
  get(id: number) {
    this.url += id;
    return this.http.get(this.url);
  }

  post(member: object){
    return this.http.post(this.url, member);
  }

  put(id: number, member: object){
    this.url += id;
    return this.http.put(this.url, member);
  }
}
