import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Certificate } from 'src/app/shared/certificate';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styleUrls: ['./modal-img.component.css']
})
export class ModalImgComponent implements OnChanges {
  @Input() public certificateClick:Certificate
  public certificate:Certificate 
  private maitenance:string = 'assets/images/maintenance.png'
  constructor() { 
    this.certificate = new Certificate('','','','')
  }

  
  ngOnChanges(){
    this.certificate.name = this.certificateClick.name
    this.certificate.description = this.certificateClick.description
    this.certificate.date = this.certificateClick.date    
    this.certificate.image = this.certificateClick.image === 'none'? this.maitenance : `assets/images/certificates/${this.certificateClick.image}.jpg`

  }

}
