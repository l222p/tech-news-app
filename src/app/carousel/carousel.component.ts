import { Component, OnInit } from '@angular/core';
import{ HttpClient} from'@angular/common/http';
import{ ProcessHTTPService} from'../services/process-http.service';
import { NewsService } from '../services/news.service';
import { News } from 'src/shared/News';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = [1, 2, 3,4].map(() => `https://picsum.photos/1110/500?random&t=${Math.random()}`);
  
  sliderImages: News[];
  errorMsj: string;
  
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getImagesSlider().subscribe(productos => this.sliderImages= productos, errorMsj=> this.errorMsj= <any>errorMsj);
  }

  

 
}





