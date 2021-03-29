import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // tabs = [{ header: 'conversation', content: 'conversation' }, { header: 'contacts', content: 'contacts' }]
  date = new Date();
  sidebar_items = [
    {
      item: 'first', content: [{ first: 'abc' }, { second: 'ssss' }, { first: 'abc' }, { second: 'ssss' },
      { first: 'abc' }, { first: 'abc' }, { second: 'ssss' }, { first: 'abc' }, { first: 'abc' }, { first: 'abc' }, { second: 'ssss' }, { first: 'abc' }, { first: 'abc' }, { first: 'abc' }, { second: 'ssss' }, { first: 'abc' }]
    },
    { item: 'first', content: [{ first: 'ssss' }, { second: 'ssss' }, { first: 'ffff' }] },
    { item: 'first', content: [{ first: 'abc' }, { second: 'ssss' }, { first: 'ssss' }] },
    { item: 'first', content: [{ first: 'abc' }, { second: 'ssss' }, { first: 'ffff' }] },
    // { item: 'second', content: 'ddd' },
    // { item: 'third', content: 'gggg' },
    // { item: 'fourth', content: 'ffffff' },
  ]
  detailContent: any;
  selectedRow: any;
  constructor() {

  }

  ngOnInit(): void {
  }
  getRowValue(item, index) {
    console.log('item', item);
    console.log('index', index);
    this.detailContent = this.sidebar_items[index].content;
    this.selectedRow = index;
  }
}
