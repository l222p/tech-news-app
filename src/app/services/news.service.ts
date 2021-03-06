import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/shared/News';
import { dataURL } from 'src/dataURL';
import{ map , catchError} from'rxjs/operators';
import{ HttpClient, HttpHeaders} from'@angular/common/http';
import { ProcessHTTPService } from './process-http.service';
import { Comment } from '../../shared/Comment'

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
  })
  };

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  constructor(private http: HttpClient, private processHttpService: ProcessHTTPService) { }
  
  getImagesSlider(): Observable<News[]> {
    return this.http.get<News[]>(dataURL+ 'news?slider=true').pipe(catchError(this.processHttpService.manageError));
  }

  getNews(id: number): Observable<News>{
    return this.http.get<News>(dataURL+ 'news/'+id).pipe(catchError(this.processHttpService.manageError));
  }

  getRecentNews(): Observable<News[]> {
    var myVar: Observable<News[]> =this.http.get<News[]>(dataURL+ 'news?_sort=date&_order=desc&_limit=6').pipe(catchError(this.processHttpService.manageError));    
    return myVar;
  }
  
  getNewsByCategory(id){
    return this.http.get<News>(dataURL+ 'news/?category='+id).pipe(catchError(this.processHttpService.manageError));
  }
 
  setNewsComment(news):Observable<Comment>{
    console.log("setNewsComment()", news);
    
    return this.http.put<Comment>(dataURL+ 'news/'+ news.id, news, httpOptions)
    .pipe(catchError(this.processHttpService.manageError));
  }
  getCategoryWithLimit(id): Observable<News>{
    return this.http.get<News>(dataURL+ 'news?category='+id+ "&_limit=4").pipe(catchError(this.processHttpService.manageError));
  }
}
