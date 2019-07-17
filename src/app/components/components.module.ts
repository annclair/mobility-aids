import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackInfoBarComponent } from './snack-info-bar/snack-info-bar.component';

@NgModule({
  declarations: [SnackInfoBarComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [ SnackInfoBarComponent ]
})
export class ComponentsModule { }