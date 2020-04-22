import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { VehicalsService } from 'src/app/services/vehicals.service';

@Component({
  selector: 'app-create-vehical',
  templateUrl: './create-vehical.component.html',
  styleUrls: ['./create-vehical.component.css']
})
export class CreateVehicalComponent implements OnInit {
  addvehicleform;
  constructor(private fb:FormBuilder,private vehical:VehicalsService) { }

  ngOnInit(): void {
    this.addvehicleform=this.fb.group({
      vehicletype:[''],
      vehicleregistrationno:[''],
      vehiclecolor:['']
    })
  }

  onsubmit(){
         let register=this.addvehicleform.value
         this.vehical.registerVehicals(register).subscribe(
           res =>{
            
           }
         )
  }

  onReset(){
    this.addvehicleform.reset()
  }

  onCancle(){
    this.addvehicleform.navigate(['/searchvisitors'])
  }

}
