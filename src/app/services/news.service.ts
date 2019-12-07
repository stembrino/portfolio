import { HttpClient } from '@angular/common/http'
import { API_NEWS } from 'src/assets/util/api'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { News } from '../shared/news.mode'
import { map, retry, timeInterval } from 'rxjs/operators';

@Injectable()
export class NewsService{
    public newsList:News[] = []

    constructor(private http: HttpClient){}

    public getNews():Observable<any>{
            return this.http.get(API_NEWS)            
            
       
        
                
    }

}