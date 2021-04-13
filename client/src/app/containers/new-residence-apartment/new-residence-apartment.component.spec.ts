import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResidenceApartmentComponent } from './new-residence-apartment.component';

describe('NewResidenceApartmentComponent', () => {
  let component: NewResidenceApartmentComponent;
  let fixture: ComponentFixture<NewResidenceApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewResidenceApartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResidenceApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
