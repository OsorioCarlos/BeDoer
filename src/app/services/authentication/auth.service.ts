import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import * as url from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) {
  }

  register(data): any {
    this.http.post<any>(`${environment.API_URL}register/`, {
      name: data.name,
      email: data.email,
      password: data.password
    }).subscribe(
      res => {
        console.log(`${res}`);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/app']);
      },
      err => {
        if (err.status === 422) {
          console.log(err.error.data);
        }
      });
  }

  login(data): any {
    console.log(data);
    this.http.post<any>(`${environment.API_URL}login`, {
      email: data.email,
      password: data.password
    }).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/app']);
      },
      err => {
        console.log(err);
      });
  }

  loggedIn(): boolean {
    // !!-> devuelve true si al expresion existe
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['']);

    // this.headers = new HttpHeaders()
    //   .append('Content-Type', 'application/json')
    //   .append('Accept', 'application/json')
    //   .append('Authorization', `Bearer ${localStorage.getItem('token')}`);
    //
    // this.http.post<any>(`${environment.API_URL}logout`, {headers: this.headers}).subscribe(
    //   res => {
    //     console.log(url);
    //     console.log(res);
    //
    //   },
    //   err => {
    //     console.log(err);
    //   });
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
