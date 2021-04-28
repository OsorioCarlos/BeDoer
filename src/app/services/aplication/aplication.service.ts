import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  // private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) {
  }

  // get refresh$() {
  //   return this._refresh$;
  // }

  get(query: string): Observable<any> {
    const url = `${environment.API_URL}${query}`;
    return this.http.get<any>(url);
  }

  post(query: string, data): Observable<any> {
    const url = `${environment.API_URL}${query}`;
    return this.http.post<any>(url, data);
  }

  put(query: string, data): Observable<any> {
    const url = `${environment.API_URL}${query}`;
    return this.http.put<any>(url, data);
  }

  delete(query: string): Observable<any> {
    const url = `${environment.API_URL}${query}`;
    return this.http.delete<any>(url);
  }

}
