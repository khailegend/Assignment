import { Component, OnInit, Input } from '@angular/core';

import { Subject } from '../models/subject'
import { StudentService} from '../student.service'

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
  
  constructor( private studentService : StudentService) { }

  ngOnInit() {
    this.studentService.getSubjects().subscribe(data => this.subjects= data);
  }

}
