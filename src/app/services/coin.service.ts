import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  url = environment.url;
  api = "ZW1Z54B9AJQ1VM7I";
  
  

    showAllCoins(codesign){
      return this.http.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + codesign + '&&to_currency=EUR&apikey=2RC330MOF4T41YUY');
    }

    //Apikey only allows for 5 api calls per min and i have more
    showAllCoins1(codesign){
      return this.http.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + codesign + '&&to_currency=EUR&apikey=1B15XTG6QUNM1V1Y');
    }



    GetCoinStock(codesign){
      return this.http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' + codesign + '&market=EUR&apikey=1B15XTG6QUNM1V1Y')
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
