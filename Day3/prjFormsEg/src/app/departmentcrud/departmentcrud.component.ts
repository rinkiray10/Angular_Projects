import { Component, OnInit } from '@angular/core';
import { Department } from '../Model/department';

@Component({
  selector: 'app-departmentcrud',
  templateUrl: './departmentcrud.component.html',
  styleUrls: ['./departmentcrud.component.css']
})
export class DepartmentcrudComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dept:Department[]=[
    {did:100,dname:"Comp",dlocation:"Kolkata"},
    {did:101,dname:"IT",dlocation:"Pune"},
    {did:102,dname:"ENTC",dlocation:"Mumbai"},
    {did:103,dname:"Civil",dlocation:"Kolkata"},
  ];

  getdeptinfo:Department={};

  //add
  addDepartment()
  {
    debugger;
    this.dept.push(this.getdeptinfo);
    this.getdeptinfo={};
    this.msg="Record Added !!!";
  }

  //delete
  msg;
  deleteDepartment(did?:number)
  {
    debugger;
    for(let i=0;i<this.dept.length;i++)
    {
      if(this.dept[i].did==did)
      {
        this.dept.splice(i,1);
        this.msg="Record Deleted !!!";
      }
      else{
        this.msg="Record not found !!!";
      }
    }
  }

  //edit
  departmentid;
  editDepartment(did?:number)
  {
    for(let i=0;i<this.dept.length;i++)
    {
      if(this.dept[i].did==did)
      {
        this.getdeptinfo=this.dept[i];
      }
    }
  }

  //update

  updateDepartment()
  {
    let u=this.getdeptinfo.did;
    for(let i=0;i<this.dept.length;i++)
    {
      if(this.dept[i].did==u)
      {
        this.dept[i]=this.getdeptinfo;
        this.getdeptinfo={};
        this.msg="Record Updated !!!"
      }
    }
  }

}
