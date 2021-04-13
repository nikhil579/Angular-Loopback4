import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResidenceHouseComponent } from './form-residence-house.component';

describe('FormResidenceHouseComponent', () => {
  let component: FormResidenceHouseComponent;
  let fixture: ComponentFixture<FormResidenceHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResidenceHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormResidenceHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
