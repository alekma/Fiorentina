import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = [
    {
      name: 'Margarita',
      ingredients: ['sos pomidorowy', 'ser', 'oregano'],
      price: '22 zł',
    },
    {
      name: 'Fungi',
      ingredients: ['pieczarki', 'cebula'],
      price: '26 zł',
    },
    {
      name: 'Vesuvio',
      ingredients: ['szynka', 'cebula'],
      price: '26 zł'
    },

  ];
  constructor() {}

  ngOnInit() {}
}

