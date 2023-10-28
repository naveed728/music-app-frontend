import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token:string | null = null;

  isAuthenticated = false;

  constructor(){
    this.token = localStorage.getItem('token');
  }

  intialiseToken(token:string){
    this.token = token;
    localStorage.setItem('token',token);
  }

  fetchToken(): string | null {
    console.log(this.token)
    return this.token;
  }

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
    this.token = null;
    localStorage.removeItem('token');
  }
}
