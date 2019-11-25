import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { ListsubjectComponent } from './listsubject/listsubject.component';
import { TestComponent } from './test/test.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ShowpassComponent } from './showpass/showpass.component';
import { RepassComponent } from './repass/repass.component';
import { SignupdateComponent } from './signupdate/signupdate.component';
import { UpdateComponent } from './update/update.component'
 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    RegisterComponent,
    ContactComponent,
    ListsubjectComponent,
    TestComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    ShowpassComponent,
    RepassComponent,
    SignupdateComponent,
    UpdateComponent
  ],
  imports: [
    FormsModule,
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([ 
      { path: '' , component:HomeComponent},
      { path: 'home' , component:HomeComponent},
      { path: 'dangnhap', 	component:SignInComponent },
      { path: 'dangky', 	component:RegisterComponent },
      { path: 'doimatkhau', 	component:RepassComponent },
      { path: 'quenmatkhau', 	component:ForgotpasswordComponent },
      { path: 'capnhattaikhoan', 	component:SignupdateComponent },
      { path: 'lienhe', 	component:ContactComponent },
      { path: 'dangnhap/danhmucmonhoc', 	component:ListsubjectComponent },
      { path: 'test/:id', 	component:TestComponent },
      { path: ':id/danhmucmonhoc', 	component:ListsubjectComponent},
      { path: ':id/doimatkhau', 	component:ChangepasswordComponent},
      { path: ':id/hienmatkhau', 	component:ShowpassComponent},
      { path: ':id/capnhattaikhoan', 	component:UpdateComponent},
      

      
    ]),
    AppRoutingModule
  ],
  providers: [
    StudentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
