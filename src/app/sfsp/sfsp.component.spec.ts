import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfspComponent } from './sfsp.component';

describe('SfspComponent', () => {
  let component: SfspComponent;
  let fixture: ComponentFixture<SfspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
