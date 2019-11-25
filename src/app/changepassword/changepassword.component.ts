import { Component, OnInit, Input } from '@angular/core';

import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { Student } from '../models/student';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  @Input() student: Student;


  constructor(private studentService: StudentService,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.loadStudent();

  }

  loadStudent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get movie from id" ?
    this.studentService.getStudentById(id).subscribe(student => this.student = student);
  }

  currentpassword = null;
  newpassword2 = null;

  save(): void {

    if (this.newpassword2 != this.student.password) {
      alert("nhap lai mat khau khong dung")
    }
    else {
      alert('doi mat khau thanh cong')
      this.studentService.updatestudent(this.student).subscribe(() => this.goBack());
    }
  }

  goBack() {
    window.history.back();
  }

  uppasscurrent() {
    document.getElementById("newFormPassword").value = null;
  }
}
