import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<h1> Page Not Found</h1> <p>hi</p>',
  styles:['h1{color:Blue}','p{font-size:30px}']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
