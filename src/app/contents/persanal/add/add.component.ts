import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CryptoService } from 'src/app/services/crypto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input() edit?: any;
  @Output() res: EventEmitter<any> = new EventEmitter();
  public user = new User();

  public pname = [
    { name: 'นาย', value: 'นาย' },
    { name: 'น.ส.', value: 'น.ส.' },
    { name: 'นาง', value: 'นาง' },
  ];

  ngAfterViewInit() {
    console.log(this.edit);
  }

  constructor(
    private main: MainService,
    private crypto: CryptoService
  ) { }

  ngOnInit() {
    this.user = (this.edit) ? this.edit : this.user;
  }

  onSubmit() {
    // console.log(this.user);
    if (this.user.username) {
      this.user.password = this.crypto.md5(this.user.password);
      this.main.post('persanal', this.user).then((res: any) => {
        this.res.emit(res);
      });
    }
  }

}

export class User {
  username: string;
  password: string;
  pname: string = 'นาย';
  fname: string;
  lname: string;
  position: string;
}