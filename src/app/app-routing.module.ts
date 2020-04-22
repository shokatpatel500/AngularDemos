import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './default/default.component';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { AuthGuard } from './auth/auth.guard';
import { SearchVisitorsComponent } from './components/search-visitors/search-visitors.component';
import { EditVisitorsComponent } from './components/edit-visitors/edit-visitors.component';
import { ViewVisitorsComponent } from './components/view-visitors/view-visitors.component';
import { CreateVehicalComponent } from './components/vehicals/create-vehical/create-vehical.component';
import { EditVehicalComponent } from './components/vehicals/edit-vehical/edit-vehical.component';
import { ViewVehicalComponent } from './components/vehicals/view-vehical/view-vehical.component';
import { SearchVehicalComponent } from './components/vehicals/search-vehical/search-vehical.component';
import { CreateMaintainanceComponent } from './components/maintainance/create-maintainance/create-maintainance.component';
import { EditMaintainanceComponent } from './components/maintainance/edit-maintainance/edit-maintainance.component';
import { ViewMaintainanceComponent } from './components/maintainance/view-maintainance/view-maintainance.component';
import { SearchMaintainanceComponent } from './components/maintainance/search-maintainance/search-maintainance.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: '**', component: 'pageNotFoundComponent' }
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'default',component:DefaultComponent,
    //canActivate:[AuthGuard]
  },
  // {
  //   path:'dashboard',component:DashboardComponent
  // },
  {
    path:'visitors',component:VisitorsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'searchvisitors',component:SearchVisitorsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'editvisitors',component:EditVisitorsComponent
  },
  {
    path:'viewvisitors',component:ViewVisitorsComponent
  },
  {
        path:'vehical',
        children:[
          { path:'create',component:CreateVehicalComponent },
          { path:'edit',component:EditVehicalComponent },
          { path:'view',component:ViewVehicalComponent },
          { path:'search',component:SearchVehicalComponent },
          { path: '', redirectTo: 'login', pathMatch: 'full' }
          
        ]
  },
  {
    path:'maintain',
    children:[
      { path:'create',component:CreateMaintainanceComponent },
      { path:'edit/:id',component:EditMaintainanceComponent },
      { path:'view',component:ViewMaintainanceComponent },
      { path:'search',component:SearchMaintainanceComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
      
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
