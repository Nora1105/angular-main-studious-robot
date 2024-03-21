import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Def404Component } from './def404/def404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DataTablesModule } from 'angular-datatables';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

import { DialogModule } from 'primeng/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPermissionsModule } from 'ngx-permissions';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MatStepperModule } from '@angular/material/stepper';
import { DropdownModule } from 'primeng/dropdown';








@NgModule({
  declarations: [
    AppComponent,
    Def404Component,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgbDropdownModule, 
    NgbNavModule,
    RxReactiveFormsModule,
    MatTableModule,
    HttpClientModule

    ,MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSort,
    MatPaginator,
    MatSortModule,
    DataTablesModule,
    TableModule,
    ButtonModule,
    DialogModule,

    MatInputModule,
    MatButtonModule,
    MatDialogModule,


    NgxPermissionsModule.forRoot(),

   ConfirmPopupModule,
   ToastModule,

   MatStepperModule,
    FormsModule,

    DropdownModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
