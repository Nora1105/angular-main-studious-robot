import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandBoxComponent } from './sand-box/sand-box.component';
import { Sandbox2Component } from './sandbox2/sandbox2.component';
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



const routes: Routes = [
  {
    path: 'testDash', component:DashtestComponent,
    children: [
      {path:'homepage',component:HomepageComponent},
      {path:'svg',component:SvgTemplateComponent},
      { path: 'sandbox', component: SandBoxComponent },
      { path: 'sandboxtest', component: Sandbox2Component },
      { path: 'directivetest', component: HighlightComponent },
      {path:'api-tests',component:ApiRequestsComponent},
      {path:'local-api', component:LocaldbComponent},
      {path:'query-tester', component:QueryParamTesterComponent},
      {path:'soundnode',component:SoundnodeWebComponent},
      {path:'soundnode-webapp',component:SoundnodePlayerComponent,
      children:[
        {path:'home',component:HomeComponent}
      ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
