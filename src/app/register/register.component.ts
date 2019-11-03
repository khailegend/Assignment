import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../student.service';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() students: Student[];
  student = {
    firstname:null,
    last:null,
    email:null,
    phone:null,
    password:null,
    password2:null,
  }
  
  constructor(private studentService: StudentService) { 

  }


  ngOnInit() {
    this.studentService.getStudents().subscribe(data => this.students= data);
   
  }

  

  addstudent(firstname : string , lastname : string , email : string , password : string , phone : string ):void {
   email = email.trim();
   if (Number.isNaN(Number(phone)) || !firstname || !lastname || !email || !password ||  phone.length < 9 || this.student.password != this.student.password2) {
    alert('All info must not be blank and must be of the correct type');
    return;
    }
    else {
      alert('Registration successful');
      
    }
    const newstudent: Student = new Student();
    newstudent.firstname =  firstname;
    newstudent.lastname = lastname;
    newstudent.email = email;
    newstudent.password = password;
    newstudent.phone = phone ;
    this.studentService.addstudent(newstudent)
    .subscribe(insertedStudent => {
      this.students.push(insertedStudent);
    });
    
  }

}
