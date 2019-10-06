import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
  
    RouterModule.forRoot([ 
      { path: '' , component:HomeComponent},
      { path: 'home' , component:HomeComponent},
      { path: 'dangnhap', 	component:SignInComponent },
      { path: 'dangky', 	component:RegisterComponent },
      { path: 'lienhe', 	component:ContactComponent }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
