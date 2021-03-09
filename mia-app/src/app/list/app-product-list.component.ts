import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ITEMS } from '../../items';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.css']
})

export class AppList {
    items = ITEMS;
    attivo = false;
    nome = " ";

    condividi(item: string){
      this.attivo = true
      this.nome = item;
    }

    reset(){
      this.attivo = false;
    }

    aggiungi() {
      window.alert("Aggiungi elemento");
      
    }

    onNotify() {
      window.alert('You will be notified when the product goes on sale');
    }

}