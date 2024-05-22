import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOIUploadComponent } from './boi-upload.component';

describe('BOIUploadComponent', () => {
  let component: BOIUploadComponent;
  let fixture: ComponentFixture<BOIUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOIUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOIUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
