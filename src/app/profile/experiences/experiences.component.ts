import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/shared/Profile.model';

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

}
