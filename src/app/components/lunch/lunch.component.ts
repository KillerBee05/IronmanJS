import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lunch',
  styleUrls: ['../../styles/lunch.component.css'],
  templateUrl: './lunch.component.html',
})
export class LunchComponent implements OnInit {
  constructor() {  }
  tiles = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
  ngOnInit() {}
}
