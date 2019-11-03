import { Component, OnInit ,Input } from '@angular/core';

import {  Student } from '../models/student';
import { StudentService} from '../student.service';
import { ActivatedRoute} from '@angular/router'; 
import { ParamMap} from '@angular/router'; 
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() students : Student;
  constructor(private studentService : StudentService,
              private route: ActivatedRoute,) {}

  ngOnInit() {
   
  }
  

}
