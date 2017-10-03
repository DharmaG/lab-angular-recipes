import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dishes: any[] = [];



  constructor(
    private dishThang: DishesService
  ) { }

  ngOnInit() {
    this.dishThang.getDishes()
      .subscribe(
        (dishFromAPi: any[]) => {
          console.log(dishFromAPi);
          this.dishes = dishFromAPi;
        }
      );



  }

}
