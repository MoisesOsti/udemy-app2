import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertasService } from './../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = ''

  constructor (
      private ofertasService: OfertasService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log('Id da rota pai: ', this.route.parent.snapshot.params)
    this.ofertasService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
      .then((descricao: string) => {
        this.comoUsar = descricao
      })
  }

}
