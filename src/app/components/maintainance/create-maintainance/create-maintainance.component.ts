import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-maintainance',
  templateUrl: './create-maintainance.component.html',
  styleUrls: ['./create-maintainance.component.css']
})
export class CreateMaintainanceComponent implements OnInit {
  maintainenceform
  userdata=[];
  videoWidth = 0;
videoHeight = 0;
  constructor(private fb:FormBuilder,private renderer: Renderer2) { }
  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;
  ngOnInit(): void {
    this.startCamera();
    this.maintainenceform=this.fb.group({
      month:['',Validators.required],
      block:['',Validators.required]
    })
  }

  ongetmaintainencedata(){
    
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
}
}
