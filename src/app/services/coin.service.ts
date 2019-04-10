import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http: HttpClient) { }

  url = environment.url;
  coinCode = ['BTC', 'LTC'];

  showbitcoin() {
    return this.http.get(
      `${this.url}&from_currency=${this.coinCode}&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
  
      );

    }

    showbitCash() {
      return this.http.get(
        `${this.url}&from_currency=BCH&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
    
        );
  
      }
      showLitecoin() {
        return this.http.get(
          `${this.url}&from_currency=LTC&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
      
          );
    
        }

        showEthereum() {
          return this.http.get(
            `${this.url}&from_currency=ETH&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
        
            );
      
          }

            showRipple() {
              return this.http.get(
                `${this.url}&from_currency=XRP&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
            
                );
          
              }

              showMonero() {
                return this.http.get(
                  `${this.url}&from_currency=XMR&&to_currency=EUR&apikey=PXP1YAA08GRJ6YY1`
              
                  );
            
                }
      }
