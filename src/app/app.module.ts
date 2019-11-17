import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//components
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { PainelCenterComponent } from './painel-center/painel-center.component';
import { CardsComponent } from './cards/cards.component';
import { TooltipModule } from 'primeng/tooltip';
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { CardComponent } from './card/card.component';

//PrimeNG
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuModule} from 'primeng/menu';
import {CardModule} from 'primeng/card';

import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import { AboutComponent } from './profile/about/about.component';





@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    PainelCenterComponent,
    CardsComponent,
    HomeComponent,
    ProfileComponent,
    MessageComponent,
    CardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    ButtonModule,
    PanelMenuModule, 
    MenuModule,
    BrowserAnimationsModule,
    CardModule,
    TooltipModule,
    ScrollPanelModule,
    TabViewModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
