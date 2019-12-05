import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Certificate } from '../shared/certificate'
import { CERTIFICATE } from '../mock/certificate.mock'

@Injectable()
export class CrtificeteService{
    private certificates:Array<Certificate> = []

    constructor(){}

    public getCertificates():Array<Certificate>{
        
        CERTIFICATE.forEach((certificate)=>{
            this.certificates.push(new Certificate(certificate.name, certificate.description, certificate.date, certificate.image))
        })

        return this.certificates
    }

    
}