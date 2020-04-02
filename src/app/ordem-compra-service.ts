import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { URL_API } from './app.api';
import { Pedido } from './shared/pedido.model';

@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) {
    }

    public efetivarCompra(pedido: Pedido): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders()
        };
        httpOptions.headers.set('Content-Type', 'application/json');

        return this.http.post(
            `${URL_API}/pedidos`,
            pedido,
            httpOptions
        ).map((resposta: Response) => resposta['id'] );
    }
}
