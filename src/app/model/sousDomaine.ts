export class SousDomaine {
  id: number;
  libelleCourt: string;
  libelleLong: string;
  visible: string;

  constructor(public idVal?: number, public libelleCourtVal?: string, public libelleLongVal?: string, public visibleVal?: string) {
    this.id = idVal;
    this.libelleCourt = libelleCourtVal;
    this.libelleLong = libelleLongVal;
    this.visible = visibleVal;
  }
}
