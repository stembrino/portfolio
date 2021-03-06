import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service'
import { Profile } from '../shared/Profile.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: []
})
export class ProfileComponent implements OnInit {
  public profile: Profile
  public about:Array<any> = []

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this.profileService.getProfile()    
    this.about = this.profile.getNivelLanguagesProgramming()

  }

}
