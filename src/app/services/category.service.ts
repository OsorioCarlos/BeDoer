import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = environment.API_URL + 'categories/';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }
}
