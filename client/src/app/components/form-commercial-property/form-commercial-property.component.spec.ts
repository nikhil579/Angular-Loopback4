import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommercialPropertyComponent } from './form-commercial-property.component';

describe('FormCommercialPropertyComponent', () => {
  let component: FormCommercialPropertyComponent;
  let fixture: ComponentFixture<FormCommercialPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCommercialPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommercialPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
