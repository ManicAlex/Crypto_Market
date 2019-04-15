import { Component, OnInit } from '@angular/core';
import { CoinService } from '../services/coin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { ChartService } from '../services/chart.service';
import { map } from 'rxjs/operators';
import { StockData } from '../stockdata';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  codesign: any;
  stock: any;
  chart: any = [];
  low: any = [];
  high: any = [];
  res1: any;
  data: any = [];

  // stockData: StockData[];
  // url = this.stock;
  // stockDate = [];
  // "2a. high (EUR)" = [];
  // "3a. low (EUR)" = [];
  
  


  constructor(
    private service:     CoinService,
    private service1:     ChartService,
    private service2:     ChartService,
    private router      : Router,
    private route       : ActivatedRoute,
    private http: HttpClient
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

      const allDates      = Object.keys(this.stock['Time Series (Digital Currency Daily)']).slice(0,30);
      const allLows       = [];
      const allHighs      = [];


      allDates.forEach(date => {

       allLows.push(this.stock['Time Series (Digital Currency Daily)'][date]['3a. low (EUR)']);

       allHighs.push(this.stock['Time Series (Digital Currency Daily)'][date]['2a. high (EUR)']);

      });
      console.log(allHighs);


      // this.http.get(this.url).subscribe((res: StockData[]) => {
      //   res.forEach(y => {
      //     this.stockDate.push(y.stockDate);
      //     this.price.push(y.price);
      //   });



      // let high = this.stock['Time Series (Digital Currency Daily)'].map(() => this.stock = this.stock["2019-04-11"]['3a. high (EUR)']));
      // let low = this.stock['Time Series (Digital Currency Daily)'].map(() => this.stock = this.stock.date['3a. low (EUR)']));
      // let alldates = this.stock['Time Series (Digital Currency Daily)'].map( () => this.stock['2019-04-10']));
      

      this.chart = new Chart('canvas', {
        
        type: 'line',
        
        data: {
          labels: allDates,
          datasets: [
            { 
              data: allLows,
              borderColor: "#3cba9f",
              fill: true,
              
              label: 'Low'
            },
            { 
              data: allHighs,
              borderColor: "#ffcc00",
              fill: true,
              
              label: 'High'
            },
          ]
        },
        options: {
          
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }
          
          
          ],
            yAxes: [{
              display: true
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
