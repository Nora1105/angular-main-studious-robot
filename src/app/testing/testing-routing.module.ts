import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SandBoxComponent } from './sand-box/sand-box.component';
import { Sandbox2Component } from './sandbox2/sandbox2.component';



const routes: Routes = [
  {path:'sandbox', component:SandBoxComponent},
  {path:'sandboxtest', component:Sandbox2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
