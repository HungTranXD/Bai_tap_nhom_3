import {Component} from "@angular/core";
import {IProductList} from "../interfaces/product-list.interface";
import {HttpClient} from "@angular/common/http";
import {IBurger} from "../interfaces/burger.interface";

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html'
})

export class DessertComponent {
  data : IBurger | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://foodgroup.herokuapp.com/api/category/5';
    this.http.get<IBurger>(url)
      .subscribe(value => {
        this.data = value;
      })
  }
}
