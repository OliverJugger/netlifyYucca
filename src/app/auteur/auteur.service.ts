import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ressources } from '../app.constants';
import { Auteur } from '../model/auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {

  constructor(private http: HttpClient,
    private ressources: Ressources) { }

  public getListeAuteursActifs() {
    return this.http.get<Auteur[]>(this.ressources.server + 'auteur/actif/O');
  }
}
