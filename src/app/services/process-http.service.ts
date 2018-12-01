import { Injectable } from '@angular/core';
import{ throwError} from'rxjs';
import{ HttpErrorResponse} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPService {
  
  constructor() { }
  
  public manageError(error: Response | any) {
    let errorMsj: string;
    if(error.error instanceof ErrorEvent) {
      errorMsj= error.error.message;
    } else{
      errorMsj= `${error.status} -${error.statusText|| ''} ${error.error}`;
    }
    console.error(errorMsj);
    return throwError(errorMsj);
  }
}
