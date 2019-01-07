import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service'
import { News } from 'src/shared/News';
import { CategoriesService } from '../services/categories.service';
import { Category } from 'src/shared/Category';
@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {
  
  recentPosts: News[];
  myCategory: Category;
  
  constructor(private newsService: NewsService, private categoryService: CategoriesService) { }

  ngOnInit() {
    console.log("perros");
    
    this.newsService.getRecentNews().subscribe(news => this.recentPosts= news);
  }
   myFuncion(id){
    this.categoryService.getCategory(id).subscribe(category => this.myCategory= category);
    return this.myCategory.name;
  }

}
