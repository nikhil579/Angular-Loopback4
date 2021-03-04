import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBrokerComponent } from './list-broker.component';

describe('ListBrokerComponent', () => {
  let component: ListBrokerComponent;
  let fixture: ComponentFixture<ListBrokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBrokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
