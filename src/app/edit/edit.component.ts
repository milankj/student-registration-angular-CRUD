import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from '../home/student';
import { StudentService } from '../services/student.service';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _studentService: StudentService,
    private _route: ActivatedRoute
  ) { }
  _editStudent = new FormGroup({
    name: new FormControl(''),
    maths: new FormControl(0),
    physics: new FormControl(0),
    english: new FormControl(0),
    chemistry: new FormControl(0),
    computer: new FormControl(0)
  })
  ngOnInit(): void {
    let id = parseInt(this._route.snapshot.params['studentId'])
    this._studentService.getOneStudent(id).then(res => {
      this._editStudent = res.data.result
      this._editStudent = new FormGroup({
        name: new FormControl(res.data.result.name),
        maths: new FormControl(res.data.result.maths),
        physics: new FormControl(res.data.result.physics),
        english: new FormControl(res.data.result.english),
        chemistry: new FormControl(res.data.result.chemistry),
        computer: new FormControl(res.data.result.computer)
      })
    })
  }
}
