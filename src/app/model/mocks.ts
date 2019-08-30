import {Correction} from './correction';
import {Programme} from './programme';
import {SousDomaine} from "./sousDomaine";
import {Repertoire} from "./repertoire";
import {Domaine} from "./domaine";
import { Auteur } from './auteur';
import { Version } from './version';


export const repertoireDefault: Repertoire = {
  id: 14,
  chemin: 'paye/4gl',
  raccourciUnix: '$P4GL     ',
  visible: '1',
};

export const sousDomaineDefault: SousDomaine = {
    id: 1,
    libelleCourt: 'REM',
    libelleLong: 'Remuneration principale',
    visible: '1'
};

export const domaineDefault: Domaine = {
  id: 1,
  libelleCourt: 'PAYE      ',
  libelleLong: 'Application Paye                                            ',
  visible: '1'
};

export const auteurDefault: Auteur = {
  id : 32,
  nom : "Christophe MECKER",
  alias : "CM",
  actif : "O"
}

export const programmeDefault: Programme = {
  dateCreation: null,
  dateModification: null,
  id: null,
  nom: '',
  commentaire: '',
  temporaire: 'N',
  domaine: domaineDefault,
  repertoire: repertoireDefault,
  sousDomaine: sousDomaineDefault,
  utilisateurCreation: 'YUCCA-FRONT',
  utilisateurModification: 'YUCCA-FRONT'
};

export const correctionDefault: Correction = {
  id : null,
  probleme : "",
  solution : "",
  etat : 'O',
  auteur : null,
  domaine : null,
  titre : "",
  commentaire : "",
  dateCreation: new Date('2019-05-03')
};

export const correctionsDefault: Correction[] = [correctionDefault];

export const versionDefault: Version = {
  utilisateurCreation: 'YUCCA-FRONT',
  utilisateurModification: 'YUCCA-FRONT',
  dateCreation: null,
  dateModification: null,
  id: null,
  libelle: '',
  etat: '',
  corrections: correctionsDefault
};
