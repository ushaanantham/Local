
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
 
  export const routes: Routes =[
    {
        path: 'app-login',
        component: LoginComponent
    },
    {
        path: 'add-user',
        component: AddUserComponent
    },
    {
        path: 'list-user',
        component: ListUserComponent
    },
    {
        path: 'edit-user',
        component: EditUserComponent
    },
    {
        path: '',
        component: LoginComponent
    }
];
export const routing=RouterModule.forRoot(routes);