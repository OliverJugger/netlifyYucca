import { Component, OnInit } from '@angular/core';
import {Correction} from '../../model/correction';
import { correctionDefault } from 'src/app/model/mocks';

@Component({
  selector: 'app-correction',
  templateUrl: './correction.component.html',
  styleUrls: ['./correction.component.css']
})
export class CorrectionComponent implements OnInit {

  correctionFormInput = null;
  correctionFormIsOpen = null;
  spinner = true;
  selectedCorrection: Correction;
  ajouter = true;

  updateMatTable = false;

  constructor() { }

  ngOnInit() {
  }

  onUpdate(event) {
    this.selectedCorrection = null;
    this.spinner = true;
    this.updateMatTable = true;
  }

  onLoaded(event) {
    this.spinner = false;
  }

  onCancel(event) {
    this.correctionFormIsOpen = null;
    // on reset les champs
    console.log ('defaut :' + correctionDefault.probleme);
    this.correctionFormInput = correctionDefault;
    console.log ('reset :' + this.correctionFormInput.probleme);
    this.ajouter = true;
  }

  onSelectedCorrection(correction) {
    this.correctionFormInput = correction;
    this.updateMatTable = false;
    this.correctionFormIsOpen = true;
    this.ajouter = false;
  }

}
