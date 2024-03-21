import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators, pattern } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  signUpuser:any[]=[];
  signObj:any={
    userName:'',
    email:'',
    password:'',
    rpPassword:''
  };
  
  LoginObj:any={
    userName:'',
    password:''
  };

  constructor(public routing:Router){}

  regSubmit(){
    console.warn(this.registerForm.value);
    this.routing.navigate(['/login'])


    this.signUpuser.push(this.signObj);
    localStorage.setItem('signUpuser',JSON.stringify(this.signUpuser));
    this.signObj={
      userName:'',
      email:'',
      password:'',
      rpPassword:''
    };
  }


  ngOnInit(): void {
    
  }


  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    // email: new FormControl('',[Validators.required,Validators.email]),
    email: new FormControl('',[Validators.required,Validators.pattern(/^(?:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}|[0-9]{10})$/)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)]),
    rpPassword: new FormControl('',[Validators.required,Validators.minLength(8),RxwebValidators.compare({fieldName:'password'})]),
  });





  get name(){
    return this.registerForm.get('name');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get rpPassword(){
    return this.registerForm.get('rpPassword');
  }

  // disp=false;
  // dispContent(){
  //   this.disp=!this.disp;
  // }

  // pwdSame(){
  //   return this.password==this.rpPassword?1:0;
  // }

  cond=false;
  Icon=true;
  // nClass="bi bi-eye-slash";
  rpCond=false;
  rpIcon=true;
  showpwd(){
    // this.cond="text";
    // show==="show"?this.cond="password":this.cond="text";
    this.cond=!this.cond;
    // this.nClass="bi bi-eye";
    this.Icon=!this.Icon;
  }

  rpShowpwd(){
    this.rpCond=!this.rpCond;
    this.rpIcon=!this.rpIcon;
  }
  





  // constructor(public dashroute:Router){}

  // letsGo(){
  //   this.dashroute.navigate(['/login'])
  //   this.registerForm.get('password')==this.registerForm.get('rpPassword')?this.dashroute.navigate(['/dashboard']):console.log("Enter Same Password");
  //   this.registerForm.value.password===this.registerForm.value.rpPassword?this.dashroute.navigate(['/dashboard']):alert("Enter Same Password");
  // }


}