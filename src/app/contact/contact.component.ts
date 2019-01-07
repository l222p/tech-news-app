import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/shared/Message';
import {ContactService } from '../services/contact.service';
import { FavoritesDialogsComponent } from '../favorites-dialogs/favorites-dialogs.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ContactDialogsComponent } from '../contact-dialogs/contact-dialogs.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myModal') modal: ContactDialogsComponent;
  contactForm: FormGroup;
  message: Message;
  messageRest=null;
  closeResult;
  errorsForm = {
    'email': '', 
    'subject': '',
    'message': ''
  };
  
  
  msjError = {
    'subject': {
      'required':	'Subject is required.',
      
    },
    'message': {
      'required': 'Message is required.',
    },
    'email': { 
      'required': 'Email is required.',      
      'email': 'It is not a valid email.'
    }
  };
  constructor(private modalService: NgbModal,private fb: FormBuilder, private contactService: ContactService) {
    this.buildContactForm();
   }

  ngOnInit() {
    //this.contactService.getContactMessages().subscribe(myMessages => {  this.messageRest= myMessages;   });
  }

  buildContactForm() {
    this.contactForm= this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      subject: ['',[Validators.required]],
      message: ['', [Validators.required]],
      
      });
      this.contactForm.valueChanges.subscribe(data => this.onCambioValor(data));
      this.onCambioValor();

      
  }

  onCambioValor(data?: any) {
    
    if(!this.contactForm) { return; }
    const form= this.contactForm;
    for(const field in this.errorsForm) {
      // Se borrarán los mensajes de error previos
      this.errorsForm[field] = '';
      const control = form.get(field);
      if(control && control.dirty&& !control.valid) {
        const messages= this.msjError[field];
        for(const key in control.errors) {
          this.errorsForm[field] += messages[key] + ' ';
        }
        
        
      }
    }
  }

  onSubmit() {
    this.message= this.contactForm.value;
    
    this.contactForm.reset();
    console.log("Message", this.message);
    console.log("Message Rest", this.messageRest);
    
      //this.producto.comentarios.push(this.comentario);
      //this.messageRest.push(this.message);
      console.log("After Message Rest", this.messageRest);
      this.contactService.setContactMessage(this.message).subscribe(mymessage => {this.message = mymessage});
    this.modal.open(true);
    }

    open(content) {
      console.log(content);
      
      console.log("open function");
      
      this.modalService.open(FavoritesDialogsComponent, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
}
