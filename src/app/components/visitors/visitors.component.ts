import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VisitorsService } from 'src/app/services/visitors.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {

  signupform;
  picturefile;
  File:any
  videoWidth = 0;
  videoHeight = 0;
  public captures: Array<any>;
  constructor(private visitors:VisitorsService,private fb:FormBuilder,private router:Router,private renderer: Renderer2,) { }
  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;
  ngOnInit(){
    this.startCamera();
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
    this.captures = [];

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

    constraints = {
      video: {
          facingMode: "environment",
          width: { ideal: 4096 },
          height: { ideal: 2160 }
      }
  };
  
  startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) { 
  navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError);
    } else {
        alert('Sorry, camera not available.');
    }
  }
  handleError(error) {
    console.log('Error: ', error);
  }
  
  attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
        this.videoHeight = this.videoElement.nativeElement.videoHeight;
        this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
  }
  
  capture() {
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  }
}
