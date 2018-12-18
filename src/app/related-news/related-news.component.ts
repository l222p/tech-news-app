import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from 'src/shared/News';

@Component({
  selector: 'app-related-news',
  templateUrl: './related-news.component.html',
  styleUrls: ['./related-news.component.scss']
})
export class RelatedNewsComponent implements OnInit {
  myNews: News;
  relatedNews: News;
  @Input() categoryId: string;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getCategoriesLimit(this.categoryId);
  }


  getCategoriesLimit(id){
    console.log("limit",id);
    
    this.newsService.getCategoryWithLimit(id).subscribe(relatedNews => {  this.relatedNews= relatedNews; console.log("related", relatedNews);
     });
    
  }
}
