import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getEarthQuackData(){
      return this.http.get('https://data.weather.gov.hk/weatherAPI/opendata/earthquake.php?dataType=qem&lang=en',{});
  }
  bankList(){
    return this.http.get('https://api.hkma.gov.hk/public/bank-svf-info/acctopen-banks-contact?lang=en',{});
  }
  routesList(){
    return this.http.get('https://rt.data.gov.hk/v2/transport/nlb/route.php?action=list',{});
  }
  getCarParkList(){
    return this.http.get('https://openapi.westkowloon.hk/datagovhk/carpark',{});
  }

}
