import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Ressources {
  public server = environment.urlBackEnd;
  /*public currentUserLogged = this.server + 'auth/whoami';
  public versionRecuperation = this.server + 'version/';

  public civilites = ["M.", "MM"];

  public typeBis = ["", "Bis", "Ter"];*/
}
