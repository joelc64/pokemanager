import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  tabGenerations =['GénérationI','GénérationI','GénérationIII','GénérationIV','GénérationV','GénérationVI','GénérationVII'];



  constructor() { }

  ngOnInit() {
  }


}
