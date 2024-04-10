import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-requests',
  templateUrl: './api-requests.component.html',
  styleUrl: './api-requests.component.css'
})
export class ApiRequestsComponent implements OnInit {
  getResp:any;
  postId:any;
  statusApI:any;
  getApi="https://jsonplaceholder.typicode.com/posts/1"
  constructor(private http:HttpClient){}
  ngOnInit(): void {}

  putAPI(){
  //PUT API
  const body = {title:'Angular Testing PUT API'};
  this.http.put<any>(this.getApi,body).subscribe(data=>{
    this.postId=data.id
  });
  }

  postAPI(){
  // POST API
  const postTest={title:'Post API'};
  this.http.post<any>(this.getApi,postTest).subscribe(postData=>{
    this.postId=postData.id
  });
}


delAPI(){
  // DELETE API
  this.http.delete(this.getApi).subscribe(()=>{
    this.statusApI='Delete Successful !!'
});
}

// upAPI(){
// // UPDATE API
// this.http.patch(this.getApi).subscribe
// }

getAPI(){
   // GET API
   this.http.get(this.getApi).subscribe(datag => {
    this.getResp = datag;
  });
  console.warn(this.getResp);
}

}