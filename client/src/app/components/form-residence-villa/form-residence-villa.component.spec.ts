import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResidenceVillaComponent } from './form-residence-villa.component';

describe('FormResidenceVillaComponent', () => {
  let component: FormResidenceVillaComponent;
  let fixture: ComponentFixture<FormResidenceVillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResidenceVillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResidenceVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
