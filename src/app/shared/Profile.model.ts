import { Experience } from './Experience.model'
import { NivelProgramming } from './language.model'

export class Profile {
    
    private nivelLanguagesProgramming: NivelProgramming[] = []
    private experiences: Experience[]=[]

    constructor(
        public name:string,
        public description: string,
        // public experiences:Experience[]        
        ){
    }
   
    public addNivelLanguagesProgramming(nome:string, logo: string, isFrameWork:boolean, nivel:number):Array<NivelProgramming>{
        this.nivelLanguagesProgramming.push(new NivelProgramming(nome,logo,isFrameWork,nivel))

        return this.nivelLanguagesProgramming
    }

    public getNivelLanguagesProgramming(): Array<NivelProgramming>{
        return this.nivelLanguagesProgramming;
    }

    public addExperiences(organizationName:string, image:string, address:string, position:string, programmingLanguages: string, description:string, startDate:string, finishDate:string): Array<Experience>{
        this.experiences.push(
            new Experience(organizationName, image, address, position, programmingLanguages, description, startDate, finishDate)
        )
        return this.experiences
    }
   
}