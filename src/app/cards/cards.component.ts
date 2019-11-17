import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../mock/projects.mock'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  
})
export class CardsComponent implements OnInit {
  public project:any
  public allProjects: boolean = false
  public projects: any[]

  constructor(public route: ActivatedRoute) { 
    this.projects = PROJECTS
  }

  ngOnInit() {
    
    
  }
  

}
