import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service'
import { Weather } from '../shared/Weather'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: []
})
export class NavBarComponent implements OnInit {
  public lisbonWeather:Array<any[]>
  public weather:Weather 
  public CITY = 'Lisbon'

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {

    this.weather = new Weather('',null, null)
    this.weatherService.serviceWeatherLisbon(this.CITY)
      .subscribe((response:any)=>{
        this.weather = new Weather(
                                    response.location.name,
                                    response.current.temperature,
                                    response.current.wind_speed
                                    )
        this.weatherService.setWeather(this.weather)  
        // console.log(this.weatherService.getWeather())
      })     
      
      
  }

  

}
