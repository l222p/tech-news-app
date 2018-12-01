import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import{ HttpClientModule} from'@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    NewsComponent,
    CarouselComponent,
    RecentPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule,
    NgbModule.forRoot()
  ],
  providers: [
    ProcessHTTPService,
    {provide: 'DataURL', useValue: dataURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
