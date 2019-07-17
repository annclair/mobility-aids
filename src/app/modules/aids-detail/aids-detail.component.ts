import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MobilityAids } from 'src/app/models/mobility-aids.model';
import { MobilityAidsService } from 'src/app/services/mobility-aids.service';
import { MatBottomSheet } from '@angular/material';
import { SnackInfoBarComponent } from 'src/app/components/snack-info-bar/snack-info-bar.component';

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
    private mobilityAidsService: MobilityAidsService,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const aidId = Number(params.get('id'));
      if (!isNaN(aidId)) {
        this.mobilityAidsService.getOne(aidId).subscribe(res => this.aid = res, () => {
          this.openSnackBar('Aucune infos sur cette aide');
          this.router.navigate(['/aids']);
        });
      } else {
        this.openSnackBar('Cette aide n\'existe pas');
        this.router.navigate(['/aids']);
      }
    });
  }

  openSnackBar(message) {
    this.bottomSheet.open(SnackInfoBarComponent, {
      data: {
        message: message
      }
    });
  }

}
