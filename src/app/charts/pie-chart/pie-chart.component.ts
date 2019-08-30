import {Component, OnInit, ViewChild} from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {CorrectionService} from '../../correction/correction.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['État', 'Corrigé'], ['État', 'Testé'], ['État', 'Ouvert']];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartRealDate: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public corrigees;
  public testees;
  public ouvertes;
  public fermees;

  constructor(correctionService: CorrectionService) {

    correctionService.getListeNombreCorrectionsEtat('C').subscribe(
      result => {
        this.corrigees = result;
      }, error => console.error(error));

    correctionService.getListeNombreCorrectionsEtat('T').subscribe(
      result => {
        this.testees = result;
      }, error => console.error(error));

    correctionService.getListeNombreCorrectionsEtat('O').subscribe(
      result => {
        this.ouvertes = result;
      }, error => console.error(error));

    correctionService.getListeNombreCorrectionsEtat('F').subscribe(
      result => {
        this.fermees = result;
        // asynchrone attention cest pourquoi je met le update
        this.update();
      }, error => console.error(error));

    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }

  ngOnchanges() {
  }

  update() {
    this.pieChartRealDate = [this.corrigees, this.testees, this.ouvertes];
    this.pieChartData = this.pieChartRealDate;
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
}
