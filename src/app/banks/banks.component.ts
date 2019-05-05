import { Component, OnInit      } from '@angular/core';
import { HttpClient             } from '@angular/common/http';
import { GoogleBankService      } from '../services/googleBank.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService      } from 'ngx-spinner';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss']
})
export class BanksComponent implements OnInit {
  
  userLat:  any;
  userLng:  any;
  return:   any;
  markers:  any = [];
  

  constructor(
    private http         :HttpClient,
    private service      :GoogleBankService,
    private route        :ActivatedRoute,
    private spinner      :NgxSpinnerService
  ) { }

  ngOnInit() {

    
    this.spinner.show();
    setTimeout(() => {
    this.spinner.hide();
    }, 3000);

    this.route.paramMap.subscribe(params =>{
      this.userLat = parseFloat(params.get("lat"))
      this.userLng = parseFloat(params.get("lng"))
    })

    this.service.GetBanks(this.userLat, this.userLng)
    .subscribe((res: any) => {

      

    this.return = res;
    for(let int in this.return.results){
    this.markers.push({
       latt: (this.return.results[int].geometry.location.lat),
       lngg: (this.return.results[int].geometry.location.lng)
    })
   }
  });
}
}
