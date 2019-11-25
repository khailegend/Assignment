import { Component, OnInit, Input } from '@angular/core';

import { Student } from '../models/student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  @Input() students: Student[]; 
  
  listemail : any[];

  email: null;
  constructor( private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => this.students= data);
  }
  id = null ;
  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
       
    }
    this.id = result;
  
  }

  reloadid(){
      return this.id
  }

  verificationcode = null ;
  dangnhap(){
    const copyemail = [];
    
    
    
    this.students.forEach(function (element) {
      
      copyemail.push(element.email);
    });
    
    this.listemail = copyemail;
    console.log(this.listemail)
    
    var yes = 0 ;
      for( var i = 0 ; i <= this.listemail.length ; i++ ){
         if( this.listemail[i] == this.email &&   this.id == this.verificationcode){       
             yes = 1 ; 
             break;
          }
          else {
               yes = 2 ;
          }
       }
      if(this.email == null || this.verificationcode == null) {
        alert("Please enter your email and verification code")}
      else if(yes == 1){
          alert("Logged in successfully")
          window.location.href = this.email+"/doimatkhau" ;
          
      }
      else if(yes == 2){
          alert("Login failed, please check your email and verification code")
      }
      else {
        alert("Account does not exist, please check again");
      }
  }

}
