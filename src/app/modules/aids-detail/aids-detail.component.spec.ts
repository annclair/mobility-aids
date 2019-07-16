import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { MatCardModule, MatButtonModule } from '@angular/material';

import { MobilityAidsService } from 'src/app/services/mobility-aids.service';

import { AidsDetailComponent } from './aids-detail.component';

class MockMobilityAidsService {
  getOne() {
    return of(null);
  }
}

describe('AidsDetailComponent', () => {
  let component: AidsDetailComponent;
  let fixture: ComponentFixture<AidsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatCardModule, MatButtonModule, RouterTestingModule ],
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
        { provide: MobilityAidsService, useClass: MockMobilityAidsService }
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
