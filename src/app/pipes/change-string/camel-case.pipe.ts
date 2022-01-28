import { Pipe, PipeTransform } from '@angular/core';

// Esse decorator @Pipe tem o objetivo de transformar os dados antes de ser exibido ao usuário
@Pipe({
  name: 'camelCase' // Nome do pipe, igual o selector
})
// Temos que implementar a interface PipeTransform para sobrescrever o método transform()
export class CamelCasePipe implements PipeTransform {

  // Método que vai transformar o valor em alguma outra coisa, neste caso vai transforma o valor recebido em Camel Case
  transform(value: any, ...args: any[]): any {
    let values = value.split(' ');
    let result = '';

    for (let v of values) {
      result += this.capitalize(v) + ' ';
    }

    return result;
  }

  capitalize(value: string) {
    return value.substring(0, 1).toUpperCase() +
      value.substring(1).toLowerCase();
  }

}
