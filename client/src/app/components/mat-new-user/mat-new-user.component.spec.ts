import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatNewUserComponent } from './mat-new-user.component';

describe('MatNewUserComponent', () => {
  let component: MatNewUserComponent;
  let fixture: ComponentFixture<MatNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatNewUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
