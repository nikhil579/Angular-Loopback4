import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResidenceApartmentComponent } from './form-residence-apartment.component';

describe('FormResidenceApartmentComponent', () => {
  let component: FormResidenceApartmentComponent;
  let fixture: ComponentFixture<FormResidenceApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResidenceApartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResidenceApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
