import { Component, OnInit } from '@angular/core';
import { MobilityAidsService } from 'src/app/services/mobility-aids.service';
import { MobilityAids } from 'src/app/models/mobility-aids.model';

@Component({
  selector: 'app-aids-list',
  templateUrl: './aids-list.component.html',
  styleUrls: ['./aids-list.component.scss']
})
export class AidsListComponent implements OnInit {

  mobilityAids: MobilityAids[];

  constructor(
    private mobilityAidsService: MobilityAidsService
  ) { }

  ngOnInit() {
    this.mobilityAidsService.getAll().subscribe(res => this.mobilityAids = res);
  }

}
