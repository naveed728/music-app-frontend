import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth.service';
import { dataService } from 'src/app/services/data.service';
import { IUserReqResponse } from 'src/app/interfaces/user';

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
    private _http: HttpClient,
    private authService: AuthService,
    private dataService:dataService
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

      // Encoding the password to base64
      const encodedPassword = btoa(formData.password);

      // Updating the password in the form data with the encoded value
      formData.password = encodedPassword;

      this.dataService.signup(formData)
        .subscribe(
          (response: IUserReqResponse) => {
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
