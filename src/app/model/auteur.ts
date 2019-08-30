export class Auteur {
    id: number;
    nom: string;
    alias: string;
    actif: string;
  
    constructor(public idVal?: number, public nomVal?: string, public aliasVal?: string, public actifVal?: string) {
      this.id = idVal;
      this.nom = nomVal;
      this.alias = aliasVal;
      this.actif = actifVal;
    }
  }