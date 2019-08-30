import {Component, EventEmitter, OnInit, Output, Input, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSnackBarConfig, MatSort, MatTableDataSource, Sort} from '@angular/material';
import {Version} from '../../../model/version';
import {VersionService} from '../../version.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-version-list',
  templateUrl: './version-list.component.html',
  styleUrls: ['./version-list.component.css']
})
export class VersionListComponent implements OnInit {
  // ----------------------- MatTable -----------------------
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['id', 'libelle', 'etat', 'dateCreation'];
  versionsDataSource: MatTableDataSource<Version>;
  pageSize;
  pageSizeOptions = [5, 10, 100];
  // ----------------------- MatTable -----------------------

  public versions: Version[] = [];
  selectedVersion: Version;
  versionInput: Version;

  spinner = true;
  @Output() openVersion = new EventEmitter();
  // Affichage de l'interface ajouter version ou non
  @Output() displayedGenerer = new EventEmitter();
  // Affichage du bouton ajouter ou non, faux par defaut si on appelle le component seul
  @Input() displayGenerer = false;
  // Mise à jour du la MatTable lorsque la correction du formulaire est enregistrée
  @Input() updateMatTable = false;
  // Permet la selection multiple ou non selon l'interface
  @Input() selectionMultiple;

  constructor(private versionService: VersionService, public snackBar: MatSnackBar, private formBuilder: FormBuilder) {
    this.versionInput = new Version();
  }

  ngOnInit() {
    this.initMatTable();
  }

  onSelect(version: Version) {
    this.selectedVersion = version;
  }

  genererVersion() {
    this.displayGenerer = false;
    console.log("EMIT TRUE");
    this.displayedGenerer.emit(true);
  }

  onUpdate(event) {
    this.initMatTable();
  }

  error() {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    // config.duration = 5000;
    this.snackBar.open('Une erreur est survenue pendant le chargement des données, veuillez réessayer ultérieurement.'
      , 'Fermer', config);
  }

  message(message) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = 5000;
    this.snackBar.open(message, 'Fermer', config);
  }

  // ----------------------- MatTable -----------------------
  initMatTable() {
    this.versionService.getListeVersions().subscribe(
      result => {
        this.spinner = false;
        this.versions = result;
        this.pageSize = result.length > 100 ? 10 : 5;
        this.versionsDataSource = new MatTableDataSource(result);
        this.versionsDataSource.paginator = this.paginator;
        this.versionsDataSource.sort = this.sort;
        this.versionsDataSource.filterPredicate = (data: Version, filter: string) =>
          !filter || (data.id.toString().includes(filter))
          || (data.libelle.toLowerCase().includes(filter))
          || (data.etat.toLowerCase().includes(filter));
      }, error => {
        console.error(error);
        this.error();
      });
  }

  applyFilter(filterValue: string) {
    this.versionsDataSource.filter = filterValue.trim().toLowerCase();
    if (this.versionsDataSource.paginator) {
      this.versionsDataSource.paginator.firstPage();
    }
  }

  sortData(sort: Sort) {
    const data = this.versions.slice();
    if (!sort.active || sort.direction === '') {
      this.versions = data;
      return;
    }

    this.versionsDataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'idSort': return compare(a.id, b.id, isAsc);
        case 'libelleSort': return compare(a.libelle, b.libelle, isAsc);
        case 'etatSort': return compare(a.etat, b.etat, isAsc);
        case 'dateCreationSort': return compare(a.dateCreation, b.dateCreation, isAsc);
        default: return 0;
      }
    });

    function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }

  pagination(event) {
    console.log(event);
  }

}
