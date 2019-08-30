import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProgrammeListComponent} from './programme/programme-list/programme-list.component';
import { ProgrammeFormComponent } from './programme/programme-form/programme-form.component';
import { ProgrammeComponent } from './programme/programme.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProgrammeListComponent
  },
  {
    path: 'ajouter',
    component: ProgrammeFormComponent
  },
  {
    path : '',
    component: ProgrammeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammeRoutingModule { }
