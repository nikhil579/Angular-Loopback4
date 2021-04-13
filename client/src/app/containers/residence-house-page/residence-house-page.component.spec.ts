import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceHousePageComponent } from './residence-house-page.component';

describe('ResidenceHousePageComponent', () => {
  let component: ResidenceHousePageComponent;
  let fixture: ComponentFixture<ResidenceHousePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenceHousePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceHousePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
