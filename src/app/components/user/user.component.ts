import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {User} from "../../interface";
import {catchError, throwError} from "rxjs";
import {LogoutService} from "../../services/logout/logout.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() token:string = '';
  allUsers:Array<User> = [];

  constructor(private users:UsersService,
              private logout: LogoutService) { }

  ngOnInit(): void {
    this.userData();
  }

  userData() {
    if (this.token !== null) {
      this.users.getUsers(this.token)
        .pipe(
          catchError(error => {
            if (error.status) {
              this.logout.logout();
            }
            return throwError(error);
          })
        )
        .subscribe(data => {
          this.allUsers = data;
        });
    }
  }
}
