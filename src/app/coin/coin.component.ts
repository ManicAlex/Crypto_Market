import { Component, OnInit } from '@angular/core';
import { CoinService } from '../services/coin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { GoogleBankService } from '../services/googleBank.service';
import { map } from 'rxjs/operators';
import { StockData } from '../stockdata';
import { HttpClient } from '@angular/common/http';
import {ListCoinsComponent} from '../list-coins/list-coins.component';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss'],
  providers:[CurrencyPipe]
})
export class CoinComponent implements OnInit {
  codesign: any;
  stock: any;
  chart: any = [];
  low: any = [];
  high: any = [];
  res1: any;
  data: any = [];
  mark: any;
  NewMark: any;
  open: any;
  close: any;
  volume: any;

  // stockData: StockData[];
  // url = this.stock;
  // stockDate = [];
  // "2a. high (EUR)" = [];
  // "3a. low (EUR)" = [];
  
  


  constructor(
    private service      :CoinService,
    private service1     :GoogleBankService,
    private router       :Router,
    private route        :ActivatedRoute,
    private http         :HttpClient,
    private pipe         :CurrencyPipe
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.codesign = params.get("coin")
    })
    console.log(this.codesign);

    this.service.GetCoinStock(this.codesign)
    .subscribe((res1) => {
      if(!res1){
        return;
      }
      console.log(res1);
      this.stock = res1;

      console.log(this.stock['Time Series (Digital Currency Daily)']);

      const allDates      = Object.keys(this.stock['Time Series (Digital Currency Daily)']).slice(0,7);
      const Market        = Object.keys(this.stock['Time Series (Digital Currency Daily)']).slice(0,1);
      const allLows:      any     = [];
      const allHighs:     any     = [];
      const allOpens:     any     = [];
      const allClose:     any     = [];
      const allVolume:    any     = [];
      const MarketCap:    any     = [];




      allDates.forEach(date => {

       allLows.push(this.stock['Time Series (Digital Currency Daily)'][date]['3a. low (EUR)']);

       allHighs.push(this.stock['Time Series (Digital Currency Daily)'][date]['2a. high (EUR)']);

      });


      Market.forEach(date => {

        MarketCap.push(this.stock['Time Series (Digital Currency Daily)'][date]['6. market cap (USD)']);
        this.NewMark = parseFloat(MarketCap).toFixed(2);

        allOpens.push(this.stock['Time Series (Digital Currency Daily)'][date]['1a. open (EUR)']);
        this.open = parseFloat(allOpens).toFixed(2);

        allClose.push(this.stock['Time Series (Digital Currency Daily)'][date]['4a. close (EUR)']);
        this.close = parseFloat(allClose).toFixed(2);

        allVolume.push(this.stock['Time Series (Digital Currency Daily)'][date]['5. volume']);
        this.volume = parseFloat(allVolume).toFixed(2);

      });
      
      console.log(this.open);
      console.log(allLows);
      

      this.chart = new Chart('canvas', {
        
        type: 'line',
        
        data: {
          
          labels: allDates,
          
          datasets: [
            { 
              data: allLows,
              borderColor: "#f51607",
              fill: true,
              backgroundColor: "#f5160780",

              
              label: 'Low'
            },
            { 
              data: allHighs,
              borderColor: "#31f018",
              fill: true,
              backgroundColor: "#31f01880",
              
              label: 'High'
            },
            
          ]
        },
        options: {
          responsive: true,

          
          title: {
            display: true,
            fontSize: 17,
            fontColor: 'white',
            text: 'Daily High & Low Prices'

          },
          
    tooltips: {
      mode: 'index',
      intersect: false,
    },
   hover: {
      mode: 'nearest',
      intersect: true
    },
          
          legend:  {
            labels: {
                fontColor: "white",
                fontSize: 15
            }
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: { color: "white" },
              ticks: {
                fontColor: "white",
                
            }
            }
          
          
          ],
            yAxes: [{
              display: true,
              gridLines: { color: "grey" },
              ticks: {
                fontColor: "white",
               
            }
            }],
          }
        }
      });
    });
  }
}



// let high = this.stock["Time Series (Digital Currency Daily)"]["2019-04-11"]['2a. high (EUR)'];
//       let low = this.stock["Time Series (Digital Currency Daily)"]["2019-04-11"]["3a. low (EUR)"];
//       let alldates = this.stock["Time Series (Digital Currency Daily)"]["2019-04-11"];
