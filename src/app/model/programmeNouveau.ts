export class ProgrammeNouveau {
  nom: string;
  commentaire: string;
  temporaire: string;
  idRepertoire: number;
  idDomaine: number;
  idSousDomaine: number;

  constructor(public nomVal?: string, public commentaireVal?: string,
              public temporaireVal?: string, public idDomaineVal?: number, public idRepertoireVal?: number,
              public idSousDomaineVal?: number) {
   this.nom = nomVal;
   this.commentaire = commentaireVal;
   this.temporaire = temporaireVal;
   this.idRepertoire = idRepertoireVal;
   this.idDomaine = idDomaineVal;
   this.idSousDomaine = idSousDomaineVal;
  }
}
