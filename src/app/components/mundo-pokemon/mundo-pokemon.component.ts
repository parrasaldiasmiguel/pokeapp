import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../servicio/pokemon.service';
import {PokeApi,Results,PokemonDetails} from 'src/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mundo-pokemon',
  templateUrl: './mundo-pokemon.component.html'
})
export class MundoPokemonComponent implements OnInit {
  // this apunta hacia las variables creadas dentro de la clase.
  cargaPokemon:boolean;
  pokemons:PokeApi;
  pokemon:string;
  pokeid:string;
  detallePokemon:string;

  
  
  constructor(private _pokedex:PokemonService, private _router:Router) { }

  ngOnInit() {  
   this.cargaPokemon=false;
    this.getPokemons();
}

getPokemons():void{
this._pokedex.getPokedex().subscribe((data:PokeApi)=>{
   //console.log(data)
   this.pokemons=data;
  
    if(this.pokemons.results && this.pokemons.results.length>0){
     this.pokemons.results.forEach(pokemon =>{
     pokemon.id=pokemon.url.split('/')[pokemon.url.split('/').length -2 ];
     
     
     this.getPokeDetails(pokemon);
     this.getPokemonType(pokemon);
   
    });
      
    }
 
 });
  }

     getPokeDetails(pokemon:Results):void{
      console.log(pokemon);
         this._pokedex.getPokemonDetails(pokemon.id).subscribe((data:PokemonDetails)=>{
        pokemon.details=data;
       
       if(pokemon.id === '151'){
         this.cargaPokemon=true;
         }
      });
    
      }

      getPokemonType(pokemon:Results):void{
      this._pokedex.getPokemonDetails(pokemon.id).subscribe((data:PokemonDetails)=>{
        pokemon.details.types=data.types;
        pokemon.details.moves=data.moves;
     
        if(pokemon.id === '151'){
          this.cargaPokemon=true;
          }

       });
      }

      verPokemon(method:any){
       // console.log(method.details);
        this._router.navigate(['/pokemon',method.id])
      
      }


}