import { Component, OnInit, input } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-blue-header',
  templateUrl: './blue-header.component.html',
  styleUrl: './blue-header.component.css'
})
  export class BlueHeaderComponent implements OnInit{
  disp=false;
  dispContent(){
    this.disp=!this.disp;
  }

  constructor(private ngxPermissionsService:NgxPermissionsService){}

  ngOnInit(): void {
    this.ngxPermissionsService.loadPermissions(['DEVELOPER'])
  }




}
