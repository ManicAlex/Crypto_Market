import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app/app.component';
import { LocationComponent } from './location/location.component';
import { ListCoinsComponent } from './list-coins/list-coins.component';
import { CoinComponent } from './coin/coin.component';
import { NewsComponent } from './news/news.component';
import { BanksComponent } from './banks/banks.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ListCoinsComponent,
    CoinComponent,
    NewsComponent,
    BanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
