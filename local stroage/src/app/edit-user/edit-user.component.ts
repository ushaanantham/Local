import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup;
   

  constructor(private formBuilder:FormBuilder,private  userService: UserService, private router:Router) { }

  ngOnInit() {
      let userId = localStorage.getItem("editUserId");
     if(!userId)
     {
       alert("invalid action")
       this.router.navigate(['list-user']);
       return;
     }
     this.editForm = this.formBuilder.group({
       id:[],
       firstname:["",Validators.required],
        lastname:["",Validators.required],
         email:["",Validators.required],
    });
     this.userService.getUserById(+userId)
     .subscribe(data =>{
       this.editForm.setValue(data);
     });

    }

    onsubmit() {
      this.userService.updateUser(this.editForm.value)
   .subscribe(
    data => {
      this.router.navigate(['list-user']);
    },
  error => {
    alert(error);

  });
}
}
