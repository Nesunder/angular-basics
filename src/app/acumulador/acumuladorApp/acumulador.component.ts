import { Component } from "@angular/core";

@Component({
    selector: 'app-acumulador',
    templateUrl: './acumulador.component.html'
})

export class AcumuladorComponent {
  title: string = 'Acumulator App';
  numero: number = 3.5;
  base: number = 12;

  acumular(valor: number) {
    this.numero += valor;
  }

}
