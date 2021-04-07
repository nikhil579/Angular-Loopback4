import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerPageComponent } from './broker-page.component';

describe('BrokerPageComponent', () => {
  let component: BrokerPageComponent;
  let fixture: ComponentFixture<BrokerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
