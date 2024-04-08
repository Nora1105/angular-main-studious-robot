import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandBoxComponent } from './sand-box/sand-box.component';
import { Sandbox2Component } from './sandbox2/sandbox2.component';
import { HighlightComponent } from './Directive/highlight/highlight.component';
import { DashtestComponent } from './dashtest/dashtest.component';
import { HomepageComponent } from './homepage/homepage.component';



const routes: Routes = [
  {
    path: 'testDash', component:DashtestComponent,
    children: [
      {path:'homepage',component:HomepageComponent},
      { path: 'sandbox', component: SandBoxComponent },
      { path: 'sandboxtest', component: Sandbox2Component },
      { path: 'directivetest', component: HighlightComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
