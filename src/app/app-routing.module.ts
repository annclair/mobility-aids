import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AidsListComponent } from './modules/aids-list/aids-list.component';
import { AidsDetailComponent } from './modules/aids-detail/aids-detail.component';

const routes: Routes = [
  { path: 'aids-list', component: AidsListComponent },
  { path: 'aids/:id', component: AidsDetailComponent },
  { path: '', redirectTo: '/aids-list', pathMatch: 'full' },
  { path: '**', component: AidsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
