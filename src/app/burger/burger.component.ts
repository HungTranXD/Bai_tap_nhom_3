import {Component} from "@angular/core";
import {IProductList} from "../interfaces/product-list.interface";
import {HttpClient} from "@angular/common/http";
import {IBurger} from "../interfaces/burger.interface";

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html'
})

export class BurgerComponent{
  data : IBurger | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://foodgroup.herokuapp.com/api/category/1';
    this.http.get<IBurger>(url)
      .subscribe(value => {
        this.data = value;
      })
  }
}
