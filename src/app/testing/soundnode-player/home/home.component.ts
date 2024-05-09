import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public billboardcurrent:any;
  public today:any=new Date;
  public todayDate:any=this.today.getDate();
  public todayMonth:any=this.today.getMonth();
  public todayYear:any=this.today.getFullYear();
  public toDay:any=`${this.todayYear}`+'-'+`${this.todayMonth+1}`+'-'+`${this.todayDate}`
    constructor(private http:HttpClient){
      // console.log(this.today);
      // console.log(this.todayYear);
      // console.log(this.todayMonth);
      // console.log(this.todayDate);
      // console.log(this.toDay);
      this.http.get(`https://billboard-api5.p.rapidapi.com/api/charts/hot-100`,{
        params:{week:this.toDay},
        headers:{
          // 'X-RapidAPI-Key': '9037939a91msh6613bfac2da4929p15ee2cjsn0cee449337cd',
          // 'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
        }
    }).subscribe(data=>{
      console.log(data);
      this.billboardcurrent=data;
    })
    }
}
