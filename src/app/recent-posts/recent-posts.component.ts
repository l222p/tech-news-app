import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service'
import { News } from 'src/shared/News';
@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {
  
  recentPosts: News[];
  
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    console.log("perros");
    
    this.newsService.getRecentNews().subscribe(images => this.recentPosts= images);
  }

}
