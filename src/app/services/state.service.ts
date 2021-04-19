import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  url: string = environment.API_URL + 'states/';

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(this.url);
  }
}
