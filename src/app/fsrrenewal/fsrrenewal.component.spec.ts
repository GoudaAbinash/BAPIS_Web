import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSRrenewalComponent } from './fsrrenewal.component';

describe('FSRrenewalComponent', () => {
  let component: FSRrenewalComponent;
  let fixture: ComponentFixture<FSRrenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSRrenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSRrenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
