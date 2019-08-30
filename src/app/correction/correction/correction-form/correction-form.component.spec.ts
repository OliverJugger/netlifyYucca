import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionFormComponent } from './correction-form.component';

describe('CorrectionFormComponent', () => {
  let component: CorrectionFormComponent;
  let fixture: ComponentFixture<CorrectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
