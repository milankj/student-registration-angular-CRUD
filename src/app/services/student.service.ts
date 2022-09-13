import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

   getStudents(){
    return axios.get(`http://localhost:3000/api/v1/student`)

  } 
  postStudent(data){
    console.log('post data : ',data)
    return axios.post(`http://localhost:3000/api/v1/student`,{...data})
  }
  getOneStudent(id:number){
    console.log('axios id: ',id)
    return axios.get(`http://localhost:3000/api/v1/student/${id}`)
  }
  deleteOneStudent(id : number){
    return axios.delete(`http://localhost:3000/api/v1/student/delete/${id}`)
  }
  editOneStudent(data,id:number){
    console.log('update id: ',id)
    return axios.post(`http://localhost:3000/api/v1/student/update/${id}`,{...data})
  }
}
