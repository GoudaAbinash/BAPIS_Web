import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbgrenewalComponent } from './fbgrenewal.component';

describe('FbgrenewalComponent', () => {
  let component: FbgrenewalComponent;
  let fixture: ComponentFixture<FbgrenewalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbgrenewalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbgrenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
