import { Repertoire} from './repertoire';
import { Domaine } from './domaine';
import { SousDomaine } from './sousDomaine';

export class Programme {
  dateCreation: number;
  dateModification: number;
  utilisateurCreation: string;
  utilisateurModification: string;
  id: number;
  nom: string;
  commentaire: string;
  temporaire: string;
  repertoire: Repertoire;
  domaine: Domaine;
  sousDomaine: SousDomaine;

  constructor(public dateCreationVal?: number, public dateModificationVal?: number, public idVal?: number,
              public nomVal?: string, public commentaireVal?: string, public temporaireVal?: string,
              public domaineVal?: Domaine, public repertoireVal?: Repertoire, public sousDomaineVal?: SousDomaine,
              public utilisateurCreationVal?: string, public utilisateurModificationVal?: string) {
   this.dateCreation = dateCreationVal;
   this.dateModification = dateModificationVal;
   this.utilisateurCreation = utilisateurCreationVal;
   this.utilisateurModification = utilisateurModificationVal;
   this.id = idVal;
   this.nom = nomVal;
   this.commentaire = commentaireVal;
   this.temporaire = temporaireVal;
   this.repertoire = repertoireVal;
   this.domaine = domaineVal;
   this.sousDomaine = sousDomaineVal;
  }
}
