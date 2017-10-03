import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dishInfo: any = {};

    ingredients: any[] = [];

  constructor(
        private activatedThang: ActivatedRoute,
        private dishThang: DishesService,
        private routerThang: Router
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe((myParams) => {
                      // { path: 'phone/:phoneId'
    this.dishThang.getDishDetails(myParams.dishId)
     .subscribe(
    (dishFromApi) => {
        this.dishInfo = dishFromApi;
    }
  );
});

this.dishThang.getIngredients()
.subscribe(
(ingFromApi: any[]) => {
  console.log(ingFromApi);
  this.ingredients = ingFromApi;
}
);

  }

}
