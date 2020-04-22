import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitorsService {
 private url='http://localhost:3000/api/security'
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

//save visitors
securityRegister(data){
 return this.http.post(this.url +'/visitors',data,{headers:this.headers})
}

//search visitors
searchVisitors(search){ 
  return this.http.post(this.url +'/findvisitors',search,{headers:this.headers})
}

//get visitors

getVisitors(){
  return this.http.get(this.url + '/getvisitors')
}
}
