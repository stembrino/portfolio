import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/shared/Profile.model';
import { NzIconModule } from 'ng-zorro-antd/icon';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  public profile: Profile
  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this.profileService.getProfile()  
  }

  public openContentCard(id):void{    
    const cardCliecked = this.profile.experiences.find(obj => obj.id === id)
    cardCliecked.open = !cardCliecked.open

    cardCliecked.iconType = cardCliecked.open? 'minus-circle' : 'plus-circle'
  
  }

  public sendGoogleMaps(linkLocation):void{
    // window.open(linkLocation, '_blank');
  }


}
