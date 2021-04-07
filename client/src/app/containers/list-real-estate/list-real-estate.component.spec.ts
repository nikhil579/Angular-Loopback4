import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRealEstateComponent } from './list-real-estate.component';

describe('ListRealEstateComponent', () => {
  let component: ListRealEstateComponent;
  let fixture: ComponentFixture<ListRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRealEstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
