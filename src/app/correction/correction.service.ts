import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Correction } from '../model/correction';
import { Ressources } from '../app.constants';
import { Observable, Subject } from 'rxjs';
import { correctionDefault } from '../model/mocks';


const options = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CorrectionService {

  private correctionRef = new Subject<Correction>();
  correctionObs = this.correctionRef.asObservable();

  private openCorr = new Subject<Boolean>();
  openCorrObs = this.openCorr.asObservable();

  constructor(private http: HttpClient,
    private ressources: Ressources) { 
      
    }

  public getListeCorrections() {
    return this.http.get<Correction[]>(this.ressources.server + 'correction');
  }

  public getListeCorrectionsEtat(etat) {
    return this.http.get<Correction[]>(this.ressources.server + 'correction/rechercher/etat/' + etat);
  }

  public getListeNombreCorrectionsEtat(etat) {
    return this.http.get<number>(this.ressources.server + 'correction/rechercher/etat/nombre/' + etat);
  }

  public addCorrection(correction: Correction) {
    const body = JSON.stringify(correction);
    console.log(body)
    return this.http.post(this.ressources.server + 'correction/enregistrer', body, options);
  }
  
}
