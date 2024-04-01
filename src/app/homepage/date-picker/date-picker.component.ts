import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
  providers: [provideNativeDateAdapter()],
})
export class DatePickerComponent {
  minDate: Date;
  maxDate: Date;
  constructor() {
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().getDate()
    const currentMonth = new Date().getMonth()
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 0,currentMonth,currentDate);    
  }
}