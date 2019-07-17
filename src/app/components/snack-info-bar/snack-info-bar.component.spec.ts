import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatBottomSheetRef, MAT_SNACK_BAR_DATA } from '@angular/material';

import { SnackInfoBarComponent } from './snack-info-bar.component';

class MockMatBottomSheetRef { }
const mockMatSnackBarData = {
  data: {
    message: 'message'
  }
};

describe('SnackInfoBarComponent', () => {
  let component: SnackInfoBarComponent;
  let fixture: ComponentFixture<SnackInfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackInfoBarComponent ],
       providers: [
        { provide: MatBottomSheetRef, useClass: MockMatBottomSheetRef },
        { provide: MAT_SNACK_BAR_DATA, useValue: mockMatSnackBarData }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
