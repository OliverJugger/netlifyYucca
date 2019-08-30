import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from '../charts/pie-chart/pie-chart.component';
import { BarChartComponent } from '../charts/bar-chart/bar-chart.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {LineChartComponent} from '../charts/line-chart/line-chart.component';
import {AccueilRoutingModule} from './accueil-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDividerModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AccueilComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    //Material
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,

    // NG CHARTS
    ChartsModule
  ]
})
export class AccueilModule { }
