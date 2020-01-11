import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login = new Login();

  constructor() {
    document.body.className = 'hold-transition login-page';
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.login.username == 'admin' && this.login.password == 'admin') {
      alert('Login Success!');
    } else {
      alert('Login Fail !');
    }
  }

}
export class Login {
  username: string;
  password: string;
}