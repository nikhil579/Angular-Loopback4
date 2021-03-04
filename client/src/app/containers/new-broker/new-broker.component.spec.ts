import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBrokerComponent } from './new-broker.component';

describe('NewBrokerComponent', () => {
  let component: NewBrokerComponent;
  let fixture: ComponentFixture<NewBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
