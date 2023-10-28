import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupDialogComponent } from './components/signup-dialog/signup-dialog.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { PostListComponent } from './components/post-list/post-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RichTextComponent } from './components/rich-text/rich-text.component';
import { QuillModule } from 'ngx-quill'
import { FormsModule } from '@angular/forms';
import { ViewFriendComponent } from './components/view-friend/view-friend.component';
import { AddFriendComponent } from './components/add-friend/add-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupDialogComponent,
    ToolBarComponent,
    LoginDialogComponent,
    PostListComponent,
    HomePageComponent,
    RichTextComponent,
    ViewFriendComponent,
    AddFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    QuillModule.forRoot(),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
