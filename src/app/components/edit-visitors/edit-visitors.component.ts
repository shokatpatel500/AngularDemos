import { Component, OnInit } from '@angular/core';
import { VisitorsService } from 'src/app/services/visitors.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-visitors',
  templateUrl: './edit-visitors.component.html',
  styleUrls: ['./edit-visitors.component.css']
})
export class EditVisitorsComponent implements OnInit {

 
  signupform;
  picturefile;
  File:any
  constructor(private visitors:VisitorsService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(){
    this.signupform=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      birthDate:['',Validators.required],
      adharNo:['',Validators.required],
      visitingDate:['',Validators.required],
      picture:['',Validators.required],
      flatblock:['',Validators.required],
      flatno:['',Validators.required],
      phoneNo:['',Validators.required],
      bikeNo:['',Validators.required]

    })

  }
  registerVisitors(){
    
    let register=this.signupform.value

      this.visitors.securityRegister(register).subscribe(
        success=>
        {
           this.router.navigate(['/searchvisitors'])
        },
        err=>{
             if(err instanceof HttpErrorResponse){
               if(err.status===401){
                 this.router.navigate(['/login'])
               }
             }
        }
      )
  }

  onSelectEvent(event){
    console.log(event);
    
    if (event.files.length > 0) {
      const file = event.files[0];
      // console.log(file);
      
      this.File = file;
    // console.log(File);
    
  }
  }

  oncalanderSelect(event){
    console.log(event);
    
  }

  uploadedFiles: any[] = [];

  onUpload(event) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
    }

    onReset(){
      this.signupform.reset()
    }

    onCancle(){
      this.router.navigate(['/searchvisitors'])
    }


    formPatch(){
      this.signupform.patchValue({
        firstName:[''],
        lastName:['',Validators.required],
        birthDate:['',Validators.required],
        adharNo:['',Validators.required],
        visitingDate:['',Validators.required],
        picture:['',Validators.required],
        flatblock:['',Validators.required],
        flatno:['',Validators.required],
        phoneNo:['',Validators.required],
        bikeNo:['',Validators.required]
  
      })
    }

}
