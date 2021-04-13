import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResidenceVillaComponent } from './new-residence-villa.component';

describe('NewResidenceVillaComponent', () => {
  let component: NewResidenceVillaComponent;
  let fixture: ComponentFixture<NewResidenceVillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewResidenceVillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResidenceVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
