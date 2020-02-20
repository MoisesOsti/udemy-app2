import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  // Controle de validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  // Estados primitivos dos campos (pristine)
  public enderecoPrimitivo: boolean = true;
  public numeroPrimitivo: boolean = true;
  public complementoPrimitivo: boolean = true;
  public formaPagamentoPrimitivo: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string) : void {
    this.endereco = endereco;

    this.enderecoPrimitivo = false;
    
    // Se string > que 3
    if (this.endereco.length > 3){
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;

    this.numeroPrimitivo = false;
    
    // Se string possuir 1 ou mais caracteres
    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    this.complementoPrimitivo = false;
    
    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoPrimitivo = false;
    
    if (formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }

}
