import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  users: any;
 
  constructor(private http: HttpClient) { }
 
  ngOnInit(): void {
    this.usersList();
  }
  usersList() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(datag => {
        this.users = datag;
      });
      console.warn(this.users);   
  }

  check:boolean=false
  selectAll():boolean{
    this.check=!this.check
    return this.check
  }
}