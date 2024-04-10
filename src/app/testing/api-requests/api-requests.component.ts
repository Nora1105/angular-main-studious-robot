import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-requests',
  templateUrl: './api-requests.component.html',
  styleUrl: './api-requests.component.css'
})
export class ApiRequestsComponent {
  apiResp:any;
  // getApi ="https://jsonplaceholder.typicode.com/posts"
  getApi="https://dummyjson.com/posts"
  constructor(private http:HttpClient){}

  getAPI(){
    // GET API
    this.http.get(this.getApi).subscribe(datag => {
     this.apiResp = datag;
   });
   console.warn(this.apiResp);
 }

  putAPI(){
  //PUT API
  const updateResp=1;
  const datay = {title:'Angular Testing PUT API'};
  this.http.put<any>(`${this.getApi}/${updateResp}`,datay).subscribe(datag=>{
    this.apiResp=datag
  });
  }

  // putAPI() {
  //   const idToUpdate = 1; // Example ID
  //   const newData = { title:'hello' };
  //   this.http.put(`${this.getApi}/${idToUpdate}`, newData).subscribe(response => {
  //     this.apiResp = response;
  //   });
  // }



  postAPI(){
  // POST API
  const postTest={title:'Post API'};
  this.http.post<any>(this.getApi,postTest).subscribe(datag=>{
    this.apiResp=datag
  });
}


delAPI(){
  // DELETE API
  const delid=1
  this.http.delete(`${this.getApi}/${delid}`).subscribe(()=>{
    this.apiResp='Delete Successful !!'
});
}

// upAPI(){
// // UPDATE API
// this.http.patch(this.getApi).subscribe
// }
}