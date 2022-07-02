import { Component, OnInit } from '@angular/core';
import {LogoutService} from "../../services/logout/logout.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logout:LogoutService) { }

  ngOnInit(): void {
  }

  logoutUser(): void {
    this.logout.logout();
  }
}
