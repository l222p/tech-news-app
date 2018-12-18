import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { News } from 'src/shared/News';
import { dataURL } from 'src/dataURL';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPService } from './process-http.service';
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
  })
  };
@Injectable({
  providedIn: 'root'
})
export class MyNewsService {

  constructor(private http: HttpClient, private processHttpService: ProcessHTTPService) { }

  addToFavorites(id): boolean{
    var myNews = localStorage.getItem("myNews");
    var myNewsArray = [];
    if(!myNews){
      myNewsArray.push(id);
      localStorage.setItem("myNews", myNewsArray.toString());
      
    }else{
      myNewsArray = myNews.split(',');
      if(myNewsArray.indexOf(""+id) < 0 ){
        myNewsArray.push(id);
        localStorage.setItem("myNews", myNewsArray.toString());
      }else{
        return false;
      }
    }
    return true;
  }
  
  getFavoritesNews(): Observable<News> {
    
    
    var myFavorites = localStorage.getItem("myNews");
    console.log(myFavorites);
    
    var myFavoriteArray = [];
    var urlRequest = "";
    if (myFavorites){
      myFavoriteArray= myFavorites.split(",");
      for(var i = 0; i<= myFavoriteArray.length; i++){
        urlRequest+= "id="+myFavoriteArray[i]+ "&";
      }
      console.log(urlRequest);
      var myVar: Observable<News> =this.http.get<News>(dataURL+ 'news?' + urlRequest).pipe(catchError(this.processHttpService.manageError));    
      
      return myVar;
    }else{
      return of(null);
    }
    
    
  }
}
