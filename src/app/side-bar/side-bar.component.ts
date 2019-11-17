import { Component, OnInit } from '@angular/core';
import { CONTENT_SIDEBAR } from './side-bar-content.mock' 


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public items:any[]
  constructor() { }

  ngOnInit() {
      this.items = CONTENT_SIDEBAR


}


}
