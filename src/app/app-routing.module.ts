import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AidsListComponent } from './modules/aids-list/aids-list.component';
import { AidsDetailComponent } from './modules/aids-detail/aids-detail.component';
import { AidsPresentationComponent } from './modules/aids-presentation/aids-presentation.component';

const routes: Routes = [
  { path: 'aids', component: AidsListComponent },
  { path: 'aids/:id', component: AidsDetailComponent },
  { path: 'presentation', component: AidsPresentationComponent},
  { path: '', redirectTo: '/aids', pathMatch: 'full' },
  { path: '**', component: AidsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
