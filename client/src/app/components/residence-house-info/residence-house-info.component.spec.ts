import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceHouseInfoComponent } from './residence-house-info.component';

describe('ResidenceHouseInfoComponent', () => {
  let component: ResidenceHouseInfoComponent;
  let fixture: ComponentFixture<ResidenceHouseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenceHouseInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceHouseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
