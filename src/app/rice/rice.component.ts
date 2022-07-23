import {Component} from "@angular/core";
import {IProductList} from "../interfaces/product-list.interface";
import {HttpClient} from "@angular/common/http";
import {IBurger} from "../interfaces/burger.interface";

@Component({
  selector: 'app-rice',
  templateUrl: './rice.component.html'
})

export class RiceComponent {
  data : IBurger | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://foodgroup.herokuapp.com/api/category/3';
    this.http.get<IBurger>(url)
      .subscribe(value => {
        this.data = value;
      })
  }
}
