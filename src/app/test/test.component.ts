import { Component, OnInit, Input } from '@angular/core';

import {  Test } from '../models/test';
import { StudentService} from '../student.service';
import { ActivatedRoute} from '@angular/router'; 
import { ParamMap} from '@angular/router'; 
import { error } from '@angular/compiler/src/util';
import { identifierModuleUrl } from '@angular/compiler';
import { $ } from 'protractor';
import { asLiteral } from '@angular/compiler/src/render3/view/util';






@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  itempage = 1;
  currpage = 1;
  paginate;
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

  back(){
    window.history.back();

  }

ID = {
  id : null ,
  
}




  
  
  diem = [];


 
 
  choose(id){
      console.log(id)
      var j = this.currpage - 1 ;
      var d = 0;
    
        for(var i = 0 ; i < this.tests.arr.length ; i++){
          if( id == this.tests.arr[i].AnswerId){
            console.log(this.tests.arr[i].AnswerId)
              d = 2 ;  
              this.diem[j] = 2
             break
          }
          else{ d = 1;
            this.diem[j] = 0
            
          }
    }
    
    console.log(this.diem)
}

final(){
  var tongdiem = 0;
  var s = 0;
  for(var i = 0 ;  i < this.diem.length ; i++){
    if(this.diem[i] == null){
      this.diem[i] = 0 ;
    }
    s = s + this.diem[i]
  }
  tongdiem =  s ;
  
  return tongdiem;
  
}

disfinal(){
   var btnfinal = document.getElementById("buttonfinal");
   btnfinal.style.display ="none";

   
}
  

  page = 0 ;
  
  changetest(){
    this.page = this.currpage - 1;
    return this.page ;  
  } 

  AS = null ;

  i = 0;
  IA = [] ;
  saveAS(id){
      var ID = id
      this.i = this.currpage -1 ;
      this.IA[this.i] = ID 
      console.log(this.IA)
  }

  A: any[];
  saveA = [];
  checkanswer() {
     var i = this.currpage -1 ;
    const As = [];

    this.tests.arr.forEach(function (element) { 
      As.push(element.AnswerId);
    });
    this.A = As
    
  }

}
