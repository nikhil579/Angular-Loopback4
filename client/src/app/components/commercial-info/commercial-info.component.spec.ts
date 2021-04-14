import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialInfoComponent } from './commercial-info.component';

describe('CommercialInfoComponent', () => {
  let component: CommercialInfoComponent;
  let fixture: ComponentFixture<CommercialInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
