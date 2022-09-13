import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../home/student';
import { StudentService } from '../services/student.service';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(
      private _studentService : StudentService,
      private router : Router,
      private _route : ActivatedRoute,
      ) { }
  public students: IStudent[] = []

  ngOnInit(): void {  

    this._studentService.subject.subscribe(val=>{
      this.students = val as IStudent[]
    })

     this._studentService.getStudents().then(res=>{
      this.students = res.data.student
     })
  }
  handleEdit(studentId : number){
    console.log('Edit:',studentId)
    this.router.navigate([`/edit`,studentId])
    console.log(this._route.snapshot.params['studentId'])
  }
  handleDelete(studentId : number){
    this._studentService.subject.next(this.students.filter(student=>student.studentId != studentId))
    this._studentService.deleteOneStudent(studentId).then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err);
      
    })
  }

}
