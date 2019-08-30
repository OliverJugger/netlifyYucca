import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Ressources} from '../app.constants';
import {Domaine} from '../model/domaine';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  constructor(private http: HttpClient,
              private ressources: Ressources) { }

  public getListeDomainesVisibles() {
    return this.http.get<Domaine[]>(this.ressources.server + 'domaine/visible/1');
  }
}
