import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule, Routes} from'@angular/router';
//import{ myRoutes } from'./routes';
import { HomepageComponent } from '../homepage/homepage.component';
import { NewsComponent } from '../news/news.component';

const myRoutes: Routes= [
    { path: 'homepage', component: HomepageComponent},
    { path: 'news', component: NewsComponent},
    { path: '', redirectTo: '/homepage', pathMatch: 'full' }
    ];

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(myRoutes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
