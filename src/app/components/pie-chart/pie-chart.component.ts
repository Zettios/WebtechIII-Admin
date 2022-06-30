import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { BaseChartDirective } from "ng2-charts";
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import {GoogleChartComponent, GoogleChartInterface, GoogleChartType} from "ng2-google-charts";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() data:Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('data')) {
      if (changes['data'].currentValue !== changes['data'].previousValue) {
        changes['data'].currentValue.forEach((el:Array<any>) => {
          console.log(el)
          this.pieChart.dataTable.push(el);
        })
        let ccComponent = this.pieChart.component!;
        //let ccWrapper = ccComponent.wrapper;
        ccComponent.draw();
      }
    }
  }

  // =========================================
  // =============== Pie chart ===============
  // =========================================
  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [
      ['Api', 'Aantal'],
    ],
    options: {
      responsive: true,
      allowHtml: true,
      height: "100%",
      width: "50%",
      chartArea: {
        height: "80%",
        width: "80%",
      }
    },
  };
}
