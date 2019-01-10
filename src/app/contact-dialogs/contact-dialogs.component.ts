import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { visibilidad } from '../animations/app.animations';

@Component({
  selector: 'app-contact-dialogs',
  templateUrl: './contact-dialogs.component.html',
  styleUrls: ['./contact-dialogs.component.scss'],
  animations: [visibilidad()]
})
export class ContactDialogsComponent implements OnInit {
    visibilidad = "visible";
  @ViewChild('send') successAdded: any;
  @ViewChild('notsend') errorAdded: any;
  closeResult: string;
  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  open(added) {
    
    
    // and use the reference from the component itself
    this.modal.open(added?this.successAdded:this.errorAdded).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        console.log(reason);
    });
}
}
