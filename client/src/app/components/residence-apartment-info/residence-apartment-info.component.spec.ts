import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceApartmentInfoComponent } from './residence-apartment-info.component';

describe('ResidenceApartmentInfoComponent', () => {
  let component: ResidenceApartmentInfoComponent;
  let fixture: ComponentFixture<ResidenceApartmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenceApartmentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceApartmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
