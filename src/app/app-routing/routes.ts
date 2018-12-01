import{ Routes} from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { NewsComponent } from '../news/news.component';

export const myRoutes: Routes= [
    { path: 'homepage', component: HomepageComponent},
    { path: 'news', component: NewsComponent},
    { path: '', redirectTo: '/homepage', pathMatch: 'full' }
    ];