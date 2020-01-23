import { Component, OnInit } from '@angular/core';
import {TableauAffichageService} from '../../services/tableau-affichage.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {





  p;
  private pokemons;

  constructor(private service: TableauAffichageService) {

  }
  tabPok(){

    this.pokemons = this.service.tabPok();
  }

  ngOnInit() {
    this.tabPok();
  }

}
