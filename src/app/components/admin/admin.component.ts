import {Component, ElementRef, Input, OnInit, SimpleChange, SimpleChanges, ViewChild} from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AggregateService } from "../../services/aggregate/aggregate.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title:string = "Overview";
  token:string = "";
  pressedButton:string = "apis";
  @ViewChild('apibutton') apiButton: ElementRef | undefined;
  @ViewChild('playersbutton') playersButton: ElementRef | undefined;

  constructor(private titleService:Title,
              private router: Router) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      // @ts-ignore
      this.token = localStorage.getItem('token');
    }
  }

  setActiveButton(button:string, e:Event) {
    this.pressedButton = button;
  }
}
