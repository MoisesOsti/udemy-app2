import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';

import { OfertasService } from './../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .switchMap(
        (termo: string) => {
            console.log("Requisição Http para api")
            return this.ofertasService.pesquisaOfertas(termo)
         })

    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas)
    })
  }

  public pesquisa(termoDaBusca: string): void {
    // console.log(( <HTMLInputElement>event.target ).value)
    // console.log(termoDaBusca)
    
    /*
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
    
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log('Erro Status ', erro.status),
      () => console.log("Finalizado com sucesso")
    )
    */
    console.log("keyup caracter: ", termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)

  }

}
