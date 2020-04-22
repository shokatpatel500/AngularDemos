import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WebcamModule} from 'ngx-webcam';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {CalendarModule} from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VisitorsComponent } from './components/visitors/visitors.component';
import { DefaultComponent } from './default/default.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {MenubarModule} from 'primeng/menubar';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { VisitorsService } from './services/visitors.service';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { SearchVisitorsComponent } from './components/search-visitors/search-visitors.component';
import { EditVisitorsComponent } from './components/edit-visitors/edit-visitors.component';
import { ViewVisitorsComponent } from './components/view-visitors/view-visitors.component';
import { CreateVehicalComponent } from './components/vehicals/create-vehical/create-vehical.component';
import { EditVehicalComponent } from './components/vehicals/edit-vehical/edit-vehical.component';
import { SearchVehicalComponent } from './components/vehicals/search-vehical/search-vehical.component';
import { ViewVehicalComponent } from './components/vehicals/view-vehical/view-vehical.component';
import { CreateMaintainanceComponent } from './components/maintainance/create-maintainance/create-maintainance.component';
import { EditMaintainanceComponent } from './components/maintainance/edit-maintainance/edit-maintainance.component';
import { ViewMaintainanceComponent } from './components/maintainance/view-maintainance/view-maintainance.component';
import { SearchMaintainanceComponent } from './components/maintainance/search-maintainance/search-maintainance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VisitorsComponent,
    DefaultComponent,
    SearchVisitorsComponent,
    EditVisitorsComponent,
    ViewVisitorsComponent,
    CreateVehicalComponent,
    EditVehicalComponent,
    SearchVehicalComponent,
    ViewVehicalComponent,
    CreateMaintainanceComponent,
    EditMaintainanceComponent,
    ViewMaintainanceComponent,
    SearchMaintainanceComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    FileUploadModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    MenubarModule,
    PanelModule,
    Ng2SmartTableModule,
    TabViewModule,
    TabMenuModule,
    AutoCompleteModule,
    AppRoutingModule

  ],
  providers: [AuthService,AuthGuard,VisitorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
