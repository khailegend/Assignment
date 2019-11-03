import { Component, OnInit, Input } from '@angular/core';

import {  Test } from '../models/test';
import { StudentService} from '../student.service';
import { ActivatedRoute} from '@angular/router'; 
import { ParamMap} from '@angular/router'; 
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  @Input() tests : Test;
  
  constructor(private studentService : StudentService,
              private route: ActivatedRoute,
              
  ) { }

  ngOnInit() {
    this.loadTest();
    
  }

  loadTest(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get movie from id" ?
    this.studentService.getTestById(id).subscribe(test => this.tests = test);          
  }

}
