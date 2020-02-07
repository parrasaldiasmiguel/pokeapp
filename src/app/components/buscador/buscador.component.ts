import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../servicio/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails} from '../../../interfaces';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  pokemonArr:any;
  termino:string;
  constructor(private _pokedex:PokemonService, 
  private _ActivatedRoute:ActivatedRoute) { }
 
  ngOnInit() {  
    this._ActivatedRoute.params.subscribe(data=>{
      this.termino=data['termino'];
      this.pokemonArr=this._pokedex.buscarPokemon(this.termino);
    });
  }


  

}
