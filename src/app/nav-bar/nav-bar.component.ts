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
  
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {

      
  }

  

}
