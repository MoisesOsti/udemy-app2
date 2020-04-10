import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { OrdemCompraService } from '../ordem-compra-service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number;

  public formulario: FormGroup = new FormGroup({
    endereco: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
    numero: new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(20) ]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, [ Validators.required ])
  });

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('complemento').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();
    } else {

      const pedido: Pedido = new Pedido(
        this.formulario.get('endereco').value,
        this.formulario.get('numero').value,
        this.formulario.get('complemento').value,
        this.formulario.get('formaPagamento').value
      );
      this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((idPedido: number) => {
          this.idPedidoCompra = idPedido;
        });
    }

  }
}
