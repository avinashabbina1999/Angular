import { Component, Input } from '@angular/core';
import { Tag } from '../../shared/models/Tag';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../services/food/food.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tags',
  imports: [RouterLink,NgIf,NgFor],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

  tags?: Tag[]
  @Input() foodPageTags?: string[]
  
  constructor(private foodSerive: FoodService){}

  ngOnInit(): void{
    if(!this.foodPageTags)
      this.tags = this.foodSerive.getAllTags()
  }
}
