import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
  providers: [provideNativeDateAdapter()],
})
export class DatePickerComponent {
  public minDateF: Date;
  public maxDateF: Date;

  public minDateS: Date;
  public maxDateS: Date;

  constructor() {
    // 1st datepicker
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    this.minDateF = new Date(currentYear - 0, currentMonth - 2, currentDate);
    this.maxDateF = new Date(currentYear + 0, currentMonth, currentDate);

    // 2nd datepicker
    this.minDateS = this.maxDateF;
    this.maxDateS = new Date(currentYear + 0, currentMonth + 2, currentDate);
  }
}