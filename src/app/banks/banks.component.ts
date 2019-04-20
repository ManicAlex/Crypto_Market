import { Component, OnInit } from '@angular/core';
import {LocationComponent} from '../location/location.component';
import { HttpClient } from '@angular/common/http';
import { GoogleBankService } from '../services/googleBank.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {
  
  marker:any;
  longitude: any;
  

  constructor(
    private http         :HttpClient,
    private location     :LocationComponent,
    private service      :GoogleBankService,
    private route        :ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.longitude = params.get("coin")
    })
    console.log(this.codesign);
    let latitude = JSON.parse(localStorage.getItem('saved'));
    
    



console.log(latitude);
}
}
