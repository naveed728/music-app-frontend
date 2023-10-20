import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupDialogComponent implements OnInit{
  signupForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SignupDialogComponent>,
    private fb: FormBuilder,
    private _http: HttpClient
  ) {
    this.signupForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]
      ]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;

      // Encode the password to base64
      const encodedPassword = btoa(formData.password);

      // Update the password in the form data with the encoded value
      formData.password = encodedPassword;

      this._http.post(`http://localhost:5000/api/v1/user/users/addUser`, formData)
        .subscribe(
          (response: any) => {
            // Success: Loging  the response and  a success alert
            console.log('Response:', response);
            this.dialogRef.close();
            Swal.fire({
              title: 'Success',
              text: response.message,
              icon: 'success'
            });
            
          },
          (error: any) => {
            // Error: Logging  the error message and  an error alert
            console.error('Error:', error.error.message);
            this.dialogRef.close();
            Swal.fire({
              title: 'Error',
              text: error.error.message,
              icon: 'error'
            });
          }
        );
    }
  }
}
