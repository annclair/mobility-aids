import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MobilityAids } from 'src/app/models/mobility-aids.model';
import { MobilityAidsService } from 'src/app/services/mobility-aids.service';

@Component({
  selector: 'app-aids-detail',
  templateUrl: './aids-detail.component.html',
  styleUrls: ['./aids-detail.component.scss']
})
export class AidsDetailComponent implements OnInit {
  
  aid: MobilityAids;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mobilityAidsService: MobilityAidsService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const aidId = Number(params.get('id'));
      if (!isNaN(aidId)) {
        this.mobilityAidsService.getOne(aidId).subscribe(res => this.aid = res, () => this.router.navigate(['/aids']));
      } else {
        this.router.navigate(['/aids-list']);
      }
    });
  }

}
