

import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @Input() students: Student[];

   
  constructor( private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => this.students= data);
  }

}
