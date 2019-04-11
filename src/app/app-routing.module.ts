import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCoinsComponent}         from '../app/list-coins/list-coins.component';
import {CoinComponent}         from '../app/coin/coin.component';
import {NewsComponent}         from '../app/news/news.component';
import {LocationComponent}         from '../app/location/location.component';
import {BanksComponent}         from '../app/banks/banks.component';


const routes: Routes = [
  {path: '',          component: ListCoinsComponent},
  {path: 'list-coins',     component: ListCoinsComponent},
  {path: 'coin/:coin',     component: CoinComponent},
  {path: 'news',     component: NewsComponent},
  {path: 'location',     component: LocationComponent},
  {path: 'banks',     component: BanksComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
