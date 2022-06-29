import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  new_hobby:string = 'Demonstratie';

  add_hobby(e:string) {
    console.log(e);
    this.new_hobby = e;
  }
}
