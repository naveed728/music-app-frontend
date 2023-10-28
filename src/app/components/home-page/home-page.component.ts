import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';
import { RichTextComponent } from '../rich-text/rich-text.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewFriendComponent } from '../view-friend/view-friend.component';
import { AddFriendComponent } from '../add-friend/add-friend.component';
import { dataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  

    constructor(private dialog: MatDialog,private authService: AuthService,private _http:HttpClient,private dataService:dataService
      ) {}
  
  openCreatepostDialog(){
    this.dialog.open(RichTextComponent, {
      width: '600px',
      height: 'auto'
    });
  }
  openViewFriendsDialog(){
    this.dialog.open(ViewFriendComponent, {
      position: { top: '0', right: '0' },
      width: '350px',
      height: '100%'
    });
  }
  openAddFriendsDialog(){
    this.dialog.open(AddFriendComponent, {
      position: { top: '0', right: '0' },
        width: '350px',
        height: '100%',
    });
  }
  logout() { 
this.dataService.logout()
.subscribe(response => {
  console.log('Logout successful', response);
  this.authService.logout();

}, error => {
  // Handle any errors
  console.error('Error during logout', error);
});

}
}
