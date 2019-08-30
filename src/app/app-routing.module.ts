import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'programme',
    loadChildren: './programme/programme.module#ProgrammeModule'
  },
  {
    path: 'correction',
    loadChildren: './correction/correction.module#CorrectionModule'
  },
  {
    path: 'version',
    loadChildren: './version/version.module#VersionModule'
  },
  {
    path: 'accueil',
    loadChildren: './accueil/accueil.module#AccueilModule'
  },
  {
    path : '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
