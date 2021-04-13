import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceVillaPageComponent } from './residence-villa-page.component';

describe('ResidenceVillaPageComponent', () => {
  let component: ResidenceVillaPageComponent;
  let fixture: ComponentFixture<ResidenceVillaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenceVillaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceVillaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
