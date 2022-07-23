import {Component} from "@angular/core";
import {ICataloge} from "../interfaces/cataloge.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cataloge',
  templateUrl: './cataloge.component.html'
})

export class CatalogeComponent {
  data: ICataloge | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://foodgroup.herokuapp.com/api/menu';
    this.http.get<ICataloge>(url)
      .subscribe(value => {
        this.data = value;
      })

  }
}
