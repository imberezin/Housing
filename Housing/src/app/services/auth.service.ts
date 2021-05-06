import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

  authUser(user: User){
    let userArray = [];
    if (localStorage.getItem('Users')){
      userArray = JSON.parse(localStorage.getItem('Users')!);
    }
    return userArray.find((usr: { userName: string; password: string; }) => usr.userName == user.userName && usr.password == user.password)
  }

  loggedin(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
  }
}
