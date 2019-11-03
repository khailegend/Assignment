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
import {NgxPaginationModule} from 'ngx-pagination'
 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    RegisterComponent,
    ContactComponent,
    ListsubjectComponent,
    TestComponent
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
      { path: 'lienhe', 	component:ContactComponent },
      { path: 'danhmucmonhoc', 	component:ListsubjectComponent },
      { path: 'test/:id', 	component:TestComponent },
      { path: 'home/:id', 	component:HomeComponent },
    ]),
    AppRoutingModule
  ],
  providers: [
    StudentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
