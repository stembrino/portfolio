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
        

        const profile = new Profile()

        PROFILE.EXPERIENCES.forEach((experience)=>{
            
            profile.addExperiences( 
                experience.id,           
                experience.nomeEmpresa,
                experience.imagem,
                experience.localidade,
                experience.cargo,
                experience.programacao,
                experience.descricao,
                experience.dataInicio,
                experience.dataTermino,
                experience.area,
                experience.open,
                experience.iconType,
                )
            
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