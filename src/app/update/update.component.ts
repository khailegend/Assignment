import { Component, OnInit, Input } from '@angular/core';

import { StudentService} from '../student.service';
import { ActivatedRoute} from '@angular/router'; 
import { ParamMap} from '@angular/router'; 
import { error } from '@angular/compiler/src/util';
import { Student } from '../models/student';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() student : Student;

  constructor(private studentService: StudentService, 
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.loadStudent();
    
  }

  loadStudent(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get movie from id" ?
    this.studentService.getStudentById(id).subscribe(student => this.student = student);          
  }

  save():void{
    this.studentService.updatestudent(this.student).subscribe(()=> this.goBack());
  }

  goBack(){
    window.history.back();
  }

}
