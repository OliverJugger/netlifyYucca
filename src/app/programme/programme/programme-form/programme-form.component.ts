import {Component, Input, Output, EventEmitter, OnChanges, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { RepertoireService } from '../../../repertoire/repertoire.service';
import { DomaineService} from '../../../domaine/domaine.service';
import { SousDomaineService} from '../../../sous-domaine/sous-domaine.service';
import {Programme} from '../../../model/programme';
import {ProgrammeNouveau} from '../../../model/programmeNouveau';
import {Repertoire} from '../../../model/repertoire';
import {Domaine} from '../../../model/domaine';
import {SousDomaine} from '../../../model/sousDomaine';
import {ProgrammeService} from '../../programme.service';
import { programmeDefault } from '../../../model/mocks';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'app-programme-form',
  templateUrl: './programme-form.component.html',
  styleUrls: ['./programme-form.component.css']
})
export class ProgrammeFormComponent implements OnInit, OnChanges {

  @Input() programmeInput: Programme = programmeDefault;
  // Par défaut : ajouter, dans le cas ou on appelle le component tout seul
  @Input () actionInput = 'Ajouter';
  @Output() updateView = new EventEmitter();
  @Output() annuler = new EventEmitter();

  nomFormControl: FormControl;
  temporaireFormControl: FormControl;
  commentaireFormControl: FormControl;
  repertoireFormControl: FormControl;

  labelPosition = 'before';

  public repertoires: Repertoire[] = [];
  public domaines: Domaine[] = [];
  public sousDomaines: SousDomaine[] = [];

  constructor(private repertoireService: RepertoireService,
              private domaineService: DomaineService,
              private sousDomaineService: SousDomaineService,
              private programmeService: ProgrammeService,
              public snackBar: MatSnackBar) {

      this.repertoireService.getListeRepertoiresVisibles().subscribe(
        result => {
          this.repertoires = result;
        }, error => console.error(error));

      this.domaineService.getListeDomainesVisibles().subscribe(
        result => {
          this.domaines = result;
        }, error => console.error(error));

      this.sousDomaineService.getListeSousDomainesVisibles().subscribe(
        result => {
          this.sousDomaines = result;
        }, error => console.error(error));
  }

  ngOnInit() {
    this.initForm();
    if (this.programmeInput !== programmeDefault) {
      this.actionInput = 'Modifier';
    }
  }

  ngOnChanges() {
    this.initForm();
    if (this.programmeInput !== programmeDefault) {
      this.actionInput = 'Modifier';
    }
  }

  initForm() {
    if (this.programmeInput) {

      this.nomFormControl = new FormControl(this.programmeInput.nom, [
        Validators.required,
        Validators.maxLength(15)
      ]);
      this.temporaireFormControl = new FormControl(this.programmeInput.temporaire === 'N' ? false : true);
      this.commentaireFormControl = new FormControl(this.programmeInput.commentaire, [
        Validators.maxLength(1000)
      ]);
      this.repertoireFormControl = new FormControl(this.programmeInput.repertoire);
      this.repertoireFormControl.setValue(this.programmeInput.repertoire.chemin);
    }
  }

  onSubmitSave() {
    if (this.temporaireFormControl.value === true) {
      this.programmeInput.temporaire = 'O';
    } else {
      this.programmeInput.temporaire = 'N';
    }

    this.programmeInput.nom = this.nomFormControl.value;
    this.programmeInput.commentaire = this.commentaireFormControl.value;

    this.programmeInput.repertoire = this.repertoires.filter(
      rep => rep.chemin === this.programmeInput.repertoire.chemin)[0];
    this.programmeInput.domaine = this.domaines.filter(
      dom => dom.libelleLong === this.programmeInput.domaine.libelleLong)[0];
    this.programmeInput.sousDomaine = this.sousDomaines.filter(
      sousDom => sousDom.libelleLong === this.programmeInput.sousDomaine.libelleLong)[0];

    console.log('programme envoye en back :');
    console.log(this.programmeInput);
    this.programmeService.addProgramme(this.programmeInput).subscribe(
      created => {
        this.message('Votre programme a été enregistré avec succès.');
        this.updateView.emit('success');
      },
      error =>  {
        this.message('Erreur pendant enregistrement.');
      }
    );
  }

  onSubmitRechercher() {
    if (this.temporaireFormControl.value === true) {
      this.programmeInput.temporaire = 'O';
    } else {
      this.programmeInput.temporaire = 'N';
    }

    this.programmeInput.nom = this.nomFormControl.value;
    this.programmeInput.commentaire = this.commentaireFormControl.value;

    this.programmeInput.repertoire = this.repertoires.filter(
      rep => rep.chemin === this.programmeInput.repertoire.chemin)[0];
    this.programmeInput.domaine = this.domaines.filter(
      dom => dom.libelleLong === this.programmeInput.domaine.libelleLong)[0];
    this.programmeInput.sousDomaine = this.sousDomaines.filter(
      sousDom => sousDom.libelleLong === this.programmeInput.sousDomaine.libelleLong)[0];

    this.programmeService.getProgrammes(this.programmeInput).subscribe(
      result => {
        console.log('resultat');
        console.log(result);
        this.message('Votre programme a été recherché avec succès.');
        this.updateView.emit('success');
      },
      error =>  {
        this.message('Erreur pendant enregistrement.');
      }
    );

  }

  message(message) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 5000;
    this.snackBar.open(message, 'Fermer', config);
  }

  cancel() {
    this.annuler.emit('cancel');
  }
}
