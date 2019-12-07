import { Routes } from '@angular/router'
import { CardsComponent } from './cards/cards.component'
import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component'
import { MessageComponent } from './message/message.component'
import { CardComponent } from './card/card.component'
import { Component } from '@angular/core'
export const ROUTES: Routes = [
    {
        path:'cards/:nomeProjeto',
        component:CardComponent
    },
    {
        path:'cards',
        component:CardsComponent
    },
    {
        path:'', redirectTo: 'home', pathMatch: 'full' 
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    },
    {
        path:'message',
        component: MessageComponent
    }
]