import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }


  api =  "ZW1Z54B9AJQ1VM7I";
  api1 = "PXP1YAA08GRJ6YY1";
  api2 = "X98CRPSCDEB47171";
  api3 = "1B15XTG6QUNM1V1Y";
  api4 = "9NCTRMR2K10NCZ8S";
  api5 = "VG604JEPTMODFUK6";
  api6 = "B8FURUH23GDN03JI";
  api7 = "XMD63R7C5ENUNJMC";
  api8 = "9TXXTM1805J9XIU2";

  api9 = "4EOGYE6Z85ZSNJR8";
  api10 = "7R7CULIUGTPMFZC2";
  api11 = "RRM4OR387OCCEQQH";
  api12 = "9TXXTM1805J9XIU2";

  
  

    showAllCoins(codesign){
      return this.http.
      get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + codesign + '&&to_currency=EUR&apikey=' + this.api5 + '');
    }

    //Apikey only allows for 5 api calls per min and i have more
    showAllCoins1(codesign1){
      return this.http.
      get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + codesign1 + '&&to_currency=EUR&apikey=' + this.api + '');
    }

    showAllCoins2(codesign2){
      return this.http.
      get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + codesign2 + '&&to_currency=EUR&apikey=' + this.api2 + '');
    }

    showAllCoins3(codesign3){
      return this.http.
      get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + codesign3 + '&&to_currency=EUR&apikey=' + this.api9 + '');
    }



    GetCoinStock(codesign4){
      return this.http.
      get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' + codesign4 + '&market=EUR&apikey=' + this.api10 + '')
      ;
    }

   
  // showbitCash() {
  //   return this.http.get(
  //     `${this.url}&from_currency=BCH&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
    
  //      );
  
  //   }
  
  // showLitecoin() {
  //    return this.http.get(
  //     `${this.url}&from_currency=LTC&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
      
  //     );
    
  //   }

  // showEthereum() {
  //    return this.http.get(
  //     `${this.url}&from_currency=ETH&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
        
  //      );
      
  //    }

  // showRipple() {
  //    return this.http.get(
  //     `${this.url}&from_currency=XRP&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
            
  //      );
          
  //    }

  // showMonero() {
  //   return this.http.get(
  //     `${this.url}&from_currency=XMR&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
              
  //      );
            
    //  }
}
