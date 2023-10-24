import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { RichTextComponent } from '../rich-text/rich-text.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewFriendComponent } from '../view-friend/view-friend.component';
import { AddFriendComponent } from '../add-friend/add-friend.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  

    constructor(private dialog: MatDialog,private authService: AuthService,private _http:HttpClient
      ) {}
  
  openCreatepostDialog(){
    this.dialog.open(RichTextComponent, {
      width: '600px',
      height:'300px'
    });
  }
  openViewFriendsDialog(){
    this.dialog.open(ViewFriendComponent, {
      width: '600px',
      height:'300px'
    });
  }
  openAddFriendsDialog(){
    this.dialog.open(AddFriendComponent, {
      width: '600px',
      height:'500px'
    });
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
}
