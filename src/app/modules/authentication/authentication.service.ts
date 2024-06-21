import { Injectable } from '@angular/core';
import { Authentication } from './class/authentication';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './class/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public urlApi = environment.URL_API;

  constructor(private http: HttpClient) { }


  public singIn(login: Login): Observable<Authentication>{
    return this.http.post<Authentication>(`${this.urlApi}/User/login`, login)
  }

}
