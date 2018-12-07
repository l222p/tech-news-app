import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule, Routes} from'@angular/router';
import{ myRoutes } from'./routes';



@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(myRoutes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
