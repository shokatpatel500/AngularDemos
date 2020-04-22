import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VehicalsService } from 'src/app/services/vehicals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-vehical',
  templateUrl: './edit-vehical.component.html',
  styleUrls: ['./edit-vehical.component.css']
})
export class EditVehicalComponent implements OnInit {
  editvehicleform
  constructor(private fb:FormBuilder,private vehical:VehicalsService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.editvehicleform=this.fb.group({
      vehicletype:[''],
      vehicleregistrationno:[''],
      vehiclecolor:['']
    })
    // this.editvehicleform.setValue({
    // vehicletype:this.router.snapshot.params['type'],
    //   vehicleregistrationno:this.router.snapshot.params['regno'],
    //   vehiclecolor:this.router.snapshot.params['color'],
    // })
  }

 

  onsubmit(){
         let register=this.editvehicleform.value
         this.vehical.registerVehicals(register).subscribe(
           res =>{
            
           }
         )
  }

  onReset(){
    this.editvehicleform.reset()
  }

  onCancle(){
    this.editvehicleform.navigate(['/searchvisitors'])
  }

}
