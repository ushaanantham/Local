import { Component, OnInit } from '@angular/core';
//import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
//import { UserService } from '../service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private router:Router) { }
 private username;
private Password;

 ngOnInit() {
 }
 login()
 {
   if(this.username=="123" && this.Password=="123")
   {
     this.router.navigate(['list-user'])
     alert("login successfull")
   }
   else{
     alert("Error in logging in")
   }
 }

}