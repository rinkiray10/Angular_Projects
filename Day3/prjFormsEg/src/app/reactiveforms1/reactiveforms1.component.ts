import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AbstractControl,FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-reactiveforms1',
  templateUrl: './reactiveforms1.component.html',
  styleUrls: ['./reactiveforms1.component.css']
})
export class Reactiveforms1Component implements OnInit {

  //to represent form group elements

  //loginform:FormGroup;
  loginform;
  constructor(private fb:FormBuilder) { 
  /*this.loginform=new FormGroup(
  {mailid:new FormControl(null,[Validators.required,Validators.email]),
  pwd:new FormControl(null,[Validators.required])
  }
);*/

  this.loginform=this.fb.group({
    mailid:['',[Validators.required,Validators.email]],
    pwd:['',[Validators.required]],
    age:['',[this.ageRangeValidator]]
  })
  }
  ngOnInit() {
  }

  //custom validation
  ageRangeValidator(control: AbstractControl):
  {[key:string]:boolean} | null
  {
    if(control.value !== undefined && (isNaN(control.value) || control.value <18 || control.value >45)){
      return {'ageRange':true};
    }
    return null;
  }
}