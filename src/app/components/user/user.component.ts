import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../services/users/users.service";
import {User} from "../../interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() token:string = '';
  allUsers:Array<User> = [];

  constructor(private users:UsersService) { }

  ngOnInit(): void {
    this.userData();
  }

  userData() {
    if (this.token !== null) {
      this.users.getUsers(this.token)
        .subscribe(data => {
          console.log(data);
          this.allUsers = data;
        });
    }
  }
}
