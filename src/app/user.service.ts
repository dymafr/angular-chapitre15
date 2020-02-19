import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/retry';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<{ name: string }[]>('https://http-4294f.firebaseio.com/users.json');
  }

  public createUsers(users: { name: string }[]) {
    return this.http.put('https://http-4294f.firebaseio.com/users.json', users);
  }

}
