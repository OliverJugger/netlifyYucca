import {Component, EventEmitter, OnInit, Output, Input, ViewChild, OnChanges} from '@angular/core';
import { MatSort, MatTableModule, MatTableDataSource, MatPaginator, Sort } from "@angular/material";
import { Correction } from "../../../model/correction";
import { CorrectionService } from "../../correction.service";
import { correctionDefault } from 'src/app/model/mocks';
import { CorrectionFormComponent } from '../correction-form/correction-form.component';

@Component({
  selector: 'app-correction-list',
  templateUrl: './correction-list.component.html',
  styleUrls: ['./correction-list.component.css']
})
export class CorrectionListComponent implements OnInit, OnChanges {
 
  displayedColumns: string[] = ['id', 'auteur', 'dateCreation', 'titre', 'domaine', 'etat'];
  correctionDataSource: MatTableDataSource<Correction>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  pageSize;
  pageSizeOptions = [5, 10, 100];

  spinner = true;
  @Output() openCorrection = new EventEmitter();
  // Affichage du bouton ajouter ou non
  @Input() displayAjouter;
  // Appel des corrections par colonne etat
  @Input() etat;
  // Mise à jour du la MatTable lorsque la correction du formulaire est enregistrée
  @Input() updateMatTable = false;
  // Permet la selection multiple ou non selon l'interface
  @Input() selectionMultiple;

  // Les corrections appelées en back
  public corrections: Correction[] = [];
  // La correction selectionnée
  selectedCorrection: Correction;
  // Les corrections selectionées
  correctionsSelected: number[] = [];

  constructor(private correctionService: CorrectionService) {
  }

  ngOnInit() {
    this.initMatTable();
  }

  ngOnChanges() {
    if (this.updateMatTable === true) {
      this.initMatTable();
    }
  }

  ajouterUneCorrection() {
    this.openCorrection.emit(correctionDefault);
    this.selectedCorrection = correctionDefault;
    this.displayAjouter = false;
  }
  
  onSelect(correction: Correction) {
    this.openCorrection.emit(correction);

    if (this.selectionMultiple) {
      if (this.correctionsSelected.indexOf(correction.id) === -1) {
        this.correctionsSelected.push(correction.id);
      }  else {
        this.correctionsSelected = this.correctionsSelected.filter(item => item !== correction.id);
      }
    }
  }

  onUpdate(event) {
    this.selectedCorrection = null;
    this.initMatTable();
  }

  // ----------------------- MatTable -----------------------
  initMatTable() {
    if (this.etat == null) {
      this.initMatTableCorrections();
    } else {
      this.initMatTableCorrectionsEtat(this.etat);
    }
  }

  initMatTableCorrections() {
    this.correctionService.getListeCorrections().subscribe(
      result => {
        this.spinner = false;
        this.corrections = result;
        this.pageSize = result.length > 100 ? 10 : 5;
        this.correctionDataSource = new MatTableDataSource(result);
        this.correctionDataSource.paginator = this.paginator;
        this.correctionDataSource.sort = this.sort;
        this.correctionDataSource.filterPredicate = (data: Correction, filter: string) =>
          !filter || (data.id.toString().includes(filter))
          || (data.auteur.nom.toLowerCase().includes(filter))
          || (data.auteur.alias.toLowerCase().includes(filter))
          || (data.domaine.libelleCourt.toLowerCase().includes(filter));
      }, error => console.error(error));
  }

  initMatTableCorrectionsEtat(etat) {
    this.correctionService.getListeCorrectionsEtat(etat).subscribe(
      result => {
        this.spinner = false;
        this.corrections = result;
        this.pageSize = result.length > 100 ? 10 : 5;
        this.correctionDataSource = new MatTableDataSource(result);
        this.correctionDataSource.paginator = this.paginator;
        this.correctionDataSource.sort = this.sort;
        this.correctionDataSource.filterPredicate = (data: Correction, filter: string) =>
          !filter || (data.id.toString().includes(filter))
          || (data.auteur.nom.toLowerCase().includes(filter))
          || (data.auteur.alias.toLowerCase().includes(filter))
          || (data.domaine.libelleCourt.toLowerCase().includes(filter));
      }, error => console.error(error));
  }

  applyFilter(filterValue: string) {
    this.correctionDataSource.filter = filterValue.trim().toLowerCase();
    if (this.correctionDataSource.paginator) {
      this.correctionDataSource.paginator.firstPage();
    }
  }

  sortData(sort: Sort) {
    const data = this.corrections.slice();
    if (!sort.active || sort.direction === '') {
      this.corrections = data;
      return;
    }

    this.correctionDataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'idSort': return compare(a.id, b.id, isAsc);
        case 'auteurSort': return compare(a.auteur.alias, b.auteur.alias, isAsc);
        case 'domaineSort': return compare(a.domaine.libelleCourt, b.domaine.libelleCourt, isAsc);
        case 'repertoireSort': return compare(a.titre, b.titre, isAsc);
        case 'dateCreationSort': return compare(a.dateCreation, b.dateCreation, isAsc)
        default: return 0;
      }
    });

    function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

}
