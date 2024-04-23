import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Config } from 'datatables.net';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-api-requests',
  templateUrl: './api-requests.component.html',
  styleUrl: './api-requests.component.css'
})
export class ApiRequestsComponent {
  apiResp: any;
  getApi = "https://jsonplaceholder.typicode.com/posts"
  // getApi="https://dummyjson.com/posts"
  public statusDescription: string = '';

  constructor(private http: HttpClient) { }


  // if(!this.apiResp){
  //   this.statusDescription="dvsvsnjnkkmsdkm"
  // }


  // error handling

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   this.statusDescription= `Backend returned code ${error.status}, body was: `, error.error;
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }

  // getConfig() {
  //   this.http.get(this.getApi)
  //     .pipe(
  //       catchError(this.handleError)
  //     )
  //     .subscribe(datag => {
  //       this.apiResp = datag;
  //     });
  // }



  /////////////////////////////////////////////////////////////////////


  getAPI() {
    // GET API
    this.http.get(this.getApi).subscribe(datag => {
      this.apiResp = datag;
    });
    console.warn(this.apiResp);
    //  if(!this.apiResp){
    //   this.statusDescription="Sorry couldn't process your GET request"
    //  }
  }

  putAPI() {
    //PUT API
    const updateResp = 1;
    const datay = { title: 'Angular Testing PUT API' };
    this.http.put<any>(`${this.getApi}/${updateResp}`, datay).subscribe(datag => {
      this.apiResp = datag
    });
    if (!this.apiResp) {
      this.statusDescription = "Sorry couldn't process your PUT request"
    }
  }

  // putAPI() {
  //   const idToUpdate = 1; // Example ID
  //   const newData = { title:'hello' };
  //   this.http.put(`${this.getApi}/${idToUpdate}`, newData).subscribe(response => {
  //     this.apiResp = response;
  //   });
  // }



  postAPI() {
    // POST API
    const postId = 1;
    const postTest = {
      title: 'Post API',
      body: 'hello'
    };
    this.http.post<any>(`${this.getApi}`, postTest).subscribe(datag => {
      this.apiResp = datag
    });
    // if(!this.apiResp){
    //   this.statusDescription="Sorry couldn't process your POST request"
    //  }
  }


  delAPI() {
    // DELETE API
    const delid = 1
    this.http.delete(`${this.getApi}/${delid}`).subscribe(() => {
      this.apiResp = 'Delete Successful !!'
    });
    // if(!this.apiResp){
    //   this.statusDescription="Sorry couldn't process your DELETE request"
    //  }
  }

  // upAPI(){
  // // UPDATE API
  // this.http.patch(this.getApi).subscribe
  // }
}