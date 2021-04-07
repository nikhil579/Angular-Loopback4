import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerInfoComponent } from './broker-info.component';

describe('BrokerInfoComponent', () => {
  let component: BrokerInfoComponent;
  let fixture: ComponentFixture<BrokerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
