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

  public ofertas: Observable<Oferta[]>;

  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .debounceTime(1000) // Executa ação do switchMap após 1 segundo
      .distinctUntilChanged() // Para fazer pesquisas distintas
      .switchMap(
        (termo: string) => {
            
          if (termo.trim() === '') {
            return Observable.of<Oferta[]>([]);
          }
          return this.ofertasService.pesquisaOfertas(termo);
      })
      .catch((erro: any) => {
        return Observable.of<Oferta[]>([]);
      });

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
    this.subjectPesquisa.next(termoDaBusca);

  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }

}
