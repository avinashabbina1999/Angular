import { Component } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../shared/models/CartItem';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../services/food/food.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  imports: [NgFor,RouterLink,CurrencyPipe,NgIf,NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!:Cart
  constructor(private cartService: CartService){ 
    this.setCart()
  }

  setCart(){
    this.cart = this.cartService.getCart()
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id)
    this.setCart()
  }

  changeQuantity(cartItem: CartItem,quantity:string){
    this.cartService.changeQuantity(cartItem.food.id,parseInt(quantity))
    this.setCart()
  }
}
