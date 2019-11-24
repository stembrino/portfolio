import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Profile } from '../shared/Profile.model'
import { PROFILE } from '../mock/profile.mock'
import { Experience } from '../shared/Experience.model'
import { PROGRAMMING_LANGUAGES } from '../mock/profile.mock'
import { ROUTE_IMG_LANGAGES } from '../../assets/util/imgroute'

@Injectable()
export class ProfileService{
    private experiences:Experience[] = []
    constructor(private http: HttpClient){}

    public getProfile(): Profile{
        //sumulando um pedido http, porém seria utilizando um arequisicao com http e retornaria um promise ou um Observable
        
        
        const profile = new Profile(PROFILE.nome, PROFILE.descricao)

        PROFILE.EXPERIENCES.forEach((experience, i)=>{
            profile.addExperiences(            
                experience.nomeEmpresa,
                experience.imagem,
                experience.localidade,
                experience.cargo,
                experience.programacao,
                experience.descricao,
                experience.dataInicio,
                experience.dataTermino)
            
        })        

        PROGRAMMING_LANGUAGES.forEach((nivelLanguage, i)=>{
         
          profile.addNivelLanguagesProgramming(nivelLanguage.nome, 
                                                ROUTE_IMG_LANGAGES  + nivelLanguage.logo +'.png',
                                                nivelLanguage.isFrameWork, 
                                                nivelLanguage.nivel
                                                )        
        })

        return profile
    }

}