import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){
    // this.heroes.pop();
    this.heroeBorrado = this.heroes.shift() || '';
    // this.heroeBorrado.
    // console.log(heroeBorrado);
    // this.heroeBorrado = heroeBorrado;
  }

  constructor() { 
    console.log('Constructor');
  }
  
  ngOnInit(): void {
    console.log('ngOnit');
  }

}
