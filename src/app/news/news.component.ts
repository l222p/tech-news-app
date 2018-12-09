import { Component, OnInit } from '@angular/core';
import { News } from 'src/shared/News';
import { Comment } from 'src/shared/Comment';
import { Params, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { NewsService } from '../services/news.service'
import { switchMap } from 'rxjs/operators';
import{ FormBuilder, FormGroup, Validators} from'@angular/forms';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: News;
  newsForm: News;
  errorMsj: string;
  commentForm: FormGroup;
  comment: Comment;
  commentRest = null;

  errorsForm = {
    'author': '', 
    'email': '',
    'comment': ''
  };
  
  
  msjError = {
    'author': {
      'required':	'Name is required.',
      'minlength': 'Name has to have at least 3 characters.',
      'maxlength': 'Name can not have more than 25 characters .'
    },
    'comment': {
      'required': 'Comment is required.',
    },
    'email': { 
      'required': 'Email is required.',      
      'email': 'It is not a valid email.'
    }
  };


  constructor(private newsService: NewsService, private route: ActivatedRoute, private myLocation: Location, private fb: FormBuilder ) { 
    this.buildCommentForm();
  }

  
  ngOnInit() {
    let myId = this.route.snapshot.params["id"];
    

    this.route.params.pipe(switchMap((params: Params) => {
      
      return this.newsService.getNews(params['id'])})).subscribe(myNews => { this.news= myNews; this.commentRest= myNews}, errorMensaje=> this.errorMsj= <any>errorMensaje);
    
  }
  
  buildCommentForm() {
    this.commentForm= this.fb.group({
      author: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      website: '',
      email: ['', [Validators.required,Validators.email]],
      comment: ['', Validators.required]
      });
      this.commentForm.valueChanges.subscribe(data => this.onCambioValor(data));
      this.onCambioValor();

      
  }

  onCambioValor(data?: any) {
    
    
    if(!this.commentForm) { return; }
    const form= this.commentForm;
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
    this.comment= this.commentForm.value;
    console.log(this.newsForm);
    this.commentForm.reset();

    var date = new Date();
      var dateString = date.toISOString();
      console.log(this.comment); 
      
      this.comment.date = dateString;
      //this.producto.comentarios.push(this.comentario);
      this.commentRest.comments.push(this.comment);
     
      this.newsService.setNewsComment(this.commentRest).subscribe(myComment => {this.comment = myComment});
   
    }

  
}
