import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../../services/data/data.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Output() new_hobby = new EventEmitter<string>;
  data: Object[] = [];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  add_hobby(e:string):void {
    this.new_hobby.emit(e);
  }

  load_data():void {
    this.dataService.get_users()
      .subscribe( data => {
        //console.log(data)
        this.data = data;
      });
  }
}
