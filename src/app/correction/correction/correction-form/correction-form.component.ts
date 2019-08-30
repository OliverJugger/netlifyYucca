import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Correction } from 'src/app/model/correction';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { DomaineService } from 'src/app/domaine/domaine.service';
import { Domaine } from 'src/app/model/domaine';
import { AuteurService } from 'src/app/auteur/auteur.service';
import { Auteur } from 'src/app/model/auteur';
import { CorrectionService } from '../../correction.service';
import { correctionDefault } from 'src/app/model/mocks';
import { ThemeService } from 'ng2-charts';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material";

@Component({
  selector: 'app-correction-form',
  templateUrl: './correction-form.component.html',
  styleUrls: ['./correction-form.component.css']
})
export class CorrectionFormComponent implements OnInit, OnChanges {

  @Output() updateView = new EventEmitter();
  @Output() annuler = new EventEmitter();
  @Input() open;
  @Input() correctionInput: Correction;


  public domaines: Domaine[] = [];
  public auteurs: Auteur[] = [];

  constructor(private domaineService: DomaineService, private auteurService: AuteurService,
              private correctionService: CorrectionService, public snackBar: MatSnackBar) {
    this.domaineService.getListeDomainesVisibles().subscribe(
      result => {
        this.domaines = result;
      }, error => console.error(error));

    this.auteurService.getListeAuteursActifs().subscribe(
      result => {
        this.auteurs = result;
      }, error => console.error(error));
  }

  ngOnInit() {
      this.correctionService.correctionObs.subscribe(data =>
        this.correctionInput = data
      )
      this.correctionService.openCorrObs.subscribe(data =>
        this.open = data
      );
  }

  ngOnChanges() {
    console.log( "change " + this.correctionInput.id);
  }

  ajouterUneCorrection() {
    console.log(this.correctionInput);
    this.correctionService.addCorrection(this.correctionInput).subscribe(
      created => {
        this.message('Votre correction a été enregistrée avec succès.');
        this.updateView.emit('success');
      },
      error =>  {
        this.message('Erreur pendant enregistrement.');
      }
    );
  }

  annulerAjout() {
    this.annuler.emit('annuler');
  }

  onSubmit() {

  }

  message(message) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 5000;
    this.snackBar.open(message, 'Fermer', config);
  }

  compareObjectsAuteur(o1: any, o2: any): boolean {
    if (o1 == undefined || o2 == undefined)
      return false
    return o1.alias === o2.alias;
  }

  compareObjectsDomain(o1: any, o2: any): boolean {
    if (o1 == undefined || o2 == undefined)
      return false
    return o1.libelleCourt === o2.libelleCourt;
  }

}
