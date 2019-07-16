import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { MatCardModule, MatButtonModule } from '@angular/material';

import { MobilityAidsService } from 'src/app/services/mobility-aids.service';

import { AidsListComponent } from './aids-list.component';


class MockMobilityAidsService {
  getAll() {
    return of(null);
  }
}

describe('AidsListComponent', () => {
  let component: AidsListComponent;
  let fixture: ComponentFixture<AidsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, MatButtonModule, RouterTestingModule ],
      declarations: [ AidsListComponent ],
      providers: [
        { provide: MobilityAidsService, useClass: MockMobilityAidsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
