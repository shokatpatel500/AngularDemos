import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:any
  constructor(private auth:AuthService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
   this.registerForm=this.fb.group({
     firstName: ['',Validators.required],
     lastName: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    buildingName: ['',Validators.required],
    flatNo: ['',Validators.required],
    department: ['',Validators.required],
    designation: ['',Validators.required],
    phoneNo:['',Validators.required]
  })
  }
  
  //for registration
  register(){
    
    let user=this.registerForm.value    
    this.auth.register(user).subscribe(
      success=>{    
      let res:any=success
      localStorage.setItem('token',res.token)
      this.router.navigate(['/login'])
      console.log(
         `👏 > 👏 > 👏 > 👏 ${user.email} is successfully register and mail has been sent and the message id is ${res.messageId}`
      );
    },
    err => {
     
      console.log(err);
    },() => {
    
    }
    )
  }

  reset(){
    this.registerForm.reset()
  }

}
