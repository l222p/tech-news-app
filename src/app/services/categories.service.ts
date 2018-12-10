import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/shared/Category';
import { dataURL } from 'src/dataURL';
import { catchError } from 'rxjs/operators';
import{ HttpClient, HttpHeaders} from'@angular/common/http';
import { ProcessHTTPService } from './process-http.service';
import { News } from 'src/shared/News';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient, private processHttpService: ProcessHTTPService) { }

  getCategories(): Observable<Category>{
    return this.http.get<Category>(dataURL+ 'categories').pipe(catchError(this.processHttpService.manageError));
  }
}
