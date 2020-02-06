import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss']
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // Recuperando parâmetros da rota com Snapshot
    console.log( this.route.snapshot.params.id );

    // Recuperando parâmetros da rota com Subscribe
    this.route.params.subscribe((parametro: any) => {
      console.log(parametro.id);
    });

  }

}
