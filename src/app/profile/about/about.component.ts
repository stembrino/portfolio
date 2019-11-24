import { Component, OnInit, Input } from '@angular/core';
import { NivelProgramming } from 'src/app/shared/language.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() public about: Array<NivelProgramming>

  public nivelLength:Array<any> = new Array(5)  
  constructor() { }

  ngOnInit() {
    
    
  }

 

 
}
