import { Injectable              } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GoogleBankService {

  constructor(private _http: HttpClient ) { }

  GetBanks(lat, lng) {
    console.log(lat);
    console.log(lng);
    
    return this._http.get('http://localhost/cors_proxy/cors_proxy.php?lat=' + lat + '&lng=' + lng +'');
    
  }
}

