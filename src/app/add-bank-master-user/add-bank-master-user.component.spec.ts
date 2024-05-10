import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankMasterUserComponent } from './add-bank-master-user.component';

describe('AddBankMasterUserComponent', () => {
  let component: AddBankMasterUserComponent;
  let fixture: ComponentFixture<AddBankMasterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBankMasterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBankMasterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
