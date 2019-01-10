import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import{ HttpClientModule} from'@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import{ ReactiveFormsModule} from'@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';

import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import{ dataURL} from'../dataURL';
import{ BrowserAnimationsModule} from'@angular/platform-browser/animations';
//Services
import { ProcessHTTPService } from './services/process-http.service';
import {NewsService} from './services/news.service'
import {CategoriesService} from './services/categories.service';
import {ContactService} from './services/contact.service';
import {MyNewsService} from './services/my-news.service';

//Components
import { CarouselComponent } from './carousel/carousel.component';
import { NewsCategoryComponent } from './news-category/news-category.component';
import { CategoryTagComponent } from './category-tag/category-tag.component';
import { ContactComponent } from './contact/contact.component';
import { FavoritesDialogsComponent } from './favorites-dialogs/favorites-dialogs.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { RelatedNewsComponent } from './related-news/related-news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactDialogsComponent } from './contact-dialogs/contact-dialogs.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    NewsComponent,
    CarouselComponent,
    RecentPostsComponent,
    NewsCategoryComponent,
    CategoryTagComponent,
    ContactComponent,
    FavoritesDialogsComponent,
    FavoritesComponent,
    RelatedNewsComponent,
    AboutUsComponent,
    ContactDialogsComponent
    
  ],
  imports: [
    
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,    
    NgbModule.forRoot()
  ],
  providers: [
    ProcessHTTPService,
    NewsService,
    CategoriesService,
    ContactService,
    MyNewsService,
    {provide: 'DataURL', useValue: dataURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
