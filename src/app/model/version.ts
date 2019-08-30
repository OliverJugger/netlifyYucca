import {Correction} from './correction';

export class Version {
  id: number;
  libelle: string;
  etat: string;
  utilisateurCreation: string;
  utilisateurModification: string;
  dateCreation: Date;
  dateModification: Date;
  corrections: Correction[];

  constructor(public idVal?: number, public libelleVal?: string,
              public utilisateurCreationVal?: string, public utilisateurModificationVal?: string,
              public dateCreationVal?: Date, public dateModificationVal?: Date, public correctionsVal?: Correction[]) {
    this.id = idVal;
    this.libelle = libelleVal;
    this.dateCreation = dateCreationVal;
    this.dateModification = dateModificationVal;
    this.utilisateurCreation = utilisateurCreationVal;
    this.utilisateurModification = utilisateurModificationVal;
    this.corrections = correctionsVal;
  }
}
