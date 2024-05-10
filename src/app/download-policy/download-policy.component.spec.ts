import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPolicyComponent } from './download-policy.component';

describe('DownloadPolicyComponent', () => {
  let component: DownloadPolicyComponent;
  let fixture: ComponentFixture<DownloadPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
