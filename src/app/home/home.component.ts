import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../shared/news.mode';
import { HttpEventType } from '@angular/common/http'
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [],
  animations: [
    trigger('animation-news', [
      state('create', style({opacity: 1})),
      transition('void => create', [
        style({opacity: 0, transform: 'translate(100px, 0)'}), //x e y // estilo do void
        animate('2s 3s ease-in-out') //duracao, delay, aceleracao (ease)
      ])
    ]),
    trigger('animation-news-page', [
      state('create', style({opacity: 1})),
      transition('void => create', [
        style({opacity: 0, transform: 'translate(100px, 0)'}), //x e y // estilo do void
        animate('1s ease-in-out') //duracao, delay, aceleracao (ease)
      ])
    ]),
    trigger('animation-title-news', [
      state('create', style({opacity: 1})),
      transition('void => create', [
        style({opacity: 0, transform: 'translate(100px, 0)'}), //x e y // estilo do void
        animate('2s ease-in-out') //duracao, delay, aceleracao (ease)
      ])
    ]),
    trigger('animation-content-news', [
      state('create', style({opacity: 1})),
      transition('void => create', [
        style({opacity: 0, transform: 'translate(100px, 0)'}), //x e y // estilo do void
        animate('2s 1.9s ease-in-out') //duracao, delay, aceleracao (ease)
      ])
    ]),
    
    
  ]
})
export class HomeComponent implements OnInit {
  public newsList:News[] = []
  constructor(private newService:NewsService) { }
  public imgNewsModal:string = ''
  public contentNewsModal:string = ''
  public url:string = ''
  public loaded:number = 0
  public state:string="create"
  public numberOfItemPage = 3
  public page:News[]=[]
  public closeBar:boolean = false
  ngOnInit() {
    

    this.newService.getNews()
      .subscribe((event:any)=>{
        if (event.type === HttpEventType.DownloadProgress) {
            this.loaded = Math.round(event.loaded/event.total*100)
            if(this.loaded === 100){
              setTimeout(()=>{
                this.closeBar=true
              },1500 )
            }
        }
        if (event.type === HttpEventType.Response) {
          event.body.articles.forEach((element) => {
            this.newsList.push(new News(
              element.title, element.content, element.description,
              element.urlToImage, element.url          
            ))
            }); 
            //iniciar com 5 primeiras notícias
            this.page = this.newsList.slice(0, this.numberOfItemPage)
        }

      
      })

  

  }

  public openModalNews(img, content, url){
    this.imgNewsModal = img
    this.contentNewsModal = content
    this.url = url
  }


  public testAlert(numberOfPage){
    
    const start = (numberOfPage-1)*this.numberOfItemPage
    const end =  numberOfPage*this.numberOfItemPage
    this.page = this.newsList.slice( start, end)
    
  }



  
  
  
  
  

}
