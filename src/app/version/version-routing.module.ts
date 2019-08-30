import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VersionComponent} from './version/version.component';
import {VersionListComponent} from './version/version-list/version-list.component';
import {VersionAjouterComponent} from './version/version-ajouter/version-ajouter.component';

const routes: Routes = [
  {
    path: '',
    component: VersionComponent
  },
  {
    path: 'list',
    component: VersionListComponent
  },
  {
    path: 'ajouter',
    component: VersionAjouterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VersionRoutingModule { }
