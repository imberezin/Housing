import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.scss']
})
export class NavVarComponent implements OnInit {

  loggedinUser?: string | null;

  constructor(private auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  loggedin(){
    this.loggedinUser = this.auth.loggedin();
    return this.loggedinUser;
  }

  onLogout(){
    this.auth.logout();
    this.alertify.success('You are logged out !');
  }
}
