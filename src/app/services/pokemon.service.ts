import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/pokemonData';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokeApi:string = ""
  private pokemon:PokemonData | any


  constructor(private http:HttpClient) {
    this.pokeApi = environment.apiUrl
   }

   getPokemonName(name:string):Observable<PokemonData>{
    this.pokemon = this.http.get<PokemonData>(`${this.pokeApi}${name}`)
    return this.pokemon
}
}
