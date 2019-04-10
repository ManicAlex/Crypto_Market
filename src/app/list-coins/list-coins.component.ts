import { Component, OnInit } from '@angular/core';
import { CoinService } from '../services/coin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.sass']
})
export class ListCoinsComponent implements OnInit {
coins: any[] = [];
coins1: any;
coins2: any;

  constructor(
    private service: CoinService,
    private router      : Router,
    private route       : ActivatedRoute
  ) { }

  ngOnInit() {

    this.service.showbitcoin()
    .subscribe(data => {
      this.coins = data as any;
      console.log(this.coins);
    })



    this.service.showLitecoin()
    .subscribe(data => {
    this.coins1 = data as any;
    console.log(this.coins1);
  })


this.service.showbitCash()
.subscribe(data => {
this.coins2 = data as any;
console.log(this.coins2);
})
}

  
  
}
