import { Component } from '@angular/core';

import { ITEMS } from '../../items';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html'
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
}