import { Component } from '@angular/core';

@Component({
  selector: 'app-export-csv',
  templateUrl: './export-csv.component.html',
  styleUrl: './export-csv.component.css'
})
export class ExportCsvComponent {
  constructor() { }
  downloadCSV(): void {
    const data = [
      ['Name', 'Age', 'Email'],
      ['John Doe', 30, 'john@example.com'],
      ['Jane Smith', 25, 'jane@example.com']
    ];
    const csvContent = "data:text/csv;charset=utf-8," + data.map(row => row.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
  }
}