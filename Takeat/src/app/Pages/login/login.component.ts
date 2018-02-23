import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userNameSessionKey } from '../../models/global-consts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    window.sessionStorage.setItem(userNameSessionKey, this.userName);
    this.router.navigate(['/order']);
    // alert(window.sessionStorage.getItem(userNameSessionKey));
  }
}
