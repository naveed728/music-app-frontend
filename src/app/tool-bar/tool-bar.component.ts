import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {

  constructor(private dialog: MatDialog,private authService: AuthService
    ) {}

  get isAuthenticated(): boolean {
      return this.authService.isAuthenticated;
    }
  
  logout() {
      this.authService.logout();
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
