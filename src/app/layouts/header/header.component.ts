import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public decode: any;

  constructor(
    private main: MainService
  ) { }

  ngOnInit() {
    this.decode = this.main.decodeToken();
    // console.log(this.decode);
  }

  logOut() {
    this.main.logOut();
  }

}
