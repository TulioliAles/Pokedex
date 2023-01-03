import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  pokemons = [
    {nome: "Bulbasaur", imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"},
    {nome: "Ivysaur", imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png"},
    {nome: "Venusaur", imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png" }
  ];
 }
