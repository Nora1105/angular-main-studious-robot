import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlueHeaderComponent } from './blue-header/blue-header.component';
import { ClientListComponent } from './client-list/client-list.component';
import { FooterDashboardComponent } from './footer-dashboard/footer-dashboard.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ProfileComponent } from './profile/profile.component';
import { CurrentLocationComponent } from './current-location/current-location.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { PopupMapComponent } from './popup-map/popup-map.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { DropCountryComponent } from './drop-country/drop-country.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { ExportCsvComponent } from './export-csv/export-csv.component';
import { QueryParamsComponent } from './query-params/query-params.component';
import { QueryPramMergeComponent } from './query-params/query-pram-merge/query-pram-merge.component';
import { QueryParamsAccessComponent } from './query-params/query-params-access/query-params-access.component';
const routes: Routes = [
  {path:'hello',component:BlueHeaderComponent,
  children: [
    {path:'table',component:ClientListComponent},
    {path:'footer',component:FooterDashboardComponent},
    {path:'home',component:UserpageComponent},
    {path:'profile', component:ProfileComponent},
    {path:'maplocation',component:GoogleMapsComponent},
    {path:'location',component:CurrentLocationComponent},
    {path:'poplocation',component:PopupMapComponent},
    {path:'stepper',component:StepperFormComponent},
    {path:'country',component:DropCountryComponent},
    {path:'form-editor', component:FormEditorComponent},
    {path:'date-picker',component:DatePickerComponent},
    {path:'chart',component:ChartJsComponent},
    {path:'export-file',component:ExportCsvComponent},
    {path:'query-params',component:QueryParamsComponent},
    {path:'query-params-merge', component:QueryPramMergeComponent},
    {path:'query-params-access', component:QueryParamsAccessComponent}
  ]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }