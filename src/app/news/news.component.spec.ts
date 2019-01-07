/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import{ BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from '../homepage/homepage.component';
import { NewsCategoryComponent } from '../news-category/news-category.component';
import { RecentPostsComponent } from '../recent-posts/recent-posts.component';
import { ContactComponent } from '../contact/contact.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FavoritesDialogsComponent } from '../favorites-dialogs/favorites-dialogs.component';
import { RelatedNewsComponent } from '../related-news/related-news.component';
import { CategoryTagComponent } from '../category-tag/category-tag.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { NewsService } from '../services/news.service';
import { dataURL } from 'src/dataURL';
import { News } from 'src/shared/News';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    let productoServiceReplica= {
      getProductos: function(): Observable<News[]> {
      return of(PRODUCTOS);
      } };
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        AngularFontAwesomeModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgbModule,    
        NgbModule.forRoot(),
        RouterTestingModule.withRoutes([{ path: 'news', component: NewsComponent}]) 
      ],
      
      declarations: [ NewsComponent, HomepageComponent, NewsCategoryComponent, RecentPostsComponent, CarouselComponent, ContactComponent, FavoritesComponent, AboutUsComponent, FavoritesDialogsComponent, CategoryTagComponent,RelatedNewsComponent ],
      providers: [{provide: NewsService, useValue: newsServiceReplica}, { provide: 'dataURL', useValue: dataURL},]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/