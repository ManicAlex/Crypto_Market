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
    }, 5000);
    


    this.service.showAllCoins("BTC")
    .subscribe((data) => {
      this.coinsBTC = data;
      console.log(this.coinsBTC);
    });

    this.service.showAllCoins("LTC")
    .subscribe((data) => {
      this.coinsLTC = data;
      console.log(this.coinsLTC);
    });

    this.service.showAllCoins1("DASH")
    .subscribe((data) => {
      this.coinsDASH = data;
      console.log(this.coinsDASH);
    });

    this.service.showAllCoins1("ETH")
    .subscribe((data) => {
      this.coinsETH = data;
      console.log(this.coinsETH);
    });

    this.service.showAllCoins2("XRP")
    .subscribe((data) => {
      this.coinsXRP = data;
      console.log(this.coinsXRP);
    });

    this.service.showAllCoins2("XMR")
    .subscribe((data) => {
      this.coinsXMR = data;
      console.log(this.coinsXMR);
    });
  }
}
