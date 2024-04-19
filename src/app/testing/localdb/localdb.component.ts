import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-localdb',
  templateUrl: './localdb.component.html',
  styleUrl: './localdb.component.css'
})
export class LocaldbComponent {
  items: any;

  constructor(private http: HttpClient) {
    this.getItems();
  }

  getItems() {
    this.http.get('http://localhost:3000/users')
      .subscribe(data => {
        this.items = data;
      });
  }


//   getAPI(){
//     // GET API
//     this.http.get(this.getApi).subscribe(datag => {
//      this.apiResp = datag;
//    });
//    console.warn(this.apiResp);
//  }

  putAPI(){
  //PUT API
  const updateResp=1;
  const datay = {title:'Angular Testing PUT API'};
  this.http.put<any>(`${this.items}/${updateResp}`,datay).subscribe(datag=>{
    this.items=datag
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
  const postId=1;
  const postTest={
                  title:'Post API',
                  body:'hello'};
  this.http.post<any>(`${this.items}`,postTest).subscribe(datag=>{
    this.items=datag
  });
}


delAPI(){
  // DELETE API
  const delid=1
  this.http.delete(`${this.items}/${delid}`).subscribe(()=>{
    this.items='Delete Successful !!'
});
}
}