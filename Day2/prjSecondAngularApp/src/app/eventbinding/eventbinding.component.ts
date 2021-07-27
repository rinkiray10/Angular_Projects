import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Eg1
  welcomeMsg()
  {
    debugger;
    alert("Good Morning!!");
  }
  //Eg2
  fname
  displayfullName(name:HTMLInputElement)
  {
    debugger;
    this.fname=name.value+ " kumar";
  }

  //Eg3
  calbonus;
  displayBonus(sal:HTMLInputElement)
  {
    this.calbonus=parseInt(sal.value)+1000;
  }
}
