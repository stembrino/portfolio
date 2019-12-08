import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http'
import { API_NEWS } from 'src/assets/util/api'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { News } from '../shared/news.mode'
import { map, retry, timeInterval } from 'rxjs/operators';
import { __core_private_testing_placeholder__ } from '@angular/core/testing'


@Injectable()
export class NewsService{
    
    public newsList:News[] = []

    constructor(private http: HttpClient){}

    public getNews():Observable<any>{ //
        const request = new HttpRequest('GET', API_NEWS,  {
            reportProgress: true
          });
          
        return this.http.request(request)
                
                
            
       
        
                
    }

}