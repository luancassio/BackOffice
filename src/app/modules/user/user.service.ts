import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './interface/user';
import { Observable, interval, take, tap, timeInterval, timeout } from 'rxjs';
import { UserStore } from 'src/app/core/store/user-store';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private urlApi = environment.URL_API;
  private urlApi = environment.URL_API_JSON_SERVE;

  constructor(private http: HttpClient, private userStore: UserStore) { }

  //COM JSON SERVE
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users`).pipe(
      tap(users => {
        this.userStore.setState('users', users);
      }),
      take(1)
    );
  }

  putStatusUsers(user: User): Observable<User> {
    return this.http.patch<User>(`${this.urlApi}/users/${user.id}`, user).pipe(
      tap(user => {
        this.userStore.update('users', user);
      }),
      take(1)
    );
  }

  addUser(user: User): Observable<User> {
    console.log(user, 'addUser')
    return this.http.post<User>(`${this.urlApi}/users`, user).pipe(
      timeout({each: 30000}),
      tap((userCurrent: User) => {
        const data = this.userStore.currentValue.users;
        data.push(userCurrent);
        this.userStore.setState('users', data);
      }),
      // take(1),
    );
  }


  // COMO ESTAVA USANDO UMA API COM AUTENTICAÇÃO ESTAVA FAZENDO A CHAMADA ASSIM
  // public getUserById(id: string): Observable<User>{
  //   return this.http.get<User>(`${this.urlApi}/User/${id}`, { headers: HttpOptions.getHttpOptions()})
  // }

  // public getAllUser(): Observable<User[]>{
  //   return this.http.get<User[]>(`${this.urlApi}/User/users`, { headers: HttpOptions.getHttpOptions()})
  // }

}
