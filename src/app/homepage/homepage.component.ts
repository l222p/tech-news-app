import { Component, OnInit } from '@angular/core';
import { visibilidad} from '../animations/app.animations';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [visibilidad()]
})
export class HomepageComponent implements OnInit {
  visibilidad = 'visible';
  constructor() {
    
   }

  ngOnInit() {
   //this.visibilidad= 'oculto';
   
  }

}
