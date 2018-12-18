import { Component, OnInit } from '@angular/core';
import { MyNewsService } from '../services/my-news.service';
import { News } from 'src/shared/News';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteNews: News;
  _category;
  constructor(private favoriteService: MyNewsService, private categoryService: CategoriesService) { }

  ngOnInit() {
    this.favoriteService.getFavoritesNews().subscribe( myFavorite => {  this.favoriteNews = myFavorite;  console.log("Mis favorites",myFavorite);
    });
  }

  myCategory(id): string{
    
    this.categoryService.getCategory(id).subscribe(thisCategory=> console.log(thisCategory));
    
    return this._category;
    
  }
 
}
