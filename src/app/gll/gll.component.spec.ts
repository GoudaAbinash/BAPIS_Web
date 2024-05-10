import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GllComponent } from './gll.component';

describe('GllComponent', () => {
  let component: GllComponent;
  let fixture: ComponentFixture<GllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
