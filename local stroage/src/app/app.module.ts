import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { AppComponent } from './app.component';
 //import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    LoginComponent,
     
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    MatCardModule,
     
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ],
  providers: [UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
