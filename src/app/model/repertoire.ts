export class Repertoire {
  id: number;
  chemin: string;
  raccourciUnix: string;
  visible: string;

  constructor(public idVal?: number, public cheminVal?: string, public raccourciUnixVal?: string, public visibleVal?: string) {
    this.id = idVal;
    this.chemin = cheminVal;
    this.raccourciUnix = raccourciUnixVal;
    this.visible = visibleVal;
  }
}
