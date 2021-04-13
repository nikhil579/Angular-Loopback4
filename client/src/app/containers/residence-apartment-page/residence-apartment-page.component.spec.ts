import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceApartmentPageComponent } from './residence-apartment-page.component';

describe('ResidenceApartmentPageComponent', () => {
  let component: ResidenceApartmentPageComponent;
  let fixture: ComponentFixture<ResidenceApartmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenceApartmentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceApartmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
