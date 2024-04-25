import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-requests',
  templateUrl: './api-requests.component.html',
  styleUrl: './api-requests.component.css'
})
export class ApiRequestsComponent {
  public apiResp: any;
  public apiError: any;
  private getApi = "https://jsonplaceholder.typicode.com/posts"
  public statusDescription: string = '';

  constructor(private http: HttpClient) { };

  getAPI() {
    // GET API
    this.http.get(this.getApi).subscribe({
      next: datag => {
        this.apiResp = datag;
      },
      error: error => {
        this.statusDescription = error.message;
        this.apiError = error;
        console.warn('error!!', error);
      }
    });
    console.warn(this.apiResp);
  }

  putAPI() {
    //PUT API
    const updateResp = 1;
    const datay = { title: 'Angular Testing PUT API' };
    this.http.put<any>(`${this.getApi}/${updateResp}`, datay).subscribe({
      next: datag => {
        this.apiResp = datag;
      },
      error: error => {
        this.statusDescription = error.message;
        this.apiError = error;
        console.warn('error!!', error);
      }
    });
  }

  postAPI() {
    // POST API
    const postId = 1;
    const postTest = {
      title: 'Post API',
      body: 'hello'
    };
    this.http.post<any>(`${this.getApi}`, postTest).subscribe({
      next: datag => {
        this.apiResp = datag
      },
      error: error => {
        this.statusDescription = error.message;
        this.apiError = error;
        console.warn('error!!', error);
      }
    });
  }

  delAPI() {
    // DELETE API
    const delid = 1
    this.http.delete(`${this.getApi}/${delid}`).subscribe({
      next: () => {
        this.apiResp = 'Delete Successful !!'
      },
      error: error => {
        this.statusDescription = error.message;
        this.apiError = error;
        console.warn('error!!', error);
      }
    });
  }
}