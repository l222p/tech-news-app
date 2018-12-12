import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyNewsService {

  constructor() { }

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
}
