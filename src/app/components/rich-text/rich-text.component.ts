import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { MatDialogRef } from '@angular/material/dialog';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit {

  editorContent = '';

  constructor(
    private _http: HttpClient,
    public dialogRef: MatDialogRef<RichTextComponent>,

  ){}

  onContentChange(event: any) {
    this.editorContent = event.html;
  }
  ngOnInit() {
  }
  onSubmit() {
   
    console.log('Captured Data:', this.editorContent);
   
    const data = {
      body: this.editorContent
    };

    const token = localStorage.getItem('token');
    console.log(token)
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });


    this._http.post(`http://localhost:5000/api/v1/user/posts/addPost`,data,{headers:headers})
        .subscribe(
          (response: any) => {
            console.log('Response:', response);
            Swal.fire({
              title: 'Success',
              text: response.message,
              icon: 'success'
            });
            
          },
          (error: any) => {
            // Error: Logging  the error message and  an error alert
            console.error('Error:', error.error.message);
            Swal.fire({
              title: 'Error',
              text: error.error.message,
              icon: 'error'
            });
          }
        );
  }
}
