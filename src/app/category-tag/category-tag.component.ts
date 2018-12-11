import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from 'src/shared/Category';

@Component({
  selector: 'app-category-tag',
  templateUrl: './category-tag.component.html',
  styleUrls: ['./category-tag.component.scss']
})
export class CategoryTagComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(myCategories => {  this.categories= myCategories; });
   
    
  }
}
