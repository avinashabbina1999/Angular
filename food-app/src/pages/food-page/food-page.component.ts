import { Component } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/food/food.service';
import { CurrencyPipe,NgFor, NgIf } from '@angular/common';
import { TagsComponent } from '../tags/tags.component';
import { CartService } from '../../services/cart/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  imports: [NgFor,TagsComponent,CurrencyPipe,NgIf,NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!: Food

  constructor(private route: ActivatedRoute,private foodService: FoodService,private cartService: CartService,private router: Router){
    this.route.params.subscribe(params=>{
      if(params['id']){
        this.food = this.foodService.getFoodById(parseInt(params['id']))
      }
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }

}
