import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  // private tempoObservableSubscription: Subscription
  // private meuObservableTesteSubscription: Subscription

  public id;
  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {

    // Recupera o id através da rota
    // this.id = this.route.snapshot.params.id;
    
    this.id = this.route.params.subscribe((parametros: Params) => {
      
      this.ofertasService.getOfertaPorId(parametros.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });

    })

    // Recuperando parâmetros da rota com Snapshot
    // console.log( this.route.snapshot.params.id );

    /*
    // Recuperando parâmetros da rota com Subscribe
    this.route.params.subscribe(
      (parametro: any) => { console.log( parametro ) },
      (erro: any) => { console.log(erro) },
      () => { console.log("Processamento foi classificado como concluído!") }
      )
    */

    /*
    // Utilização do método Interval
    let tempo = Observable.interval(2000)

    this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
      console.log(intervalo)
    })
    */

    // Observable (observável)
    /*
    let meuObservableTeste = Observable.create((observer: Observer<number>) => {
      // observer.next('Primeiro evendo da stream')
      // observer.next('Segundo evendo da stream')
      observer.next(1)
      observer.next(2)
      // observer.error('Algum erro foi encontrado na stream de eventos')
      observer.complete()
      observer.next(3)
    })
    */

    // Observable (Observador)
    /*
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
      (resultado: number) => console.log(resultado * 10),
      (erro: string) => console.log(erro),
      () => console.log('Stream de eventos foi finalizada')
    )
    */
  }

  ngOnDestroy() {
    // this.meuObservableTesteSubscription.unsubscribe()
    // this.tempoObservableSubscription.unsubscribe()
  }

}
