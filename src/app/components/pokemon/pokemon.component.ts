import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../../servicio/pokemon.service';
import { PokemonDetails, Species } from 'src/interfaces';




@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
   pokemons:PokemonDetails;
   onlyPokemon:any={};

  constructor(private pokedex:PokemonService,private _ActivatedRoute:ActivatedRoute) { 

  }

  ngOnInit() {        
    this.getDetallePokemon();
  }

  getDetallePokemon(){
    this._ActivatedRoute.params.subscribe(data=>{       
    this.pokedex.getPokemonDetails(data['id']).subscribe((data:PokemonDetails)=>{
    this.pokemons=data;
    this.pokemons.id=data.id;
    console.log(this.pokemons)
    this.getPokeSpecies(this.pokemons);
    this.getAreaPoke(this.pokemons);
    });
      });
 
    }


    getPokeSpecies(pokemon:PokemonDetails):void{
      //console.log(pokemon.id)
      this.pokedex.getPokemonSpecies(pokemon.id).subscribe((data:Species)=>{
    // console.log(data);
      this.onlyPokemon=data;});
    }

    getAreaPoke(pokemon:PokemonDetails):void{
        this.pokedex.getAreaPokemon(pokemon.id).subscribe((data:PokemonDetails)=>{
          console.log(data);

          if(data !=null){
           
          }
          else{

          }

        })
    }

 

}
