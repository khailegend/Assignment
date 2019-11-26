import { Injectable } from '@angular/core';

import { Student} from './models/student';
import { Studentlogin} from './models/studentlogin';
import { Subject} from './models/subject';
import { Test} from './models/test';

import { Observable} from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient , HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class StudentService {

  private studentsURL = 'http://localhost:3000/student';
  private subjectsURL = 'http://localhost:3000/subject';
  private testURL = 'http://localhost:3000/test';
  
  
    
  constructor(
    private http: HttpClient) {
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsURL)
  }
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectsURL)
  }
  getTest(): Observable<Test[]> {
    return this.http.get<Test[]>(this.testURL)
  }
  getTestById(id: string ):Observable<Test>{
    const url = `${this.testURL}/${id}`;
    return this.http.get<Test>(url)
  };

  getStudentById(id: string ):Observable<Student>{
    const url = `${this.studentsURL}/${id}`;
    return this.http.get<Student>(url)
  };

  
  updatestudent( student: Student ): Observable<any> {
    const httpOptions ={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }; 
    return this.http.put(`${this.studentsURL}/${student.id}`, student , httpOptions)
  };
  

  addstudent(newstudent: Student ): Observable<Student> {
    return this.http.post<Student>(this.studentsURL , newstudent , httpOptions)
  }
}
