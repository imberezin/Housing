import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.auth.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      this.alertifyService.success("login successfully")
      this.router.navigate(['/']);
    }else{
      this.alertifyService.error("login felid")
    }
  }
}
