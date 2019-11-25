import { Component, OnInit, Input } from '@angular/core';

import { Subject } from '../models/subject';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { Student } from '../models/student';
import { ErrorHandler, Injectable } from '@angular/core';


@Component({
  selector: 'app-listsubject',
  templateUrl: './listsubject.component.html',
  styleUrls: ['./listsubject.component.css']
})
export class ListsubjectComponent implements OnInit {
  itempage = 4;
  currpage = 1;
  paginate;
  @Input() subjects: Subject[];
  @Input() student: Student;
  constructor(private studentService: StudentService,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.studentService.getSubjects().subscribe(data => this.subjects = data);
    this.loadStudent();


  }



  loadStudent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get movie from id" ?
    this.studentService.getStudentById(id).subscribe(student => this.student = student);
  }



}
