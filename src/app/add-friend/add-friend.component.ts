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


     
    ngOnInit(): void {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });  
    
    this.http.get('http://localhost:5000/api/v1/user/friends/notfriend',{headers:headers}).subscribe((data: any) => {
      this.users = data.users;
      console.log(this.users)
    });
  }
  
  selectUser(userId: number) {
    this.selectedUserId = userId;
  }

  onSubmit() {
    if (this.selectedUserId !== null) {
      // Replace 'yourApiEndpoint' with the actual API endpoint
      // You can make an HTTP request to send the selected user ID
      // For example, using Angular's HttpClient.
      console.log(`Selected User ID: ${this.selectedUserId}`);
      this.dialogRef.close();
    }
  }
  
}
