import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {any} from 'codelyzer/util/function';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {
  }

  register(data): any {
    this.http.post<any>(`${this.url}register/`, {
      name: data.name,
      email: data.email,
      password: data.password
    }).subscribe(res => {
      console.log(`${res}, entro`);
    }, err => {
      if (err.status === 422) {
        console.log(err.error.data);
      }
    });
  }

  login(data): any {
    this.http.post(`${this.url}login`, {
      email: data.email,
      password: data.password
    }).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

}
