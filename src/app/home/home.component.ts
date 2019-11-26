import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service'
import { Weather } from '../shared/Weather'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WeatherService],
})
export class HomeComponent implements OnInit {
  public lisbonWeather:Array<any[]>
  public weather:Weather 
  public CITY = 'Lisbon'
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weather = new Weather('',null, null)
 
     this.weatherService.serviceWeatherLisbon(this.CITY)
       .subscribe((response:any)=>{
         console.log(response)
         this.weather = new Weather(
                                     response.location.name,
                                     response.current.temperature,
                                     response.current.wind_speed
                                     )
       })   
  }

}
