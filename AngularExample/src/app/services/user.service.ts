import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = 'https://reqres.in/api/users/';

  // Constructor de UserService (@param: http) 
  constructor(private http: HttpClient) { }

  // Método getAllUsers
  getUsers(): Observable<any> {
    return this.http.get(`${this.url}`).pipe(
      map(results => {
        console.log('RAW', results);
        return results['data'];
      })
    );
  }

  // Método getDetails (@param: id)
  getDetails(id) {
    return this.http.get(`${this.url}${id}`);
  }

}
