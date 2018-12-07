import { Component, OnInit } from '@angular/core';
import { News } from 'src/shared/News';
import { Params, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../services/news.service'
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: News;
  errorMsj: string;
  constructor(private newsService: NewsService, private route: ActivatedRoute, private myLocation: Location ) { }

  ngOnInit() {
    let myId = this.route.snapshot.params["id"];
    

    this.route.params.pipe(switchMap((params: Params) => {
      
      return this.newsService.getNews(params['id'])})).subscribe(myNews => { this.news= myNews}, errorMensaje=> this.errorMsj= <any>errorMensaje);

    
  }



  
}
