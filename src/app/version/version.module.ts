import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VersionRoutingModule } from './version-routing.module';
import { VersionListComponent } from './version/version-list/version-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import {MatButtonModule, MatDividerModule, MatSnackBarModule, MatTabsModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginatorIntl} from '@angular/material';
import {getFrenchPaginatorIntl} from '../traduction/french-paginator-intl';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material';
import { MatCardModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CorrectionModule} from '../correction/correction.module';
import {MatStepperModule} from '@angular/material/stepper';
import { VersionComponent } from './version/version.component';
import { VersionAjouterComponent } from './version/version-ajouter/version-ajouter.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [VersionListComponent, VersionComponent, VersionAjouterComponent],
  imports: [
    CommonModule,
    VersionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatTabsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDividerModule,
    SharedModule,

    CorrectionModule
  ],
  providers: [
    { provide : MatPaginatorIntl, useValue: getFrenchPaginatorIntl()}
  ]
})
export class VersionModule { }
