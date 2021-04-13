import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResidenceApartmentComponent } from './list-residence-apartment.component';

describe('ListResidenceApartmentComponent', () => {
  let component: ListResidenceApartmentComponent;
  let fixture: ComponentFixture<ListResidenceApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResidenceApartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResidenceApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
