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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const translateModule = TranslateModule.forRoot({loader: {
  provide : TranslateLoader,
  useFactory: HttpLoaderFactory,
 deps : [HttpClient]
 }});

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ListCoinsComponent,
    CoinComponent,
    NewsComponent,
    BanksComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    translateModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDEFYZV7hfzWR8flJQ_xi_WJ0hh6vDaesk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent
    ]
})
export class AppModule { }
