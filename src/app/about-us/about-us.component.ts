import { Component, OnInit } from '@angular/core';
import { visibilidad} from '../animations/app.animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [visibilidad()]
})
export class AboutUsComponent implements OnInit {
  visibilidad = 'visible';
  constructor() { }

  ngOnInit() {
  }

}
