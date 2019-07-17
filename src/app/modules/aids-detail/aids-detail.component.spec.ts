import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MatCardModule, MatButtonModule, MatBottomSheet, MatSnackBarModule } from '@angular/material';

import { MobilityAidsService } from 'src/app/services/mobility-aids.service';

import { AidsDetailComponent } from './aids-detail.component';

class MockMobilityAidsService {
  getOne() {
    return of(null);
  }
}

class MockMatBottomSheet { }

describe('AidsDetailComponent', () => {
  let component: AidsDetailComponent;
  let fixture: ComponentFixture<AidsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatButtonModule, RouterTestingModule, MatSnackBarModule ],
      declarations: [ AidsDetailComponent ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of({
              get: () => {
                return 1;
              }
            })
          }
        },
        { provide: MobilityAidsService, useClass: MockMobilityAidsService },
        { provide: MatBottomSheet, useClass: MockMatBottomSheet }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
