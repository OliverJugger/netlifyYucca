import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CorrectionComponent} from "./correction/correction.component";

const routes: Routes = [
  {
    path:'',
    component: CorrectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrectionRoutingModule { }
