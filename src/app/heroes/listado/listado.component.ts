import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Black Widow']; 
  heroeBorradoString: string = ''

  borrarHeroe() {
    console.log("Borrando");
    this.heroeBorradoString = this.heroes.pop() || ''
  }

  agregarHeroe(nombre: string): void {
    console.log("Borrando");
    this.heroes.push(nombre)  
  }

}
