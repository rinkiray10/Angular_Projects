import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to learn Pipes';
  todaydate:Date;

  products:any[];//array
  p:any={};//object

  searchText?:any;
  ngOnInit()
  {
    this.todaydate=new Date();
    this.products=[
      {id:1,pname:"Pen",price:10},
      {id:2,pname:"Paper",price:5},
      {id:3,pname:"note",price:15},
      {id:4,pname:"Bag",price:200},
      {id:5,pname:"Ball",price:60},
    ];
  }
}
