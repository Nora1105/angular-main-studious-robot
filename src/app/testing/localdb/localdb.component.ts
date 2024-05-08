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
    debugger;
    this.http.get('http://localhost:3000/users')
      .subscribe(data => {
        this.items = data;
      });
  }

  putAPI() {
    //PUT API
    debugger;
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

  postAPI() {
    // POST API
    debugger;
    this.mid = Math.random;
    const postTest = {
      // id:,
      title: 'Post API',
      body: 'hello'
    };
    this.http.post<any>(`http://localhost:3000/users`, postTest).subscribe(datag => {
      this.items = datag
    });
  }


  delAPI() {
    debugger;
    // DELETE API
    const delid = 1
    this.http.delete(`http://localhost:3000/users`).subscribe(() => {
      this.items = 'Delete Successful !!'
    });
  }
}