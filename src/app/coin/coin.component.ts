import { Component, OnInit } from '@angular/core';
import { CoinService } from '../services/coin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.sass']
})
export class CoinComponent implements OnInit {
  codesign: any;
  stock: any;

  constructor(
    private service: CoinService,
    private router      : Router,
    private route       : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.codesign = params.get("coin")
    })
    console.log(this.codesign);

    this.service.GetCoinStock(this.codesign)
    .subscribe((data) => {
      this.stock = data;
      console.log(this.stock);
    });
    
  }
  

}
