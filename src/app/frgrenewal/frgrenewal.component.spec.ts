import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrgrenewalComponent } from './frgrenewal.component';

describe('FrgrenewalComponent', () => {
  let component: FrgrenewalComponent;
  let fixture: ComponentFixture<FrgrenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrgrenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrgrenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
