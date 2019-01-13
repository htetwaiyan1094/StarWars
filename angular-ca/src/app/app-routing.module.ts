import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: ':type', component: ListComponent },
  { path: ':type/:id', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
