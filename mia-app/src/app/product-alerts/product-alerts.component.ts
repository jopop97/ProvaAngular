import { Component, Input,OnInit } from '@angular/core';
import { Item } from 'src/item';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {

  @Input() product : Item;
  @Output() notify = new EventEmitter();

  constructor(){
    this.product = Item.prototype; 
  }
  
  ngOnInit() {
  }

}
