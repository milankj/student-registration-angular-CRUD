import { Component, Input, OnInit } from '@angular/core';
import { IStudent } from '../home/student';
import { FormGroup, FormControl } from '@angular/forms'
import { StudentService } from '../services/student.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input('formValues') public formValues
  @Input('isEdit') public isEdit
  @Input('id') public id
  constructor(
    private _studentService : StudentService,
    private _route : ActivatedRoute,
    private router : Router
    ) { }
  ngOnInit(): void {
    console.log('Form values',this.formValues)
    
  }
  handleSubmit(){
    if(this.isEdit){
      console.log('Edit')
      let id = parseInt(this._route.snapshot.params['studentId'])
      this._studentService.editOneStudent(this.formValues.value,id)
        .then(res=>{
          console.log(res)
          this.router.navigate(['/'])
        })
        .catch(err=>{
          console.log(err)
        })
    }
    else{
      console.log('Create')
      this._studentService.postStudent(this.formValues.value)
        .then(res=>{
          console.log(res)
          this.router.navigate(['/'])
        })
        .catch(err=>{
          console.log(err)
        })
    }
  }
}
