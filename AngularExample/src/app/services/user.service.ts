import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  email = 'email',
  first_name = 'first_name',
  last_name = 'last_name',
  avatar = 'avatar'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://reqres.in/api/users/';

  constructor(private http: HttpClient) { }

  allData(): Observable<any> {
    return this.http.get(`${this.url}`).pipe(
      map(results => {
        console.log('RAW', results);
        return results['data'];
      })
    );
  }

  getDetails(id) {
    return this.http.get(`${this.url}${id}`);
  }

}
