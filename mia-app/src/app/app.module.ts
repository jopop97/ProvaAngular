import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTopBar } from './top/app-top-bar.component';
import { AppList } from './list/app-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBar,
    AppList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,AppList]
})
export class AppModule { }
