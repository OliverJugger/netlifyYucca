import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ressources} from "../app.constants";
import {SousDomaine} from '../model/SousDomaine';

@Injectable({
  providedIn: 'root'
})
export class SousDomaineService {

  constructor(private http: HttpClient,
              private ressources: Ressources) { }

  public getListeSousDomainesVisibles() {
    return this.http.get<SousDomaine[]>(this.ressources.server + 'sousdomaine/visible/1');
  }
}
