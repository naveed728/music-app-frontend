import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private _http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
    // Fetch posts from the API
    const token = localStorage.getItem('jwt');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this._http.get('http://localhost:5000/api/v1/user/posts/getposts', { headers: headers })
      .subscribe(
        (response: any) => {
          this.posts = response.posts; 
        },
        (error) => {
          console.error('Error fetching posts', error);
        }
      );
  }
}
