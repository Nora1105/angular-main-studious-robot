import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogbox2',
  templateUrl: './dialogbox2.component.html',
  styleUrl: './dialogbox2.component.css'
})
export class Dialogbox2Component {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
