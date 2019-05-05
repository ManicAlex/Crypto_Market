import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient        } from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  latitude:   any;
  longitude:  any;
  accuracy:   any;
  lat:        any;
  lng:        any;

  constructor(
    private http         :HttpClient,
    private spinner      :NgxSpinnerService
   
    
  ) { }

  ngOnInit() {

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);


    // Check the browser supports the geolocation API
if (!("geolocation" in navigator)) {
  alert('Opps!. Your device cannot be used to find your location...');
}

// Get and cache DOM objects
const getLocationLink     = document.querySelector('#getLocation');
const feedbackDiv         = document.querySelector('#feedback');

// An option for the geolocation API, which in our case is
// also a hack to get around an issue in Chrome
const locationServiceOpts = {enableHighAccuracy: true}


function getPositionSuccess(position) {

  console.log(position);

  this.lat = position.coords.latitude;
  this.lng = position.coords.longitude;

  sessionStorage.setItem('lat', this.lat);
  sessionStorage.setItem('lat', this.lng);

  const accuracy  = position.coords.accuracy;
  

  feedbackDiv.innerHTML = `
    `;
  }


function getPositionFailure(err) {
  feedbackDiv.innerHTML = 'Error retrieving location.';
}

// Respond to clicks on 'find my location'
getLocationLink
  .addEventListener('click', e => {

    feedbackDiv.innerHTML = 'Looking...';

    
    navigator
      .geolocation
      .getCurrentPosition(
        getPositionSuccess.bind(this),
        getPositionFailure.bind(this),
        locationServiceOpts
      );

  });

  }


  towns =[ 
          {'name':'NONE', 'lat': '0', 'lng': '0'},
          {'name':'Dundalk', 'lat': '54.005318', 'lng': '-6.402506'},
          {'name':'Dublin', 'lat': '53.345553', 'lng': '-6.266095'},
          {'name':'Drogheda', 'lat': '54.0053249', 'lng': '-6.4023248'},
          {'name':'Cavan', 'lat': '53.990958', 'lng': '-7.360217'},
        ];
  
  PickTown = this.towns[0];
  
  onChange(towns: any){
    this.lat = towns.lat;
    this.lng = towns.lng;
    sessionStorage.setItem('lat', this.lat);
    sessionStorage.setItem('lat', this.lng);
  }

}

  

