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
    {path:'country',component:DropCountryComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
