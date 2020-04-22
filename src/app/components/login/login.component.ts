import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm: any;
  

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit() {
    this.loginForm= this.fb.group({
     email:['',Validators.required],
     password:['',Validators.required]
 })
  }
 

 login(){
   let user=this.loginForm.value
   this.auth.login(user).subscribe(
     success=>{
       let res:any=success
     this.router.navigate(['/default'])
     localStorage.setItem('token',res.token)
     },
     err=>{
       console.log(err);
       
     }
   )
 }

}
