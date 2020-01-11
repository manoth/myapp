import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conent',
  templateUrl: './conent.component.html',
  styleUrls: ['./conent.component.scss']
})
export class ConentComponent implements OnInit {

  constructor() {
    document.body.className = 'sidebar-mini skin-green';
  }

  ngOnInit() {
  }

}
