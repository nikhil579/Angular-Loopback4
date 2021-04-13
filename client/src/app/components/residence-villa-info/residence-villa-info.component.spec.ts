import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceVillaInfoComponent } from './residence-villa-info.component';

describe('ResidenceVillaInfoComponent', () => {
  let component: ResidenceVillaInfoComponent;
  let fixture: ComponentFixture<ResidenceVillaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenceVillaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenceVillaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
