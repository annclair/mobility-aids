import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';

import { AidsDetailComponent } from './aids-detail.component';

@NgModule({
  declarations: [ AidsDetailComponent ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AidsDetailModule { }
