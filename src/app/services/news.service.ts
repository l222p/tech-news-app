import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/shared/News';
import { dataURL } from 'src/dataURL';
import{ map , catchError} from'rxjs/operators';
import{ HttpClient} from'@angular/common/http';
import { ProcessHTTPService } from './process-http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient, private processHttpService: ProcessHTTPService) { }
  
  getImagesSlider(): Observable<News[]> {
    return this.http.get<News[]>(dataURL+ 'news?slider=true').pipe(catchError(this.processHttpService.manageError));
    }
}
