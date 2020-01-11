import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login = new Login();

  constructor(
    private router: Router,
    private main: MainService
  ) {
    document.body.className = 'hold-transition login-page';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.main.post('signin', this.login).then((res) => {
      console.log(res);
    });
    // if (this.login.username == 'admin' && this.login.password == 'admin') {
    //   this.router.navigate(['/index']);
    // } else {
    //   alert('Login Fail !');
    // }
  }

}
export class Login {
  username: string;
  password: string;
}