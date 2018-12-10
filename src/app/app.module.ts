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
import { CarouselComponent } from './carousel/carousel.component';

import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import{ dataURL} from'../dataURL';
import { ProcessHTTPService } from './services/process-http.service';

import {NewsService} from './services/news.service'
import {CategoriesService} from './services/categories.service';
import { NewsCategoryComponent } from './news-category/news-category.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    NewsComponent,
    CarouselComponent,
    RecentPostsComponent,
    NewsCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,    
    NgbModule.forRoot()
  ],
  providers: [
    ProcessHTTPService,
    NewsService,
    CategoriesService,
    {provide: 'DataURL', useValue: dataURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
