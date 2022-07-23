import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CatalogeComponent} from "./cataloge/cataloge.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BurgerComponent} from "./burger/burger.component";
import {RouterModule, Routes} from "@angular/router";
import {ChickenComponent} from "./chicken/chicken.component";
import {RiceComponent} from "./rice/rice.component";
import {DrinksComponent} from "./drinks/drinks.component";
import {DessertComponent} from "./dessert/dessert.component";

const appRouters: Routes = [
  {path: '',component: ProductListComponent},
  {path: '1',component: BurgerComponent},
  {path: '2',component: ChickenComponent},
  {path: '3',component: RiceComponent},
  {path: '4',component: DrinksComponent},
  {path: '5',component: DessertComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogeComponent,
    ProductListComponent,
    BurgerComponent,
    ChickenComponent,
    RiceComponent,
    DrinksComponent,
    DessertComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
