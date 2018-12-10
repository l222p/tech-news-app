import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { switchMap } from 'rxjs/operators';
import { Category } from 'src/shared/Category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  categoryRest = null;
  categories: Category;
  errorMsj = null;
  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) { 
  }
ngOnInit() {
  this.route.params.pipe(switchMap((params: Params) => {
    
    return this.categoriesService.getCategories()})).subscribe(myCategories => { this.categories= myCategories; this.categoryRest= myCategories}, errorMensaje=> this.errorMsj= <any>errorMensaje);  
}
}
