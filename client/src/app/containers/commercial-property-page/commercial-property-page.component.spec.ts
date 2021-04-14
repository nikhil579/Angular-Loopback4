import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialPropertyPageComponent } from './commercial-property-page.component';

describe('CommercialPropertyPageComponent', () => {
  let component: CommercialPropertyPageComponent;
  let fixture: ComponentFixture<CommercialPropertyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialPropertyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialPropertyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
