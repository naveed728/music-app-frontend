import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.scss']
})
export class ViewFriendComponent implements OnInit{
  users: any[] = [];

  constructor(private http: HttpClient,public dialogRef: MatDialogRef<ViewFriendComponent>,
    ) { }


  ngOnInit(): void {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });  
    
    this.http.get('http://localhost:5000/api/v1/user/friends/getfriend',{headers:headers}).subscribe((data: any) => {
      this.users = data.users;
      console.log(this.users)
    });
  }
}
