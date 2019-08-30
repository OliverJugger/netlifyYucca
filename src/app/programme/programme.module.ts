import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProgrammeRoutingModule } from './programme-routing.module';
import { ProgrammeListComponent } from './programme/programme-list/programme-list.component';
import { ProgrammeFormComponent } from './programme/programme-form/programme-form.component';

// Material
import {MatButtonModule, MatSnackBarModule, MatTabsModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginatorIntl} from '@angular/material';
import {getFrenchPaginatorIntl} from '../traduction/french-paginator-intl';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material';
import { MatCardModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SharedModule } from '../shared/shared.module';
import { ProgrammeComponent } from './programme/programme.component';

@NgModule({
  declarations: [
        ProgrammeListComponent,
        ProgrammeFormComponent,
        ProgrammeComponent
    ],
    imports: [
        CommonModule,
        ProgrammeRoutingModule,
        SharedModule,
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
        MatSnackBarModule
    ],
  providers: [
    { provide : MatPaginatorIntl, useValue: getFrenchPaginatorIntl()}
  ]
})
export class ProgrammeModule { }
