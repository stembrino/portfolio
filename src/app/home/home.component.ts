import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../shared/news.mode';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {
  public newsList:News[] = []
  constructor(private newService:NewsService) { }

  ngOnInit() {
    
    this.newService.getNews()
    .subscribe((response:any)=>{
      response.articles.forEach((element) => {
          this.newsList.push(new News(
              element.title, element.content, element.description,
              element.urlToImage          
            ))
      }); 
       console.log(this.newsList)
    })

       
      
  }

}
