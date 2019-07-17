import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-snack-info-bar',
  templateUrl: './snack-info-bar.component.html',
  styleUrls: ['./snack-info-bar.component.scss']
})
export class SnackInfoBarComponent implements OnInit {

  message : string;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<SnackInfoBarComponent>,
    @Optional() @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) { }

  ngOnInit() {
    if (this.data) {
      this.message = this.data.message
    } else {
      this.message = 'Désolé, cette page n\'existe pas'
    }
  }

  onClose() {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
