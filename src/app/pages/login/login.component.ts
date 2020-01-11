import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login = new Login();

  constructor(
    private router: Router
  ) {
    document.body.className = 'hold-transition login-page';
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.login.username == 'admin' && this.login.password == 'admin') {
      this.router.navigate(['/index']);
    } else {
      alert('Login Fail !');
    }
  }

}
export class Login {
  username: string;
  password: string;
}