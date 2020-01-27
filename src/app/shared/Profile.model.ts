import { Experience } from './Experience.model'
import { NivelProgramming } from './language.model'

export class Profile {
    
    public nivelLanguagesProgramming: NivelProgramming[] = []
    public experiences: Experience[]=[]

    constructor(){
    }
   
    public addNivelLanguagesProgramming(nome:string, logo: string, isFrameWork:boolean, nivel:number):Array<NivelProgramming>{
        this.nivelLanguagesProgramming.push(new NivelProgramming(nome,logo,isFrameWork,nivel))

        return this.nivelLanguagesProgramming
    }

    public getNivelLanguagesProgramming(): Array<NivelProgramming>{
        return this.nivelLanguagesProgramming;
    }

    public addExperiences(id:number,organizationName:string, image:string, address:string, position:string, programmingLanguages: string[], description:string[], startDate:string, finishDate:string, area:string, open:boolean, iconType:string ): Array<Experience>{
        this.experiences.push(
            new Experience(id ,organizationName, image, address, position, programmingLanguages, description, startDate, finishDate, area, open, iconType)
        )
        return this.experiences
    }
   
}