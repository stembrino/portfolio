export class Experience{
    constructor(
        public organizationName:string,
        public image:string,
        public address:string,
        public position:string,
        public programmingLanguages: string[],        
        public description:Array<string>,
        public startDate:string,
        public finishDate:string,
        public area:string
    ){

    }
}