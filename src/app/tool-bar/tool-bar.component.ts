import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RichTextComponent } from '../rich-text/rich-text.component';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {

  constructor(private dialog: MatDialog,private authService: AuthService,private _http:HttpClient
    ) {}

  get isAuthenticated(): boolean {
      return this.authService.isAuthenticated;
    }
  
  logout() {
      this.authService.logout();
      const token = localStorage.getItem('jwt');
      console.log(token)
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      });
      console.log(headers)
     
  this._http.post('http://localhost:5000/api/v1/user/users/logout', null, { headers: headers })
  .subscribe(response => {
    // Handle the response
    console.log('Logout successful', response);
    // Log the user out by removing the JWT from local storage
    localStorage.removeItem('jwt');

  }, error => {
    // Handle any errors
    console.error('Error during logout', error);
  });

  }
  openCreatepostDialog(){
    console.log("adasj")
    this.dialog.open(RichTextComponent, {
      width: '400px',
    });
  }
  openSignupDialog() {
    this.dialog.open(SignupDialogComponent, {
      width: '400px',
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '400px',
    });
  }
  
}
