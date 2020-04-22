import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  items: MenuItem[];
    
    activeItem: MenuItem;
  constructor(public _authService:AuthService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Dashboard', icon: 'fas fa-address-book',routerLink:['/dashboard']},
      {label: 'Visitors', icon: 'fa-calendar',routerLink:['/searchvisitors']},
      {label: 'Vehicals', icon: 'fa-book',routerLink:['/vehical/edit']},
      {label: 'Maintainance', icon: 'fa-book',routerLink:['/maintain/create']},
      {label: 'Support', icon: 'fa-support'},
      {label: 'Contact-us', icon: 'fa-twitter'}
  ];
  
  this.activeItem = this.items[2];
  }

}
