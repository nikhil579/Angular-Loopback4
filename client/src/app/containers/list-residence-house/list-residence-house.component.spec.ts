import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResidenceHouseComponent } from './list-residence-house.component';

describe('ListResidenceHouseComponent', () => {
  let component: ListResidenceHouseComponent;
  let fixture: ComponentFixture<ListResidenceHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResidenceHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResidenceHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
