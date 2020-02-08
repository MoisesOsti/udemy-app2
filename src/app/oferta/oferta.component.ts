import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public id: number
  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {

    // Recupera o id através da rota
    this.id = this.route.snapshot.params.id

    this.ofertasService.getOfertaPorId(this.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      })

    // Recuperando parâmetros da rota com Snapshot
    // console.log( this.route.snapshot.params.id );

    // Recuperando parâmetros da rota com Subscribe
    this.route.params.subscribe((parametro: any) => {
      // console.log(parametro.id);
    });

  }

}
