import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DishesService {

    baseUrl: string = 'http://localhost:3000';

  constructor(
       private httpThang: HttpClient
  ) { }

  getDishes() {
  return this.httpThang.get(this.baseUrl + '/api/dishes');
}

  getIngredients() {
    return this.httpThang.get(this.baseUrl + '/api/ingredients');
  }

  getDishDetails(dishId: string) {
   return this.httpThang.get(
     this.baseUrl + '/api/dishes/' + dishId
   );
}

}
