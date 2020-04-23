import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitorsService } from 'src/app/services/visitors.service';

@Component({
  selector: 'app-search-visitors',
  templateUrl: './search-visitors.component.html',
  styleUrls: ['./search-visitors.component.css']
})
export class SearchVisitorsComponent implements OnInit {
  searchformGroup:any
  searchVisitors:any
  settings:any
  results:any;
  preloads:any
  constructor(private fb:FormBuilder,private router:Router,private visitorsServices:VisitorsService) { }

  ngOnInit(): void {
    this.searchformGroup=this.fb.group({
      firstName:['',Validators.required],
      adharNo:['',Validators.required],
      bikeNo:['',Validators.required],
    })
    this.initProperty()
  }

  onCancle(){
    this.router.navigate(['/default'])
  }
  
  initProperty(){
    this.settings=this.visitorsServices.settings
    // this.preloads=this.visitorsServices.preload.resultdata
  }
  //search visitors
  onSearchVisitors(){
    let visitors=this.searchformGroup.value
    this.visitorsServices.searchVisitors(visitors).subscribe(
      success =>{
        if(success){
          this.searchVisitors=success    
        }
      },
      err =>{
        console.log(err);
        
      }
    )
  }

  // onCustomAction(event){
  //   this.router.navigate(['/editvisitors'])
  // }
  onCustomAction(event) {
    console.log(event.action);
    
    switch ( event.action) {
      case 'view':
        this.router.navigate(['/viewvisitors'])
        break;
     case 'edit':
      this.router.navigate(['/editvisitors'])
    }
  }
  
  obj:any
  //onAutoSelection
  search(event) {
    this.visitorsServices.getVisitors().subscribe(data => {
        //  console.log(data);
         if(data['docs']){
           data['docs'].forEach(element => {
             this.obj={
               firstName:element.firstName,
               lastName:element.lastName
             }
           });
         }
        // this.obj=data['docs']
        // console.log(this.obj);
        
         this.results=this.obj;
        //  console.log(this.results);
         
    
    })
  }
   
}
