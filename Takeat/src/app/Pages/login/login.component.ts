import { Component, OnInit } from '@angular/core';

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
    window.sessionStorage.setItem("UserName", this.userName);

    alert(window.sessionStorage.getItem("UserName"));
  }
}
