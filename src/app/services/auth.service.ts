// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  login() {
    // Implement your login logic here, and set isAuthenticated to true upon successful login.
    this.isAuthenticated = true;
  }

  logout() {
    // Implement your logout logic here, and set isAuthenticated to false upon successful logout.
    this.isAuthenticated = false;
  }
}
