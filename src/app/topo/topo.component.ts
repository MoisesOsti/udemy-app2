import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pesquisa(termoDaBusca: string): void {
    //console.log(( <HTMLInputElement>event.target ).value)
    console.log(termoDaBusca)
  }

}
