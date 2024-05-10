import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewaldashComponent } from './renewaldash.component';

describe('RenewaldashComponent', () => {
  let component: RenewaldashComponent;
  let fixture: ComponentFixture<RenewaldashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewaldashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewaldashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
