import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApexAxisChartSeries, ApexDataLabels, ApexFill, ApexGrid, ApexMarkers, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type Chart1Options = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

export type Chart2Options = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  chart1Options: Partial<Chart1Options>;
  chart2Options: Partial<Chart2Options>;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor() { }

  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    this.chart1Options = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 500,
        type: "pie"
      },
      labels: ["Hà Nội", "Hồ Chí Minh", "Hải Phòng", "Cần Thơ", "Đà Nẵng"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.chart2Options = {
      series: [
        {
          name: "Lượt scan",
          data: [80, 100, 250, 150, 200, 350, 150]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        curve: "straight",
        colors: ['#ACACAC']
      },

      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "18/04",
          "19/04",
          "20/04",
          "21/04",
          "22/04",
          "23/04",
          "24/04",
        ]
      },
      markers: {
        size: 6,
        hover: {
          size: 10
        },
        colors: ['#1921FA']
      },
    };


  }

}
