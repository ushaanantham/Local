import { Component, OnInit } from '@angular/core';
import { Validators } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { FormGroup,FormBuilder } from '../../../node_modules/@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private  userService: UserService, private router:Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id:[],
      firstname:["",Validators.required],
       lastname:["",Validators.required],
        email:["",Validators.required],
   });
  }

  onSubmit()
  {
    this.userService.CreateUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-user']);
      });
    //this.userService.createUser(this.addForm.value);
    //this.router.navigate(['list-user']); 
  }
}
