import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import axios from 'axios'

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrl: './chart-js.component.css'
})
export class ChartJsComponent {
  constructor() { }

  // ngOnInit(): void {
  //   this.createChart();
  // }

  // public chart: any;

  // createChart() {
  //   this.chart = new Chart("MyChart", {
  //     // type: 'pie',
  //     type: 'doughnut',
  //     // type: 'radar',

  //     data: {
  //       labels: [
  //         'Wheat',
  //         'Maize',
  //         'Rice',
  //         'Sugarcane',
  //         'Cotton'
  //       ],
  //       datasets: [{
  //         label: 'Area and Production of Important Crops (2020-21)',
  //         data: [9168.2, 1417.8, 3335.1, 1165.0, 2078.9],
  //         backgroundColor: [
  //           'rgb(255, 99, 132)',
  //           'rgb(54, 162, 235)',
  //           'rgb(255, 205, 86)',
  //           'rgb(75, 192, 192)',
  //           'rgb(153, 102, 255)'
  //         ],
  //         hoverOffset: 4
  //       }]
  //     },
  //     options: {
  //       aspectRatio: 2.5,
  //       plugins: {
  //         title: {
  //           display: true,
  //           text: 'Area and Production of Important Crops (2020-21)',
  //           font: {
  //             size: 24,
  //             weight: 'bold',
  //             family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
  //           },
  //           padding: {
  //             top: 10,
  //             bottom: 30
  //           }
  //         },
  //         legend: {  
  //           display: true,
  //           labels: {
  //             font: {
  //               size: 14,
  //               family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
  //             }
  //           }
  //         }
  //       }
  //     }
  //   });
  // }

  ngOnInit(): void {
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((response: { data: any; }) => {
        const data = response.data.data;

        // const test = response.data.source.annotations["source_name"]
        // console.warn(test);
        
        const labels = data.map((item: { [x: string]: any; }) => item["Year"]);
        const populations = data.map((item: { [x: string]: any; }) => item["Population"]);
        this.createChart(labels, populations);
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
      });
  }
 
  createChart(labels: string[], populations: number[]): void {
    const ctx = document.getElementById('MyChart') as HTMLCanvasElement;
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Population',
          data: populations,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // scales: {
        //   y: {
        //     beginAtZero: true
        //   }
        // }
      }
    });
  }
}