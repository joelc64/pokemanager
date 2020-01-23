import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  private tabGenerations = ['GénérationI', 'GénérationII', 'GénérationIII', 'GénérationIV', 'GénérationV', 'GénérationVI', 'GénérationVII',
    'GénérationVIII'];

/*
private aujourdhui = new Date();
private unChiffre = '3.1415926';

unObjet = {
  identifiant: 2,
  couleur : 'blanc',
  age : 18

}
*/


  constructor() {
  }

  ngOnInit() {
  }


}
