import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateInfoComponent } from './real-estate-info.component';

describe('RealEstateInfoComponent', () => {
  let component: RealEstateInfoComponent;
  let fixture: ComponentFixture<RealEstateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
