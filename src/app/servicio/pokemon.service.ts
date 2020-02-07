import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {PokeApi,PokemonDetails,Species} from '../../../src/interfaces';
import { Observable, throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
   baseUrl=`https://pokeapi.co/api/v2`;

   private _handleError(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error('A ocurrido un error: ', error.error.message);
    }else{
      console.error(`codigo backend ${error.status}` + `body was: ${error.error}`);
    }
    return throwError('Ha ocurrido un error inesperado.')
  }
  
  constructor(private http:HttpClient){
    console.log('POKÉAPP lista para comenzar su uso.');
   }

   getPokedex():Observable<PokeApi>{   
      return this.http.get<PokeApi>(`${this.baseUrl}/pokemon/?limit=151`)
      .pipe(catchError(this._handleError));
   }

   getPokemonDetails(id:string):Observable<PokemonDetails>{
     return this.http.get<PokemonDetails>(`${this.baseUrl}/pokemon/${id}`).pipe(catchError(this._handleError));
   }

   getPokemonSpecies(id:number):Observable<Species>{
     return this.http.get<Species>(`${this.baseUrl}/pokemon-species/${id}`).pipe(catchError(this._handleError));
   }
    
   getAreaPokemon(id:number):Observable<PokemonDetails>{
     return this.http.get<PokemonDetails>(`${this.baseUrl}/pokemon/${id}/encounters`).pipe(catchError(this._handleError));
   }
    
   buscarPokemon(termino:string){

   }
}






