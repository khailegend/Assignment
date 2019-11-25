

import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../student.service';
import { Element } from '@angular/compiler';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @Input() students: Student[];
  listemail : any[];
  listpass : any[];

  
  back: string ;

  email: null;
  password : null;
    
  
  
  submit() {
    return this.email;
  
  }

  dangnhap(){
    const copyemail = [];
    const copypass = [];
    
    
    this.students.forEach(function (element) {
      
      copyemail.push(element.email);
      copypass.push(element.password);
    });
    
    this.listemail = copyemail;
    this.listpass = copypass;

    
    var yes = 0 ;
    var taikhoan = document.getElementById('taikhoan');
    
      for( var i = 0 ; i <= this.listemail.length ; i++ ){
         if( this.listemail[i] == this.email && this.listpass[i] == this.password ){       
             yes = 1 ; 
             break;
          }
          else {
               yes = 2 ;
               
          }
       }
      if(this.email == null || this.password == null) {
        alert("Please enter your email and password")}
      else if(yes == 1){
          alert("Logged in successfully")
          window.location.href = this.email+"/danhmucmonhoc" ;
      }
      else if(yes == 2){
          alert("Login failed, please check your email and password")
      }
      else {
        alert("Account does not exist, please check again");
      }
  }

  

  constructor( private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => this.students= data);
  }

}
