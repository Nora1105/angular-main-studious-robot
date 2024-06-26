import { Component } from '@angular/core';
import Chart, { scales } from 'chart.js/auto';
import axios from 'axios'

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrl: './chart-js.component.css'
})
export class ChartJsComponent {
  public chartdisp: any;
  // configurations
  private configChart_Bar: any;
  private configChart_Line: any;
  private configChart_Pie: any;
  private configChart_ScatterPlot: any;
  private configChart_Doughnut: any;
  private configChart_Radar: any;
  private configChart_PolarArea: any;
  private configChart_Bubble: any;

  private ctx: any;
  private chartData: any;
  // changeGraph(chartType: any) {
  //   this.chartdisp.destroy();
  //   if (chartType === "bar") {
  //     this.chartdisp = new Chart(this.ctx, this.configChart_Bar);
  //     this.configChart_Bar.type = chartType;
  //   }
  //   if(chartType==="line"){
  //     this.chartdisp = new Chart(this.ctx, this.configChart_Line);
  //     this.configChart_Line.type = chartType;
  //   }
  //   if(chartType==="pie"){
  //     this.chartdisp = new Chart(this.ctx, this.configChart_Pie);
  //     this.configChart_Pie.type = chartType;
  //   }
  //   if(chartType==="scatter"){
  //     this.chartdisp = new Chart(this.ctx, this.configChart_ScatterPlot);
  //     this.configChart_ScatterPlot.type = chartType;
  //   }
  //   if(chartType==="doughnut"){
  //     this.chartdisp = new Chart(this.ctx, this.configChart_Doughnut);
  //     this.configChart_Doughnut.type = chartType;
  //   }
  //   if(chartType==="radar"){
  //     this.chartdisp = new Chart(this.ctx, this.configChart_Radar);
  //     this.configChart_Radar.type = chartType;
  //   }
  //   if(chartType==="polarArea"){
  //     this.chartdisp = new Chart(this.ctx, this.configChart_PolarArea);
  //     this.configChart_PolarArea.type = chartType;
  //   }
  //   if(chartType==="bubble"){
  //     this.chartdisp = new Chart(this.ctx, this.configChart_Bubble);
  //     this.configChart_Bubble.type = chartType;
  //   }
  // }
  changeGraph(chartType: any) {
    this.chartdisp.destroy();
    switch (chartType) {
      case "bar":
        this.chartdisp = new Chart(this.ctx, this.configChart_Bar);
        this.configChart_Bar.type = chartType;
        break;
      case "line":
        this.chartdisp = new Chart(this.ctx, this.configChart_Line);
        this.configChart_Line.type = chartType;
        break;
      case "pie":
        this.chartdisp = new Chart(this.ctx, this.configChart_Pie);
        this.configChart_Pie.type = chartType;
        break;
      case "scatter":
        this.chartdisp = new Chart(this.ctx, this.configChart_ScatterPlot);
        this.configChart_ScatterPlot.type = chartType;
        break;
      case "doughnut":
        this.chartdisp = new Chart(this.ctx, this.configChart_Doughnut);
        this.configChart_Doughnut.type = chartType;
        break;
      case "radar":
        this.chartdisp = new Chart(this.ctx, this.configChart_Radar);
        this.configChart_Radar.type = chartType;
        break;
      case "polarArea":
        this.chartdisp = new Chart(this.ctx, this.configChart_PolarArea);
        this.configChart_PolarArea.type = chartType;
        break;
      case "bubble":
        this.chartdisp = new Chart(this.ctx, this.configChart_Bubble);
        this.configChart_Bubble.type = chartType;
        break;
      default:
        this.chartdisp = "Wrong Button clicked!!";
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((response: { data: any; }) => {
        const data = response.data.data;
        console.warn(data);
        const labels = data.map((item: { [x: string]: any; }) => item["Year"]);
        const populations = data.map((item: { [x: string]: any; }) => item["Population"]);
        this.createChart(labels, populations);
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
      });
  }

  createChart(labels: string[], populations: number[]): void {
    this.ctx = document.getElementById('MyChart') as HTMLCanvasElement;
    this.chartData = {
      labels: labels,
      datasets: [{
        label: 'Population',
        data: populations,
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 3
      }]
    };
    this.configChart_Bar = {
      type: 'bar',
      data: this.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            beginAt: 3000000
          },
        },
      }
    }
    this.configChart_Line = {
      type: 'line',
      data: this.chartData,
      options: {
        responsive: true,
        // AspectRatio:3,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            beginAt: 3000000
          },
        },
      }
    }
    this.configChart_Pie = {
      type: 'pie',
      data: this.chartData,
      options: {
        responsive: true,
        // AspectRatio:3,
        maintainAspectRatio: false,
        scales: {},
        // scales:false
      }
    }
    this.configChart_ScatterPlot = {
      type: 'scatter',
      data: this.chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            beginAt: 3000000
          },
        },
      }
    },
      this.configChart_Doughnut = {
        type: 'doughnut',
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {},
        }
      },
      this.configChart_Radar = {
        type: 'radar',
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {},
        }
      },
      this.configChart_PolarArea = {
        type: 'polarArea',
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {},
        }
      },
      this.configChart_Bubble = {
        type: 'bubble',
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              beginAt: 3000000
            },
          },
        }
      }
    this.chartdisp = new Chart(this.ctx, this.configChart_Bar);
  }
}