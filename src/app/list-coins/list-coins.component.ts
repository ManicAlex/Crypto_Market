import { Component, OnInit      } from '@angular/core';
import { CoinService            } from '../services/coin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService      } from 'ngx-spinner';



@Component({
  selector:    'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: [ './list-coins.component.scss']
})
export class ListCoinsComponent implements OnInit {
coins:      any = [];
coinsBTC:   any;
coinsLTC:   any;
coinsDASH:  any;
coinsETH:   any;
coinsXRP:   any;
coinsXMR:   any;
BTC:        any;
LTC:        any;
DASH:       any;
ETH:        any;
XRP:        any;
XMR:        any;

  constructor(
    private spinner     : NgxSpinnerService,
    private service     : CoinService,
    private router      : Router,
    private route       : ActivatedRoute,
  
    

    
    
  ) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);

  setTimeout(function() { localStorage.clear(); }, (5 * 60 * 1000));
    

  if(localStorage.getItem("BTC") == null){
    this.service.showAllCoins("BTC")
    .subscribe(data => {
    this.coinsBTC = data;
    localStorage.setItem("BTC", JSON.stringify(this.coinsBTC));
    });
  }else{
    this.coinsBTC = JSON.parse(localStorage.getItem("BTC"));
  }


  if(localStorage.getItem("LTC") == null){
    this.service.showAllCoins("LTC")
    .subscribe(data => {
    this.coinsLTC = data;
    console.log(this.coinsLTC);
    localStorage.setItem("LTC", JSON.stringify(this.coinsLTC));
    });
  }else{
    this.coinsLTC = JSON.parse(localStorage.getItem("LTC"));
  }

  if(localStorage.getItem("DASH") == null){
    this.service.showAllCoins("DASH")
    .subscribe(data => {
    this.coinsDASH = data;
    console.log(this.coinsDASH);
    localStorage.setItem("DASH", JSON.stringify(this.coinsDASH));
  });
  }else{
    this.coinsDASH = JSON.parse(localStorage.getItem("DASH"));
  }

  if(localStorage.getItem("ETH") == null){
    this.service.showAllCoins("ETH")
    .subscribe(data => {
    this.coinsETH = data;
    console.log(this.coinsETH);
    localStorage.setItem("ETH", JSON.stringify(this.coinsETH));
  });
  }else{
    this.coinsETH = JSON.parse(localStorage.getItem("ETH"));
  }


  if(localStorage.getItem("XMR") == null){
    this.service.showAllCoins1("XMR")
    .subscribe(data => {
    this.coinsXMR = data;
    console.log(this.coinsXMR);
    localStorage.setItem("XMR", JSON.stringify(this.coinsXMR));
  });
  }else{
    this.coinsXMR = JSON.parse(localStorage.getItem("XMR"));
  }
  }
}
