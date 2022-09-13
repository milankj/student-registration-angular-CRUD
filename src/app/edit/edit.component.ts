import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from '../home/student';
import { StudentService } from '../services/student.service';
import { FormControl, FormGroup, FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private _studentService: StudentService,
    private _route: ActivatedRoute,
    private fb: FormBuilder
  ) { }
  _editStudent = this.fb.group({
    name: [''],
    maths: ['',Validators.required],
    physics: ['',Validators.required],
    english: ['',Validators.required],
    chemistry: ['',Validators.required],
    computer: ['',Validators.required]
  })

  // _editStudent = new FormGroup({
  //   name: new FormControl(''),
  //   maths: new FormControl(0),
  //   physics: new FormControl(0),
  //   english: new FormControl(0),
  //   chemistry: new FormControl(0),
  //   computer: new FormControl(0)
  // })
  ngOnInit(): void {
    let id = parseInt(this._route.snapshot.params['studentId'])
    this._studentService.getOneStudent(id).then(res => {
      this._editStudent = res.data.result
      this._editStudent = this.fb.group({
        name: [res.data.result.name],
        maths: [res.data.result.maths],
        physics: [res.data.result.physics],
        english: [res.data.result.english],
        chemistry: [res.data.result.chemistry],
        computer: [res.data.result.computer]
      })
    })
  }
}
