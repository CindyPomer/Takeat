import { Component, OnInit } from '@angular/core';
import { userNameSessionKey } from '../../models/global-consts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;

  constructor() { }

  ngOnInit() {
  }

  login(){
    window.sessionStorage.setItem(userNameSessionKey, this.userName);

    alert(window.sessionStorage.getItem(userNameSessionKey));
  }
}
