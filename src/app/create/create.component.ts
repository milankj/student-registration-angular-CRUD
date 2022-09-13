import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  studentForm = this.fb.group({
    name: ['',Validators.required],
    maths: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    physics: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    english: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    chemistry: ['',[Validators.required, Validators.pattern("^[0-9]*$")]],
    computer: ['',[Validators.required, Validators.pattern("^[0-9]*$")]]
  })
  // studentForm = new FormGroup({
  //   name: new FormControl(''),
  //   maths: new FormControl(),
  //   physics: new FormControl(),
  //   english: new FormControl(),
  //   chemistry: new FormControl(),
  //   computer: new FormControl()
  // })
  ngOnInit(): void {
  }

}
