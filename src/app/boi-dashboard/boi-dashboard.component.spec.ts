import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOIDashboardComponent } from './boi-dashboard.component';

describe('BOIDashboardComponent', () => {
  let component: BOIDashboardComponent;
  let fixture: ComponentFixture<BOIDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOIDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOIDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
