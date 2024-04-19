import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-localdb',
  templateUrl: './localdb.component.html',
  styleUrl: './localdb.component.css'
})
export class LocaldbComponent {
  items: any;
  mid:any;

  constructor(private http: HttpClient) {
    // this.getAPI();
  }

  getAPI() {
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

  putAPI() {
    //PUT API
    const updateResp = 1;
    const datay = {
      "id": 2,
      "name": "yames Williams",
      "email": "jameswilly@gmail.com",
      "number": "08111111111"
    };
    this.http.put<any>('http://localhost:3000/users', datay).subscribe(datag => {
      this.items = datag
    });
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
    this.mid = Math.random;
    const postTest = {
      id: this.mid,
      title: 'Post API',
      body: 'hello'
    };
    this.http.post<any>(`http://localhost:3000/users`, postTest).subscribe(datag => {
      this.items = datag
    });
  }


  delAPI() {
    // DELETE API
    const delid = 1
    this.http.delete(`http://localhost:3000/users`).subscribe(() => {
      this.items = 'Delete Successful !!'
    });
  }
}