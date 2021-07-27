import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/employee';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeecrudComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
//emp:any[]=[];
emp:Employee[]=[
  {eid:1001,ename:"Sri",gender:"male",salary:30000},
  {eid:1002,ename:"Raj",gender:"male",salary:35000},
  {eid:1003,ename:"Banu",gender:"female",salary:25000},
  {eid:1004,ename:"Jamuna",gender:"female",salary:40000},
];
//object creation of the type any
//getempinfo:any={};
//Object of type employee
getempinfo:Employee={};

//Adding Employee details into emp array
addEmployee()
{
  debugger;
  this.emp.push(this.getempinfo);
  this.getempinfo={};//Emptying the object
}

//deleting the employee info from array by passing emp id
msg;
deleteEmployee(empid:number)
{
  debugger;
  for(let i=0;i<this.emp.length;i++) //iterate through array
  {
    if(this.emp[i].eid==empid)//particular emp id exists
    {
      this.emp.splice(i,1);
      this.msg="Record Deleted!!!";//slice is an array method to remove one record at a time
    }
    else{
      this.msg="Record not Found!!!";
    }
  }
}


//edit
employeeid;
EditEmployee(empid?:number)
{
  for(let i=0;i<this.emp.length;i++)//iterate through array
  {
    if(this.emp[i].eid==empid)//particular emp id exists
    {
      this.getempinfo=this.emp[i];
    }
  }
}

//updating the edited emp info

updateEmployee()
{
  let k=this.getempinfo.eid;
  for(let i=0;i<this.emp.length;i++)//iterate through array
  {
    if(this.emp[i].eid==k)//particular emp id exists
    {
      this.emp[i]=this.getempinfo;
      this.getempinfo={};
      this.msg="Record updated!!!"
    }
  }
}
}
