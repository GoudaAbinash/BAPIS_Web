import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FglComponent } from './fgl.component';

describe('FglComponent', () => {
  let component: FglComponent;
  let fixture: ComponentFixture<FglComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FglComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
