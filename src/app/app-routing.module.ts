import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCoinsComponent}         from '../app/list-coins/list-coins.component';


const routes: Routes = [
  {path: '',          component: ListCoinsComponent},
  {path: 'list-coins',     component: ListCoinsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
