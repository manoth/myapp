import { Injectable, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  public jwtHelper = new JwtHelperService();

  constructor(
    @Inject('TOKENNAME') private tokenName: string,
    private main: MainService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log(state.url);
    const token = localStorage.getItem(this.tokenName);
    try {
      if (this.jwtHelper.isTokenExpired(token)) {
        this.main.logOut();
        return false;
      } else {
        return true;
      }
    } catch (err) {
      this.main.logOut();
      return false;
    }
  }

}
