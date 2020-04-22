import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicalsService {

  private url='http://localhost:3000/api/vehicals'
  headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }


  settings = {
    actions: {
      columnTitle: 'Actions',
      add: false,
      edit: false,
      delete: false,
      custom: [
      { name: 'view', title: '<i class="fa fa-eye"></i>&nbsp'},
      { name: 'edit', title: '<i class="fa  fa-pencil"></i>&nbsp' },
      { name:  'delete', title:'<i class="fa fa-trash-o"></i>'}
    ],
      position: 'right'
    },
    columns: {
      firstName: {
        title: 'firstName'
      },
      lastName: {
        title: 'lastName'
      },
      adharNo: {
        title: 'adharNo'
      },
      phoneNo: {
        title: 'phoneNo'
      }
    }
  };

  registerVehicals(register){
    return this.http.post(this.url +'/registervehical',register,{headers:this.headers})
  }
}
