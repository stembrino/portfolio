import { Injectable } from '@angular/core'
import { FirebaseStorage } from '@angular/fire'

@Injectable()
export class HomeService{
    private keyLanguageEn:string = 'https://firebasestorage.googleapis.com/v0/b/porfolio-fabio.appspot.com/o/CV-Europass-FabioCarvalho-ENGLISH.pdf?alt=media&token=338199a0-547b-43e7-90b3-9705cded4145'
    private keyLanguagePt:string = 'https://firebasestorage.googleapis.com/v0/b/porfolio-fabio.appspot.com/o/CV-Europass-FabioCarvalho-PORTUGUES.pdf?alt=media&token=a6cc3364-173f-49ec-bfd8-c6606faa9131'
    constructor(){}

    public getLanguageEn():string{
        return this.keyLanguageEn
    } 

    public getLanguagePt():string{
        return this.keyLanguagePt
    } 


    
}