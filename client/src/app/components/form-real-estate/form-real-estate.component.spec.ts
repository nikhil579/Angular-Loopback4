import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRealEstateComponent } from './form-real-estate.component';

describe('FormRealEstateComponent', () => {
  let component: FormRealEstateComponent;
  let fixture: ComponentFixture<FormRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRealEstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
