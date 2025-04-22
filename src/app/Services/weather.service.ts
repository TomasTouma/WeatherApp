import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//HTTP client import
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private httpClient:HttpClient) { }

  //method to get the weather from the URL
  getWeather(cityName: string): Observable<any> {
    return this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=a09447c5acff6dac8f3dfca1fc14e912`);
      
  }

}
