import { Injectable } from '@angular/core';
import { user } from '../model/user.model';
import { of } from '../../../node_modules/rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable( )
export class UserService {

fakeUsers:user[]=[
  {id: 1, firstname: 'keerthi', lastname: 'chandran', email: 'keer@gmail.com'},
  {id: 2, firstname: 'jayanthi', lastname: 'chandran', email: 'jaya@gmail.com'}

];
  constructor(private http: HttpClient) { }
   //getu,add,edit,delete
  
    getUsers()
   {
     return of(this.fakeUsers);
     //return this.http.get<user[]>(this.baseUrl);
   }
   CreateUser(user:user)
   {
     //console.log(user.id)
     
     return of(this.fakeUsers.push(user));
   }
   //return this.http.post(this.baseUrl,user)
   getUserById(id: number)
   {
      var obj = this.fakeUsers.filter(x => x.id == id)[0];
      return  of(obj);
   }
    //return this.http.get<user>(this.baseUrl + '/' + id);
   updateUser(user:user) {
     let updateItem = this.fakeUsers.find(this.findIndexToUpdate, user.id);
     let index = this.fakeUsers.indexOf(updateItem);
   return of(this.fakeUsers[index] = user);
   //return this.http.put(this.baseUrl + '/' +user.id, user);
    }
    deleteUser(id: number) {
      const index = this.fakeUsers.findIndex(fakeUsr => fakeUsr.id ===id);
      return of(this.fakeUsers.splice(index,1));
    //return this.httpp.delete(this.baseUrl + '/' + id);
  }
    findIndexToUpdate(newItem) {
      return newItem.id === this;
    }

}
