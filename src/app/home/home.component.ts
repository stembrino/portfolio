import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service'
import { Weather } from '../shared/Weather'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WeatherService]
})
export class HomeComponent implements OnInit {
  public weather:Weather 
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeather()      
  }

}
