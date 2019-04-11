import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  url = environment.url;
  

    showAllCoins(codesign){
      return this.http.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + codesign + '&&to_currency=EUR&apikey=HCA5KKCX8BDGPUEU');
    }

    //Apikey only allows for 5 api calls per min and i have more
    showAllCoins1(codesign){
      return this.http.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=' + codesign + '&&to_currency=EUR&apikey=ZW1Z54B9AJQ1VM7I');
    }



    GetCoinStock(codesign){
      return this.http.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=' + codesign + '&market=EUR&apikey=PXP1YAA08GRJ6YY1');
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
