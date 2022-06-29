import {Component, Input, OnInit} from '@angular/core';
import {Persoon} from "../../interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() added_hobby:string = '';

  p:Persoon = {'naam':'Enrico', 'leeftijd':25};
  hobbies:string[] = ['gamen', 'chatten', 'sterven']

  constructor() { }

  ngOnInit(): void {
  }

  del_hobby(e:string):void {
    this.hobbies.splice(this.hobbies.indexOf(e), 1);
  }
}
