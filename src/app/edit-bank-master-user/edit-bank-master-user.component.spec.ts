import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankMasterUserComponent } from './edit-bank-master-user.component';

describe('EditBankMasterUserComponent', () => {
  let component: EditBankMasterUserComponent;
  let fixture: ComponentFixture<EditBankMasterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBankMasterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBankMasterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
