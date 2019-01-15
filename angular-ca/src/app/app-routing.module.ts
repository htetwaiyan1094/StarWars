import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: 'sw', component: MainComponent },
  { path: 'sw/:type', component: ListComponent },
  { path: 'sw/:type/:id', component: DetailComponent },
  { path: '**', redirectTo: 'sw', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
