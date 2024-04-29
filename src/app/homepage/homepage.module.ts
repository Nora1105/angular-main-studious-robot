import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { BlueHeaderComponent } from './blue-header/blue-header.component';
import { ClientListComponent } from './client-list/client-list.component';
import { FooterDashboardComponent } from './footer-dashboard/footer-dashboard.component';
import { NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DataTablesModule } from 'angular-datatables';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { UserpageComponent } from './userpage/userpage.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ProfileComponent } from './profile/profile.component';
import { CurrentLocationComponent } from './current-location/current-location.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { PopupMapComponent } from './popup-map/popup-map.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { DropCountryComponent } from './drop-country/drop-country.component';
import { DropdownModule } from 'primeng/dropdown';
import { MatSelectModule } from '@angular/material/select';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { ExportCsvComponent } from './export-csv/export-csv.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { QueryPramMergeComponent } from './query-params/query-pram-merge/query-pram-merge.component';
import { QueryParamsAccessComponent } from './query-params/query-params-access/query-params-access.component';
@NgModule({
  declarations: [
    BlueHeaderComponent,
    ClientListComponent,
    FooterDashboardComponent,
    UserpageComponent,
    ProfileComponent,
    CurrentLocationComponent,
    GoogleMapsComponent,
    PopupMapComponent,
    StepperFormComponent,
    DropCountryComponent,
    FormEditorComponent,
    DatePickerComponent,
    ChartJsComponent,
    ExportCsvComponent,
    QueryParamsComponent,
    QueryPramMergeComponent,
    QueryParamsAccessComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgbDropdownModule, 
    NgbNavModule,
    RxReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
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
    ConfirmPopupModule,
    ToastModule,
    MatStepperModule,
    FormsModule,
    NgxPermissionsModule.forChild(),
    DropdownModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
})
export class HomepageModule { }