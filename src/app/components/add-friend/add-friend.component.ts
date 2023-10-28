import { Component,OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss']
})
export class AddFriendComponent implements OnInit {
  users: any[] = [];
  selectedUserId: number | null = null;

  constructor(private http: HttpClient,public dialogRef: MatDialogRef<AddFriendComponent>,
    ) { }

    selectUser(userId: any): void {
      if (userId === this.selectedUserId) {
        // If the same user's checkbox is clicked again, deselect them.
        this.selectedUserId = null;
      } else {
        // Select the clicked user and deselect others.
        this.selectedUserId = userId;
      }
    }
     
    ngOnInit(): void {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });  
    
    this.http.get('http://localhost:5000/api/v1/user/friends/notfriend',{headers:headers}).subscribe((data: any) => {
      this.users = data.users;
      console.log(this.users)
    });
  }
  
  

  onSubmit() {
    if (this.selectedUserId !== null) {
      console.log(`Selected User ID: ${this.selectedUserId}`);
      this.dialogRef.close();
    }
  }
  
}
