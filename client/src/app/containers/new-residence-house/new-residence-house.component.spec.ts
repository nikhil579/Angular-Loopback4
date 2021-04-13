import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResidenceHouseComponent } from './new-residence-house.component';

describe('NewResidenceHouseComponent', () => {
  let component: NewResidenceHouseComponent;
  let fixture: ComponentFixture<NewResidenceHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewResidenceHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResidenceHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
