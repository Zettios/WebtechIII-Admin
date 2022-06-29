import {Component, Input, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AggregateService } from "../../services/aggregate.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title:string = "Overview";
  token:string|null = "";
  apiInfo: Array<any> = [['Test', ''], ['Poop', 2]];

  constructor(private titleService:Title,
              private aggregate:AggregateService,
              private router: Router) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') !== null) {
      this.token = localStorage.getItem('token');
    }
    this.aggregateData()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  aggregateData() {
    if (this.token !== null) {
      this.aggregate.aggregate(this.token)
        .subscribe(data => {
          //console.log(data[2]);
          data[2].forEach( (x: object) => {
            let jsonString = JSON.stringify(x);
            let json = JSON.parse(jsonString);
            let apiName:string = "";
            if (json['api'] === "") {
              apiName = "Empty";
            } else {
              apiName = json['api'];
            }
            let apiUsage:number = json['aantal'];
            let data = [apiName, apiUsage];

            this.apiInfo.push(data)
          });
        });
    }
  }
}
