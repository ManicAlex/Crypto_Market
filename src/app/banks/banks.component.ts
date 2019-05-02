import { Component, OnInit      } from '@angular/core';
import { LocationComponent      } from '../location/location.component';
import { HttpClient             } from '@angular/common/http';
import { GoogleBankService      } from '../services/googleBank.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params =>{
      this.userLat = parseFloat(params.get("lat"))
      this.userLng = parseFloat(params.get("lng"))
    })




    this.service.GetBanks(this.userLat, this.userLng)
    .subscribe((res: any) => {

      
      //https://stackoverflow.com/questions/51148469/creating-multiple-markers-with-angular-google-maps-from-an-api
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
