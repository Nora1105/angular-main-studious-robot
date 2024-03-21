import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPermissionRoutingModule } from './ngx-permission-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    NgxPermissionRoutingModule,
    NgxPermissionsModule.forChild()
  ]
})
export class NgxPermissionModule { }
