import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private _http: HttpClient ) { }

  GetCoinStock(codesign) {
    return this._http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=' + codesign + '&market=EUR&apikey=PXP1YAA08GRJ6YY1')
    ;
  }
}