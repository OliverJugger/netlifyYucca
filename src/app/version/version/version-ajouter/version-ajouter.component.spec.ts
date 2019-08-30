import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionAjouterComponent } from './version-ajouter.component';

describe('VersionAjouterComponent', () => {
  let component: VersionAjouterComponent;
  let fixture: ComponentFixture<VersionAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
