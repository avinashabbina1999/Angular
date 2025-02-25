import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FoodPageComponent } from '../pages/food-page/food-page.component';
import { CartPageComponent } from '../pages/cart-page/cart-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search/:searchTerm',
        component: HomeComponent
    },
    {
        path: 'tag/:tag',
        component: HomeComponent
    },
    {
        path: 'food/:id',
        component: FoodPageComponent
    },
    {
        path: 'cart-page',
        component: CartPageComponent
    }
];
