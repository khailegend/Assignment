import { Component , Input } from '@angular/core';
import { StudentService} from './student.service';
import { ActivatedRoute} from '@angular/router'; 
import { Student } from './models/student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  @Input() students : Student;
  constructor( private studentService : StudentService,
               private route: ActivatedRoute,) { }
  ngOnInit() {
   
  }

 
}
