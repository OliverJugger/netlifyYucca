import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Ressources} from '../app.constants';
import {Repertoire} from '../model/repertoire';

@Injectable({
  providedIn: 'root'
})
export class RepertoireService {

  constructor(private http: HttpClient,
              private ressources: Ressources) { }

  public getListeRepertoiresVisibles() {
    return this.http.get<Repertoire[]>(this.ressources.server + 'repertoire/visible/1');
  }
}
