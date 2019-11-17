// export class Project {
//     private _id: number
//     private _name: string = ''
//     private _description: string = ''
//     private _subtitle: string = ''
//     private _img:string = ''
//     private _frameworks: FrameWork[] = []
//     private _languages: Language[] = []
    
//     constructor(){}

    
//     public set id(id : number) {
//         this._id = id;
//     }

//     public set name(name: string){
//         this._name = name
//     }

//     public set description(description: string){
//         this._description = description 
//     }

//     public set subtitle(subtitle: string){
//         this._subtitle = subtitle 
//     }

//     public set img(img: string){
//         this._img = img 
//     }

//     public addFrameworks(framework: string){  

//         this._frameworks.push(new FrameWork(framework))        
       
//     }
    
//     public addLanguages(language:string){
//         this._languages.push(new Language(language))
//     }

//     public get id():number{
//         return this._id
//     }

//     public get name():string{
//         return this._name
//     }

//     public get img():string{
//         return this._img
//     }

//     public get description(): string{
//         return this._description
//     }

//     public get subtitle(): string{
//         return this._subtitle
//     }

//     public get frameworks(): FrameWork[]{
//         return this._frameworks
//     }

//     public get languages(): Language[]{
//         return this._languages
//     }

// }