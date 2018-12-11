import{ Routes} from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { NewsComponent } from '../news/news.component';

import { NewsCategoryComponent } from '../news-category/news-category.component';
import { RecentPostsComponent } from '../recent-posts/recent-posts.component';

export const myRoutes: Routes= [
    { path: 'homepage', component: HomepageComponent},
    { path: 'news/:id', component: NewsComponent}, 
    { path: 'news-category/:id', component: NewsCategoryComponent},
    { path: 'news-recent', component: RecentPostsComponent},
    { path: '', redirectTo: '/homepage', pathMatch: 'full' }
    ];