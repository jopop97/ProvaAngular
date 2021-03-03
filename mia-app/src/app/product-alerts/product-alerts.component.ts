import { Component, Input,OnInit } from '@angular/core';
import { Item } from 'src/item';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {

  @Input() product : Item;


  constructor(){
    this.product = Item.prototype;
  }

  ngOnInit() {
  }

}
