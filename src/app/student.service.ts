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
    return this.http.get<Student[]>(this.studentsURL).pipe(
      tap(receivedStudent => console.log(`receivedStudent = ${JSON.stringify(receivedStudent)}`)),
      catchError(error => of([]))
    );
  }
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectsURL).pipe(
      tap(receivedSubject => console.log(`receivedStudent = ${JSON.stringify(receivedSubject)}`)),
      catchError(error => of([]))
    );
  }
  getTest(): Observable<Test[]> {
    return this.http.get<Test[]>(this.testURL).pipe(
      tap(receivedTest => console.log(`receivedTest = ${JSON.stringify(receivedTest)}`)),
      catchError(error => of([]))
    );
  }
  getTestById(id: string ):Observable<Test>{
    const url = `${this.testURL}/${id}`;
    return this.http.get<Test>(url).pipe(
      tap(selectedTest => console.log(`selected test = ${JSON.stringify(selectedTest)}`)),
      catchError(error => of(new Test()))
    ); 
  };

  



  addstudent(newstudent: Student ): Observable<Student> {
    return this.http.post<Student>(this.studentsURL , newstudent , httpOptions).pipe(
    tap((student: Student) => console.log(`inserted movie = ${JSON.stringify(student)}`)),
      catchError(error => of(new Student()))
    );
  }
}
