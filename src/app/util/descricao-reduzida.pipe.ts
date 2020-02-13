import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {
    transform(texto: string, trumcarEm: number): string {
        if (texto.length > trumcarEm) {
            return texto = texto.substr(0, trumcarEm) + '...';
        }
        return texto;
    }
}
