import { Component } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { NgFor, NgIf } from '@angular/common';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-home',
  imports: [NgFor,SearchComponent,TagsComponent,RouterLink,NgIf,NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods: Food[] = []

  constructor(private foodService: FoodService,private route: ActivatedRoute){}

  ngOnInit(): void{
    this.route.params.subscribe(params=>{
      if(params['searchTerm']){
        this.foods = this.foodService.getAllFoodsBySearch(params['searchTerm'])
      }else if(params['tag']){
        this.foods = this.foodService.getAllFoodsByTag(params['tag'])
      }else{
        this.foods = this.foodService.getAll()   
      }
    })
  }
}
