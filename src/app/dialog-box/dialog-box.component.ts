import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  myForm:any;
  myArray:any=[];
  firstname: any;
  lastname: any;
  id: any;
  status: any;
  isActive: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstname : new FormControl("", [Validators.required]),
      lastname : new FormControl("", [Validators.required]),
      id : new FormControl("", [Validators.required]),
      status : new FormControl("", [Validators.required]),
      isActive : new FormControl("", [Validators.required])
    })
  }
  submit(data:any){
    console.log(this.myForm)
    this.myArray.push(this.myForm.value)
    console.log(this.myArray)
    let url='http://localhost:3000/comments';
  }
}
