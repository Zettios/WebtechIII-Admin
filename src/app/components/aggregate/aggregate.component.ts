import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AggregateService} from "../../services/aggregate/aggregate.service";
import {Api} from "../../interface";

@Component({
  selector: 'app-aggregate',
  templateUrl: './aggregate.component.html',
  styleUrls: ['./aggregate.component.css']
})
export class AggregateComponent implements OnInit {
  @Input() token = '';
  amountOfGames = 0;
  amountOfPlayers = 0;
  data:Array<any> = [];

  constructor(private aggregate:AggregateService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.aggregateData();
  }

  aggregateData() {
    if (this.token !== null) {
      this.aggregate.aggregate(this.token)
        .subscribe(data => {
          this.amountOfGames = data[0].aantal_spellen;
          this.amountOfPlayers = data[1].aantal_spelers;

          let newData:Array<any> = []

          data[2].forEach((x: Api) => {
            if (x.api === "") {
              newData.push(["empty", x.aantal])
            } else {
              newData.push([x.api, x.aantal])
            }
          });
          this.data = newData;
        });
    }
  }
}
