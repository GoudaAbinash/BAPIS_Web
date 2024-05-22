import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrkitComponent } from './prkit.component';

describe('PrkitComponent', () => {
  let component: PrkitComponent;
  let fixture: ComponentFixture<PrkitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrkitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
