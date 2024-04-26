import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(public route:Router){

  }

  signUpuser:any[]=[];

  ngOnInit(): void {
    const localData=localStorage.getItem('signUpuser');
    if(localData!=null){
      this.signUpuser=JSON.parse(localData);
    }
  }

  LoginObj:any={
    userName:'',
    password:''
  };

  onLogin(){
    const isUserExist=this.signUpuser.find(m=>m.userName===this.LoginObj.userName && m.password===this.LoginObj.password);
    if(isUserExist!=null){
      console.log('Login Succesful!!')
    }else{
      console.log('Wrong Password or Username')
    }
  }
  // //////////////////


  loginForm = new FormGroup({
    usern : new FormControl('',[Validators.required]),
    pwd : new FormControl('',[Validators.required,Validators.minLength(8)]),
  })

  get usern(){
    return this.loginForm.get('usern')
  }

  get pwd(){
    return this.loginForm.get('pwd')
}


  onSubmit(){
    console.warn(this.loginForm.value);
    this.route.navigate(['/homepage/hello/home'],{queryParams: {q:"login-success"}});
  }

}