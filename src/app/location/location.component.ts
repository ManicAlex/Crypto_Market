import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Check the browser supports the geolocation API
if (!("geolocation" in navigator)) {
  alert('Opps!. Your device cannot be used to find your location...');
}


// ##############################################
// # Basic tracking
// ##############################################

// Get and cache DOM objects
const getLocationLink     = document.querySelector('#getLocation');
const manualLocationInput = document.querySelector('#manualLocation');
const feedbackDiv         = document.querySelector('#feedback');

// An option for the geolocation API, which in our case is
// also a hack to get around an issue in Chrome
const locationServiceOpts = {enableHighAccuracy: true}


// ##############################################
// # Callbacks
// ##############################################

function getPositionSuccess(position) {

  console.log(position);

  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  const accuracy  = position.coords.accuracy;

  feedbackDiv.innerHTML = `
    <p><strong>Latitude:</strong> ${latitude}<br>
    <strong>Longitude:</strong> ${longitude}<br>
    <strong>Accuracy:</strong> ${accuracy} Metres</p>
    <p><a href='https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}'>View on Map</a></p>
  `;
}

function getPositionFailure(err) {
  feedbackDiv.innerHTML = 'Error retrieving location.';
}


// ##############################################
// # Event Listeners
// ##############################################

// Respond to clicks on 'find my location'
getLocationLink
  .addEventListener('click', e => {

    feedbackDiv.innerHTML = 'Looking...';

    // Single-shot, get location data
    navigator
      .geolocation
      .getCurrentPosition(
        getPositionSuccess,
        getPositionFailure,
        locationServiceOpts
      );

  });

// Respond, instead, to an entered location name
// (this is just a mock-up)
manualLocationInput
  .addEventListener('change', () => {
    feedbackDiv.innerHTML = `This feature has not been implemented.`;
  });
  }

}
