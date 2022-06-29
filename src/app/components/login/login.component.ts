import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { catchError, of } from "rxjs";
import { Title } from "@angular/platform-browser";
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string = "Login";
  errorMsg: string = "";

  constructor(private titleService:Title, private loginService:LoginService, private location: Location,
              private router: Router) {
    this.titleService.setTitle("Login");
  }

  ngOnInit(): void {
  }

  login(username:string, password:string) {
    console.log(username);
    console.log(password);
    this.loginService.login(username, password)
      .pipe(
        catchError(error => {
          if (error['status']) {
            this.errorMsg = `Error: User not found or user is not an admin.`;
          }
          return of([]);
        })
      )
      .subscribe( data => {
        let token = data['token'];
        const parts = token.split('.');
        const decoded = LoginComponent.urlBase64Decode(parts[1]);
        if (!decoded) {
          throw new Error('Cannot decode the token');
        }
        let json = JSON.parse(decoded);
        if (json['roles'].some((x: string) => x === "ROLE_ADMIN")) {
          localStorage.setItem('token', token)
          this.router.navigate(['/admin'])
            .then( result => {
              console.log(result);
            })
        } else {
          this.errorMsg = `Error: User not found or user is not an admin.`;
        }
        return data;
      });
  }

  private static urlBase64Decode(str: string): string {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw 'Illegal base64url string!';
    }
    return decodeURIComponent((<any>window).escape(window.atob(output)));
  }
}
