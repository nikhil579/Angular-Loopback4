import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBrokerComponent } from './form-broker.component';

describe('FormBrokerComponent', () => {
  let component: FormBrokerComponent;
  let fixture: ComponentFixture<FormBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
