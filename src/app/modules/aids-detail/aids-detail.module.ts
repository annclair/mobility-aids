import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatButtonModule } from '@angular/material';

import { AidsDetailComponent } from './aids-detail.component';

@NgModule({
  declarations: [ AidsDetailComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AidsDetailModule { }
