import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  pokemons = [{
    id: 1,
    nom: 'Bulbizarre',
    categorie: 'graine',
    type : ['plante', 'poison'],
    taille : 0.7,
    poids: 6.9

  },
    {
      id: 2,
      nom: 'Herbizarre',
      categorie: 'graine',
      type : ['plante', 'poison'],
      taille : 1.0,
      poids : 13.0

    },
    {
      id: 3,
      nom: 'Florizarre',
      categorie: 'graine',
      type : ['plante', 'poison'],
      taille : 0.7,
      poids : 6.9

    },
    {
      id: 4,
      nom: 'Salamèche',
      categorie: 'lézard',
      type : ['feu'],
      taille : 0.6,
      poids : 8.5

    }


  ];

  constructor() { }

  ngOnInit() {
  }

}
