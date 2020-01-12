import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { CryptoService } from 'src/app/services/crypto.service';
declare const $: any;

@Component({
  selector: 'app-persanal',
  templateUrl: './persanal.component.html',
  styleUrls: ['./persanal.component.scss']
})
export class PersanalComponent implements OnInit {

  public user = new User();
  public persanal: any;
  public edit: number = 0;
  public pname = [
    { name: 'นาย', value: 'นาย' },
    { name: 'น.ส.', value: 'น.ส.' },
    { name: 'นาง', value: 'นาง' },
  ];


  constructor(
    private main: MainService,
    private crypto: CryptoService
  ) { }

  ngOnInit() {
    this.getPersanal();
  }

  getPersanal() {
    this.main.get('persanal').then((res: any) => {
      if (res.ok) {
        this.persanal = res.data;
      } else {
        alert(res.err);
      }
    });
  }

  onAdd() {
    this.user = new User();
    this.edit = 0;
    $('#modal-add-edit').modal({ backdrop: 'static', keyboard: false });
  }

  onEdit(data: any) {
    this.user = data;
    this.edit = 1;
    $('#modal-add-edit').modal({ backdrop: 'static', keyboard: false });
  }

  onSubmit() {
    // console.log(this.user);
    if (this.user.username) {
      this.user.password = this.crypto.md5(this.user.password);
      this.main.post('persanal', this.user).then((res: any) => {
        if (res.ok) {
          alert(res.txt);
          this.getPersanal();
          $('#modal-add-edit').modal('hide');
        }
      });
    }
  }

  onDel(username: string) {
    if (confirm('คุณต้องการจะลบข้อมูลของ ' + username + ' ใช่หรือไม่ ?')) {
      this.main.post('persanal/del', { username }).then((res: any) => {
        if (res.ok) {
          alert(res.txt);
          this.getPersanal();
        }
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