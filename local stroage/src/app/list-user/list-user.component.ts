import { Component, OnInit } from '@angular/core';
//import { FormBuilder } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../service/user.service';
import { user } from '../model/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: user[];

  constructor(private  userService: UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
    });
  }
  

  addUser(): void {
    this.router.navigate(['add-user']);
  };

  editUser(user: user): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId",user.id.toString());
    this.router.navigate(['edit-user']);
  };
  deleteUser(user: user): void {
    this.userService.deleteUser(user.id)
    .subscribe(data => {
      this.users =  this.users.filter(u => u !==user);
    });

  }
}
