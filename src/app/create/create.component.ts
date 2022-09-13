import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }
  studentForm = new FormGroup({
    name: new FormControl(''),
    maths: new FormControl(),
    physics: new FormControl(),
    english: new FormControl(),
    chemistry: new FormControl(),
    computer: new FormControl()
  })
  ngOnInit(): void {
  }

}
