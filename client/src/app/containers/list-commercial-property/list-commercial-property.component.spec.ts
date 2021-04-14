import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommercialPropertyComponent } from './list-commercial-property.component';

describe('ListCommercialPropertyComponent', () => {
  let component: ListCommercialPropertyComponent;
  let fixture: ComponentFixture<ListCommercialPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommercialPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommercialPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
