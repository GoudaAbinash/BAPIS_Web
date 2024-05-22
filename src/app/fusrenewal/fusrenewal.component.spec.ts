import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusrenewalComponent } from './fusrenewal.component';

describe('FusrenewalComponent', () => {
  let component: FusrenewalComponent;
  let fixture: ComponentFixture<FusrenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusrenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusrenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
