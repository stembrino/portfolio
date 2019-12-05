import { Component, OnInit } from '@angular/core';
import { Certificate } from 'src/app/shared/certificate';
import { CrtificeteService } from 'src/app/services/certificate.service';

@Component({
  selector: 'app-virtual-scroller',
  templateUrl: './virtual-scroller.component.html',
  styleUrls: ['./virtual-scroller.component.css'],
  providers: [CrtificeteService]
})
export class VirtualScrollerComponent implements OnInit {
  public certificateList:Certificate[]
  public certificateClick:Certificate
  public clickModal:boolean = false
  constructor(private certificateService: CrtificeteService) { }

  ngOnInit() {
    this.certificateList = this.certificateService.getCertificates()
  }

  public chooseImage(certificate:Certificate):void{
    this.certificateClick = certificate
    this.clickModal=true
  }

}
