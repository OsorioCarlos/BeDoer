import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private url: string = environment.API_URL + 'members/';

  constructor(private http: HttpClient) { }
  
  get(id: number) {
    return this.http.get(this.url + id);
  }

  post(member: any){
    return this.http.post(this.url, member);
  }

  put(member: any){
    return this.http.put(this.url + member.team_id, {user_id: member.user_id});
  }
}
