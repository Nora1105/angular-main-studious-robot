import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandBoxComponent } from './sand-box/sand-box.component';
import { Sandbox2Component } from './sandbox2/sandbox2.component';

import { TestingRoutingModule } from './testing-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgbModule, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DataTablesModule } from 'angular-datatables';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { LighterDirective } from './Directive/lighter.directive';
import { HighlightComponent } from './Directive/highlight/highlight.component';
import { DashtestComponent } from './dashtest/dashtest.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SvgTemplateComponent } from './svg-template/svg-template.component';
import { ApiRequestsComponent } from './api-requests/api-requests.component';
import { LocaldbComponent } from './localdb/localdb.component';
import { QueryParamTesterComponent } from './query-param-tester/query-param-tester.component';
import { SoundnodeWebComponent } from './soundnode-web/soundnode-web.component';
import { SoundnodePlayerComponent } from './soundnode-player/soundnode-player.component';
import { HomeComponent } from './soundnode-player/home/home.component';

@NgModule({
  declarations: [
    SandBoxComponent,
    Sandbox2Component,
    LighterDirective,
    HighlightComponent,
    DashtestComponent,
    HomepageComponent,
    SvgTemplateComponent,
    ApiRequestsComponent,
    LocaldbComponent,
    QueryParamTesterComponent,
    SoundnodeWebComponent,
    SoundnodePlayerComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,


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
  ]
})
export class TestingModule { }
