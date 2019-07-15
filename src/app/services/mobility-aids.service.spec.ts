import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MobilityAidsService } from './mobility-aids.service';

describe('MobilityAidsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: MobilityAidsService = TestBed.get(MobilityAidsService);
    expect(service).toBeTruthy();
  });
});
