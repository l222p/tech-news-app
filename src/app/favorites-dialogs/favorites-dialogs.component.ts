import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favorites-dialogs',
  templateUrl: './favorites-dialogs.component.html',
  styleUrls: ['./favorites-dialogs.component.scss']
})
export class FavoritesDialogsComponent implements OnInit {
  @ViewChild('added') successAdded: any;
  @ViewChild('notAdded') errorAdded: any;
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
