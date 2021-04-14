import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCommercialPropertyComponent } from './new-commercial-property.component';

describe('NewCommercialPropertyComponent', () => {
  let component: NewCommercialPropertyComponent;
  let fixture: ComponentFixture<NewCommercialPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCommercialPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCommercialPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
