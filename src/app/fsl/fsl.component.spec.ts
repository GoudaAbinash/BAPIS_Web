import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FslComponent } from './fsl.component';

describe('FslComponent', () => {
  let component: FslComponent;
  let fixture: ComponentFixture<FslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
