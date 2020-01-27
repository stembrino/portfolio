export class Experience{
    constructor(
        public id:number,
        public organizationName:string,
        public image:string,
        public address:string,
        public position:string,
        public programmingLanguages: string[],        
        public description:Array<string>,
        public startDate:string,
        public finishDate:string,
        public area:string,
        public open:boolean,
        public iconType:string,
    ){

    }
}