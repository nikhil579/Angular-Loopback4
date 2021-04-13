import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstatePageComponent } from './real-estate-page.component';

describe('RealEstatePageComponent', () => {
  let component: RealEstatePageComponent;
  let fixture: ComponentFixture<RealEstatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
