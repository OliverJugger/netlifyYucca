import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrectionRoutingModule } from './correction-routing.module';
import { CorrectionListComponent } from './correction/correction-list/correction-list.component';
import {MatSnackBarModule, MatSortModule} from "@angular/material";
import { MatTableModule } from "@angular/material";
import { CorrectionFormComponent } from './correction/correction-form/correction-form.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginatorIntl} from '@angular/material';
import {getFrenchPaginatorIntl} from '../traduction/french-paginator-intl';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CorrectionComponent } from './correction/correction.component';

@NgModule({
  declarations: [CorrectionListComponent, CorrectionFormComponent, CorrectionComponent],
  imports: [
    CommonModule,
    CorrectionRoutingModule,
  //Material
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [
    { provide : MatPaginatorIntl, useValue: getFrenchPaginatorIntl()}
  ],
  exports : [
    CorrectionListComponent
  ]
})
export class CorrectionModule { }
