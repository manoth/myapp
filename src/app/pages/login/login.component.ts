import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login = new Login();

  constructor(
    @Inject('TOKENNAME') private tokenName: string,
    private router: Router,
    private main: MainService,
    private crypto: CryptoService
  ) {
    document.body.className = 'hold-transition login-page';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.login.password = this.crypto.md5(this.login.password);
    this.main.post('signin', this.login).then((res: any) => {
      if (res.ok) {
        localStorage.setItem(this.tokenName, res.token);
        this.router.navigate(['/index']);
      } else {
        alert('Login Fail !');
        this.login.password = '';
      }
    });
  }

}
export class Login {
  username: string;
  password: string;
}