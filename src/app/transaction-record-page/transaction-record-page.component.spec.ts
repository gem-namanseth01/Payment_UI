import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRecordPageComponent } from './transaction-record-page.component';

describe('TransactionRecordPageComponent', () => {
  let component: TransactionRecordPageComponent;
  let fixture: ComponentFixture<TransactionRecordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionRecordPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
