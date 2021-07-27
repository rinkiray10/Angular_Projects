import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms2',
  templateUrl: './reactiveforms2.component.html',
  styleUrls: ['./reactiveforms2.component.css']
})
export class Reactiveforms2Component implements OnInit {

registerform:FormGroup;
  constructor() {
    this.registerform=new FormGroup(
      {name:new FormControl(null,[Validators.required]),
      pwd:new FormControl(null,[Validators.required]),
      cpwd:new FormControl(null,[Validators.required]),
      mailid:new FormControl(null,[Validators.required]),
      phno:new FormControl(null,[Validators.required]),
      gender:new FormControl(null,[Validators.required]),
      
      }
    );
 }

  ngOnInit() {
  }

}
