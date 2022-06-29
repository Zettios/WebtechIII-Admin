import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  token:string|null = "";

  constructor() {

  }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.token = localStorage.getItem('token');
    }
  }
}
