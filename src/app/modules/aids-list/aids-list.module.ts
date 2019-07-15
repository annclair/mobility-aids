import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AidsListComponent } from './aids-list.component';

import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [ AidsListComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AidsListModule { }
