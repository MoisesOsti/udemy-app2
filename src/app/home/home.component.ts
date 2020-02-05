import { Component, OnInit } from '@angular/core';

import { OfertasService } from './../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasServices: OfertasService) {

  }

  ngOnInit() {
    // this.ofertas = this.ofertasServices.getOfertas();
    // console.log(this.ofertas);

    this.ofertasServices.getOfertas()
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas; }// ,
      // (param: any) => { console.log(param) }
      )
    .catch((param: any) => {
      console.log(param);
    });
  }

}
