import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { NewsService } from '../services/news.service';
import { News } from 'src/shared/News';
import { Category } from 'src/shared/Category';
import { load } from '@angular/core/src/render3';
import { visibilidad} from '../animations/app.animations';
@Component({
  selector: 'app-news-category',
  templateUrl: './news-category.component.html',
  styleUrls: ['./news-category.component.scss'],
  animations: [visibilidad()]
})
export class NewsCategoryComponent implements OnInit {
  errorMsj: string;
  news: News;
  category: Category;
  myParam : Params;
  visibilidad = 'visible';
  constructor(private newsService: NewsService, private categoryService: CategoriesService ,private route: ActivatedRoute) { }
  
  ngOnInit() {
    
    this.route.params.pipe(switchMap((params: Params) => {
      this.visibilidad= 'oculto';
      this.myParam= params['id'];
      return this.newsService.getNewsByCategory(params['id'])})).subscribe(myNews => { this.news= myNews; this.getCategory(this.myParam);this.visibilidad= 'visible'}, errorMensaje=> this.errorMsj= <any>errorMensaje);
    }
    
    getCategory( id ){
      console.log("My Param", id);
      
      this.categoryService.getCategory(id).subscribe(myCategory => this.category = myCategory);
    }
    
  }
  