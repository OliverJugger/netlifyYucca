import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Ressources } from '../app.constants';
import { Programme } from '../model/programme';

const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {

  constructor(private http: HttpClient,
              private ressources: Ressources) { }

  public getListeProgrammes() {
    return this.http.get<Programme[]>(this.ressources.server + 'programme');
  }

  public getProgrammes(programme: Programme) {
    const body = JSON.stringify(programme);
    return this.http.post<Programme[]>(this.ressources.server + 'programme/rechercher', body, options);
  }

  public addProgramme(programme: Programme) {
    const body = JSON.stringify(programme);
    return this.http.post(this.ressources.server + 'programme/enregistrer', body, options);
  }
}


