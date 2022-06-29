import {Component, Input, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-api-chart',
  templateUrl: './api-chart.component.html',
  styleUrls: ['./api-chart.component.css']
})
export class ApiChartComponent implements OnInit {
  @Input() apis:Array<any> = [];

  data:Array<any> = [
    ['Test', ''],
    ['Dog', 2],
    ['Cat', 3],
    ['Lorem', 4],
  ]
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.apis = changes['apis']['currentValue'];
    // console.log("Api:");
    // console.log(this.apis);
    // // console.log("Data:");
    // // console.log(this.data);
    // this.pieChart.dataTable = this.apis;
    let ccComponent = this.pieChart.component!;
    let ccWrapper = ccComponent.wrapper;

    //force a redraw
    ccComponent.draw();
  }

  ngOnInit(): void { }

  onResize(e:any): void { }

  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: this.apis,
    //firstRowIsData: true,
    options: {
      height: "100%",
      width: "100%",
      chartArea: {
        height: "100%",
        width: "100%",
      },
      legend: {
        alignment: "center"
      }
    },
  };
}
