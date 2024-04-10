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
  ngOnInit(): void {
    //PUT API
    const body = {title:'Angular Testing PUT API'};
    this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1',body).subscribe(data=>{
      this.postId=data.id});

    // POST API
    const postTest={title:'Post API'};
    this.http.post<any>('https://reqres.in/api/posts',postTest).subscribe(postData=>{
      this.postId=postData.id
    });

    // DELETE API
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1').subscribe(()=>{
      this.statusApI='Delete Successful !!'
  });

  // 

     // GET API
     this.http.get(this.getApi).subscribe(datag => {
      this.getResp = datag;
    });
    console.warn(this.getResp);
  }
}
