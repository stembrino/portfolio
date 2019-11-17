
export class NivelProgramming{    
    public nivel:number

    constructor(
    public name: string,
    public logo: string,
    public isFrameWork: boolean,
    nivel:number
    ){
        if(nivel<0 || nivel >5){
            console.log('o nível tem que ser entre 0 e 5')
        }else{
            this.nivel = nivel
        }
    }
}