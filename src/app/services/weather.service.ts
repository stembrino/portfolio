import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Weather } from '../shared/Weather'

import { Observable, BehaviorSubject } from 'rxjs'
import { map, retry, timeInterval  } from 'rxjs/operators';


@Injectable()
export class WeatherService{
    private weather: Weather =new Weather('', null, null)
    private weatherSubject: BehaviorSubject<Weather>
    
    constructor(private http:HttpClient){
        this.weatherSubject = new BehaviorSubject(this.weather)   
        
       
    }


    public serviceWeatherLisbon(location:string):Observable<any>{
        
        const KEY:string = '92ded61a9e2ab4dc99643cc3b3f6c7a6'
        return this.http.get(`http://api.weatherstack.com/current?access_key=${KEY}&query=${location}`)
            .pipe(map((response:any)=>{
                
                this.weather = new Weather(
                    response.location.name,
                    response.current.temperature,
                    response.current.wind_speed
                    )
                    
                return this.weather
            }))
    }
    public getWeather():Weather{
        return this.weather
    }

    // public setWeather(weather:Weather){
    //     this.weatherSubject.next(weather)
    //     this.weatherSubject.subscribe((response)=>{
    //         console.log(response)
    //     })
    // }

    // public getWeather():Weather{        

    // }
}