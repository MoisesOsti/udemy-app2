import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertasService } from './../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = ''

  constructor (
    private ofertasService: OfertasService,
    private route: ActivatedRoute) 
  { }

  ngOnInit() {
    // console.log('Id da rota pai: ', this.route.parent.snapshot.params['id'])
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((ondeFica: string) => {
        this.ondeFica = ondeFica
      })
  }

}
