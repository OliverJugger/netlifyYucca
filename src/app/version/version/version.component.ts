import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  displayBoutonGenerer = true;
  displayedGenerer = false;

  constructor() { }

  ngOnInit() {
  }

  onSelectedGenerer() {
    this.displayBoutonGenerer = false;
    this.displayedGenerer = true;
  }

  annulerGeneration() {
    this.displayBoutonGenerer = true;
    this.displayedGenerer = false;
  }

}
