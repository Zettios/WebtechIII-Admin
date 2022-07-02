import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router: Router) { }

  logout(): void {
    this.router.navigate(['/'])
      .then( result => {
        localStorage.removeItem('token');
      })
  }
}
