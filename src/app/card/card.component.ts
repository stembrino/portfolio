import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../mock/projects.mock'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public project:any
  public allProjects: boolean = false
  public projects: any[]
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    const param = this.route.params.subscribe((response:any)=>{      
      //futuro service
      this.allProjects = response.nomeProjeto === 'all'? true:false
      console.log(this.allProjects) 
      PROJECTS.forEach(project=>{
        if(project.name.toLowerCase() === response.nomeProjeto.toLowerCase()){
          this.project = project
          console.log(this.project)
        }
      })
    })

  }


  public navigateToSite(project:string){
    window.open(project, '_blank');
  }
  

}
