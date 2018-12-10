import{ Routes} from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { NewsComponent } from '../news/news.component';

import { NewsCategoryComponent } from '../news-category/news-category.component';

export const myRoutes: Routes= [
    { path: 'homepage', component: HomepageComponent},
    { path: 'news/:id', component: NewsComponent}, 
    //{ path: 'category/:id', component: NewsCategoryComponent},
    { path: '', redirectTo: '/homepage', pathMatch: 'full' }
    ];