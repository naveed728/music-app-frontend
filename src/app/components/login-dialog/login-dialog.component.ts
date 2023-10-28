import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth.service';
import { dataService } from 'src/app/services/data.service';
import { ILoginResponse } from 'src/app/interfaces/user';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
  encapsulation:ViewEncapsulation.None

})

export class LoginDialogComponent  implements OnInit {
  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder,
    private _http: HttpClient,
    private authService: AuthService,
    private dataService:dataService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]
      ]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

       // Encoding the password to base64
       formData.password = btoa(formData.password);

     
     
      // post request to server
        this.dataService.login(formData)
      .subscribe(
        (response: ILoginResponse) => {
          // Success: Loging  the response and  a success alert
          console.log('Response:', response);
          this.authService.intialiseToken(response.token);
          console.log(response)
          this.dialogRef.close();
          
          Swal.fire({
            title: 'Success',
            text: response.message,
            icon: 'success'
          });
          this.authService.login();
        },
        (error: any) => {
          // Error: Logging  the error message and  an error alert
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
