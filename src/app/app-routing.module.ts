import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Def404Component } from './def404/def404.component';

const routes: Routes = [
  {path:'',redirectTo:'/auth/login', pathMatch:'full'},


  {path:'homepage', loadChildren:()=>import('./homepage/homepage.module').then(mod => mod.HomepageModule)},

  {path:'testing', loadChildren:()=>import('./testing/testing.module').then(m=>m.TestingModule)},

  {path:'auth', loadChildren:()=>import('./auth/auth.module').then(y=>y.AuthModule)},

  {path:'permission', loadChildren:()=>import('./ngx-permission/ngx-permission.module').then(z=>z.NgxPermissionModule)},

  {path:'**',component:Def404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }