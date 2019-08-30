import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionListComponent } from './correction-list.component';

describe('CorrectionListComponent', () => {
  let component: CorrectionListComponent;
  let fixture: ComponentFixture<CorrectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
