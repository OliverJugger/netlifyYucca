import { Component, OnInit } from '@angular/core';
import {Programme} from '../../model/programme';
import {programmeDefault} from "../../model/mocks";

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {

  programmeFormInput = null;
  spinner = true;
  selectedProgramme: Programme;
  ajouter = true;

  updateMatTable = false;

  constructor() { }

  ngOnInit() {
  }

  onUpdate(event) {
    this.selectedProgramme = null;
    this.spinner = true;
    this.updateMatTable = true;
  }

  onLoaded(event) {
    this.spinner = false;
  }

  onCancel(event) {
    // Si programmeFormInput = null, la fenetre du formulaire se ferme
    this.programmeFormInput = null;
    this.ajouter = true;
  }

  onAjouterProgramme(programme) {
    this.programmeFormInput = programme;
    this.updateMatTable = false;
    this.ajouter = false;
  }

}
