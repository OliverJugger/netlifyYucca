import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ressources} from '../app.constants';
import {Programme} from '../model/programme';
import {Version} from '../model/version';

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private http: HttpClient,
              private ressources: Ressources) { }

  public getListeVersions() {
    return this.http.get<Version[]>(this.ressources.server + 'version');
  }

  public addVersion(version: Version) {
    const body = JSON.stringify(version);
    return this.http.post(this.ressources.server + 'version/enregistrer', body, options);
  }
}
