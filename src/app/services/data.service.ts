import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {
    ISignUpDetails,
    IUserReqResponse,
    ILoginDetails,
    ILoginResponse
  } from '../interfaces/user';

@Injectable({
    providedIn: 'root',
  })
export class dataService {
    constructor(
        private _http: HttpClient,
        private _authService: AuthService
      ) {}


      
   signup(user: ISignUpDetails): Observable<IUserReqResponse> {
    return this._http.post<IUserReqResponse>(
      `http://localhost:5000/api/v1/user/users/addUser`,
      user
    );
  }

  login(user: ILoginDetails): Observable<ILoginResponse> {
    return this._http.post<ILoginResponse>(
      `http://localhost:5000/api/v1/user/users/login`,
      user
    );
  }
  logout(): Observable<IUserReqResponse> {
    console.log( this._authService.fetchToken())
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this._authService.fetchToken(),
    });
    console.log(headers);
    return this._http.post<IUserReqResponse>(
      `http://localhost:5000/api/v1/user/users/logout`,
      null,
      {
        headers,
      }
    );
  }
}
