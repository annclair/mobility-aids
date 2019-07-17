import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatButtonModule, MatBottomSheetModule } from '@angular/material';

import { AidsDetailComponent } from './aids-detail.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ AidsDetailComponent ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatBottomSheetModule
  ]
})
export class AidsDetailModule { }
