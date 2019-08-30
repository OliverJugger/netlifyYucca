import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Version} from '../../../model/version';
import {Correction} from '../../../model/correction';
import {VersionService} from '../../version.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {versionDefault} from '../../../model/mocks';
//import {versionsDefault} from '../../../model/mocks';


@Component({
  selector: 'app-version-ajouter',
  templateUrl: './version-ajouter.component.html',
  styleUrls: ['./version-ajouter.component.css']
})
export class VersionAjouterComponent implements OnInit {

  // Mode Hors Connexion
  //versionsHorsConnexion: Version[] = versionsDefault;

  @Output() annuler = new EventEmitter();

  // Etat pour correction
  etat = 'T';

  versionInput: Version = versionDefault;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  libelleFormControl: FormControl;
  correctionsSelectedFormControl: FormControl;
  libelleFormControl2: FormControl;

  correctionsSelected: Correction [] = [];

  constructor(private versionService: VersionService, public snackBar: MatSnackBar, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.libelleFormControl = new FormControl(this.versionInput.libelle, [
      Validators.required,
      Validators.maxLength(15)
    ]);

    this.libelleFormControl2 = new FormControl(this.libelleFormControl.value, [
      Validators.required,
      Validators.maxLength(15)
    ]);

    this.correctionsSelectedFormControl = new FormControl('',  Validators.maxLength(15)
    );

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: this.correctionsSelectedFormControl
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: this.libelleFormControl
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: this.libelleFormControl2
    });
  }

  onSelectedCorrection(correction) {
      this.correctionsSelected.push(correction);
      console.log(this.correctionsSelected.length);
  }

  annulerAjout() {
    this.annuler.emit(true);
  }

  onSubmitSave() {
    this.versionInput.libelle = this.libelleFormControl.value;
    this.versionInput.corrections = this.correctionsSelected;

    console.log(this.versionInput);

    this.versionService.addVersion(this.versionInput).subscribe(
      created => {
        this.message('Votre version a été enregistrée avec succès.');
      },
      error =>  {
        this.message('Erreur pendant enregistrement.');
      }
    );
  }

  error() {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    // config.duration = 5000;
    this.snackBar.open('Une erreur est survenue pendant le chargement des données, veuillez réessayer ultérieurement.'
      , 'Fermer', config);
  }

  message(message) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 5000;
    this.snackBar.open(message, 'Fermer', config);
  }

}
