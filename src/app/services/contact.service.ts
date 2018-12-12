import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from 'src/shared/Message';
import { dataURL } from 'src/dataURL';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPService } from './process-http.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
  })
  };

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, private processHttpService: ProcessHTTPService) { }
  getContactMessages():Observable<Message>{
    return this.http.get<Message>(dataURL+ 'contactMessages').pipe(catchError(this.processHttpService.manageError));
  }
  setContactMessage(message):Observable<Message>{
    console.log("setContactMessage()", message);
    
    return this.http.put<Message>(dataURL+ 'contactMessages', message, httpOptions)
    .pipe(catchError(this.processHttpService.manageError));
  }
}
