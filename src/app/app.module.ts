import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ROUTES } from './app.routes'
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//load progress bar
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
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';


import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import { AboutComponent } from './profile/about/about.component';

import { convertKmNos } from '../assets/util/pipes/convert-km-nos';
import { AccessComponent } from './access/access.component';
import { VirtualScrollerComponent } from './profile/virtual-scroller/virtual-scroller.component'
import { CrtificeteService } from './services/certificate.service';
import { ModalImgComponent } from './profile/virtual-scroller/modal-img/modal-img.component';
import { NewsService } from './services/news.service';
//Zorro
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ExperiencesComponent } from './profile/experiences/experiences.component';
import { ProfileService } from './services/profile.service';




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
    AboutComponent,
    convertKmNos,
    AccessComponent,
    VirtualScrollerComponent,
    ModalImgComponent,
    ExperiencesComponent
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
    HttpClientModule,
    VirtualScrollerModule,
    ProgressBarModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NzPaginationModule
  ],
  providers: [CrtificeteService, NewsService, { provide: NZ_I18N, useValue: en_US }, ProfileService  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
